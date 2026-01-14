import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import { createPortal } from "react-dom";
import "./ColorPicker.css";
import { ColorInput } from "./ColorInput";
import { ColorSlider } from "./ColorSlider";
import { ColorPickerActions } from "./ColorPickerActions";
import { ColorPickerBody } from "./ColorPickerBody";
import type { ColorPickerProps } from "./types";

/* ===== Utils ===== */
function hsvToRgb(h: number, s: number, v: number) {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r = 0,
    g = 0,
    b = 0;

  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }

  return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(
    l * 100
  )}%)`;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHsv(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;

  let h = 0;
  if (d !== 0) {
    if (max === r) h = 60 * (((g - b) / d) % 6);
    else if (max === g) h = 60 * ((b - r) / d + 2);
    else h = 60 * ((r - g) / d + 4);
  }
  if (h < 0) h += 360;

  const s = max === 0 ? 0 : d / max;
  const v = max;

  return { h, s, v };
}

function hslToRgb(h: number, s: number, l: number) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;

  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

/* ===== Portal Position ===== */
function calculatePortalPosition(
  trigger: DOMRect,
  panelWidth: number,
  panelHeight: number
) {
  const { innerWidth, innerHeight, scrollX, scrollY } = window;

  // Vertical Logic
  const spaceBottom = innerHeight - trigger.bottom;
  const spaceTop = trigger.top;

  let top = trigger.bottom + scrollY;
  if (spaceBottom < panelHeight && spaceTop >= panelHeight) {
    top = trigger.top - panelHeight + scrollY;
  }
  let left = trigger.left + scrollX; // Default: Align left edge
  if (trigger.left + panelWidth > innerWidth) {
    if (trigger.right - panelWidth >= 0) {
      left = trigger.right - panelWidth + scrollX;
    }
  }

  return { top, left };
}

/* ===== Component ===== */
export function ColorPicker({
  value,
  onChange,
  onOpen,
  onClose,
  theme = "light",
  size = 40,
  backgroundColor,
  primaryColor,
  secondaryColor,
  applyOnEscape = false,
}: ColorPickerProps) {
  const [open, setOpen] = useState(false);
  const [H, setH] = useState(0);
  const [S, setS] = useState(1);
  const [V, setV] = useState(1);
  const [A, setA] = useState(1);
  const [previousColor, setPreviousColor] = useState<string>(value);

  const triggerRef = useRef<HTMLDivElement>(null!);
  const panelRef = useRef<HTMLDivElement>(null!);

  /* ===== Derived ===== */
  const { r, g, b } = hsvToRgb(H, S, V);
  const rgba = `rgba(${r},${g},${b},${A})`;
  const hex = rgbToHex(r, g, b);
  const hsl = rgbToHsl(r, g, b);

  // Extract HSL values for ColorInput
  const hslMatch = hsl.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
  const hslH = hslMatch ? parseInt(hslMatch[1]) : 0;
  const hslS = hslMatch ? parseInt(hslMatch[2]) : 0;
  const hslL = hslMatch ? parseInt(hslMatch[3]) : 0;

  /* ===== Sync state from hex value ===== */
  const syncInternalState = useCallback((hexVal: string) => {
    if (hexVal.length !== 7) return;
    const rgb = hexToRgb(hexVal);
    if (rgb) {
      const { h, s, v } = rgbToHsv(rgb.r, rgb.g, rgb.b);
      setH(h);
      setS(s);
      setV(v);
      setA(1);
    }
  }, []);

  const handleOpen = () => {
    setPreviousColor(value);
    setOpen(true);
    syncInternalState(value);
    onOpen?.();
  };

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  const handleCancel = useCallback(() => {
    // Revert to previous color
    syncInternalState(previousColor);
    handleClose();
  }, [previousColor, syncInternalState]);

  /* ===== Sync initial color when value updates externally while open ===== */
  useEffect(() => {
    if (open) {
      syncInternalState(value);
    }
  }, [value, open, syncInternalState]);

  /* ===== Outside click ===== */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        handleCancel();
      }
    };

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (applyOnEscape) {
          apply();
        } else {
          handleCancel();
        }
      }
    };

    window.addEventListener("mousedown", handler);
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("mousedown", handler);
      window.removeEventListener("keydown", keyHandler);
    };
  }, [open, handleCancel, applyOnEscape]);

  /* ===== Portal position ===== */

  const updatePosition = () => {
    if (open && triggerRef.current && panelRef.current) {
      const pos = calculatePortalPosition(
        triggerRef.current.getBoundingClientRect(),
        panelRef.current.offsetWidth,
        panelRef.current.offsetHeight
      );
      setPanelStyle({ position: "absolute", zIndex: 9999, ...pos });
    }
  };

  useLayoutEffect(() => {
    if (!open) return;

    const handleResize = () => updatePosition();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize, true);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize, true);
    };
  }, [open, updatePosition]);

  const [panelStyle, setPanelStyle] = useState<React.CSSProperties>({});

  useLayoutEffect(() => {
    updatePosition();
  }, [open]);

  const apply = () => {
    onChange({ hex, rgba, hsl });
    handleClose();
  };

  // Handle color changes from ColorInput
  const handleColorInputChange = (values: {
    rgba?: { r: number; g: number; b: number; a: number };
    hsla?: { h: number; s: number; l: number; a: number };
    hex?: string;
  }) => {
    if (values.rgba) {
      const { r, g, b, a } = values.rgba;
      const { h, s, v } = rgbToHsv(r, g, b);
      setH(h);
      setS(s);
      setV(v);
      setA(a);
    } else if (values.hsla) {
      const { h, s, l, a } = values.hsla;
      const { r, g, b } = hslToRgb(h, s, l);
      const hsv = rgbToHsv(r, g, b);
      setH(hsv.h);
      setS(hsv.s);
      setV(hsv.v);
      setA(a);
    } else if (values.hex) {
      const rgb = hexToRgb(values.hex);
      if (rgb) {
        const { h, s, v } = rgbToHsv(rgb.r, rgb.g, rgb.b);
        setH(h);
        setS(s);
        setV(v);
      }
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        className={`color-picker theme-${theme}`}
        style={{
          width: size,
          height: size,
          background: open ? rgba : value,
        }}
        onClick={() => (open ? handleClose() : handleOpen())}
      />

      {open &&
        createPortal(
          <div
            ref={panelRef}
            className={`picker theme-${theme}`}
            style={{
              ...panelStyle,
              ["--bg" as any]: backgroundColor,
              ["--primary" as any]: primaryColor,
              ["--secondary" as any]: secondaryColor,
            }}
          >
            <ColorPickerBody
              H={H}
              S={S}
              V={V}
              rgba={rgba}
              onChange={(s, v) => {
                setS(s);
                setV(v);
              }}
            />

            {/* Hue Slider */}
            <ColorSlider
              className="hue"
              value={H / 360}
              onChange={(v) => setH(v * 360)}
            />

            {/* Alpha Slider */}
            <ColorSlider
              className="alpha"
              value={A}
              onChange={setA}
              overlayColor={`hsl(${H}, 100%, 50%)`}
            />

            {/* Color Input */}
            <ColorInput
              r={r}
              g={g}
              b={b}
              a={A}
              h={hslH}
              s={hslS}
              l={hslL}
              hex={hex}
              onColorChange={handleColorInputChange}
              theme={theme}
            />

            <ColorPickerActions onCancel={handleCancel} onApply={apply} />
          </div>,
          document.body
        )}
    </>
  );
}
