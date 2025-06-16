import { useState, useEffect } from 'react'
import WeatherCard from '../components/WeatherCard'
import ForecastCard from '../components/ForecastCard'
import CitySelector from '../components/CitySelector'
import { weatherAPI } from '../utils/weatherAPI'
import { storage } from '../utils/localStorage'

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [currentCity, setCurrentCity] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const savedCity = storage.getLastCity()
    setCurrentCity(savedCity)
    fetchWeatherData(savedCity)
  }, [])

  const fetchWeatherData = async (city) => {
    setLoading(true)
    setError(null)

    try {
      const [weatherData, forecastData] = await Promise.all([
        weatherAPI.getCurrentWeather(city),
        weatherAPI.getForecast(city)
      ])

      setCurrentWeather(weatherData)
      setForecast(forecastData.list)
      setCurrentCity(city)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleCityChange = (newCity) => {
    if (newCity !== currentCity) {
      fetchWeatherData(newCity)
    }
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner"></div>
          <p style={{ marginLeft: '1rem' }}>Loading weather data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">
          <h2>Error Loading Weather Data</h2>
          <p>{error}</p>
          <button 
            className="btn btn-primary" 
            onClick={() => fetchWeatherData(currentCity)}
            style={{ marginTop: '1rem' }}
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Weather Dashboard
        </h1>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.125rem',
          marginBottom: '2rem'
        }}>
          Get accurate weather forecasts for cities worldwide
        </p>
      </div>

      <CitySelector 
        currentCity={currentCity}
        onCityChange={handleCityChange}
      />

      {currentWeather && (
        <WeatherCard weather={currentWeather} />
      )}

      {/* {forecast.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            5-Day Forecast
          </h2>
          <div className="forecast-container">
            {forecast.map((day, index) => (
              <ForecastCard key={index} forecast={day} />
            ))}
          </div>
        </div>
      )} */}

      <div style={{ 
        marginTop: '3rem', 
        padding: '2rem', 
        backgroundColor: 'var(--surface-color)',
        borderRadius: 'var(--border-radius-lg)',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Quick Tips
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <div>
            <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'block' }}>🌡️</span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Temperature is shown in Celsius. Hover over elements for more details.
            </p>
          </div>
          <div>
            <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'block' }}>⭐</span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Add cities to favorites for quick access to their weather.
            </p>
          </div>
          <div>
            <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'block' }}>📍</span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Use the location button to get weather for your current position.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
