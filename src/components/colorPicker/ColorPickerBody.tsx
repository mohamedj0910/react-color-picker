import React, { useRef } from "react";

interface ColorPickerBodyProps {
  H: number;
  S: number;
  V: number;
  rgba: string;
  onChange: (s: number, v: number) => void;
}

export const ColorPickerBody: React.FC<ColorPickerBodyProps> = ({
  H,
  S,
  V,
  rgba,
  onChange,
}) => {
  const svRef = useRef<HTMLDivElement>(null!);

  const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(v, min), max);

  const startDrag =
    (
      ref: React.RefObject<HTMLDivElement>,
      cb: (x: number, y: number, r: DOMRect) => void,
    ) =>
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      const rect = ref.current!.getBoundingClientRect();

      const move = (ev: MouseEvent | TouchEvent) => {
        const p = "touches" in ev ? ev.touches[0] : ev;
        cb(p.clientX, p.clientY, rect);
      };

      const stop = () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", stop);
        window.removeEventListener("touchmove", move);
        window.removeEventListener("touchend", stop);
      };

      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", stop);
      window.addEventListener("touchmove", move, { passive: false });
      window.addEventListener("touchend", stop);

      move(e.nativeEvent as any);
    };

  const handleDrag = (x: number, y: number, r: DOMRect) => {
    const px = clamp(x - r.left, 0, r.width);
    const py = clamp(y - r.top, 0, r.height);
    const newS = px / r.width;
    const newV = 1 - py / r.height;
    onChange(newS, newV);
  };

  return (
    <>
      <div className="preview">
        <div className="grid"></div>
        <div
          className="preview-color"
          style={{
            background: rgba,
          }}
        ></div>
      </div>
      {/* SV */}
      <div
        ref={svRef}
        className="sv"
        style={{ background: `hsl(${H},100%,50%)` }}
        onMouseDown={startDrag(svRef, handleDrag)}
        onTouchStart={startDrag(svRef, handleDrag)}
      >
        <div
          className="sv-cursor"
          style={{ left: `${S * 100}%`, top: `${(1 - V) * 100}%` }}
        />
      </div>
    </>
  );
};
