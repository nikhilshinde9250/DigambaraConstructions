import { Building2, CheckCircle, MapPin, Calendar, Award } from "lucide-react";

export default function CompletedProjects() {
  const projects = [
    {
      id: 1,
      name: "Completed Project 1", // UPDATE: Add actual project name
      location: "Beed, Maharashtra", // UPDATE: Add actual location
      completionDate: "March 2025", // UPDATE: Add completion date
      area: "Area sq ft", // UPDATE: Add area
      units: "Residential/Commercial", // UPDATE: Add units
      description: "Successfully completed construction project delivered with quality and on time.", // UPDATE: Add description
      features: ["Quality Construction", "Timely Delivery", "Customer Satisfaction", "Modern Design"], // UPDATE: Add features
      image: "/images/4.jpg" // Image 4 - Add your image as 4.jpg in public/images/
    },
    {
      id: 2,
      name: "Completed Project 2", // UPDATE: Add actual project name
      location: "Beed, Maharashtra", // UPDATE: Add actual location
      completionDate: "April 2025", // UPDATE: Add completion date
      area: "Area sq ft", // UPDATE: Add area
      units: "Residential/Commercial", // UPDATE: Add units
      description: "High-quality construction project completed to client specifications.", // UPDATE: Add description
      features: ["Premium Materials", "Expert Craftsmanship", "Modern Amenities", "Durable Build"], // UPDATE: Add features
      image: "/images/5.jpg" // Image 5 - Add your image as 5.jpg in public/images/
    },
    {
      id: 3,
      name: "Completed Project 3", // UPDATE: Add actual project name
      location: "Beed, Maharashtra", // UPDATE: Add actual location
      completionDate: "May 2025", // UPDATE: Add completion date
      area: "Area sq ft", // UPDATE: Add area
      units: "Residential/Commercial", // UPDATE: Add units
      description: "Excellent construction project showcasing our commitment to quality.", // UPDATE: Add description
      features: ["Quality Assurance", "Professional Team", "Client Focused", "Attention to Detail"], // UPDATE: Add features
      image: "/images/6.jpg" // Image 6 - Add your image as 6.jpg in public/images/
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
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="project-real-image"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.svg';
                    }}
                  />
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
