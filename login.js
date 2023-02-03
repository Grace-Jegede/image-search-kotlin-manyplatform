/** Developer Name: Grace Jegede
    Date Developed: Friday February 3, 2023.
    Purpose: To help user login to their page.
    */

function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && password=="user")
    {
        alert("login successfully");
        return false;
    }
    else
    {
        alert("login failed");
    }
}