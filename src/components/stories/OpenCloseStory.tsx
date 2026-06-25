import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { exampleUsageMap } from "./exampleUsage";
import { useTheme } from "./ThemeContext";

export const OpenCloseStory = () => {
  const [color, setColor] = useState({ hex: "#a855f7", rgba: "", hsl: "" });
  const [openCount, setOpenCount] = useState(0);
  const [closeCount, setCloseCount] = useState(0);
  const { theme } = useTheme();

  const codeString = exampleUsageMap.openClose({ openCount, closeCount });

  return (
    <div className="story-page">
      <div className="story-left-column">
        {/* Example Usage First */}
        <div className="code-example">
          <h3>Usage Example</h3>
          <p>
            Here is how to monitor toggle events via functions:
          </p>
          <pre className="code-block-pre">
            <code>{codeString}</code>
          </pre>
        </div>

        {/* Description Second */}
        <div className="story-description">
          <h3>Callbacks API</h3>
          <p>
            Use <code>onOpen</code> and <code>onClose</code> callbacks to hook into color picker panel visibility states.
          </p>
          <br />
          <h3>How it works</h3>
          <p>
            These hooks fire immediately when the selector panel mounts or unmounts, enabling you to trigger analytics logs, play sound highlights, or freeze background elements.
          </p>
        </div>
      </div>

      <div className="story-right-column">
        {/* Sandbox on the right */}
        <div className="try-now-section">
          <h3 className="try-now-header">Interactive Sandbox</h3>
          <p className="story-note">
            Open and close the picker to see the counters update.
          </p>

          <div className="demo-area">
            <ColorPicker
              value={color.hex}
              onChange={setColor}
              onOpen={() => setOpenCount((count) => count + 1)}
              onClose={() => setCloseCount((count) => count + 1)}
              theme={theme}
            />
            <div className="story-metrics">
               <span>Current Color: {color.hex}</span>
               <span>Opened: {openCount} times</span>
               <span>Closed: {closeCount} times</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OpenCloseStory;
