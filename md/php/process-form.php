<?php
// change the email address below to your own email address.
$mailTo = 'md.akhi.ir@gmail.com';


$name = htmlspecialchars($_POST['name']);
$mailFrom = htmlspecialchars($_POST['email']);
$subject =  'md.akhi.ir : Message - '.htmlspecialchars($_POST['subject']);
$message_text = htmlspecialchars($_POST['message']);

$headers  = "From: $name <$mailFrom>\n";
$headers .= "Reply-To: $name <$mailFrom>\n";

$message = $message_text.'<br>Check it: <a href="http://www.akhi.ir/">AKHI.Ir</a>';

mail($mailTo, $subject, $message, $headers );

?>