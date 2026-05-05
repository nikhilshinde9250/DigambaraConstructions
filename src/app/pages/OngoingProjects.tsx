import { Building2, Calendar, MapPin, Users } from "lucide-react";

export default function OngoingProjects() {
  const projects = [
    {
      id: 1,
      name: "Residential Project 1", // UPDATE: Add actual project name
      location: "Beed, Maharashtra", // UPDATE: Add actual location
      client: "Client Name", // UPDATE: Add actual client name
      startDate: "March 2025", // UPDATE: Add start date
      expectedCompletion: "December 2025", // UPDATE: Add completion date
      progress: 35,
      area: "Area sq ft", // UPDATE: Add area
      description: "Modern residential construction project with quality materials and expert craftsmanship.", // UPDATE: Add description
      image: "/images/1.jpg" // Image 1 - Add your image as 1.jpg in public/images/
    },
    {
      id: 2,
      name: "Commercial Project 2", // UPDATE: Add actual project name
      location: "Beed, Maharashtra", // UPDATE: Add actual location
      client: "Client Name", // UPDATE: Add actual client name
      startDate: "April 2025", // UPDATE: Add start date
      expectedCompletion: "January 2026", // UPDATE: Add completion date
      progress: 20,
      area: "Area sq ft", // UPDATE: Add area
      description: "Commercial building project designed for modern business needs.", // UPDATE: Add description
      image: "/images/2.jpg" // Image 2 - Add your image as 2.jpg in public/images/
    },
    {
      id: 3,
      name: "Residential Project 3", // UPDATE: Add actual project name
      location: "Beed, Maharashtra", // UPDATE: Add actual location
      client: "Client Name", // UPDATE: Add actual client name
      startDate: "May 2025", // UPDATE: Add start date
      expectedCompletion: "February 2026", // UPDATE: Add completion date
      progress: 15,
      area: "Area sq ft", // UPDATE: Add area
      description: "Quality residential construction with attention to detail and customer satisfaction.", // UPDATE: Add description
      image: "/images/3.jpg" // Image 3 - Add your image as 3.jpg in public/images/
    },
  ];

  return (
    <div className="projects-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Ongoing Projects</h1>
          <p className="page-subtitle">Building the future, one project at a time</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="projects-list">
            {projects.map((project) => (
              <div key={project.id} className="project-detail-card">
                <div className="project-detail-image">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="project-real-image"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.svg';
                    }}
                  />
                  <div className="progress-overlay">
                    <div className="progress-circle">
                      <span className="progress-value">{project.progress}%</span>
                      <span className="progress-label">Complete</span>
                    </div>
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
                      <Users size={18} />
                      <div>
                        <span className="meta-label">Client</span>
                        <span className="meta-value">{project.client}</span>
                      </div>
                    </div>

                    <div className="meta-item">
                      <Calendar size={18} />
                      <div>
                        <span className="meta-label">Timeline</span>
                        <span className="meta-value">{project.startDate} - {project.expectedCompletion}</span>
                      </div>
                    </div>

                    <div className="meta-item">
                      <Building2 size={18} />
                      <div>
                        <span className="meta-label">Area</span>
                        <span className="meta-value">{project.area}</span>
                      </div>
                    </div>
                  </div>

                  <div className="progress-bar-full">
                    <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
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
