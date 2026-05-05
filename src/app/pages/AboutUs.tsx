import { Award, CheckCircle, Heart, Users, Briefcase } from "lucide-react";

export default function AboutUs() {
  const founder = {
    name: "Baliram Shinde",
    position: "Founder & CEO",
    experience: "25+ years",
    description: "Visionary leader and founder of Digambara Construction, Mr. Baliram Shinde has been instrumental in shaping the construction landscape with his commitment to quality, innovation, and customer satisfaction. Since establishing the company in March 2025, he has led the team with a focus on modern construction practices and sustainable building solutions."
  };

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About Digambara Constructions</h1>
          <p className="page-subtitle">Building trust through excellence since 2001</p>
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
              <div className="image-placeholder">
                <Briefcase size={100} />
              </div>
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
              <div className="image-placeholder">
                <Users size={120} />
              </div>
            </div>
            <div className="founder-info">
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-position">{founder.position}</p>
              <p className="founder-experience">Experience: {founder.experience}</p>
              <p className="founder-description">{founder.description}</p>
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
