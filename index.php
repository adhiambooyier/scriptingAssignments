<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!--CSS-->
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <!--FONTS-->
    <link rel="stylesheet" type="text/css" href="fonts/raleway/raleway.css">
    <link rel="stylesheet" type="text/css" href="fonts/material/material-icons.css">

    <title>Demo</title>
</head>
<body onload="alert('Welcome!')">
<div id="content-container">
    <div id="js-arrays" class="card">
        <div class="title title-blue">JavaScript Arrays</div>
        <button id="array-splice" class="action-button title-blue" onclick="substituteCountry()">substitute country
        </button>
        <button id="array-slice" class="action-button title-blue" onclick="removeContinent()">delete continent</button>
        <button id="array-concat" class="action-button title-blue" onclick="combineArrays()">combine arrays</button>
        <br>
        <br>
    </div>
    <div id="form-validation" class="card">
        <div class="title title-purple">Form Validation</div>
        <div id="form-div">
            <form method="post" id="signup" action="signin.php" onsubmit="return validateInputs()">
                <fieldset id="account">
                    <p class="heading heading-purple">Account</p>
                    <i class="material-icons">perm_identity</i>
                    <input type="text" name="first-name" id="fname" placeholder="First Name"><br/>
                    <i class="material-icons">perm_identity</i>
                    <input type="text" name="last-name" id="lname" placeholder="Last Name"><br/>
                    <i class="material-icons">phone</i>
                    <input type="tel" name="phone" id="phone" placeholder="Telephone"><br/>
                    <i class="material-icons">email</i>
                    <input type="email" name="email" id="email" placeholder="Email Address"><br/>
                    <i class="material-icons">lock</i>
                    <input type="password" name="password" id="pass" placeholder="Password"><br/>
                    <i class="material-icons">lock</i>
                    <input type="password" name="confirm-password" id="confirm-pass"
                           placeholder="Confirm Password"><br/>
                    <p id="message"></p>
                </fieldset>
                <fieldset>
                    <p class="heading heading-purple">Date of Birth</p>
                    <p id="message2"></p>
                    <input type="text" name="date" id="date" placeholder="DD">
                    <input type="text" name="month" id="month" placeholder="MM">
                    <input type="text" name="year" id="year" placeholder="YYYY">
                </fieldset>
                <fieldset>
                    <p class="heading heading-purple">Gender </p>
                    <input type="radio" name="gender" id="gender-male" value="male" checked>
                    <label for="gender-male">Male</label> <br/>
                    <input type="radio" name="gender" id="gender-female" value="female">
                    <label for="gender-female">Female</label>
                </fieldset>
                <div id="combo"></div>
                <fieldset>
                    <p class="heading heading-purple"> Interests</p>
                    <input type="checkbox" name="interests[]" id="landscapes" value="landscapes"> Landscapes <br/>
                    <input type="checkbox" name="interests[]" id="fashion" value="fashion"> Fashion <br/>
                    <input type="checkbox" name="interests[]" id="cities" value="cities"> Cities <br/>
                    <input type="checkbox" name="interests[]" id="food" value="food"> Food <br/>
                </fieldset>
                <button type="submit" id="submit" class="action-button title-purple">sign up</button>
                <p id="message3"></p>
            </form>
        </div>

    </div>
</div>
<div id="js-events" class="card">
    <div class="title title-red">JavaScript Events</div>
    <div id="events-div" onmouseover="reactEvent('onMouseOver')" onmouseout="reactEvent('onMouseOut')"></div>
</div>
</div>

<!--JS-->
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>