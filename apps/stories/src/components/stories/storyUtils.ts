import { SizeStory } from "./SizeStory";
import { ThemeStory } from "./ThemeStory";
import { BackgroundColorStory } from "./BackgroundColorStory";
import { PrimaryColorStory } from "./PrimaryColorStory";
import { SecondaryColorStory } from "./SecondaryColorStory";
import { ApplyOnEscapeStory } from "./ApplyOnEscapeStory";
import { OpenCloseStory } from "./OpenCloseStory";

export type STORY_ITEM = (typeof storyList)[number];
export const storyList = [
  "size",
  "theme",
  "backgroundColor",
  "primaryColor",
  "secondaryColor",
  "applyOnEscape",
  "openClose",
] as const;

export type StoryConfig = {
  id: STORY_ITEM;
  title: string;
  description: string;
  component: React.ComponentType | null;
};

export const stories: Record<STORY_ITEM, StoryConfig> = {
  size: {
    id: "size",
    title: "Size",
    description: "Explore different sizes for the color picker.",
    component: SizeStory,
  },
  theme: {
    id: "theme",
    title: "Theme",
    description: "Toggle between light and dark themes.",
    component: ThemeStory,
  },
  backgroundColor: {
    id: "backgroundColor",
    title: "Background Color",
    description: "Customize the background color of the picker.",
    component: BackgroundColorStory,
  },
  primaryColor: {
    id: "primaryColor",
    title: "Primary Color",
    description: "Define the primary accent color.",
    component: PrimaryColorStory,
  },
  secondaryColor: {
    id: "secondaryColor",
    title: "Secondary Color",
    description: "Set a secondary color for UI elements.",
    component: SecondaryColorStory,
  },
  applyOnEscape: {
    id: "applyOnEscape",
    title: "Apply on Escape",
    description: "Test applying changes when the Escape key is pressed.",
    component: ApplyOnEscapeStory,
  },
  openClose: {
    id: "openClose",
    title: "Open/Close",
    description: "Manage the visibility state of the color picker.",
    component: OpenCloseStory,
  },
};
