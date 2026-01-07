import { useState, useEffect } from "react";
import "./ColorInput.css";

export interface ColorInputProps {
  r: number;
  g: number;
  b: number;
  a: number;
  h: number;
  s: number;
  l: number;
  hex: string;
  onColorChange: (values: {
    rgba?: { r: number; g: number; b: number; a: number };
    hsla?: { h: number; s: number; l: number; a: number };
    hex?: string;
  }) => void;
  theme?: "light" | "dark";
}

export function ColorInput({
  r,
  g,
  b,
  a,
  h,
  s,
  l,
  hex,
  onColorChange,
  theme = "light",
}: ColorInputProps) {
  const [activeTab, setActiveTab] = useState<"rgba" | "hsla" | "hex">("rgba");

  // Local state for inputs
  const [rgbaValues, setRgbaValues] = useState({ r, g, b, a });
  const [hslaValues, setHslaValues] = useState({ h, s, l, a });
  const [hexValue, setHexValue] = useState(hex);

  // Update local state when props change
  useEffect(() => {
    setRgbaValues({ r, g, b, a });
  }, [r, g, b, a]);

  useEffect(() => {
    setHslaValues({ h, s, l, a });
  }, [h, s, l, a]);

  useEffect(() => {
    setHexValue(hex);
  }, [hex]);

  // Handle RGBA input changes
  const handleRgbaChange = (key: keyof typeof rgbaValues, value: string) => {
    const numValue = parseFloat(value) || 0;
    const clampedValue =
      key === "a"
        ? Math.min(Math.max(numValue, 0), 1)
        : Math.min(Math.max(Math.round(numValue), 0), 255);

    const newRgba = { ...rgbaValues, [key]: clampedValue };
    setRgbaValues(newRgba);
    onColorChange({ rgba: newRgba });
  };

  // Handle HSLA input changes
  const handleHslaChange = (key: keyof typeof hslaValues, value: string) => {
    const numValue = parseFloat(value) || 0;
    let clampedValue: number;

    if (key === "h") {
      clampedValue = Math.min(Math.max(Math.round(numValue), 0), 360);
    } else if (key === "a") {
      clampedValue = Math.min(Math.max(numValue, 0), 1);
    } else {
      // s and l are 0-100
      clampedValue = Math.min(Math.max(Math.round(numValue), 0), 100);
    }

    const newHsla = { ...hslaValues, [key]: clampedValue };
    setHslaValues(newHsla);
    onColorChange({ hsla: newHsla });
  };

  // Handle HEX input changes
  const handleHexChange = (value: string) => {
    // Ensure it starts with #
    let hexVal = value.startsWith("#") ? value : `#${value}`;

    // Only allow valid hex characters
    hexVal = hexVal.replace(/[^#0-9A-Fa-f]/g, "");

    // Limit to 7 characters (#RRGGBB)
    hexVal = hexVal.slice(0, 7);

    setHexValue(hexVal);

    // Only propagate if it's a valid 6-digit hex
    if (/^#[0-9A-Fa-f]{6}$/.test(hexVal)) {
      onColorChange({ hex: hexVal });
    }
  };

  return (
    <div className={`color-input theme-${theme}`}>
      <div className="tabs">
        <button
          className={activeTab === "rgba" ? "active" : ""}
          onClick={() => setActiveTab("rgba")}
        >
          RGBA
        </button>
        <button
          className={activeTab === "hsla" ? "active" : ""}
          onClick={() => setActiveTab("hsla")}
        >
          HSLA
        </button>
        <button
          className={activeTab === "hex" ? "active" : ""}
          onClick={() => setActiveTab("hex")}
        >
          HEX
        </button>
      </div>

      <div className="input-container">
        {activeTab === "rgba" && (
          <div className="input-group">
            <div className="input-field">
              <label>R</label>
              <input
                type="number"
                min="0"
                max="255"
                value={rgbaValues.r}
                onChange={(e) => handleRgbaChange("r", e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>G</label>
              <input
                type="number"
                min="0"
                max="255"
                value={rgbaValues.g}
                onChange={(e) => handleRgbaChange("g", e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>B</label>
              <input
                type="number"
                min="0"
                max="255"
                value={rgbaValues.b}
                onChange={(e) => handleRgbaChange("b", e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>A</label>
              <input
                type="number"
                min="0"
                max="1"
                step="0.01"
                value={rgbaValues.a.toFixed(2)}
                onChange={(e) => handleRgbaChange("a", e.target.value)}
              />
            </div>
          </div>
        )}

        {activeTab === "hsla" && (
          <div className="input-group">
            <div className="input-field">
              <label>H</label>
              <input
                type="number"
                min="0"
                max="360"
                value={hslaValues.h}
                onChange={(e) => handleHslaChange("h", e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>S</label>
              <input
                type="number"
                min="0"
                max="100"
                value={hslaValues.s}
                onChange={(e) => handleHslaChange("s", e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>L</label>
              <input
                type="number"
                min="0"
                max="100"
                value={hslaValues.l}
                onChange={(e) => handleHslaChange("l", e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>A</label>
              <input
                type="number"
                min="0"
                max="1"
                step="0.01"
                value={hslaValues.a.toFixed(2)}
                onChange={(e) => handleHslaChange("a", e.target.value)}
              />
            </div>
          </div>
        )}

        {activeTab === "hex" && (
          <div className="input-group">
            <div className="input-field hex-field">
              <label>HEX</label>
              <input
                type="text"
                value={hexValue}
                onChange={(e) => handleHexChange(e.target.value)}
                placeholder="#000000"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
