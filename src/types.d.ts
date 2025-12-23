export interface ColorResult {
  hex: string;
  rgba: string;
  hsl: string;
}

export type Theme = "light" | "dark";

export interface ColorPickerProps {
  value: string;
  onChange: (color: ColorResult) => void;
  theme?: Theme;
  size?: number; // square size in px, default 40, min 10, max 150
}
