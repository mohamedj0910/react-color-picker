import { useState } from "react";
import { ColorPicker } from "./components/ColorPicker";
import type { ColorResult } from "./types";

export default function App() {
  // Controlled value
  const [color, setColor] = useState<ColorResult>({
    hex: "#6745c2",
    rgba: "rgba(103,69,194,1)",
    hsl: "hsl(257, 47%, 52%)",
  });

  return (
    <div style={{ padding: "40px" }}>
      <h1>Selected Color:</h1>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: color.rgba,
          border: "1px solid #000",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />

      <ColorPicker
        value={color.hex}
        onChange={(newColor: ColorResult) => setColor(newColor)}
        theme="light"
        size={10}
        // primaryColor="#333333"
      />
    </div>
  );
}
