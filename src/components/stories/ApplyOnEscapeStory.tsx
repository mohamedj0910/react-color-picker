import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";

export const ApplyOnEscapeStory = () => {
  const [applyOnEscape, setApplyOnEscape] = useState(false);
  const [color, setColor] = useState({ hex: "#22c55e", rgba: "", hsl: "" });
  console.log("applyOnEscape", applyOnEscape);
  return (
    <div className="story-page">
      <div className="story-description">
        <p>
          The <code>applyOnEscape</code> prop changes the Escape key behavior.
          When enabled, Escape applies the current color instead of canceling.
        </p>
        <br />
        <h3>How it works</h3>
        <p>
          When the picker is open, pressing Escape either applies or cancels
          based on this flag.
        </p>
      </div>

      <div className="code-example">
        <h3>Example Usage</h3>
        <p>
          Use <code>applyOnEscape</code> when you want Escape to confirm the
          current selection.
        </p>
      </div>

      <div className="try-now-section">
        <h3 className="try-now-header">Try Now</h3>
        <p className="story-note">
          Toggle the setting, open the picker, then press Escape.
        </p>

        <div className="control-panel">
          <label>Apply on Escape:</label>
          <input
            type="checkbox"
            checked={applyOnEscape}
            onChange={(e) => setApplyOnEscape(e.target.checked)}
          />
          <span className="story-hint">Escape applies the current color</span>
        </div>

        <div className="demo-area">
          <ColorPicker
            value={color.hex}
            onChange={setColor}
            applyOnEscape={applyOnEscape}
          />
          <span>Current Color: {color.hex}</span>
        </div>
      </div>
    </div>
  );
};
