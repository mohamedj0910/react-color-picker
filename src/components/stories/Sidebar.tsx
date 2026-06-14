import { storyList, stories } from "./storyUtils";
import type { STORY_ITEM } from "./storyUtils";

interface SidebarProps {
  currentStoryId: STORY_ITEM;
  onSelectStory: (id: STORY_ITEM) => void;
}

export const Sidebar = ({ currentStoryId, onSelectStory }: SidebarProps) => {
  return (
    <div className="story-sidebar">
      <div className="sidebar-header">
        <p className="sidebar-eyebrow">Docs</p>
        <h2>Variants</h2>
      </div>

      {storyList.map((id) => {
        const story = stories[id];
        const isActive = currentStoryId === id;

        return (
          <button
            key={id}
            type="button"
            className={`sidebar-item ${isActive ? "active" : ""}`}
            aria-current={isActive ? "page" : undefined}
            onClick={() => onSelectStory(id)}
          >
            {story.title}
          </button>
        );
      })}
    </div>
  );
};
