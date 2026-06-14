import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";

export const SecondaryColorStory = () => {
  const [secondaryColor, setSecondaryColor] = useState("#ef4444");
  const [color, setColor] = useState({ hex: "#f43f5e", rgba: "", hsl: "" });

  return (
    <div className="story-page">
      <div className="story-description">
        <p>
          The <code>secondaryColor</code> prop controls the secondary accent
          used in the panel UI.
        </p>
        <br />
        <h3>How it works</h3>
        <p>
          This value feeds the secondary CSS variable for alerts and highlight
          accents.
        </p>
      </div>

      <div className="code-example">
        <h3>Example Usage</h3>
        <p>Pair a secondary accent with your primary color for balanced UI.</p>
      </div>

      <div className="try-now-section">
        <h3 className="try-now-header">Try Now</h3>
        <p className="story-note">
          Adjust the secondary color to see the panel accents update.
        </p>

        <div className="control-panel">
          <label>Secondary Color:</label>
          <ColorPicker
            value={secondaryColor}
            onChange={(next) => setSecondaryColor(next.hex)}
            size={28}
          />
          <input
            type="text"
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
          />
        </div>

        <div className="demo-area">
          <ColorPicker
            value={color.hex}
            onChange={setColor}
            secondaryColor={secondaryColor}
          />
          <span>Current Color: {color.hex}</span>
        </div>
      </div>
    </div>
  );
};
