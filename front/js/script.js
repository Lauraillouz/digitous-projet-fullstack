// À charger pendant que le site charge
$(() => {
    getAllCountries();
    $("#btnShowData").click(handleClick);
    $("#browser").click(getRegionInfo);
    radioButton();
    reset();
})


// Gestion du bouton avec l'option radio
function handleClick() {

    if ($("input[name=radio]:checked").val() === "country") {
        getCountryInfo();
    } else {
        getCapitalInfo();
    }

}

// Option radio
function radioButton() {
    $("input[name=radio]:radio").click(() => {
        $("#text").attr("placeholder", $("#country:checked").data("hint"));
        $("#text").attr("placeholder", $("#capital:checked").data("hint"));

    })
}

function reset() {
    $("#btnReset").click(() => {
        document.location.reload();
    })
}

// Récupérer tous les noms de pays
let countriesNames = [];

function getAllCountries() {

    $.ajax({
        url: "http://localhost:8000/all",
        success: function(res) {
            const countries = res.data;
            let list = "";

            countries.forEach(country => {
                list += `<li>${country}</li>`
            });
        
            $(".data").html(list);
        }
    });
};



// Récupérer les infos par pays
function getCountryInfo() {

    let country = $("input").val();
    $.ajax({
        url: `http://localhost:8000/${country}`,
        success: function (res) {
            if (res.status === "success") {
                $(".data").html(
                    `<img class="flag" src=${res.data[0].flag} alt="flag of ${res.data[0].name}">
                    <li>Country: ${res.data[0].name}</li> 
                    <li>Capital: ${res.data[0].capital}</li>
                    <li>Currency: ${res.data[0].currencies[0].name}</li>
                    <li>Continent: ${res.data[0].region}</li>` 
                );
            } else {
                alert("This country does not exist");
            }
            
        }
    })
}



// Récupérer les capitales
function getCapitalInfo () {
    let capital = $("input").val();
    $.ajax({
        url: `http://localhost:8000/country/${capital}`,
        success: function (res) {
            if (res.status === "success") {
                $(".data").html(
                    `<li>Capital: ${res.data[0].capital}</li>
                    <li>Country: ${res.data[0].name}</li> 
                    <li>Continent: ${res.data[0].region}</li>
                    <li>Currency: ${res.data[0].currencies[0].name}</li> 
                    <img class="flag" src=${res.data[0].flag} alt="flag of ${res.data[0].name}">`
                );
            } else {
                alert("This capital does not exist")
            }
            
        }
    })
}



// Récupérer les continents
function getRegionInfo () {
    let regionInput = $("#region").val();

    $.ajax({
        url: `http://localhost:8000/region/${regionInput}`,
        success: function (res) {
            if (res.status === "success") {
                const region = res.data;
                let list = "";
                console.log(region);
                region.forEach(country => {
                    list += `<li>${country.name}</li>`
                });
        
                $(".data").html(list);
            } else {
                alert("This region does not exist")
            }
            
        }
    })
}

// Prevent Default
/*
const showData = document.querySelector("#btnShowData");
showData.addEventListener("click", function (thankyoukevin) {
    thankyoukevin.preventDefault();
}) */