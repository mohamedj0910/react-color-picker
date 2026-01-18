export type STORY_ITEM = (typeof storyList)[number];
export const storyList = ["size"] as const;

export type StoryConfig = {
  id: STORY_ITEM;
  title: string;
  component: React.ComponentType | null;
  active: boolean;
};

export const stories: Record<STORY_ITEM, StoryConfig> = {
  size: {
    id: "size",
    title: "Size",
    component: null,
    active: true,
  },
};
