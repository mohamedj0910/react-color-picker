import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { ThemeProvider } from "./components/stories/ThemeContext";

const StoryLayout = lazy(() => import("./components/stories/StoryLayout"));

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="container-root">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/docs"
              element={
                <Suspense fallback={<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh", color: "var(--text-secondary)", fontWeight: 600 }}>Loading Specs...</div>}>
                  <StoryLayout />
                </Suspense>
              }
            />
            {/* Fallback routing */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
