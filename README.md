# Weather App 🌤️

A modern, responsive weather application built with React and Vite. Get accurate weather forecasts for cities worldwide with a beautiful, intuitive interface.

![Weather App Screenshot](https://via.placeholder.com/800x400/2563eb/ffffff?text=Weather+App+Dashboard)

## ✨ Features

- **Real-time Weather Data**: Current temperature, humidity, wind speed, pressure, and visibility
- **5-Day Forecast**: Plan ahead with detailed weather predictions
- **City Search**: Search for weather in any city worldwide
- **Geolocation Support**: Get weather for your current location
- **Favorite Cities**: Save and quickly access your favorite locations
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Local Storage**: Your preferences are saved locally
- **Beautiful UI**: Modern design with smooth animations and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or extract the project**
   ```bash
   # If you have the zip file, extract it
   unzip weather-app.zip
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your OpenWeatherMap API key (Optional but recommended)**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key
   - Open `src/utils/weatherAPI.js`
   - Replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual API key

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Start exploring the weather!

## 🏗️ Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist` folder, ready for deployment.

## 📱 Usage

### Home Page
- **Search for cities**: Use the search bar to find weather for any city
- **Quick city selection**: Choose from popular cities in the dropdown
- **Current location**: Click the location button to get weather for your current position
- **Add favorites**: Save cities to your favorites for quick access
- **View forecast**: See the 5-day weather forecast

### Navigation
- **Home**: Main weather dashboard
- **About**: Learn more about the application
- **Contact**: Get in touch with the development team

### Features
- **Theme Toggle**: Switch between light and dark themes
- **Responsive**: Works perfectly on all device sizes
- **Fast Loading**: Optimized performance with loading states

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Styling**: CSS3 with CSS Variables
- **API**: OpenWeatherMap API
- **Storage**: Local Storage API

## 📁 Project Structure

```
weather-app/
├── public/
│   ├── weather-icon.svg      # App favicon
│   └── ...
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── ForecastCard.jsx
│   │   └── CitySelector.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── hooks/               # Custom hooks
│   │   └── useTheme.jsx
│   ├── utils/               # Utility functions
│   │   ├── weatherAPI.js
│   │   └── localStorage.js
│   ├── styles/              # CSS files
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue tones (#2563eb, #3b82f6)
- **Accent**: Cyan (#06b6d4)
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)

### Dark Theme Support
- Automatic theme detection
- Smooth transitions between themes
- Consistent color scheme across all components

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Flexible grid layouts
- Touch-friendly interfaces

## 🔧 Customization

### API Configuration
Edit `src/utils/weatherAPI.js` to:
- Add your OpenWeatherMap API key
- Modify API endpoints
- Add new weather data fields

### Styling
Edit CSS files in `src/styles/` to:
- Change color schemes
- Modify component layouts
- Add new animations

### Features
Add new features by:
- Creating new components in `src/components/`
- Adding new pages in `src/pages/`
- Extending utility functions in `src/utils/`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please:
- Check the FAQ in the Contact page
- Open an issue on GitHub
- Contact us through the Contact page

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing weather data
- [Lucide](https://lucide.dev/) for beautiful icons
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool

---

Made with ❤️ for weather enthusiasts worldwide
