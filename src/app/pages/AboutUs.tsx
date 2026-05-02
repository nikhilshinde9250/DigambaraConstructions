import { Award, Target, Eye, Heart, Users, Briefcase, CheckCircle } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: <Award size={40} />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project we undertake."
    },
    {
      icon: <Heart size={40} />,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority and measure of success."
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethics."
    },
    {
      icon: <Users size={40} />,
      title: "Teamwork",
      description: "Collaboration and mutual respect drive our success."
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      experience: "30 years",
      description: "Visionary leader with extensive experience in construction industry."
    },
    {
      name: "Priya Sharma",
      position: "Chief Architect",
      experience: "20 years",
      description: "Award-winning architect specializing in sustainable design."
    },
    {
      name: "Amit Patel",
      position: "Project Director",
      experience: "25 years",
      description: "Expert in project management and timely delivery."
    },
    {
      name: "Neha Singh",
      position: "Operations Head",
      experience: "18 years",
      description: "Ensures smooth operations and quality control."
    },
  ];

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
                Founded in 2001, Digambara Constructions has grown from a small construction firm
                to one of the most trusted names in the industry. With over 25 years of experience,
                we have successfully delivered more than 500 projects across residential, commercial,
                and industrial sectors.
              </p>
              <p>
                Our journey has been marked by unwavering commitment to quality, innovation, and
                customer satisfaction. We believe in building not just structures, but lasting
                relationships with our clients, partners, and communities.
              </p>
              <p>
                Today, Digambara Constructions stands as a symbol of reliability and excellence,
                continuing to shape skylines and create spaces that enhance lives.
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

      {/* Vision & Mission */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">
                <Eye size={50} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and innovative construction company, setting new benchmarks
                in quality, sustainability, and customer satisfaction across India.
              </p>
            </div>

            <div className="vm-card">
              <div className="vm-icon">
                <Target size={50} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional construction solutions through cutting-edge technology,
                skilled professionals, and sustainable practices while exceeding client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title text-center">Our Leadership Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <div className="image-placeholder">
                    <Users size={60} />
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-experience">Experience: {member.experience}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Digambara Constructions?</h2>
          <div className="why-choose-grid">
            <div className="why-item">
              <CheckCircle size={24} />
              <span>25+ years of industry experience</span>
            </div>
            <div className="why-item">
              <CheckCircle size={24} />
              <span>500+ successfully completed projects</span>
            </div>
            <div className="why-item">
              <CheckCircle size={24} />
              <span>ISO certified quality standards</span>
            </div>
            <div className="why-item">
              <CheckCircle size={24} />
              <span>Timely project delivery</span>
            </div>
            <div className="why-item">
              <CheckCircle size={24} />
              <span>Experienced and skilled team</span>
            </div>
            <div className="why-item">
              <CheckCircle size={24} />
              <span>Sustainable construction practices</span>
            </div>
            <div className="why-item">
              <CheckCircle size={24} />
              <span>Competitive pricing</span>
            </div>
            <div className="why-item">
              <CheckCircle size={24} />
              <span>24/7 customer support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
