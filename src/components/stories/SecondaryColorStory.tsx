import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { exampleUsageMap } from "./exampleUsage";

export const SecondaryColorStory = () => {
  const [secondaryColor, setSecondaryColor] = useState("#ef4444");
  const [color, setColor] = useState({ hex: "#f43f5e", rgba: "", hsl: "" });

  const codeString = exampleUsageMap.secondaryColor(secondaryColor);

  return (
    <div className="story-page">
      <div className="story-left-column">
        {/* Example Usage First */}
        <div className="code-example">
          <h3>Usage Example</h3>
          <p>
            Pair a secondary accent with your primary brand accent:
          </p>
          <pre className="code-block-pre">
            <code>{codeString}</code>
          </pre>
        </div>

        {/* Description Second */}
        <div className="story-description">
          <h3>Prop API</h3>
          <p>
            The <code>secondaryColor</code> prop controls the secondary accent highlights used in the panel UI layout.
          </p>
          <br />
          <h3>How it works</h3>
          <p>
            This value feeds a secondary CSS variables pipeline for alerts, cancel buttons, escape hints, and selection indicators.
          </p>
        </div>
      </div>

      <div className="story-right-column">
        {/* Sandbox on the right */}
        <div className="try-now-section">
          <h3 className="try-now-header">Interactive Sandbox</h3>
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
    </div>
  );
};
export default SecondaryColorStory;
