const express = require("express");
const app = express();

const PORT = 8000;

const countriesData = require("./countriesData.js");



// Route initiale
app.get("/all", (req, res) => {
    res.send(countriesData);
})


app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});