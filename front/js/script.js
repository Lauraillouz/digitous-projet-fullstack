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


let countriesInfo = [];

function getCountriesInfo() {
    $("#btnShowData").click(() => {
        let country = $("input").val();
        console.log(country);
        $.ajax({
            url: `http://localhost:8000/${country}`,
            success: function (res) {
                console.log(res.data);

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
