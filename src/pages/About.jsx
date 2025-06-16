import { Cloud, Thermometer, Wind, Eye, Heart, Shield, Zap } from 'lucide-react'

const About = () => {
  return (
    <div className="container">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
            About WeatherApp
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
          }}>
            Your personal weather companion, providing accurate and real-time weather information 
            for cities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1" style={{ gap: '2rem' }}>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Cloud size={32} style={{ color: 'var(--primary-color)' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Our Mission</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              WeatherApp was created to provide users with a beautiful, intuitive, and reliable way 
              to check weather conditions. We believe that weather information should be accessible, 
              accurate, and presented in a way that's both informative and delightful to use.
            </p>
          </div>

          <div className="card">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
              Key Features
            </h2>
            <div className="grid grid-cols-1" style={{ gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Thermometer size={24} style={{ color: 'var(--accent-color)' }} />
                <div>
                  <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Real-time Weather Data</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Get current temperature, humidity, wind speed, and more
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Wind size={24} style={{ color: 'var(--success-color)' }} />
                <div>
                  <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>5-Day Forecast</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Plan ahead with detailed weather predictions
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Eye size={24} style={{ color: 'var(--warning-color)' }} />
                <div>
                  <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Multiple Cities</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Search and save your favorite locations
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Heart size={24} style={{ color: 'var(--error-color)' }} />
                <div>
                  <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Personalized Experience</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Your preferences are saved locally for a customized experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
              Why Choose WeatherApp?
            </h2>
            <div className="grid grid-cols-1" style={{ gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Shield size={20} style={{ color: 'var(--primary-color)', marginTop: '0.125rem' }} />
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Reliable Data</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Powered by OpenWeatherMap API for accurate and up-to-date weather information
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Zap size={20} style={{ color: 'var(--accent-color)', marginTop: '0.125rem' }} />
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Fast & Responsive</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Built with modern React technology for lightning-fast performance
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Heart size={20} style={{ color: 'var(--success-color)', marginTop: '0.125rem' }} />
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>User-Friendly</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Clean, intuitive interface designed for users of all technical levels
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Technology Stack
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
              WeatherApp is built using modern web technologies to ensure the best possible 
              user experience:
            </p>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.5rem',
              marginTop: '1rem'
            }}>
              {['React', 'Vite', 'React Router', 'Axios', 'Lucide Icons', 'CSS3', 'Local Storage API'].map((tech, index) => (
                <span 
                  key={index}
                  style={{
                    backgroundColor: 'var(--surface-color)',
                    color: 'var(--text-primary)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--border-radius)',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Get Started
            </h2>
            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Ready to explore the weather? Head back to the home page and start discovering 
              weather conditions for cities around the world.
            </p>
            <a href="/" className="btn btn-primary">
              <Cloud size={16} />
              Start Using WeatherApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
