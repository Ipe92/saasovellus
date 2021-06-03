const request = require("postman-request");
const key = "fe33d55f1df86864eb88ef02b4e2b839";

const forecast = (location, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=" + key + "&query=" + location;
    request({ url: url, json: true }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to weather service.", undefined);
        } else if (body.error) {
            callback("Unable to find location.", undefined);
        } else {
            callback(undefined, `${location} : ${body.current.temperature} degrees, feels like degrees.`);
        }
    });
};

module.exports = forecast;
