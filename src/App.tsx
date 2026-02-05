import { useState } from "react";
import { ColorPicker } from "./components/colorPicker/ColorPicker";
import type { ColorResult } from "./components/colorPicker/types";
import { StoryLayout } from "./components/stories/StoryLayout";

export default function App() {
  const [color, setColor] = useState("#6745c2");
  const positions = [
    "Top Left",
    "Top Center",
    "Top Right",
    "Center Left",
    "Center Center",
    "Center Right",
    "Bottom Left",
    "Bottom Center",
    "Bottom Right",
  ];

  return (
    <div className="container-root">
      {/* <header className="container-header">
        <h1>Color Picker Positions</h1>

        <div className="color-preview">
          <span>Selected</span>
          <div className="swatch" style={{ background: color }} />
          <code>{color}</code>
        </div>
      </header>

      <main className="grid-wrapper">
        {positions.map((label) => (
          <div key={label} className="card">
            <span className={`card-label ${label}`}>{label}</span>
            <ColorPicker
              value={color}
              onChange={(c: ColorResult) => setColor(c.hex)}
              theme="light"
              size={20}
            />
          </div>
        ))}
      </main> */}
      <StoryLayout />
    </div>
  );
}
