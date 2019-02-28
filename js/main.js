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
        message.innerHTML = "<br> The passwords do not match";
    } else {
        message.innerHTML = "<br> The passwords match";
    }
});

function validateInputs() {
    var validationMessage = document.getElementById("message3");
    var ageMessage = document.getElementById("message2");

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirmPass = document.getElementById("confirm-pass").value;
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var genderMale = document.getElementById("gender-male").value;
    var genderFemale = document.getElementById("gender-female").value;
    var originContinent = document.getElementById("origin-continent").value;

    if (fname !== ""
        && lname !== ""
        && lname !== ""
        && phone !== ""
        && email !== ""
        && pass !== ""
        && confirmPass !== ""
        && date !== ""
        && month !== ""
        && year !== ""
        && originContinent !== ""
        && (genderFemale !== "" || genderMale !== "")
    ) {
        var dateDifference = (new Date() - new Date(year)) / (1000 * 60 * 60 * 24 * 365);
        console.log(dateDifference);
        if (dateDifference <= 12) {
            ageMessage.innerHTML = "<br> You need to be older than 12 to sign up";
        } else {
            validationMessage.innerHTML = "<br> successful";
            return true;
        }
    } else {
        validationMessage.innerHTML = "<br> Please fill out all the fields";
    }

    return false;
}
    

