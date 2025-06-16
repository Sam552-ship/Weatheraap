import { getWeatherIcon, formatTemperature, formatDate } from '../utils/weatherAPI'

const ForecastCard = ({ forecast }) => {
  if (!forecast) return null

  const {
    dt,
    main: { temp_max, temp_min },
    weather: [weatherInfo]
  } = forecast

  return (
    <div className="card forecast-card">
      <div className="forecast-day">
        {formatDate(dt)}
      </div>

      <div className="forecast-icon">
        {getWeatherIcon(weatherInfo.icon, weatherInfo.main)}
      </div>

      <div className="forecast-description">
        {weatherInfo.main}
      </div>

      <div className="forecast-temps">
        <span className="forecast-high">
          {formatTemperature(temp_max)}°
        </span>
        <span className="forecast-low">
          {formatTemperature(temp_min)}°
        </span>
      </div>
    </div>
  )
}

export default ForecastCard
