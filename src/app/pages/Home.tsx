import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle, Award, Users, Building2 } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Building2 size={40} /> },
    { number: "50+", label: "Ongoing Projects", icon: <CheckCircle size={40} /> },
    { number: "1000+", label: "Happy Clients", icon: <Users size={40} /> },
    { number: "25+", label: "Years Experience", icon: <Award size={40} /> },
  ];

  const ongoingProjects = [
    {
      id: 1,
      name: "Luxury Residential Complex",
      location: "Downtown Area",
      progress: 75,
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      name: "Commercial Tower",
      location: "Business District",
      progress: 60,
      image: "/images/project2.jpg"
    },
    {
      id: 3,
      name: "Shopping Mall",
      location: "Suburban Area",
      progress: 45,
      image: "/images/project3.jpg"
    },
  ];

  const completedProjects = [
    {
      id: 1,
      name: "Green Valley Apartments",
      location: "East Side",
      year: "2025",
      image: "/images/completed1.jpg"
    },
    {
      id: 2,
      name: "Tech Park Campus",
      location: "IT Corridor",
      year: "2024",
      image: "/images/completed2.jpg"
    },
    {
      id: 3,
      name: "Riverside Villas",
      location: "Waterfront",
      year: "2024",
      image: "/images/completed3.jpg"
    },
    {
      id: 4,
      name: "City Center Plaza",
      location: "Central District",
      year: "2023",
      image: "/images/completed4.jpg"
    },
  ];

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
              <Link to="/contact" className="btn btn-primary">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link to="/projects/ongoing" className="btn btn-secondary">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-image">
              <div className="image-placeholder">
                <Building2 size={100} />
              </div>
            </div>
            <div className="about-preview-content">
              <h2 className="section-title">About Digambara Constructions</h2>
              <p className="section-text">
                With over 25 years of excellence in the construction industry, Digambara Constructions
                has established itself as a leading name in residential, commercial, and industrial projects.
              </p>
              <ul className="feature-list">
                <li><CheckCircle size={20} /> Quality craftsmanship</li>
                <li><CheckCircle size={20} /> Timely project delivery</li>
                <li><CheckCircle size={20} /> Experienced team</li>
                <li><CheckCircle size={20} /> Customer satisfaction</li>
              </ul>
              <Link to="/about" className="btn btn-primary">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="projects-section ongoing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ongoing Projects</h2>
            <Link to="/projects/ongoing" className="view-all-link">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="projects-grid">
            {ongoingProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <Building2 size={60} />
                  </div>
                  <div className="project-badge ongoing-badge">In Progress</div>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p className="project-location">📍 {project.location}</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
                  </div>
                  <p className="progress-text">{project.progress}% Complete</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="projects-section completed">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Completed Projects</h2>
            <Link to="/projects/completed" className="view-all-link">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="projects-grid">
            {completedProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <Building2 size={60} />
                  </div>
                  <div className="project-badge completed-badge">Completed {project.year}</div>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p className="project-location">📍 {project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's build something amazing together</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us Today <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
