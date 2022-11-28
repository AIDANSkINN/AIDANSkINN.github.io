function checkPasword() {
    //capture the user entered password from our input element
    var passwordBoxObject = document.getElementById("passwordBox");
    var passwordEntered = passwordBoxObject.value;
    console.log("User entered password:",passwordEntered);

    //check if the password is correct
    var sitepassword = "paintballclub";
    if (passwordEntered == sitepassword) {
        // allow navigation
        console.log("allow!");
        window.location.assign("members.html");
    } else {
        //  block navigation
        console.log("block!");

        //  add a new style rule to the incorrect-password element
        document.getElementById("incorrect-password").style.color = "red";

        // add text to the incorrect-password element
        document.getElementById("incorrect-password").innerHTML = "Incorrect password. please try again...";
    }
}