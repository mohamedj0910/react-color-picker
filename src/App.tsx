import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { StoryLayout } from "./components/stories/StoryLayout";
import { ThemeProvider } from "./components/stories/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="container-root">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/docs" element={<StoryLayout />} />
            {/* Fallback routing */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
