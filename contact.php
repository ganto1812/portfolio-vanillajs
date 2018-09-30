<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);

//need to submit form first
if(!isset($_POST['submit']))
{
	echo "error; you need to submit the form!";
}

//get variables
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];


//Validation
if(empty($name)||empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}


//composed email
	$email_from = "apisaniroa@gmail.com";
	$email_subject = "New message from website";
	$email_body = "You have received a new message from:\n $name.\n".
	"E-mail: $visitor_email.\n".
    "Here is the message:\n $message\n".


//send email
	$to = "apisaniroa@gmail.com";
	$headers = "From: $email_from \r\n";
	$headers .= "Reply-To: $visitor_email \r\n";
	mail($to,$email_subject,$email_body,$headers);

//thank you
header('Location: thankYou.html');	


//email injection
	function IsInjected($str)
	{
		$injections = array('(\n+)',
			   '(\r+)',
			   '(\t+)',
			   '(%0A+)',
			   '(%0D+)',
			   '(%08+)',
			   '(%09+)'
			   );
				   
		$inject = join('|', $injections);
		$inject = "/$inject/i";
		
		if(preg_match($inject,$str))
		{
		  return true;
		}
		else
		{
		  return false;
		}
	}
?>