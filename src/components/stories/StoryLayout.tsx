import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { stories } from "./storyUtils";
import type { STORY_ITEM } from "./storyUtils";
import "./stories.css";

const StoryNotFound = () => <div>Story not found</div>;

export const StoryLayout = () => {
  const [currentStoryId, setCurrentStoryId] = useState<STORY_ITEM>("size");

  const activeStory = stories[currentStoryId];
  const Content = activeStory?.component ?? StoryNotFound;

  return (
    <div className="story-layout">
      <Sidebar
        currentStoryId={currentStoryId}
        onSelectStory={setCurrentStoryId}
      />

      <main className="story-main">
        <header className="story-hero">
          <div>
            <h1>{activeStory.title}</h1>
            <p>{activeStory.description}</p>
          </div>
        </header>

        <section className="story-content">
          <Content />
        </section>
      </main>
    </div>
  );
};
