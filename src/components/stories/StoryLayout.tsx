import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { stories } from "./storyUtils";
import type { STORY_ITEM } from "./storyUtils";
import { Navbar } from "../Navbar";
import { Icon } from "../icons/Icon";
import "./stories.css";

const StoryNotFound = () => <div className="story-not-found">Story not found</div>;

export const StoryLayout = () => {
  const [currentStoryId, setCurrentStoryId] = useState<STORY_ITEM>("size");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const activeStory = stories[currentStoryId];
  const Content = activeStory?.component ?? StoryNotFound;

  const handleSelectStory = (id: STORY_ITEM) => {
    setCurrentStoryId(id);
    setIsMobileOpen(false); // Auto close mobile drawer on select
  };

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsMobileOpen(false);
  };

  const handleTriggerClick = () => {
    // If we're on mobile view (defined in CSS), toggle mobile drawer
    if (window.innerWidth <= 1024) {
      setIsMobileOpen(!isMobileOpen);
    } else {
      // On desktop, expand the sidebar
      setIsCollapsed(false);
    }
  };

  return (
    <div className="story-page-wrapper">
      <Navbar />
      <div className={`story-layout ${isCollapsed ? "sidebar-collapsed" : ""}`}>
        
        {/* Mobile Sidebar Overlay Backdrop */}
        {isMobileOpen && (
          <div
            className="sidebar-backdrop"
            onClick={() => setIsMobileOpen(false)}
          />
        )}

        {/* Floating Expand Tab on Desktop (only shown when collapsed) */}
        <button
          type="button"
          className="story-sidebar-expand-trigger"
          onClick={handleTriggerClick}
          title="Expand Sidebar"
        >
          <Icon name="sidebar" size={18} />
        </button>

        <Sidebar
          currentStoryId={currentStoryId}
          onSelectStory={handleSelectStory}
          onToggleCollapse={handleToggleCollapse}
          isOpenOnMobile={isMobileOpen}
        />

        <main className="story-main">
          <header className="story-hero">
            <div className="story-hero-content">
              <div className="story-title-row">
                {/* Mobile-only menu trigger */}
                <button
                  type="button"
                  className="story-sidebar-mobile-trigger"
                  onClick={handleTriggerClick}
                  title="Toggle Menu"
                >
                  <Icon name="sidebar" size={18} />
                </button>
                <div className="story-title-group">
                  <span className="story-badge-eyebrow">Interactive Spec</span>
                  <h1>{activeStory.title}</h1>
                </div>
              </div>
              <p>{activeStory.description}</p>
            </div>
          </header>

          <section className="story-content">
            <Content />
          </section>
        </main>
      </div>
    </div>
  );
};
export default StoryLayout;
