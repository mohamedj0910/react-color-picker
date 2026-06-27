import { useState } from "react";
import { ColorPicker } from "react-color-picker";
import { exampleUsageMap } from "./exampleUsage";
import { useTheme } from "./ThemeContext";

export const ThemeStory = () => {
  const { theme, setTheme } = useTheme();
  const [color, setColor] = useState({ hex: "#2563eb", rgba: "", hsl: "" });
  const inputId = "theme-input";

  const codeString = exampleUsageMap.theme(theme);

  return (
    <div className="story-page">
      <div className="story-left-column">
        {/* Example Usage First */}
        <div className="code-example">
          <h2>Usage Example</h2>
          <p>
            Select a theme to see the code display modify its parameter:
          </p>
          <pre className="code-block-pre">
            <code>{codeString}</code>
          </pre>
        </div>

        {/* Description Second */}
        <div className="story-description">
          <h2>Prop API</h2>
          <p>
            The <code>theme</code> prop switches the panel between <code>light</code> and <code>dark</code>
            styles. It is useful when the picker lives inside different UI
            surfaces.
          </p>
          <br />
          <h2>How it works</h2>
          <p>
            Setting <code>theme</code> updates the panel class, which adjusts
            background, text, border, slider, and control colors to suit the chosen palette.
          </p>
        </div>
      </div>

      <div className="story-right-column">
        {/* Sandbox on the right */}
        <div className="try-now-section">
          <h2 className="try-now-header">Interactive Sandbox</h2>
          <p className="story-note">
            Toggle the theme and open the picker to see the panel update.
          </p>

          <div className="control-panel">
            <label htmlFor={inputId}>Theme:</label>
            <select
              id={inputId}
              value={theme}
              onChange={(e) => setTheme(e.target.value as "light" | "dark")}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div className="demo-area">
            <ColorPicker value={color.hex} onChange={setColor} theme={theme} />
            <span>Current Color: {color.hex}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThemeStory;
