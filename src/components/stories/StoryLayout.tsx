import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { stories, storyList } from "./storyUtils";
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

  // Calculate Next and Previous Stories
  const currentIndex = storyList.indexOf(currentStoryId);
  const prevStoryId = currentIndex > 0 ? storyList[currentIndex - 1] : null;
  const nextStoryId = currentIndex < storyList.length - 1 ? storyList[currentIndex + 1] : null;

  const prevStory = prevStoryId ? stories[prevStoryId] : null;
  const nextStory = nextStoryId ? stories[nextStoryId] : null;

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

          {/* Next / Previous Story Navigation */}
          <footer className="story-navigation">
            {prevStory ? (
              <button
                type="button"
                className="story-nav-btn prev"
                onClick={() => handleSelectStory(prevStory.id)}
                title={`Go to ${prevStory.title}`}
              >
                <div className="nav-btn-icon-wrapper prev">
                  <Icon name="chevron-left" size={20} />
                </div>
                <div className="nav-btn-text-content">
                  <span className="nav-btn-label">Previous Variant</span>
                  <span className="nav-btn-title">{prevStory.title}</span>
                </div>
              </button>
            ) : (
              <div className="story-nav-placeholder" />
            )}

            {nextStory ? (
              <button
                type="button"
                className="story-nav-btn next"
                onClick={() => handleSelectStory(nextStory.id)}
                title={`Go to ${nextStory.title}`}
              >
                <div className="nav-btn-text-content">
                  <span className="nav-btn-label">Next Variant</span>
                  <span className="nav-btn-title">{nextStory.title}</span>
                </div>
                <div className="nav-btn-icon-wrapper next">
                  <Icon name="chevron-right" size={20} />
                </div>
              </button>
            ) : (
              <div className="story-nav-placeholder" />
            )}
          </footer>
        </main>
      </div>
    </div>
  );
};
export default StoryLayout;
