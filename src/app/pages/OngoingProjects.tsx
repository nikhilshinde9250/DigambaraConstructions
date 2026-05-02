import { Building2, Calendar, MapPin, Users } from "lucide-react";

export default function OngoingProjects() {
  const projects = [
    {
      id: 1,
      name: "Luxury Residential Complex",
      location: "Downtown Area, Block A",
      client: "ABC Developers Pvt Ltd",
      startDate: "Jan 2025",
      expectedCompletion: "Dec 2026",
      progress: 75,
      area: "50,000 sq ft",
      description: "A premium residential complex featuring modern amenities, sustainable design, and world-class infrastructure."
    },
    {
      id: 2,
      name: "Commercial Tower",
      location: "Business District, Sector 5",
      client: "XYZ Realty Group",
      startDate: "Mar 2025",
      expectedCompletion: "Feb 2027",
      progress: 60,
      area: "75,000 sq ft",
      description: "State-of-the-art commercial building with smart office spaces and advanced facilities."
    },
    {
      id: 3,
      name: "Shopping Mall Development",
      location: "Suburban Area, Phase 2",
      client: "Metro Mall Corporation",
      startDate: "Jun 2025",
      expectedCompletion: "Jun 2027",
      progress: 45,
      area: "120,000 sq ft",
      description: "Multi-level shopping destination with entertainment zones, food courts, and retail spaces."
    },
    {
      id: 4,
      name: "Industrial Warehouse Complex",
      location: "Industrial Zone, Plot 12",
      client: "Logistics Hub Inc",
      startDate: "Aug 2025",
      expectedCompletion: "Apr 2027",
      progress: 30,
      area: "200,000 sq ft",
      description: "Modern warehousing facility with automated systems and efficient logistics infrastructure."
    },
    {
      id: 5,
      name: "Educational Campus",
      location: "University District",
      client: "Educational Trust Board",
      startDate: "Sep 2025",
      expectedCompletion: "Aug 2027",
      progress: 25,
      area: "100,000 sq ft",
      description: "Comprehensive educational facility with classrooms, laboratories, library, and sports complex."
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
                  <div className="image-placeholder">
                    <Building2 size={80} />
                  </div>
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
