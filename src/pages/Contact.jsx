import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Globe, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="container">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Contact Us
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
          }}>
            Have questions, suggestions, or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1" style={{ gap: '2rem' }}>
          {/* Contact Information */}
          <div className="grid grid-cols-1" style={{ gap: '1.5rem' }}>
            <div className="card">
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                Get in Touch
              </h2>
              <div className="grid grid-cols-1" style={{ gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Mail size={24} style={{ color: 'var(--primary-color)' }} />
                  <div>
                    <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Email</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      <a 
                        href="mailto:Samirstha757@hmail.com" 
                        style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
                      >
                        Samirstha757@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Phone size={24} style={{ color: 'var(--success-color)' }} />
                  <div>
                    <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Phone</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>+977 9861672690</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <MapPin size={24} style={{ color: 'var(--accent-color)' }} />
                  <div>
                    <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Address</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Makalbari<br />
                      Kathmandu, Gokernashower-4<br />
                      Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card">
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                Follow Us
              </h2>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://github.com/weatherapp" 
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a 
                  href="https://weatherapp.com" 
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={16} />
                  Website
                </a>
                <a 
                  href="https://twitter.com/weatherapp" 
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} />
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
              Send us a Message
            </h2>

            {submitted && (
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: 'var(--border-radius)',
                padding: '1rem',
                marginBottom: '1.5rem',
                color: 'var(--success-color)'
              }}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1" style={{ gap: '1.5rem' }}>
                <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                  <div>
                    <label 
                      htmlFor="name" 
                      style={{ 
                        display: 'block', 
                        marginBottom: '0.5rem',
                        fontWeight: '500',
                        color: 'var(--text-primary)'
                      }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--border-radius)',
                        backgroundColor: 'var(--card-color)',
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email" 
                      style={{ 
                        display: 'block', 
                        marginBottom: '0.5rem',
                        fontWeight: '500',
                        color: 'var(--text-primary)'
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--border-radius)',
                        backgroundColor: 'var(--card-color)',
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="subject" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontWeight: '500',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--border-radius)',
                      backgroundColor: 'var(--card-color)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontWeight: '500',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--border-radius)',
                      backgroundColor: 'var(--card-color)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ 
                    width: 'fit-content',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner" style={{ width: '16px', height: '16px' }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="card">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                  How accurate is the weather data?
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Our weather data is sourced from OpenWeatherMap, which provides highly accurate 
                  and reliable weather information updated regularly throughout the day.
                </p>
              </div>

              <div>
                <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                  Can I use the app offline?
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  WeatherApp requires an internet connection to fetch current weather data. 
                  However, your favorite cities and preferences are saved locally on your device.
                </p>
              </div>

              <div>
                <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                  Is my location data stored?
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  We only use your location to provide weather information. Location data is not 
                  stored on our servers and is only used temporarily to fetch weather data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
