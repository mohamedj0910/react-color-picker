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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let step = 0.01;
    if (e.shiftKey) step = 0.1;

    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      onChange(clamp(value + step, 0, 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      onChange(clamp(value - step, 0, 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      onChange(0);
    } else if (e.key === "End") {
      e.preventDefault();
      onChange(1);
    }
  };

  const sliderLabel = className === "hue" ? "Hue selection" : "Alpha transparency selection";

  return (
    <div
      ref={ref}
      className={`slider ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-valuenow={Math.round(value * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={sliderLabel}
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
