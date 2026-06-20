import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";

export const SizeStory = () => {
  const [size, setSize] = useState(40);
  const [color, setColor] = useState({ hex: "#4caf50", rgba: "", hsl: "" });

  const codeString = `import { ColorPicker } from "@react/react-color-picker";

export default function App() {
  return (
    <ColorPicker
      value="${color.hex}"
      size={${size}}
    />
  );
}`;

  return (
    <div className="story-page">
      <div className="story-description">
        <h3>Prop API</h3>
        <p>
          The <code>size</code> prop allows you to control the dimensions (width
          and height) of the Color Picker trigger button. It accepts a number
          representing pixels (e.g., <code>40</code> for 40px).
        </p>
        <br />
        <h3>How it works</h3>
        <p>
          When you pass a number to the <code>size</code> prop, it sets both the
          inline <code>width</code> and <code>height</code> styles of the square
          trigger block. This is useful for fitting the picker into different UI
          contexts, like small toolbars or large hero sections.
        </p>
      </div>

      <div className="code-example">
        <h3>Usage Example</h3>
        <p>
          Adjust the slider in the playground. The code block will update the custom
          size prop accordingly:
        </p>
        <pre className="code-block-pre">
          <code>{codeString}</code>
        </pre>
      </div>

      <div className="try-now-section">
        <h3 className="try-now-header">Interactive Sandbox</h3>
        <p className="story-note">
          Enter a value below to see the Color Picker resize in real-time.
        </p>

        <div className="control-panel">
          <label>Size (px):</label>
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            min="20"
            max="200"
          />
        </div>

        <div className="demo-area">
          <ColorPicker value={color.hex} onChange={setColor} size={size} />
          <span>Current Color: {color.hex}</span>
        </div>
      </div>
    </div>
  );
};
