const apikey = "YOUR_API_KEY_OBTAINED_FROM_openweathermap";

const searchBar = document.getElementById("searchBar");
const submitBtn = document.getElementById("submitBtn");

// Output elements
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

submitBtn.addEventListener("click", () => {
    findWeather();
});

// Find Weather of a city
async function findWeather() {
    const city = searchBar.value.trim(); // Get city name by removing spaces at beginning and end

    // Validate Input
    if (!validateCity(city)) return;

    // Before loading the new weather, we clear the old information.
    clearWeather();

    try {
        const data = await getWeather(city);
        displayWeather(data);
    } catch (error) {
        displayError(error.message);
    }
}

// Validate Input
// To check if user have entered only empty spaces 
function validateCity(city) {
    if (city === "") {
        displayError("Please enter a city name.");
        return false;
    }

    return true;
}

// Fetch Weather Data
async function getWeather(city) {

    // API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    // Send HTTP GET request to the weather API and Store response into data after converting JSON into JS
    const response = await fetch(url);
    const data = await response.json();

    // If the HTTP request was not successful (status is not 2xx)
    if (!response.ok) {
        switch (response.status) {
            case 401:
                throw new Error("Invalid API Key.");

            case 404:
                throw new Error("City not found.");

            case 429:
                throw new Error("Too many requests. Please try again later.");

            // Handle other unexpected errors
            default:
                // Use API's error message if available, otherwise use a generic message 
                throw new Error(data.message || "Something went wrong.");
        }
    }

    return data;
}

// Display Weather
function displayWeather(data) {

    cityName.textContent = data.name;

    temperature.textContent = `${data.main.temp}°C`;

    description.textContent = data.weather[0].description;

    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    wind.textContent = `Wind: ${data.wind.speed} m/s`;
}

// Display Error Message on Page
function displayError(message) {

    // Show "Error" as the city heading
    cityName.textContent = "Error";

    // Clear previously displayed temperature
    temperature.textContent = "";

    // Display the actual error message
    description.textContent = message;

    // Clear previously displayed humidity
    humidity.textContent = "";

    // Clear previously displayed wind speed
    wind.textContent = "";
}

// Clear Previous Weather
function clearWeather() {
    
    cityName.textContent = "";

    temperature.textContent = "";

    description.textContent = "";

    humidity.textContent = "";

    wind.textContent = "";
}