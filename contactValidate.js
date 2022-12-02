function validateContact(){
    var email = document.forms["contactUs"]["email"].value;
    var name = document.forms["contactUs"]["name"].value;
    var message = document.forms["contactUs"]["message"].value;

    if (email == "" || email == null ||
        name == "" || name == null ||
        message == "" || message == null
    ){
        alert("Please fill in all details");
        return false;
    } else {
        alert("You have successfully submitted!")
        return true;
    }
}