import docsSvg from "./docs.svg?raw";
import playgroundSvg from "./playground.svg?raw";
import githubSvg from "./github.svg?raw";
import arrowRightSvg from "./arrow-right.svg?raw";
import customizationSvg from "./customization.svg?raw";
import themeSvg from "./theme.svg?raw";
import accessibilitySvg from "./accessibility.svg?raw";
import portalSvg from "./portal.svg?raw";
import positioningSvg from "./positioning.svg?raw";
import colorsyncSvg from "./colorsync.svg?raw";

export type IconName =
  | "docs"
  | "playground"
  | "github"
  | "arrow-right"
  | "customization"
  | "theme"
  | "accessibility"
  | "portal"
  | "positioning"
  | "colorsync";

export const iconMapping: Record<IconName, string> = {
  docs: docsSvg,
  playground: playgroundSvg,
  github: githubSvg,
  "arrow-right": arrowRightSvg,
  customization: customizationSvg,
  theme: themeSvg,
  accessibility: accessibilitySvg,
  portal: portalSvg,
  positioning: positioningSvg,
  colorsync: colorsyncSvg,
};
export default iconMapping;
