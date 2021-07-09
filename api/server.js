const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const fs = require("fs");
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

    let status = "";

    let countryInfo = countriesData.filter((country) => countryName === country.name)

    if (countryInfo.length === 0) {
        status = "error";
    } else {
        status = "success";
    }

    res.json({
        status: status,
        data: countryInfo
    });
});

// Route capitale
app.get("/country/:capital", (req, res) => {
    let capitalName = req.params.capital;
    capitalName = capitalName.charAt(0).toUpperCase() + capitalName.slice(1).toLowerCase();

    let status = "";

    let capitalInfo = countriesData.filter((country) => capitalName === country.capital)

    if (capitalInfo.length === 0) {
        status = "error";
    } else {
        status = "success";
    }

    res.json({
        status: status,
        data: capitalInfo
    })

})


// Route region
app.get("/region/:region", (req, res) => {
    let regionName = req.params.region;
    regionName = regionName.charAt(0).toUpperCase() + regionName.slice(1).toLowerCase();

    let status = "";

    let regionInfo = countriesData.filter((country) => regionName === country.region)

    if (regionInfo.length === 0) {
        status = "error";
    } else {
        status = "success";
    }

    res.json({
        status: status,
        data: regionInfo
    })

})


// Requêtes reçues sauvegardées




// Démarrage serveur
app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});