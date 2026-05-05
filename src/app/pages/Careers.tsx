import { useState } from "react";
import { Briefcase, MapPin, Clock, DollarSign, Send, CheckCircle } from "lucide-react";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null as File | null,
    coverLetter: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        resume: null,
        coverLetter: ""
      });
    }, 3000);
  };

  const vacancies = [
    {
      id: 1,
      title: "Civil Engineer",
      department: "Engineering",
      location: "Beed, Maharashtra",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹6-10 LPA",
      description: "We are looking for an experienced Civil Engineer to oversee construction projects, ensure quality standards, and manage site operations.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "3-5 years of experience in construction projects",
        "Strong knowledge of construction methods and materials",
        "Excellent project management skills",
        "Proficiency in AutoCAD and other design software"
      ]
    },
    {
      id: 2,
      title: "Site Supervisor",
      department: "Operations",
      location: "Beed, Maharashtra",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹4-7 LPA",
      description: "Seeking a dedicated Site Supervisor to manage daily construction activities, coordinate with contractors, and ensure project timelines are met.",
      requirements: [
        "Diploma or degree in Civil Engineering",
        "5-8 years of site supervision experience",
        "Strong leadership and communication skills",
        "Knowledge of safety regulations",
        "Ability to read and interpret blueprints"
      ]
    },
    {
      id: 3,
      title: "Architect",
      department: "Design",
      location: "Beed, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹5-9 LPA",
      description: "Looking for a creative Architect to design innovative building solutions, create detailed plans, and collaborate with engineering teams.",
      requirements: [
        "Bachelor's or Master's degree in Architecture",
        "2-4 years of professional experience",
        "Proficiency in AutoCAD, Revit, SketchUp",
        "Strong design and visualization skills",
        "Knowledge of building codes and regulations"
      ]
    },
    {
      id: 4,
      title: "Project Manager",
      department: "Management",
      location: "Beed, Maharashtra",
      type: "Full-time",
      experience: "7-10 years",
      salary: "₹10-15 LPA",
      description: "Experienced Project Manager needed to lead construction projects from planning to completion, manage budgets, and coordinate with stakeholders.",
      requirements: [
        "Bachelor's degree in Civil Engineering or related field",
        "7-10 years of project management experience",
        "PMP certification preferred",
        "Excellent leadership and organizational skills",
        "Strong financial and budget management abilities"
      ]
    },
    {
      id: 5,
      title: "Quantity Surveyor",
      department: "Estimation",
      location: "Beed, Maharashtra",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹5-8 LPA",
      description: "Seeking a detail-oriented Quantity Surveyor to prepare cost estimates, manage project budgets, and conduct site measurements.",
      requirements: [
        "Bachelor's degree in Civil Engineering or Quantity Surveying",
        "3-6 years of relevant experience",
        "Strong analytical and mathematical skills",
        "Knowledge of estimation software",
        "Excellent attention to detail"
      ]
    },
    {
      id: 6,
      title: "Safety Officer",
      department: "Safety & Compliance",
      location: "Beed, Maharashtra",
      type: "Full-time",
      experience: "4-6 years",
      salary: "₹4-6 LPA",
      description: "Dedicated Safety Officer required to implement safety protocols, conduct site inspections, and ensure compliance with safety regulations.",
      requirements: [
        "Diploma or degree in Safety Management",
        "4-6 years of experience in construction safety",
        "Knowledge of OSHA and local safety regulations",
        "Strong communication and training skills",
        "Certification in safety management preferred"
      ]
    }
  ];

  return (
    <div className="careers-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Join Our Team</h1>
          <p className="page-subtitle">Build your career with Digambara Construction</p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="page-content">
        <div className="container">
          <div className="careers-intro">
            <h2 className="section-title text-center">Why Work With Us?</h2>
            <p className="section-text text-center">
              At Digambara Construction, we believe our people are our greatest asset. We offer a dynamic work environment,
              competitive compensation, and opportunities for professional growth.
            </p>
            <div className="benefits-grid">
              <div className="benefit-card">
                <CheckCircle size={40} />
                <h3>Competitive Salary</h3>
                <p>Industry-leading compensation packages</p>
              </div>
              <div className="benefit-card">
                <CheckCircle size={40} />
                <h3>Career Growth</h3>
                <p>Continuous learning and advancement opportunities</p>
              </div>
              <div className="benefit-card">
                <CheckCircle size={40} />
                <h3>Work-Life Balance</h3>
                <p>Flexible schedules and supportive culture</p>
              </div>
              <div className="benefit-card">
                <CheckCircle size={40} />
                <h3>Health Benefits</h3>
                <p>Comprehensive health insurance coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="vacancies-section">
        <div className="container">
          <h2 className="section-title text-center">Current Openings</h2>
          <div className="vacancies-list">
            {vacancies.map((job) => (
              <div key={job.id} className="vacancy-card">
                <div className="vacancy-header">
                  <div>
                    <h3 className="vacancy-title">{job.title}</h3>
                    <p className="vacancy-department">{job.department}</p>
                  </div>
                  <div className="vacancy-type-badge">{job.type}</div>
                </div>

                <p className="vacancy-description">{job.description}</p>

                <div className="vacancy-meta">
                  <div className="vacancy-meta-item">
                    <MapPin size={18} />
                    <span>{job.location}</span>
                  </div>
                  <div className="vacancy-meta-item">
                    <Briefcase size={18} />
                    <span>{job.experience}</span>
                  </div>
                  <div className="vacancy-meta-item">
                    <DollarSign size={18} />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="vacancy-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <button className="btn btn-primary" onClick={() => {
                  const form = document.getElementById('application-form');
                  form?.scrollIntoView({ behavior: 'smooth' });
                  setFormData({ ...formData, position: job.title });
                }}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="application-section" id="application-form">
        <div className="container">
          <div className="application-form-wrapper">
            <h2 className="section-title text-center">Submit Your Application</h2>
            <p className="section-text text-center">
              Fill out the form below to apply for a position at Digambara Construction
            </p>

            {submitted && (
              <div className="success-message">
                ✓ Thank you for your application! We'll review your profile and get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 12345 67890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="position">Position Applied For *</label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a position</option>
                    {vacancies.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="experience">Years of Experience *</label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 5 years"
                />
              </div>

              <div className="form-group">
                <label htmlFor="resume">Upload Resume (PDF) *</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter *</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us why you're a great fit for this position..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={20} />
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
