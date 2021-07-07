let countriesNames = [];


function getAllCountries() {

    $.ajax({
        url: "http://localhost:8000/all",
        success: function(res, status, response) {
            const countriesNames = res.data;
            let list = "";
            
            countriesNames.forEach(countryName => {
                console.log(countryName)
                list += `<li>${countryName}</li>`
            });
        
            $("#data").html(list);
            console.log(list)
        }
    });

};
getAllCountries();


