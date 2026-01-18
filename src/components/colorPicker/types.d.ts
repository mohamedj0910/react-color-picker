export type ColorResult = {
  hex: string;
  rgba: string;
  hsl: string;
};

export type Theme = "light" | "dark";

export type ColorPickerProps = {
  value: string;
  onChange: (color: ColorResult) => void;
  onOpen?: () => void;
  onClose?: () => void;
  theme?: Theme;
  size?: number;
  backgroundColor?: color;
  primaryColor?: string;
  secondaryColor?: string;
  applyOnEscape?: boolean;
};
