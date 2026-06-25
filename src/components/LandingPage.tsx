import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { ColorPicker } from "./colorPicker/ColorPicker";
import { Icon } from "./icons/Icon";
import "./LandingPage.css";

export const LandingPage = () => {
  const [accentColor, setAccentColor] = useState({
    hex: "#6366f1",
    rgba: "",
    hsl: "",
  });
  const [bgColor, _setBgColor] = useState({ hex: "#1e1b4b", rgba: "", hsl: "" });
  const [pickerTheme, setPickerTheme] = useState<"light" | "dark">("dark");

  return (
    <div className="landing-page animate-fade-in">
      <Navbar />

      <main className="landing-content">
        {/* Decorative background grid & radial lights */}
        <div className="landing-bg-decor">
          <div className="decor-glow glow-1"></div>
          <div className="decor-glow glow-2"></div>
          <div className="decor-grid"></div>
        </div>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-info">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span>Version 0.0.1 (Alpha)</span>
              </div>

              <h1 className="hero-title">
                Craft the Perfect Color Experience for{" "}
                <span className="gradient-text-primary">React Apps</span>
              </h1>

              <p className="hero-description">
                A highly customizable, accessible, and lightweight color picker
                designed to blend seamlessly into any user interface. Complete
                with support for custom sizing, themes, keyboard bindings, and
                real-time color syncing.
              </p>

              <div className="hero-actions">
                <Link to="/docs" className="cta-button primary-cta">
                  <span>Get Started</span>
                  <Icon name="arrow-right" size={18} className="cta-arrow" />
                </Link>

                <a
                  href="#features"
                  className="cta-button secondary-cta"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span>Explore Features</span>
                </a>
              </div>

              {/* Minimal metrics row */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-num">&lt; 15 KB</span>
                  <span className="stat-label">Gzipped Size</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-num">TypeScript</span>
                  <span className="stat-label">Strictly Typed</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-num">WAI-ARIA</span>
                  <span className="stat-label">Accessible Design</span>
                </div>
              </div>
            </div>

            {/* Interactive Preview Canvas */}
            <div className="hero-preview">
              <div className="preview-card-wrapper glass-panel">
                <div className="preview-card-header">
                  <div className="window-dots">
                    <span className="window-dot red"></span>
                    <span className="window-dot yellow"></span>
                    <span className="window-dot green"></span>
                  </div>
                  <span className="window-title">
                    Live Preview Configurator
                  </span>
                </div>

                <div
                  className="preview-card-body"
                  style={{
                    /* background: `linear-gradient(135deg, ${bgColor.hex} 0%, #090b16 100%)`, */
                    background: bgColor.hex,
                    transition: "background var(--transition-slow)",
                  }}
                >
                  <div className="mock-widget glass-panel">
                    <h3 style={{ color: accentColor.hex }}>
                      Visual Card Component
                    </h3>
                    <p>
                      Customize my border accents and overall background using
                      the pickers below.
                    </p>

                    <div className="widget-bar">
                      <span
                        className="widget-pill"
                        style={{
                          background: `${accentColor.hex}22`,
                          color: accentColor.hex,
                          borderColor: accentColor.hex,
                        }}
                      >
                        Dynamic Pill
                      </span>
                      <span
                        className="widget-pill-filled"
                        style={{ background: accentColor.hex }}
                      >
                        Accent fill
                      </span>
                    </div>

                    <div className="widget-controls">
                      <div className="control-item">
                        <label>Accent Color</label>
                        <div className="picker-trigger-inline">
                          <ColorPicker
                            value={accentColor.hex}
                            onChange={setAccentColor}
                            theme={pickerTheme}
                            primaryColor={accentColor.hex}
                          />
                          <code className="color-code">{accentColor.hex}</code>
                        </div>
                      </div>

                      {/* 
                      <div className="control-item">
                        <label>Gradient Background</label>
                        <div className="picker-trigger-inline">
                          <ColorPicker 
                            value={bgColor.hex} 
                            onChange={setBgColor} 
                            theme={pickerTheme}
                            primaryColor={accentColor.hex}
                          />
                          <code className="color-code">{bgColor.hex}</code>
                        </div>
                      </div>
                      */}
                    </div>
                  </div>

                  {/* Config options */}
                  <div className="preview-options">
                    <div className="option-row">
                      <span>Panel Theme:</span>
                      <div className="theme-toggle">
                        <button
                          className={`theme-btn ${pickerTheme === "light" ? "active" : ""}`}
                          onClick={() => setPickerTheme("light")}
                        >
                          Light
                        </button>
                        <button
                          className={`theme-btn ${pickerTheme === "dark" ? "active" : ""}`}
                          onClick={() => setPickerTheme("dark")}
                        >
                          Dark
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="features-section">
          <div className="features-container">
            <h2 className="section-title">
              Engineered for Modern Web Interfaces
            </h2>
            <p className="section-subtitle">
              A comprehensive set of features to meet your design demands and
              maintain visual consistency.
            </p>

            <div className="features-grid">
              <div className="feature-card glass-panel glass-panel-hover">
                <div className="feature-icon-box blue-glow">
                  <Icon name="customization" size={24} />
                </div>
                <h3>Accent Customization</h3>
                <p>
                  Define custom primary and secondary highlights to keep
                  elements matching your company color scheme.
                </p>
              </div>

              <div className="feature-card glass-panel glass-panel-hover">
                <div className="feature-icon-box purple-glow">
                  <Icon name="theme" size={24} />
                </div>
                <h3>Light & Dark Themes</h3>
                <p>
                  Native theme options let you seamlessly change backgrounds,
                  border intensities, and input fields on the fly.
                </p>
              </div>

              <div className="feature-card glass-panel glass-panel-hover">
                <div className="feature-icon-box pink-glow">
                  <Icon name="accessibility" size={24} />
                </div>
                <h3>Keyboard Safe & Escape Support</h3>
                <p>
                  Complete accessibility integration. Safely discard or commit
                  color changes by pressing the Escape key.
                </p>
              </div>

              <div className="feature-card glass-panel glass-panel-hover">
                <div className="feature-icon-box blue-glow">
                  <Icon name="portal" size={24} />
                </div>
                <h3>Smart Overlay Portals</h3>
                <p>
                  Mounts popovers directly onto document.body using portals, 
                  completely bypassing parent container overflow and clipping limits.
                </p>
              </div>

              <div className="feature-card glass-panel glass-panel-hover">
                <div className="feature-icon-box purple-glow">
                  <Icon name="positioning" size={24} />
                </div>
                <h3>Dynamic Auto-Positioning</h3>
                <p>
                  Intelligently calculates trigger block bounding rectangles to 
                  flip popovers or adjust edges, remaining inside viewport bounds.
                </p>
              </div>

              <div className="feature-card glass-panel glass-panel-hover">
                <div className="feature-icon-box pink-glow">
                  <Icon name="colorsync" size={24} />
                </div>
                <h3>Universal Formats & Syncing</h3>
                <p>
                  Equipped with segmented inputs for real-time conversion 
                  between HEX, RGBA, and HSLA values including alpha channel transparency.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} react-color-picker. Released under the
            MIT License.
          </p>
          <div className="footer-links">
            <Link to="/docs">Docs</Link>
            <a
              href="https://github.com/mohamedj0910/react-color-picker"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
