import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { exampleUsageMap } from "./exampleUsage";

export const ApplyOnEscapeStory = () => {
  const [applyOnEscape, setApplyOnEscape] = useState(false);
  const [color, setColor] = useState({ hex: "#22c55e", rgba: "", hsl: "" });

  const codeString = exampleUsageMap.applyOnEscape(applyOnEscape);

  return (
    <div className="story-page">
      <div className="story-left-column">
        {/* Example Usage First */}
        <div className="code-example">
          <h3>Usage Example</h3>
          <p>
            Toggle the switch to see the code adjust:
          </p>
          <pre className="code-block-pre">
            <code>{codeString}</code>
          </pre>
        </div>

        {/* Description Second */}
        <div className="story-description">
          <h3>Prop API</h3>
          <p>
            The <code>applyOnEscape</code> prop changes the behavior of the Escape key when the picker panel is active.
          </p>
          <br />
          <h3>How it works</h3>
          <p>
            When enabled, pressing Escape commits the current slider selection. When disabled (default), pressing Escape discards the temporary selection and reverts the color value.
          </p>
        </div>
      </div>

      <div className="story-right-column">
        {/* Sandbox on the right */}
        <div className="try-now-section">
          <h3 className="try-now-header">Interactive Sandbox</h3>
          <p className="story-note">
            Toggle the setting, open the picker, then press Escape to test the transition.
          </p>

          <div className="control-panel">
            <label>Apply on Escape:</label>
            <input
              type="checkbox"
              checked={applyOnEscape}
              onChange={(e) => setApplyOnEscape(e.target.checked)}
            />
            <span className="story-hint">Escape confirms active color</span>
          </div>

          <div className="demo-area">
            <ColorPicker
              value={color.hex}
              onChange={setColor}
              applyOnEscape={applyOnEscape}
            />
            <span>Current Color: {color.hex}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplyOnEscapeStory;
