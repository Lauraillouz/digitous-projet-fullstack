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
        status: "success",
        data: countriesNames
    });
});

// Route pays
app.get("/:country", (req, res) => {
    let countryName = req.params.country;
    countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1).toLowerCase();

    let countriesInfo = countriesData.filter((country) => countryName === country.name)
    res.json({
        status: "success",
        data: countriesInfo
    });
});

// Route capitale
app.get("/:capital", (req, res) => {
    let capitalName = req.params.capital;
    capitalName = capitalName.charAt(0).toUpperCase() + capitalName.slice(1).toLowerCase();

    capitalInfo = countriesData.filter(capital => capitalName === capital.name)
    res.json({
        status: "success",
        data: capitalInfo
    })
})




// Démarrage serveur
app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});