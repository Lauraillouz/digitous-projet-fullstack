// À charger pendant que le site charge
$(() => {
    getAllCountries();

})


// Récupérer tous les noms de pays
let countriesNames = [];

function getAllCountries() {

    $.ajax({
        url: "http://localhost:8000/all",
        success: function(res) {
            const countriesNames = res.data;
            let list = "";

            countriesNames.forEach(countryName => {
                list += `<li>${countryName}</li>`
            });
        
            $(".data").html(list);
        }
    });
};
getAllCountries();



// Récupérer les infos par pays
function getCountriesInfo() {
    $("#btnShowData").click(() => {
        let country = $("input").val();
        $.ajax({
            url: `http://localhost:8000/${country}`,
            success: function (res) {
                $(".data").html(
                    `<img class="flag" src=${res.data[0].flag} alt="flag of ${res.data[0].name}">
                    <li>Country: ${res.data[0].name}</li> 
                    <li>Capital: ${res.data[0].capital}</li>
                    <li>Currency: ${res.data[0].currencies[0].name}</li>
                    <li>Continent: ${res.data[0].region}</li>` 
                );
            }
        })
    })
}
getCountriesInfo();


// Récupérer les capitales
function getCapitalInfo () {
    $("#btnShowData").click(() => {
        let capital = $("input").val();
        $.ajax({
            url: `http://localhost:8000/${capital}`,
            success: function (res) {
                $(".data").html(
                    `<li>Capital: ${res.data[0].capital}</li>
                    <li>Country: ${res.data[0].name}</li> 
                    <li>Continent: ${res.data[0].region}</li>
                    <li>Currency: ${res.data[0].currencies[0].name}</li> 
                    <img class="flag" src=${res.data[0].flag} alt="flag of ${res.data[0].name}">`
                );
            }
        })
    })
}
getCapitalInfo();


// Boutons radio
function radioButton() {

    $("input[name=radio]:radio").click(() => {
        if ($("input[name=radio]:checked").val() === "country") {
            $("#text").attr("placeholder", $("#country:checked").data("hint"));
            getCountriesInfo();
        } else {
            $("#text").attr("placeholder", $("#capital:checked").data("hint"));
            getCapitalInfo();
        }
    })
    
}
radioButton();