const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const PORT = 8000;

const countriesData = require("./countriesData.json");



// Route initiale
app.get("/all", (req, res) => {
    countriesNames = countriesData.map(country => {
        return country.name;
    });
    res.json({
        data: countriesNames
    });
})


app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});