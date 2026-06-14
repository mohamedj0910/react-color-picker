import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";

export const OpenCloseStory = () => {
  const [color, setColor] = useState({ hex: "#a855f7", rgba: "", hsl: "" });
  const [openCount, setOpenCount] = useState(0);
  const [closeCount, setCloseCount] = useState(0);

  return (
    <div className="story-page">
      <div className="story-description">
        <p>
          Use <code>onOpen</code> and <code>onClose</code> to hook into picker
          visibility changes.
        </p>
        <br />
        <h3>How it works</h3>
        <p>
          The callbacks fire when the panel opens or closes, making it easy to
          trigger analytics or UI side effects.
        </p>
      </div>

      <div className="code-example">
        <h3>Example Usage</h3>
        <p>Track how often the picker opens and closes using local state.</p>
      </div>

      <div className="try-now-section">
        <h3 className="try-now-header">Try Now</h3>
        <p className="story-note">
          Open and close the picker to see the counters update.
        </p>

        <div className="demo-area">
          <ColorPicker
            value={color.hex}
            onChange={setColor}
            onOpen={() => setOpenCount((count) => count + 1)}
            onClose={() => setCloseCount((count) => count + 1)}
          />
          <div className="story-metrics">
            <span>Current Color: {color.hex}</span>
            <span>Opened: {openCount} times</span>
            <span>Closed: {closeCount} times</span>
          </div>
        </div>
      </div>
    </div>
  );
};
