function validateForm(){
    var fname = document.forms["signUp"]["fname"].value;
    var lname = document.forms["signUp"]["lname"].value;
    var birthday = document.forms["signUp"]["birthday"].value;
    var email = document.forms["signUp"]["email"].value;
    var address1 = document.forms["signUp"]["address1"].value;
    var address2 = document.forms["signUp"]["address2"].value;
    var city = document.forms["signUp"]["city"].value;
    var state = document.forms["signUp"]["state"].value;
    var postcode = document.forms["signUp"]["postcode"].value;
    var username = document.forms["signUp"]["username"].value;
    var pwd = document.forms["signUp"]["pwd"].value;

    if (fname == "" || fname == null ||
        lname == "" || lname == null ||
        birthday == "" || birthday == null ||
        email == "" || email == null ||
        address1 == "" || address1 == null ||
        city == "" || city == null ||
        state == "" || state == null ||
        postcode == "" || postcode == null ||
        username == "" || username == null ||
        pwd == "" || pwd == null    
    ){
        alert("Please fill in all details");
        return false;
    } else {
        alert("You have successfully signed up!")
        return true;
    }
}