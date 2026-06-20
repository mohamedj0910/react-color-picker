import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";

export const ThemeStory = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [color, setColor] = useState({ hex: "#2563eb", rgba: "", hsl: "" });

  const codeString = `import { ColorPicker } from "@react/react-color-picker";

export default function App() {
  return (
    <ColorPicker
      value="${color.hex}"
      theme="${theme}"
    />
  );
}`;

  return (
    <div className="story-page">
      <div className="story-description">
        <h3>Prop API</h3>
        <p>
          The <code>theme</code> prop switches the panel between <code>light</code> and <code>dark</code>
          styles. It is useful when the picker lives inside different UI
          surfaces.
        </p>
        <br />
        <h3>How it works</h3>
        <p>
          Setting <code>theme</code> updates the panel class, which adjusts
          background, text, border, slider, and control colors to suit the chosen palette.
        </p>
      </div>

      <div className="code-example">
        <h3>Usage Example</h3>
        <p>
          Select a theme to see the code display modify its parameter:
        </p>
        <pre className="code-block-pre">
          <code>{codeString}</code>
        </pre>
      </div>

      <div className="try-now-section">
        <h3 className="try-now-header">Interactive Sandbox</h3>
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
