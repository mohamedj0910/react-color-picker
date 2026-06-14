import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";

export const BackgroundColorStory = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [color, setColor] = useState({ hex: "#f97316", rgba: "", hsl: "" });

  return (
    <div className="story-page">
      <div className="story-description">
        <p>
          The <code>backgroundColor</code> prop controls the panel background.
          Use it to blend the picker with different surfaces.
        </p>
        <br />
        <h3>How it works</h3>
        <p>
          This value maps to the <code>--bg</code> CSS variable for the panel.
        </p>
      </div>

      <div className="code-example">
        <h3>Example Usage</h3>
        <p>
          Choose a custom background to align the picker with your product
          palette.
        </p>
      </div>

      <div className="try-now-section">
        <h3 className="try-now-header">Try Now</h3>
        <p className="story-note">
          Update the background value and open the picker to see it change.
        </p>

        <div className="control-panel">
          <label>Panel Background:</label>
          <ColorPicker
            value={backgroundColor}
            onChange={(next) => setBackgroundColor(next.hex)}
            size={28}
          />
          <input
            type="text"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>

        <div className="demo-area">
          <ColorPicker
            value={color.hex}
            onChange={setColor}
            backgroundColor={backgroundColor}
          />
          <span>Current Color: {color.hex}</span>
        </div>
      </div>
    </div>
  );
};
