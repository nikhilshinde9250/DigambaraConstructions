import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSubmitted(false);

    if (!formRef.current) {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    emailjs.sendForm(
      'service_8py5gi7',
      'template_g4wdnor',
      formRef.current,
      'USCTNcslrY53r_hG4'
    ).then(
      () => {
        setIsSubmitted(true);
        setIsLoading(false);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            from_name: "",
            from_email: "",
            phone: "",
            subject: "",
            message: ""
          });
        }, 5000);
      },
      (error) => {
        console.error('EmailJS Error:', error);
        setIsError(true);
        setIsLoading(false);
        setTimeout(() => {
          setIsError(false);
        }, 5000);
      }
    );
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch with us for your construction needs</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Get In Touch</h2>
              <p>
                Have a question or want to discuss your project? We're here to help.
                Reach out to us through any of the following channels.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>Beed, Navgan Rajuri<br />Maharashtra 431122</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 9561231865</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p>info@digambaraconstruction.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Open 24 Hours<br />7 Days a Week</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="map-placeholder">
                <MapPin size={60} />
                <p>Office Location Map</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>

              {isSubmitted && (
                <div className="success-message">
                  <CheckCircle size={24} />
                  <span>✓ Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                </div>
              )}

              {isError && (
                <div className="error-message">
                  <AlertCircle size={24} />
                  <span>✗ Failed to send message. Please try again or contact us directly.</span>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="from_name">Full Name *</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="from_email">Email Address *</label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

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
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="new-project">New Project Inquiry</option>
                    <option value="building-planning">Building Planning</option>
                    <option value="cost-estimation">Cost Estimation</option>
                    <option value="building-permission">Building Permission</option>
                    <option value="na-layout">NA Layout</option>
                    <option value="quotation">Request Quotation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project or query..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
