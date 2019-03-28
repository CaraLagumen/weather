const request = require('request');

const forecast = (address, callback) => {
    const url = `https://api.darksky.net/forecast/58bb524846780b9ccfff4b282132ea19/${address}?units=us`;

    request({ url, json : true}, (error, { body }) => {
        if (error) {
            callback(`Forecast Unable to Connect`, undefined);
        } else if (body.error) {
            callback(`Forecast Unable to Find Location`, undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} ${body.currently.temperature}°F degrees out. ${body.currently.precipProbability}% chance of rain. Humidity: ${body.currently.humidity}% Wind Speed: ${body.currently.windSpeed}mph`);
        }
    })

    //WITHOUT DESTRUCTURING
    // request({ url: url, json : true}, (error, response) => {
    //     if (error) {
    //         callback(`Forecast Unable to Connect`, undefined);
    //     } else if (response.body.error) {
    //         callback(`Forecast Unable to Find Location`, undefined);
    //     } else {
    //         callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
    //     }
    // })
}

module.exports = forecast;