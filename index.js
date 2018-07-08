

var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your E-mail");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");
