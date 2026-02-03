import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";

export const SizeStory = () => {
  const [size, setSize] = useState(40);
  const [color, setColor] = useState({ hex: "#4caf50", rgba: "", hsl: "" });

  return (
    <div>
      <h1 className="story-title">Size Prop</h1>

      <div className="story-description">
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
        <h3>Example Usage</h3>
        <p>
          Here's a basic example of using the <code>size</code> prop with the{" "}
          <code>ColorPicker</code> component:
        </p>
        <p>
          This sets the picker to 40px by 40px. Adjust the <code>size</code>{" "}
          value as needed for your layout.
        </p>
      </div>

      <div className="try-now-section">
        <h3 className="try-now-header">Try Now</h3>
        <p style={{ marginBottom: "10px", fontSize: "0.9em", color: "#666" }}>
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
