import { useState, useEffect } from 'react'
import { MapPin, Star, X, Search } from 'lucide-react'
import { weatherAPI } from '../utils/weatherAPI'
import { storage } from '../utils/localStorage'

const CitySelector = ({ currentCity, onCityChange }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [favorites, setFavorites] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  // Popular cities for quick selection
  const popularCities = [
    'New York', 'London', 'Tokyo', 'Paris', 'Sydney',
    'Dubai', 'Singapore', 'Mumbai', 'Toronto', 'Berlin','Kathmandu','Lalitpur'
  ]

  useEffect(() => {
    setFavorites(storage.getFavorites())
  }, [])

  useEffect(() => {
    const searchCities = async () => {
      if (searchQuery.length < 2) {
        setSearchResults([])
        return
      }

      setIsSearching(true)
      try {
        const results = await weatherAPI.searchCities(searchQuery)
        setSearchResults(results)
      } catch (error) {
        console.error('Error searching cities:', error)
        setSearchResults([])
      } finally {
        setIsSearching(false)
      }
    }

    const debounceTimer = setTimeout(searchCities, 300)
    return () => clearTimeout(debounceTimer)
  }, [searchQuery])

  const handleCitySelect = (cityName) => {
    onCityChange(cityName)
    setSearchQuery('')
    setSearchResults([])
    storage.setLastCity(cityName)
  }

  const handleAddToFavorites = (city) => {
    const cityObj = typeof city === 'string' ? { name: city } : city
    const newFavorites = storage.addFavorite(cityObj)
    setFavorites(newFavorites)
  }

  const handleRemoveFromFavorites = (cityName) => {
    const newFavorites = storage.removeFavorite(cityName)
    setFavorites(newFavorites)
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords
            const weather = await weatherAPI.getCurrentWeatherByCoords(latitude, longitude)
            handleCitySelect(weather.name)
          } catch (error) {
            console.error('Error getting location weather:', error)
          }
        },
        (error) => {
          console.error('Error getting location:', error)
          alert('Unable to get your location. Please select a city manually.')
        }
      )
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  return (
    <div className="city-selector">
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
          <input
            type="text"
            className="city-search"
            placeholder="Search for a city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search 
            size={20} 
            style={{ 
              position: 'absolute', 
              right: '12px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: 'var(--text-muted)' 
            }} 
          />

          {searchQuery && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--card-color)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--border-radius)',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 10,
              maxHeight: '200px',
              overflowY: 'auto'
            }}>
              {isSearching ? (
                <div style={{ padding: '1rem', textAlign: 'center' }}>
                  <div className="spinner"></div>
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((city, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '0.75rem',
                      cursor: 'pointer',
                      borderBottom: '1px solid var(--border-color)',
                      transition: 'var(--transition)'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--surface-color)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    onClick={() => handleCitySelect(city.name)}
                  >
                    {city.name}, {city.country}
                    {city.state && `, ${city.state}`}
                  </div>
                ))
              ) : (
                <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  No cities found
                </div>
              )}
            </div>
          )}
        </div>

        <select
          className="city-dropdown"
          value=""
          onChange={(e) => e.target.value && handleCitySelect(e.target.value)}
        >
          <option value="">Select a popular city</option>
          {popularCities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <button className="btn btn-secondary" onClick={getCurrentLocation}>
          <MapPin size={16} />
          Current Location
        </button>

        <button 
          className="btn btn-secondary"
          onClick={() => handleAddToFavorites(currentCity)}
          disabled={storage.isFavorite(currentCity)}
        >
          <Star size={16} />
          {storage.isFavorite(currentCity) ? 'Favorited' : 'Add to Favorites'}
        </button>
      </div>

      {favorites.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>
            Favorite Cities
          </h3>
          <div className="favorites-container">
            {favorites.map((city, index) => (
              <div key={index} className="favorite-city">
                <span onClick={() => handleCitySelect(city.name)}>
                  {city.name}
                </span>
                <button
                  className="remove-favorite"
                  onClick={() => handleRemoveFromFavorites(city.name)}
                  aria-label={`Remove ${city.name} from favorites`}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CitySelector
