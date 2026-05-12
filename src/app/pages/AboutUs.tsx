import { Award, CheckCircle, Heart, Users, Briefcase } from "lucide-react";

export default function AboutUs() {
  const founder = {
    name: "Baliram Shinde",
    position: "Founder & CEO",
    education: "Bachelor of Engineering (BE) in Civil Engineering",
    description: "Mr. Baliram Shinde is a qualified Civil Engineer (BE Civil) and the visionary founder of Digambara Construction. As a full-time businessman and part-time YouTuber, he brings technical expertise and modern innovation to the construction industry. Since establishing the company in March 2025, he has been committed to delivering quality construction services with professional excellence. His engineering background combined with entrepreneurial spirit drives the company's mission to provide comprehensive construction solutions including building planning, designing, estimating, building permissions, NA layouts, and contract management.",
    image: "/images/Baliram.jpg" // Owner photo
  };

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About Digambara Constructions</h1>
          <p className="page-subtitle">Building trust through excellence since 2025</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="page-content">
        <div className="container">
          <div className="about-content-grid">
            <div className="about-text">
              <h2 className="section-title">Our Story</h2>
              <p>
                Founded in March 2025, Digambara Construction is a dynamic startup bringing fresh innovation 
                to the construction industry. We combine modern building techniques with traditional values 
                of quality and reliability.
              </p>
              <p>
                As a growing company, we are committed to establishing ourselves as a trusted name in 
                residential, commercial, and industrial construction. Our journey is marked by dedication 
                to excellence, customer satisfaction, and sustainable building practices.
              </p>
              <p>
                Based in Beed, Maharashtra, we serve clients across the region with personalized service 
                and attention to detail. Every project we undertake is a step toward building our reputation 
                as a reliable construction partner.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="/images/Logo.png" 
                alt="Digambara Construction Logo" 
                className="about-logo-image"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'image-placeholder';
                  placeholder.innerHTML = '<svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 7h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path></svg>';
                  e.currentTarget.parentElement!.appendChild(placeholder);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container">
          <h2 className="section-title text-center">Meet Our Founder</h2>
          <div className="founder-card">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} className="founder-photo" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="image-placeholder"><svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>';
              }} />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-position">{founder.position}</p>
              <p className="founder-education">{founder.education}</p>
              <p className="founder-description">{founder.description}</p>
              <div className="founder-highlights">
                <div className="highlight-item">
                  <strong>🎓 Qualification:</strong> BE Civil Engineering
                </div>
                <div className="highlight-item">
                  <strong>💼 Role:</strong> Full-time Businessman
                </div>
                <div className="highlight-item">
                  <strong>🎬 Passion:</strong> Part-time YouTuber
                </div>
              </div>
              <div className="founder-contact">
                <p><strong>Contact:</strong> +91 9561231865</p>
                <p><strong>Email:</strong> info@digambaraconstruction.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
