import type { STORY_ITEM } from "./storyUtils";

export const exampleUsageMap: Record<
  STORY_ITEM,
  (state: any) => string
> = {
  size: (size: number) => `import { ColorPicker } from "@react/react-color-picker";

export default function App() {
  return (
    <ColorPicker
      value="#4caf50"
      size={${size}}
    />
  );
}`,
  theme: (theme: string) => `import { ColorPicker } from "@react/react-color-picker";

export default function App() {
  return (
    <ColorPicker
      value="#2563eb"
      theme="${theme}"
    />
  );
}`,
  backgroundColor: (bgColor: string) => `import { ColorPicker } from "@react/react-color-picker";

export default function App() {
  return (
    <ColorPicker
      value="#f97316"
      backgroundColor="${bgColor}"
    />
  );
}`,
  primaryColor: (primaryColor: string) => `import { ColorPicker } from "@react/react-color-picker";

export default function App() {
  return (
    <ColorPicker
      value="#6366f1"
      primaryColor="${primaryColor}"
    />
  );
}`,
  secondaryColor: (secondaryColor: string) => `import { ColorPicker } from "@react/react-color-picker";

export default function App() {
  return (
    <ColorPicker
      value="#f43f5e"
      secondaryColor="${secondaryColor}"
    />
  );
}`,
  applyOnEscape: (applyOnEscape: boolean) => `import { ColorPicker } from "@react/react-color-picker";

export default function App() {
  return (
    <ColorPicker
      value="#22c55e"
      applyOnEscape={${applyOnEscape}}
    />
  );
}`,
  openClose: (_state: { openCount: number; closeCount: number }) => `import { useState } from "react";
import { ColorPicker } from "@react/react-color-picker";

export default function App() {
  const [openCount, setOpenCount] = useState(0);
  const [closeCount, setCloseCount] = useState(0);

  return (
    <ColorPicker
      value="#a855f7"
      onOpen={() => setOpenCount(prev => prev + 1)}
      onClose={() => setCloseCount(prev => prev + 1)}
    />
  );
}`,
};
