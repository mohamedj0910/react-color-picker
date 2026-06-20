import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { exampleUsageMap } from "./exampleUsage";

export const PrimaryColorStory = () => {
  const [primaryColor, setPrimaryColor] = useState("#4f46e5");
  const [color, setColor] = useState({ hex: "#6366f1", rgba: "", hsl: "" });

  const codeString = exampleUsageMap.primaryColor(primaryColor);

  return (
    <div className="story-page">
      <div className="story-left-column">
        {/* Example Usage First */}
        <div className="code-example">
          <h3>Usage Example</h3>
          <p>
            Customize the primary accent color:
          </p>
          <pre className="code-block-pre">
            <code>{codeString}</code>
          </pre>
        </div>

        {/* Description Second */}
        <div className="story-description">
          <h3>Prop API</h3>
          <p>
            The <code>primaryColor</code> prop controls the primary accent color used in the panel UI layout.
          </p>
          <br />
          <h3>How it works</h3>
          <p>
            The value is fed dynamically as a CSS variable to highlight buttons, slider track nodes, ticks, and interactive inputs.
          </p>
        </div>
      </div>

      <div className="story-right-column">
        {/* Sandbox on the right */}
        <div className="try-now-section">
          <h3 className="try-now-header">Interactive Sandbox</h3>
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
    </div>
  );
};
export default PrimaryColorStory;
