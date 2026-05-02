import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ type: 'success', msg: data.message });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: data.message });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: 'https://linkedin.com/in/yourname' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/yourusername' },
    { icon: '📍', label: 'Location', value: 'Your City, Country', href: null }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// get_in_touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Have a project in mind or want to hire me? Drop a message!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>I'm always open to discussing new opportunities, interesting projects, or just a good conversation about software quality.</p>
            <div className="contact-items">
              {contactInfo.map(item => (
                <div key={item.label} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <span className="contact-label">{item.label}</span>
                    {item.href
                      ? <a href={item.href} target="_blank" rel="noreferrer">{item.value}</a>
                      : <span>{item.value}</span>}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://drive.google.com/your-resume-link"
              target="_blank"
              rel="noreferrer"
              className="btn-resume contact-resume"
            >
              ⬇️ Download Resume
            </a>
          </div>

          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Your Name"
                    value={form.name} onChange={handleChange} required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="your@email.com"
                    value={form.email} onChange={handleChange} required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject" name="subject" type="text"
                  placeholder="Job Opportunity / Project Inquiry"
                  value={form.subject} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message" name="message" rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message} onChange={handleChange} required
                ></textarea>
              </div>

              {status.msg && (
                <div className={`form-status ${status.type}`}>{status.msg}</div>
              )}

              <button type="submit" className="btn-primary btn-submit" disabled={loading}>
                {loading ? '⏳ Sending...' : '🚀 Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
