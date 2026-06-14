import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";

export const ThemeStory = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [color, setColor] = useState({ hex: "#2563eb", rgba: "", hsl: "" });

  return (
    <div className="story-page">
      <div className="story-description">
        <p>
          The <code>theme</code> prop switches the panel between light and dark
          styles. It is useful when the picker lives inside different UI
          surfaces.
        </p>
        <br />
        <h3>How it works</h3>
        <p>
          Setting <code>theme</code> updates the panel class, which adjusts
          background, text, and control colors.
        </p>
      </div>

      <div className="code-example">
        <h3>Example Usage</h3>
        <p>
          Pass <code>theme</code> to match the surrounding UI. Use the selector
          below to preview both modes.
        </p>
      </div>

      <div className="try-now-section">
        <h3 className="try-now-header">Try Now</h3>
        <p className="story-note">
          Toggle the theme and open the picker to see the panel update.
        </p>

        <div className="control-panel">
          <label>Theme:</label>
          <select
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
  );
};
