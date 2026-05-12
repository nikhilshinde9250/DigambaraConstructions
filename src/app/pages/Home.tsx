import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Youtube, TrendingUp, Calendar, Building2 } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Background */}
      <section className={`hero-section-new ${isVisible ? "visible" : ""}`}>
        <div className="hero-background-image"></div>
        <div className="hero-overlay-dark"></div>
        <div className="container">
          <div className="hero-content-new">
            <h1 className="company-name slide-in-left">
              Digambara Construction
            </h1>
            <p className="trademark-tagline slide-in-right delay-1">
              "We Believe in Consistency With Quality"
            </p>
            <p className="hero-description fade-in-up delay-2">
              Leading construction company in Beed, Maharashtra
            </p>
            <div className="hero-buttons fade-in-up delay-3">
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
          <h2 className="section-title text-center">Why Choose Digambara Construction?</h2>
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

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title text-center">Our Comprehensive Services</h2>
          <p className="section-subtitle text-center">
            Led by Civil Engineer Baliram Shinde (BE Civil), we offer complete construction solutions
          </p>
          <div className="services-grid">
            <div className="service-card fade-in-up">
              <h3>🏗️ Building Construction</h3>
              <p>Residential, Commercial & Industrial construction projects</p>
            </div>
            <div className="service-card fade-in-up delay-1">
              <h3>📐 Building Planning</h3>
              <p>Professional architectural planning and layout design</p>
            </div>
            <div className="service-card fade-in-up delay-2">
              <h3>✏️ Architectural Designing</h3>
              <p>Modern and functional architectural design services</p>
            </div>
            <div className="service-card fade-in-up">
              <h3>💰 Cost Estimating</h3>
              <p>Accurate project cost estimation and budgeting</p>
            </div>
            <div className="service-card fade-in-up delay-1">
              <h3>📋 Building Permissions</h3>
              <p>Complete assistance with building permits and approvals</p>
            </div>
            <div className="service-card fade-in-up delay-2">
              <h3>🗺️ NA Layout Planning</h3>
              <p>Non-Agricultural layout planning and development</p>
            </div>
            <div className="service-card fade-in-up">
              <h3>📄 Construction Contracts</h3>
              <p>Professional contract management and documentation</p>
            </div>
            <div className="service-card fade-in-up delay-1">
              <h3>🎯 Project Consultation</h3>
              <p>Expert guidance for your construction projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="youtube-section">
        <div className="container">
          <div className="youtube-content">
            <a 
              href="https://youtube.com/@digambaraconstruction?si=v4dix0hDgAU8DbzZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-banner-wrapper fade-in-up"
            >
              <img src="/images/youtube_banner.png" alt="Digambara Construction YouTube Channel" className="youtube-banner-image" />
              <div className="youtube-overlay">
                <Youtube size={80} className="youtube-icon" />
              </div>
            </a>
            <div className="youtube-text fade-in-up delay-1">
              <h2 className="section-title">Follow Our Journey on YouTube</h2>
              <p className="section-text">
                Watch our construction projects come to life! Subscribe to our YouTube channel for project updates, 
                behind-the-scenes content, construction tips, and insights into our building process.
              </p>
              <a 
                href="https://youtube.com/@digambaraconstruction?si=v4dix0hDgAU8DbzZ" 
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
