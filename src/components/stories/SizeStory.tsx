import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { exampleUsageMap } from "./exampleUsage";
import { useTheme } from "./ThemeContext";

export const SizeStory = () => {
  const [size, setSize] = useState(40);
  const [color, setColor] = useState({ hex: "#4caf50", rgba: "", hsl: "" });
  const { theme } = useTheme();
  const inputId = "size-input";

  const codeString = exampleUsageMap.size(size);

  return (
    <div className="story-page">
      <div className="story-left-column">
        {/* Render Example Usage First */}
        <div className="code-example">
          <h2>Usage Example</h2>
          <p>
            Adjust the slider in the playground. The code block will update the custom
            size prop accordingly:
          </p>
          <pre className="code-block-pre">
            <code>{codeString}</code>
          </pre>
        </div>

        {/* Render Prop API / Description Second */}
        <div className="story-description">
          <h2>Prop API</h2>
          <p>
            The <code>size</code> prop allows you to control the dimensions (width
            and height) of the Color Picker trigger button. It accepts a number
            representing pixels (e.g., <code>40</code> for 40px).
          </p>
          <br />
          <h2>How it works</h2>
          <p>
            When you pass a number to the <code>size</code> prop, it sets both the
            inline <code>width</code> and <code>height</code> styles of the square
            trigger block. This is useful for fitting the picker into different UI
            contexts, like small toolbars or large hero sections.
          </p>
        </div>
      </div>

      <div className="story-right-column">
        {/* Render Interactive Sandbox on the right */}
        <div className="try-now-section">
          <h2 className="try-now-header">Interactive Sandbox</h2>
          <p className="story-note">
            Enter a value below to see the Color Picker resize in real-time.
          </p>

          <div className="control-panel">
            <label htmlFor={inputId}>Size (px):</label>
            <input
              id={inputId}
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min="20"
              max="200"
            />
          </div>

          <div className="demo-area">
            <ColorPicker value={color.hex} onChange={setColor} size={size} theme={theme} />
            <span>Current Color: {color.hex}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SizeStory;
