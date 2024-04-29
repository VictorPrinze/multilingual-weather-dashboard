# Multilingual Weather Dashboard

## Description

This project is a simple weather dashboard built using React and Vite that supports both English and Swahili languages. It fetches weather data from the OpenWeatherMap API and displays it to the user. The application is styled and responsive, providing a seamless user experience across different devices.

## Features

- Multilingual UI: Toggle between English and Swahili languages using a language switcher.
- Weather Display: Fetches and displays current weather data for Nairobi from the OpenWeatherMap API.
- State Management: Utilizes React's Context API to manage weather data and language settings.
- API Integration: Integrates with the OpenWeatherMap API to retrieve weather information.
- Styling and Responsiveness: The application is well-styled and responsive, ensuring usability on both mobile and desktop devices.

## Setup and Initialization

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd multilingual-weather-dashboard`
3. echo     `REACT_APP_OPENWEATHERMAP_API_KEY=your-api-key-here" > .env`
4. Install dependencies: `npm install`
5. Start the development server: `npm run dev`


## Usage

- Use the language switcher at the top of the dashboard to toggle between English and Swahili.
- View the current weather data displayed on the dashboard, including temperature and weather conditions for Nairobi.

## Technologies Used

- React
- React-Intl
- OpenWeatherMap API
- Vite
- Bootstrap

## File Structure

```
multilingual-weather-dashboard/
│
├── public/
│   
├── locales/
│   ├── en/
│   └── sw/
├── src/
│   ├── components/
│   │   ├── LanguageSwitcher.js
│   │   ├── WeatherDashboard.js
│   │   ├── WeatherDisplay.js
│   │   └── ...
│   │
│   ├── context/
│   │   ├── LanguageContext.js
│   │   └── WeatherContext.js
│   │
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── sunny.svg
│   │   │   └── ...
│   │   └── ...
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── README.md
├── package.json
└── ...
```

## Potential Edge Cases and Errors

- Handling API errors such as network issues or bad responses.
- Managing state when data is not available or the API returns an error.
- Ensuring the UI gracefully handles different data states (loading, error, data).
- Displaying appropriate fallbacks for missing weather data.

## Evaluation Criteria

- Code Quality: Use of modern JavaScript and React features.
- Design Implementation: Creativity and user experience in the design.
- Problem Solving: Handling edge cases and errors effectively.
- Documentation: Clear running instructions and explanations.
- Testing: Implement unit tests for components and state management.

## Credits

This project was created by [Victor Kariuki](https://github.com/VictorPrinze) 

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.
