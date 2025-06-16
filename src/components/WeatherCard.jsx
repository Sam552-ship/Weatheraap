import { getWeatherIcon, formatTemperature } from '../utils/weatherAPI'
import { Thermometer, Droplets, Wind, Eye, Gauge } from 'lucide-react'

const WeatherCard = ({ weather, className = '' }) => {
  if (!weather) return null

  const {
    name,
    main: { temp, feels_like, humidity, pressure },
    weather: [weatherInfo],
    wind: { speed },
    visibility
  } = weather

  return (
    <div className={`card weather-card ${className}`}>
      <div className="weather-main">
        <div>
          <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{name}</h2>
          <div className="weather-temp">{formatTemperature(temp)}°C</div>
          <p style={{ opacity: 0.9, marginTop: '0.5rem' }}>
            {weatherInfo.description.charAt(0).toUpperCase() + weatherInfo.description.slice(1)}
          </p>
        </div>
        <div className="weather-icon">
          {getWeatherIcon(weatherInfo.icon, weatherInfo.main)}
        </div>
      </div>

      <div className="weather-info">
        <div className="weather-stat">
          <Thermometer size={20} />
          <span className="weather-stat-label">Feels like</span>
          <span className="weather-stat-value">{formatTemperature(feels_like)}°C</span>
        </div>

        <div className="weather-stat">
          <Droplets size={20} />
          <span className="weather-stat-label">Humidity</span>
          <span className="weather-stat-value">{humidity}%</span>
        </div>

        <div className="weather-stat">
          <Wind size={20} />
          <span className="weather-stat-label">Wind</span>
          <span className="weather-stat-value">{speed} m/s</span>
        </div>

        <div className="weather-stat">
          <Gauge size={20} />
          <span className="weather-stat-label">Pressure</span>
          <span className="weather-stat-value">{pressure} hPa</span>
        </div>

        <div className="weather-stat">
          <Eye size={20} />
          <span className="weather-stat-label">Visibility</span>
          <span className="weather-stat-value">{(visibility / 1000).toFixed(1)} km</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
