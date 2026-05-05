import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Building2, Youtube, TrendingUp, Calendar } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? "visible" : ""}`}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in-up">
              Building Dreams with <span className="golden-text">Excellence</span>
            </h1>
            <p className="hero-subtitle fade-in-up delay-1">
              We Believe in Consistency With Quality
            </p>
            <div className="hero-buttons fade-in-up delay-2">
              <Link to="/about" className="btn btn-primary">
                Learn More <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Info Section */}
      <section className="startup-info-section">
        <div className="container">
          <div className="startup-cards">
            <div className="startup-card fade-in-up">
              <div className="startup-icon">
                <TrendingUp size={50} />
              </div>
              <h3>Growing Fast</h3>
              <p>A dynamic startup revolutionizing the construction industry with innovative solutions and quality craftsmanship</p>
            </div>
            <div className="startup-card fade-in-up delay-1">
              <div className="startup-icon">
                <Calendar size={50} />
              </div>
              <h3>Established March 2025</h3>
              <p>Fresh perspective with experienced leadership, bringing modern construction practices to Maharashtra</p>
            </div>
            <div className="startup-card fade-in-up delay-2">
              <div className="startup-icon">
                <Building2 size={50} />
              </div>
              <h3>Quality First</h3>
              <p>Committed to delivering excellence in every project, building trust one structure at a time</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="youtube-section">
        <div className="container">
          <div className="youtube-content">
            <div className="youtube-banner-wrapper fade-in-up">
              <img src="/images/youtube_banner.png" alt="Digambara Construction YouTube Channel" className="youtube-banner-image" />
              <div className="youtube-overlay">
                <Youtube size={80} className="youtube-icon" />
              </div>
            </div>
            <div className="youtube-text fade-in-up delay-1">
              <h2 className="section-title">Follow Our Journey on YouTube</h2>
              <p className="section-text">
                Watch our construction projects come to life! Subscribe to our YouTube channel for project updates, 
                behind-the-scenes content, construction tips, and insights into our building process.
              </p>
              <a 
                href="https://www.youtube.com/@digambaraconstruction" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary youtube-btn"
              >
                <Youtube size={24} />
                Visit Our YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-in-up">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's build something amazing together</p>
            <Link to="/about" className="btn btn-primary">
              Discover Our Story <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
