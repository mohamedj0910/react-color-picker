import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { exampleUsageMap } from "./exampleUsage";
import { useTheme } from "./ThemeContext";

export const BackgroundColorStory = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [color, setColor] = useState({ hex: "#f97316", rgba: "", hsl: "" });
  const { theme } = useTheme();
  const inputId = "bg-color-input";

  const codeString = exampleUsageMap.backgroundColor(backgroundColor);

  return (
    <div className="story-page">
      <div className="story-left-column">
        {/* Example Usage First */}
        <div className="code-example">
          <h2>Usage Example</h2>
          <p>
            Adjust the panel background value to see the dynamic output code:
          </p>
          <pre className="code-block-pre">
            <code>{codeString}</code>
          </pre>
        </div>

        {/* Description Second */}
        <div className="story-description">
          <h2>Prop API</h2>
          <p>
            The <code>backgroundColor</code> prop controls the panel background.
            Use it to blend the picker with different surface designs.
          </p>
          <br />
          <h2>How it works</h2>
          <p>
            This value maps directly to the <code>--bg</code> CSS custom variable inside the panel, defining a solid base or gradient color.
          </p>
        </div>
      </div>

      <div className="story-right-column">
        {/* Sandbox on the right */}
        <div className="try-now-section">
          <h2 className="try-now-header">Interactive Sandbox</h2>
          <p className="story-note">
            Update the background value and open the picker to see it change.
          </p>

          <div className="control-panel">
            <label htmlFor={inputId}>Background:</label>
            <ColorPicker
              value={backgroundColor}
              onChange={(next) => setBackgroundColor(next.hex)}
              size={28}
              theme={theme}
            />
            <input
              id={inputId}
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
              theme={theme}
            />
            <span>Current Color: {color.hex}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BackgroundColorStory;
