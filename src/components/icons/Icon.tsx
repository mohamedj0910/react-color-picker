import React from "react";
import { iconMapping } from "./iconUtils";
import type { IconName } from "./iconUtils";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  size?: number | string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className,
  style,
  ...props
}) => {
  const svgContent = iconMapping[name];

  if (!svgContent) {
    console.warn(`Icon "${name}" not found in iconMapping.`);
    return null;
  }

  return (
    <span
      className={`icon-wrapper ${className || ""}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        lineHeight: 0,
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      {...props}
    />
  );
};
export default Icon;
