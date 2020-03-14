const axios = require('axios');

// API specific settings.
//const API_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = 'b4642b3321c9e21a4e1efc5ffe1b296c';

//const LOCATION_ZIP_CODE = '90001';
//const COUNTRY_CODE = 'us';
const cityName = 'CAIRO';
const x = 459.67;
const y = 273.15;

//const ENTIRE_API_URL = `${API_URL}${LOCATION_ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`;
const ENTIRE_API_URL = `${API_URL}${cityName},&appid=${API_KEY}`;

axios.get(ENTIRE_API_URL)
    .then(response => {
        // Getting the current temperature and the city from the response object.
        const kelvinTemperature = response.data.main.temp;
        const cityName = response.data.name;
        const countryName = response.data.sys.country;

        // Making K to F and K to C conversions.
        const fahrenheitTemperature = (kelvinTemperature * 9/5) - x;
        const celciusTemperature = kelvinTemperature - y;

        // Building the final message.
        const message = (
            `Right now, in \
            ${cityName}, ${countryName} the current temperature is \
            ${fahrenheitTemperature.toFixed(2)} deg F or \
            ${celciusTemperature.toFixed(2)} deg C.`.replace(/\s+/g, ' ')
        );
        console.log(message);
    })
    .catch(error => console.log('Error', error));
