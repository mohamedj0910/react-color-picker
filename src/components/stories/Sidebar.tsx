import { storyList, stories } from "./storyUtils";
import type { STORY_ITEM } from "./storyUtils";

interface SidebarProps {
  currentStoryId: STORY_ITEM;
  onSelectStory: (id: STORY_ITEM) => void;
}

export const Sidebar = ({ currentStoryId, onSelectStory }: SidebarProps) => {
  return (
    <div className="story-sidebar">
      <h2>Docs</h2>

      {storyList.map((id) => {
        const story = stories[id];

        return (
          <div
            key={id}
            className={`sidebar-item ${currentStoryId === id ? "active" : ""}`}
            onClick={() => onSelectStory(id)}
          >
            {story.title}
          </div>
        );
      })}
    </div>
  );
};
