function validateLogin(){
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["pwd"].value;

    if (username == "" || username == null ||
        password == "" || password == null 
    ){
        alert("Please fill in all details");
        return false;
    } else {
        alert("You have successfully login!")
        return true;
    }
}