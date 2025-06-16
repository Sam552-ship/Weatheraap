import axios from 'axios'

const API_KEY = 'e50a4876ed9cb9b6fec09f9763b52afb' // Replace with your API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5'


// Mock data for demonstration (replace with real API when you have a key)
const MOCK_CURRENT_WEATHER = {
  name: 'New York',
  main: {
    temp: 22,
    feels_like: 25,
    humidity: 65,
    pressure: 1013
  },
  weather: [
    {
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }
  ],
  wind: {
    speed: 3.5
  },
  visibility: 10000
}

const MOCK_FORECAST = {
  list: [
    {
      dt: Date.now() / 1000,
      main: { temp_max: 25, temp_min: 18 },
      weather: [{ main: 'Clear', icon: '01d' }]
    },
    {
      dt: (Date.now() / 1000) + 86400,
      main: { temp_max: 23, temp_min: 16 },
      weather: [{ main: 'Clouds', icon: '02d' }]
    },
    {
      dt: (Date.now() / 1000) + 172800,
      main: { temp_max: 26, temp_min: 19 },
      weather: [{ main: 'Rain', icon: '10d' }]
    },
    {
      dt: (Date.now() / 1000) + 259200,
      main: { temp_max: 24, temp_min: 17 },
      weather: [{ main: 'Clouds', icon: '03d' }]
    },
    {
      dt: (Date.now() / 1000) + 345600,
      main: { temp_max: 27, temp_min: 20 },
      weather: [{ main: 'Clear', icon: '01d' }]
    }
  ]
}

export const weatherAPI = {
  // Get current weather by city name
  getCurrentWeather: async (city) => {
    try {
      // If API key is set, use real API
      if (API_KEY && API_KEY !== 'YOUR_OPENWEATHERMAP_API_KEY') {
        const response = await axios.get(`${BASE_URL}/weather`, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric'
          }
        })
        return response.data
      } else {
        // Use mock data for demonstration
        await new Promise(resolve => setTimeout(resolve, 500)) // Simulate API delay
        return { ...MOCK_CURRENT_WEATHER, name: city }
      }
    } catch (error) {
      console.error('Error fetching current weather:', error)
      throw new Error('Failed to fetch weather data')
    }
  },

  // Get current weather by coordinates
  getCurrentWeatherByCoords: async (lat, lon) => {
    try {
      if (API_KEY && API_KEY !== 'YOUR_OPENWEATHERMAP_API_KEY') {
        const response = await axios.get(`${BASE_URL}/weather`, {
          params: {
            lat,
            lon,
            appid: API_KEY,
            units: 'metric'
          }
        })
        return response.data
      } else {
        await new Promise(resolve => setTimeout(resolve, 500))
        return { ...MOCK_CURRENT_WEATHER, name: 'Current Location' }
      }
    } catch (error) {
      console.error('Error fetching weather by coordinates:', error)
      throw new Error('Failed to fetch weather data')
    }
  },

  // Get 5-day forecast
  getForecast: async (city) => {
    try {
      if (API_KEY && API_KEY !== 'YOUR_OPENWEATHERMAP_API_KEY') {
        const response = await axios.get(`${BASE_URL}/forecast`, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric'
          }
        })

        // Process forecast data to get daily forecasts
        const dailyForecasts = []
        const processedDates = new Set()

        response.data.list.forEach(item => {
          const date = new Date(item.dt * 1000).toDateString()
          if (!processedDates.has(date) && dailyForecasts.length < 5) {
            dailyForecasts.push(item)
            processedDates.add(date)
          }
        })

        return { list: dailyForecasts }
      } else {
        await new Promise(resolve => setTimeout(resolve, 500))
        return MOCK_FORECAST
      }
    } catch (error) {
      console.error('Error fetching forecast:', error)
      throw new Error('Failed to fetch forecast data')
    }
  },

  // Search cities
  searchCities: async (query) => {
    try {
      if (API_KEY && API_KEY !== 'YOUR_OPENWEATHERMAP_API_KEY') {
        const response = await axios.get(`${GEO_URL}/direct`, {
          params: {
            q: query,
            limit: 5,
            appid: API_KEY
          }
        })
        return response.data
      } else {
        // Mock city search results
        const mockCities = [
          { name: 'New York', country: 'US', state: 'NY' },
          { name: 'London', country: 'GB' },
          { name: 'Tokyo', country: 'JP' },
          { name: 'Paris', country: 'FR' },
          { name: 'Sydney', country: 'AU' }
        ]
        await new Promise(resolve => setTimeout(resolve, 300))
        return mockCities.filter(city => 
          city.name.toLowerCase().includes(query.toLowerCase())
        )
      }
    } catch (error) {
      console.error('Error searching cities:', error)
      return []
    }
  }
}

// Weather icon mapping
export const getWeatherIcon = (iconCode, weatherMain) => {
  const iconMap = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️'
  }

  return iconMap[iconCode] || getWeatherIconByMain(weatherMain)
}

const getWeatherIconByMain = (weatherMain) => {
  const mainMap = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    'Thunderstorm': '⛈️',
    'Snow': '❄️',
    'Mist': '🌫️',
    'Fog': '🌫️',
    'Haze': '🌫️'
  }

  return mainMap[weatherMain] || '🌤️'
}

// Utility functions
export const formatTemperature = (temp) => {
  return Math.round(temp)
}

export const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
}

export const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}
