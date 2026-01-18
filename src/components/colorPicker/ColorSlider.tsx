import React, { useRef } from "react";

interface ColorSliderProps {
  value: number; // 0 to 1
  onChange: (value: number) => void;
  className: string;
  overlayColor?: string; // For alpha slider background
}

export const ColorSlider: React.FC<ColorSliderProps> = ({
  value,
  onChange,
  className,
  overlayColor,
}) => {
  const ref = useRef<HTMLDivElement>(null!);

  const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(v, min), max);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const rect = ref.current!.getBoundingClientRect();

    const calculateChange = (clientX: number) => {
      const px = clamp(clientX - rect.left, 0, rect.width);
      const newValue = px / rect.width;
      onChange(newValue);
    };

    // Initial click
    const p = "touches" in e ? e.touches[0] : e;
    calculateChange(p.clientX);

    const move = (ev: MouseEvent | TouchEvent) => {
      const point =
        "touches" in ev ? (ev as TouchEvent).touches[0] : (ev as MouseEvent);
      calculateChange(point.clientX);
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
  };

  return (
    <div
      ref={ref}
      className={`slider ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {overlayColor && (
        <>
          <div className="grid"></div>
          <div
            className="alpha-color"
            style={{
              backgroundImage: `linear-gradient(to right, transparent, ${overlayColor})`,
            }}
          ></div>
        </>
      )}
      <div className="thumb" style={{ left: `${value * 100}%` }} />
    </div>
  );
};
