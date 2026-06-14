import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";

export const PrimaryColorStory = () => {
  const [primaryColor, setPrimaryColor] = useState("#4f46e5");
  const [color, setColor] = useState({ hex: "#6366f1", rgba: "", hsl: "" });

  return (
    <div className="story-page">
      <div className="story-description">
        <p>
          The <code>primaryColor</code> prop controls the primary accent used in
          the panel UI.
        </p>
        <br />
        <h3>How it works</h3>
        <p>
          The value is applied via a CSS variable to highlight key UI elements.
        </p>
      </div>

      <div className="code-example">
        <h3>Example Usage</h3>
        <p>Set a primary accent color that matches your product branding.</p>
      </div>

      <div className="try-now-section">
        <h3 className="try-now-header">Try Now</h3>
        <p className="story-note">
          Adjust the primary color to see the panel accents update.
        </p>

        <div className="control-panel">
          <label>Primary Color:</label>
          <ColorPicker
            value={primaryColor}
            onChange={(next) => setPrimaryColor(next.hex)}
            size={28}
          />
          <input
            type="text"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
          />
        </div>

        <div className="demo-area">
          <ColorPicker
            value={color.hex}
            onChange={setColor}
            primaryColor={primaryColor}
          />
          <span>Current Color: {color.hex}</span>
        </div>
      </div>
    </div>
  );
};
