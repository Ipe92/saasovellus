const path = require("path");
const express = require("express");
const forecast = require("./forecast");

const app = express();
const port = 3000;

const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

app.get("/weather", (req, res) => {
    if (!req.query.location) {
        return res.send({
            error: "Please give a location.",
        });
    }
    forecast(req.query.location, (error, data) => {
        if (error) {
            return res.send({ error });
        }
        res.send({
            forecast: data,
        });
    });
});

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
