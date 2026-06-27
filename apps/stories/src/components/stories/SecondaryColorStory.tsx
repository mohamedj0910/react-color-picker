import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { exampleUsageMap } from "./exampleUsage";
import { useTheme } from "./ThemeContext";

export const SecondaryColorStory = () => {
  const [secondaryColor, setSecondaryColor] = useState("#ef4444");
  const [color, setColor] = useState({ hex: "#f43f5e", rgba: "", hsl: "" });
  const { theme } = useTheme();
  const inputId = "secondary-color-input";

  const codeString = exampleUsageMap.secondaryColor(secondaryColor);

  return (
    <div className="story-page">
      <div className="story-left-column">
        {/* Example Usage First */}
        <div className="code-example">
          <h2>Usage Example</h2>
          <p>
            Pair a secondary accent with your primary brand accent:
          </p>
          <pre className="code-block-pre">
            <code>{codeString}</code>
          </pre>
        </div>

        {/* Description Second */}
        <div className="story-description">
          <h2>Prop API</h2>
          <p>
            The <code>secondaryColor</code> prop controls the secondary accent highlights used in the panel UI layout.
          </p>
          <br />
          <h2>How it works</h2>
          <p>
            This value feeds a secondary CSS variables pipeline for alerts, cancel buttons, escape hints, and selection indicators.
          </p>
        </div>
      </div>

      <div className="story-right-column">
        {/* Sandbox on the right */}
        <div className="try-now-section">
          <h2 className="try-now-header">Interactive Sandbox</h2>
          <p className="story-note">
            Adjust the secondary color to see the panel accents update.
          </p>

          <div className="control-panel">
            <label htmlFor={inputId}>Secondary Color:</label>
            <ColorPicker
              value={secondaryColor}
              onChange={(next) => setSecondaryColor(next.hex)}
              size={28}
              theme={theme}
            />
            <input
              id={inputId}
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
              theme={theme}
            />
            <span>Current Color: {color.hex}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondaryColorStory;
