import { useState } from "react";
import { ColorPicker } from "react-color-picker";
import { exampleUsageMap } from "./exampleUsage";
import { useTheme } from "./ThemeContext";

export const PrimaryColorStory = () => {
  const [primaryColor, setPrimaryColor] = useState("#4f46e5");
  const [color, setColor] = useState({ hex: "#6366f1", rgba: "", hsl: "" });
  const { theme } = useTheme();
  const inputId = "primary-color-input";

  const codeString = exampleUsageMap.primaryColor(primaryColor);

  return (
    <div className="story-page">
      <div className="story-left-column">
        {/* Example Usage First */}
        <div className="code-example">
          <h2>Usage Example</h2>
          <p>
            Customize the primary accent color:
          </p>
          <pre className="code-block-pre">
            <code>{codeString}</code>
          </pre>
        </div>

        {/* Description Second */}
        <div className="story-description">
          <h2>Prop API</h2>
          <p>
            The <code>primaryColor</code> prop controls the primary accent color used in the panel UI layout.
          </p>
          <br />
          <h2>How it works</h2>
          <p>
            The value is fed dynamically as a CSS variable to highlight buttons, slider track nodes, ticks, and interactive inputs.
          </p>
        </div>
      </div>

      <div className="story-right-column">
        {/* Sandbox on the right */}
        <div className="try-now-section">
          <h2 className="try-now-header">Interactive Sandbox</h2>
          <p className="story-note">
            Adjust the primary color to see the panel accents update.
          </p>

          <div className="control-panel">
            <label htmlFor={inputId}>Primary Color:</label>
            <ColorPicker
              value={primaryColor}
              onChange={(next) => setPrimaryColor(next.hex)}
              size={28}
              theme={theme}
            />
            <input
              id={inputId}
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
              theme={theme}
            />
            <span>Current Color: {color.hex}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrimaryColorStory;
