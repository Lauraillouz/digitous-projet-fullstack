const axios = require("axios");
let countriesNames = [];

function getCountries() {
    axios.get("http://localhost:8000/").then((res) => {
        const data = res.data;
        countriesNames = data.map(countryName => {
            return countryName.name;
    });

    })
};
getCountries();


module.exports = getCountries();
