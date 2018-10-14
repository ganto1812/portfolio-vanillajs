// Click active tab
let navbar = document.getElementById("box2");
let tab = navbar.getElementsByClassName("tab");
for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Form validation
function formValidation()                                   
{
    let name = document.forms["contact"]["name"];              
    let email = document.forms["contact"]["email"];   
    let message = document.forms["contact"]["message"];

    if (name.value == "")                                 
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
      
    if (email.value == "")                                  
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf("@", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf(".", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (message.value == "")                          
    {
        window.alert("Please enter a message.");
        message.focus();
        return false;
    }
  
    return true;
}