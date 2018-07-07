<?php

if(!isset($_POST["submit"]))
{
//please submit
    echo "error; please submit your message";
}
$name = $_POST["name"];
$visitor_email = $_POST["email"];
$message = $_POST["message"];

//Validation
if(empty($name))||empty($visitor_email))
{
    echo "Please write your name and email";
    exit;
}

$email_from = "apisaniroa@gmail.com";
$email_subject = "New message!";
$email_body = "Name: $name\n".
"E-mail: $visitor_email\n".
"Message:\n $message".

$to = "apisaniroa@gmail.com";
$headers = "From: $email_from \r\n";

//send email
mail($to,$email_subject,$email_body,$headers);
?>