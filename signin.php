<?php
/**
 * Created by PhpStorm.
 * User: Peres
 * Date: 2/28/2019
 * Time: 1:45 PM
 */
try {
    if (isset($_POST["first-name"]) && isset($_POST["last-name"]) && isset($_POST["password"])
        && isset($_POST["confirm-password"]) && isset($_POST["phone"]) && isset($_POST["email"])
        && isset($_POST["date"]) && isset($_POST["month"]) && isset($_POST["year"])
        && isset($_POST["gender"]) && isset($_POST["origin"]) && isset($_POST["interests"])
    ) {
        $fname = $_POST["first-name"];
        $lname = $_POST["last-name"];
        $phone = $_POST["phone"];
        $password = $_POST["password"];
        $confirmpassword = $_POST["confirm-password"];
        $email = $_POST["email"];
        $date = $_POST["date"];
        $month = $_POST["month"];
        $year = $_POST["year"];
        $gender = $_POST["gender"];
        $origin = $_POST["origin"];
        $interest = $_POST["interests"];

        echo "The new user is: " . $fname . " " . $lname
            . "<br>Phone: " . $phone
            . "<br>Email: " . $email
            . "<br>DOB: " . $date . "/" . $month . "/" . $year
            . "<br>Gender: " . $gender
            . "<br>Origin: " . $origin;


        echo "<br><br>Selected interests: ";
        foreach ($interest as $interests) {
            echo "<br>" . $interests;
        }

    } else {
        echo "<br>Fields are empty";
    }
} catch
(Exception $e) {
    echo $e->getMessage() . "Error! Try again.";
}