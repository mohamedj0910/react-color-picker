
export type ColorResult = {
  hex: string;
  rgba: string;
  hsl: string;
};

export type ColorPickerProps = {
  value: string;
  onChange: (color: ColorResult) => void;
  onOpen?: () => void;
  onClose?: () => void;
  theme?: "light" | "dark";
  size?: number;
  backgroundColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  applyOnEscape?: boolean;
};
