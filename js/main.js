/**
 * Created by Peres on 2/26/2019.
 */
var continents = new Array("Africa", "Antarctica", "Asia", "Australia and New Zealand", "Europe", "North America", "South America");
var countries = ["Mauritius", "Antarctica", "Mongolia", "New Zealand", "Turkey", "Nicaragua", "Cuba"];

var jsArrays = document.getElementById("js-arrays");
jsArrays.innerHTML += "The following are continents of Earth:";
for (var i = 0; i < continents.length; i++) {
    jsArrays.innerHTML += " " + continents[i] + ",";
}

jsArrays.innerHTML += "<br><br>This is a list of countries in each of the continents:";
for (var i = 0; i < countries.length; i++) {
    jsArrays.innerHTML += " " + countries[i] + ",";
}

var combo = document.getElementById("combo");
combo.innerHTML = "<fieldset><label for='origin-continent'><p class='heading heading-purple'>Origin</p></label> <select name='origin' id='origin-continent'>";
for (var i = 0; i < continents.length; i++) {
    var origin_continent = document.getElementById("origin-continent");
    origin_continent.innerHTML += "<option value='" + continents[i] + "'>" + continents[i] + "</option>";
}
combo.innerHTML += "</select></fieldset>";

function reactEvent(event) {
    var jsEvents = document.getElementById("events-div");
    jsEvents.innerHTML = event;
}

function substituteCountry() {
    var country = prompt("Please enter new country name", "Kenya");
    if (country != null) {
        jsArrays.innerHTML += "<br><br>This is the updated list of countries";
        countries.splice(0, 0, country);
        for (var i = 0; i < countries.length; i++) {
            jsArrays.innerHTML += " " + countries[i] + ",";
        }
    }
}

function removeContinent() {
    jsArrays.innerHTML += "<br><br> The continent deleted from the array is: " + continents.pop();
    jsArrays.innerHTML += "<br> This is the updated list of continents:";
    for (var i = 0; i < continents.length; i++) {
        jsArrays.innerHTML += " " + continents[i] + ",";
    }
}

function combineArrays() {
    jsArrays.innerHTML += "<br><br> The arrays combined is: " + continents.concat(countries);
}

var message = document.getElementById("message");
document.getElementById("confirm-pass").addEventListener("keyup", function (event) {
    var pass = document.getElementById("pass").value;

    if (this.value != pass) {
        message.innerHTML += "<br> The passwords do not match";
    } else {
        message.innerHTML += "<br> The passwords match";
    }
    console.log(this.value);
});

/*
function confirmPassword() {
    var pass = document.forms["signup"]["pass"].value;
    var confirm_pass = document.forms["signup"]["confirm-pass"].value;

    if (confirm_pass != pass) {
        signupForm.innerHTML += "<br> The passwords do not match";
    } else {
        signupForm.innerHTML += "<br> The passwords match";
    }
}*/
