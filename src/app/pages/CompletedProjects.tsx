import { Building2, CheckCircle, MapPin, Calendar, Award } from "lucide-react";

export default function CompletedProjects() {
  const projects = [
    {
      id: 1,
      name: "Green Valley Apartments",
      location: "East Side, Residential Zone",
      completionDate: "Dec 2025",
      area: "45,000 sq ft",
      units: "120 Apartments",
      description: "Eco-friendly residential complex with modern amenities and green spaces.",
      features: ["Solar Power", "Rainwater Harvesting", "Smart Home Systems", "Clubhouse"]
    },
    {
      id: 2,
      name: "Tech Park Campus",
      location: "IT Corridor, Sector 8",
      completionDate: "Oct 2024",
      area: "150,000 sq ft",
      units: "5 Buildings",
      description: "State-of-the-art IT park with world-class infrastructure for tech companies.",
      features: ["High-Speed Internet", "Cafeteria", "Gym", "Conference Halls"]
    },
    {
      id: 3,
      name: "Riverside Villas",
      location: "Waterfront District",
      completionDate: "Aug 2024",
      area: "35,000 sq ft",
      units: "25 Villas",
      description: "Luxury villas with scenic river views and premium amenities.",
      features: ["Private Gardens", "Swimming Pool", "Security", "Parking"]
    },
    {
      id: 4,
      name: "City Center Plaza",
      location: "Central Business District",
      completionDate: "Jun 2023",
      area: "90,000 sq ft",
      units: "Mixed Use",
      description: "Commercial and retail space in the heart of the city.",
      features: ["Retail Shops", "Offices", "Food Court", "Parking Tower"]
    },
    {
      id: 5,
      name: "Healthcare Medical Center",
      location: "Medical District",
      completionDate: "Mar 2023",
      area: "65,000 sq ft",
      units: "Multi-specialty Hospital",
      description: "Modern medical facility with advanced healthcare infrastructure.",
      features: ["ICU", "Operation Theaters", "Diagnostic Center", "Emergency Services"]
    },
    {
      id: 6,
      name: "Sunset Heights Towers",
      location: "North Side Residential",
      completionDate: "Jan 2023",
      area: "80,000 sq ft",
      units: "200 Apartments",
      description: "High-rise residential towers with panoramic city views.",
      features: ["Sky Lounge", "Gym", "Play Area", "24/7 Security"]
    },
  ];

  return (
    <div className="projects-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Completed Projects</h1>
          <p className="page-subtitle">Our legacy of excellence and quality construction</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="completed-stats">
            <div className="stat-box">
              <Award size={40} />
              <div>
                <h3>500+</h3>
                <p>Projects Delivered</p>
              </div>
            </div>
            <div className="stat-box">
              <CheckCircle size={40} />
              <div>
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
            <div className="stat-box">
              <Building2 size={40} />
              <div>
                <h3>5M+ sq ft</h3>
                <p>Area Constructed</p>
              </div>
            </div>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <div key={project.id} className="project-detail-card completed">
                <div className="project-detail-image">
                  <div className="image-placeholder">
                    <Building2 size={80} />
                  </div>
                  <div className="completed-stamp">
                    <CheckCircle size={30} />
                    <span>Completed</span>
                  </div>
                </div>

                <div className="project-detail-content">
                  <h2 className="project-name">{project.name}</h2>
                  <p className="project-description">{project.description}</p>

                  <div className="project-meta">
                    <div className="meta-item">
                      <MapPin size={18} />
                      <div>
                        <span className="meta-label">Location</span>
                        <span className="meta-value">{project.location}</span>
                      </div>
                    </div>

                    <div className="meta-item">
                      <Calendar size={18} />
                      <div>
                        <span className="meta-label">Completed</span>
                        <span className="meta-value">{project.completionDate}</span>
                      </div>
                    </div>

                    <div className="meta-item">
                      <Building2 size={18} />
                      <div>
                        <span className="meta-label">Area</span>
                        <span className="meta-value">{project.area}</span>
                      </div>
                    </div>

                    <div className="meta-item">
                      <Award size={18} />
                      <div>
                        <span className="meta-label">Units</span>
                        <span className="meta-value">{project.units}</span>
                      </div>
                    </div>
                  </div>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <div className="features-list">
                      {project.features.map((feature, index) => (
                        <span key={index} className="feature-tag">
                          <CheckCircle size={14} /> {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
