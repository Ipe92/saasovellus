const forecast = require("./forecast");

const location = process.argv[2];

if (!location) {
    console.log("Please give a location.");
} else {
    forecast(location, (error, data) => {
        console.log(error);
        console.log(data);
    });
}
