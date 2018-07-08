function formValidation()                                   
{
    var name = document.forms["contact"]["name"];              
    var email = document.forms["contact"]["email"];   
    var message = document.forms["contact"]["message"]; 
  
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