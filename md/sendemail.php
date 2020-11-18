<?php
// change the email address below to your own email address.
$mailTo = 'mohammadamanalikhani@gmail.com';


$name = htmlspecialchars($_POST['Name']);
$mailFrom = htmlspecialchars($_POST['Email']);
$subject =  'md.akhi.ir : Message - '.htmlspecialchars($_POST['Subject']);
$message_text = htmlspecialchars($_POST['Message']);

$headers  = "From: $name <$mailFrom>\n";
$headers .= "Reply-To: $name <$mailFrom>\n";

$message = $message_text.'<br>Check it: <a href="http://www.akhi.ir/">AKHI.Ir</a>';

mail($mailTo, $subject, $message, $headers );

?>