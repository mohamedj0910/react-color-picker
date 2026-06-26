import { Link, useLocation } from "react-router-dom";
import { Icon } from "./icons/Icon";
import { useTheme } from "./stories/ThemeContext";
import "./Navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const isDocs = location.pathname === "/docs";
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon-wrapper">
            <span className="logo-dot blue"></span>
            <span className="logo-dot purple"></span>
            <span className="logo-dot pink"></span>
          </div>
          <span className="logo-text">
            react<span className="logo-bold">-color-picker</span>
          </span>
        </Link>

        <div className="navbar-actions">
          <Link
            to="/docs"
            className={`nav-btn ${isDocs ? "nav-btn-active" : ""}`}
            title="View Documentation & Stories"
          >
            <Icon name="docs" size={18} className="nav-icon" />
            <span>Docs & Stories</span>
          </Link>

          <button
            className="nav-btn nav-btn-disabled"
            type="button"
            disabled
            aria-disabled="true"
            title="Playground (Coming Soon)"
          >
            <Icon name="playground" size={18} className="nav-icon" />
            <span>Playground</span>
            <span className="badge-coming-soon">Soon</span>
          </button>

          <button
            type="button"
            className="navbar-theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>

          <a
            href="https://github.com/mohamedj0910/react-color-picker"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            title="GitHub Repository"
          >
            <Icon name="github" size={20} className="github-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};
