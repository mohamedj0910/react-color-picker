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
import sidebarSvg from "./sidebar.svg?raw";
import chevronLeftSvg from "./chevron-left.svg?raw";
import chevronRightSvg from "./chevron-right.svg?raw";
import sunSvg from "./sun.svg?raw";
import moonSvg from "./moon.svg?raw";

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
  | "colorsync"
  | "sidebar"
  | "chevron-left"
  | "chevron-right"
  | "sun"
  | "moon";

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
  sidebar: sidebarSvg,
  "chevron-left": chevronLeftSvg,
  "chevron-right": chevronRightSvg,
  sun: sunSvg,
  moon: moonSvg,
};
export default iconMapping;
