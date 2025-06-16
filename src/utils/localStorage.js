// Local storage utility for managing user preferences
const STORAGE_KEYS = {
  FAVORITES: 'weather-app-favorites',
  LAST_CITY: 'weather-app-last-city',
  THEME: 'weather-app-theme',
  UNITS: 'weather-app-units'
}

export const storage = {
  // Favorite cities management
  getFavorites: () => {
    try {
      const favorites = localStorage.getItem(STORAGE_KEYS.FAVORITES)
      return favorites ? JSON.parse(favorites) : []
    } catch (error) {
      console.error('Error getting favorites:', error)
      return []
    }
  },

  addFavorite: (city) => {
    try {
      const favorites = storage.getFavorites()
      if (!favorites.some(fav => fav.name.toLowerCase() === city.name.toLowerCase())) {
        const newFavorites = [...favorites, city]
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites))
        return newFavorites
      }
      return favorites
    } catch (error) {
      console.error('Error adding favorite:', error)
      return storage.getFavorites()
    }
  },

  removeFavorite: (cityName) => {
    try {
      const favorites = storage.getFavorites()
      const newFavorites = favorites.filter(
        fav => fav.name.toLowerCase() !== cityName.toLowerCase()
      )
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites))
      return newFavorites
    } catch (error) {
      console.error('Error removing favorite:', error)
      return storage.getFavorites()
    }
  },

  isFavorite: (cityName) => {
    const favorites = storage.getFavorites()
    return favorites.some(fav => fav.name.toLowerCase() === cityName.toLowerCase())
  },

  // Last city management
  getLastCity: () => {
    try {
      return localStorage.getItem(STORAGE_KEYS.LAST_CITY) || 'New York'
    } catch (error) {
      console.error('Error getting last city:', error)
      return 'New York'
    }
  },

  setLastCity: (city) => {
    try {
      localStorage.setItem(STORAGE_KEYS.LAST_CITY, city)
    } catch (error) {
      console.error('Error setting last city:', error)
    }
  },

  // Theme management
  getTheme: () => {
    try {
      return localStorage.getItem(STORAGE_KEYS.THEME) || 'light'
    } catch (error) {
      console.error('Error getting theme:', error)
      return 'light'
    }
  },

  setTheme: (theme) => {
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme)
    } catch (error) {
      console.error('Error setting theme:', error)
    }
  },

  // Units management (metric/imperial)
  getUnits: () => {
    try {
      return localStorage.getItem(STORAGE_KEYS.UNITS) || 'metric'
    } catch (error) {
      console.error('Error getting units:', error)
      return 'metric'
    }
  },

  setUnits: (units) => {
    try {
      localStorage.setItem(STORAGE_KEYS.UNITS, units)
    } catch (error) {
      console.error('Error setting units:', error)
    }
  },

  // Clear all data
  clearAll: () => {
    try {
      Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key)
      })
    } catch (error) {
      console.error('Error clearing storage:', error)
    }
  }
}
