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
});

//Route pays
app.get("/:country", (req, res) => {
    let countryName = req.params.country;
    countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1).toLowerCase();

    countriesInfo = countriesData.filter(country => countryName === country.name)
    console.log(countriesInfo)
    res.json({
        data: countriesInfo
    });
});


app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});