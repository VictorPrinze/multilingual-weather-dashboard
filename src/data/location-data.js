
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

async function getLocationByName(location) {
  if (!location) return null;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`
    );
    const data = await response.json();
    
    if (data.length > 0) {
      return data[0]; // Assuming the first result is the most relevant
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
}

export { getLocationByName };
