import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { stories } from "./storyUtils";
import type { STORY_ITEM } from "./storyUtils";
import "./stories.css";

export const StoryLayout = () => {
  const [currentStoryId, setCurrentStoryId] = useState<STORY_ITEM>("size");

  const activeStory = stories[currentStoryId];
  const Content = activeStory?.component ?? (() => <div>Story not found</div>);

  return (
    <div className="story-layout">
      <Sidebar
        currentStoryId={currentStoryId}
        onSelectStory={setCurrentStoryId}
      />

      <div className="story-content">
        <Content />
      </div>
    </div>
  );
};
