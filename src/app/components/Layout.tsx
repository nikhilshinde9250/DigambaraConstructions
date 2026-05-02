import { Outlet, Link, NavLink } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <span className="logo-icon">🏗️</span>
              <span className="logo-text">
                <span className="logo-name">Digambara</span>
                <span className="logo-tagline">Constructions</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Home
              </NavLink>

              <div
                className="nav-dropdown"
                onMouseEnter={() => setIsProjectsOpen(true)}
                onMouseLeave={() => setIsProjectsOpen(false)}
              >
                <button className="nav-link dropdown-toggle">
                  Projects <ChevronDown size={16} />
                </button>
                <div className={`dropdown-menu ${isProjectsOpen ? "show" : ""}`}>
                  <NavLink to="/projects/ongoing" className="dropdown-item">
                    Ongoing Projects
                  </NavLink>
                  <NavLink to="/projects/completed" className="dropdown-item">
                    Completed Projects
                  </NavLink>
                </div>
              </div>

              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                About Us
              </NavLink>

              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Contact
              </NavLink>

              <button
                className="theme-toggle"
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="mobile-header-actions">
              <button
                className="theme-toggle mobile"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <div className="mobile-dropdown">
              <button
                className="mobile-dropdown-toggle"
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              >
                Projects <ChevronDown size={16} />
              </button>
              <div className={`mobile-dropdown-menu ${isProjectsOpen ? "show" : ""}`}>
                <NavLink to="/projects/ongoing" onClick={() => setIsMenuOpen(false)}>
                  Ongoing Projects
                </NavLink>
                <NavLink to="/projects/completed" onClick={() => setIsMenuOpen(false)}>
                  Completed Projects
                </NavLink>
              </div>
            </div>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h3>Digambara Constructions</h3>
              <p>Building dreams with excellence and integrity. Your trusted partner in construction.</p>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects/ongoing">Ongoing Projects</Link></li>
                <li><Link to="/projects/completed">Completed Projects</Link></li>
                <li><Link to="/about">About Us</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Info</h4>
              <ul>
                <li>📍 123 Construction Ave, City</li>
                <li>📞 +91 12345 67890</li>
                <li>✉️ info@digambaraconstructions.com</li>
                <li>🕒 Mon - Sat: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="Twitter">Twitter</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Digambara Constructions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
