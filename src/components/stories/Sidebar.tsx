import { storyList, stories } from "./storyUtils";
import type { STORY_ITEM } from "./storyUtils";
import { Icon } from "../icons/Icon";

interface SidebarProps {
  currentStoryId: STORY_ITEM;
  onSelectStory: (id: STORY_ITEM) => void;
  onToggleCollapse: () => void;
  isOpenOnMobile: boolean;
}

export const Sidebar = ({
  currentStoryId,
  onSelectStory,
  onToggleCollapse,
  isOpenOnMobile,
}: SidebarProps) => {
  return (
    <div className={`story-sidebar ${isOpenOnMobile ? "mobile-open" : ""}`}>
      <div className="sidebar-header">
        <div>
          <p className="sidebar-eyebrow">Docs</p>
          <h2>Variants</h2>
        </div>
        <button
          type="button"
          className="sidebar-toggle-btn"
          onClick={onToggleCollapse}
          title="Collapse Sidebar"
        >
          <Icon name="sidebar" size={18} />
        </button>
      </div>

      <div className="sidebar-items-list">
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
    </div>
  );
};
export default Sidebar;
