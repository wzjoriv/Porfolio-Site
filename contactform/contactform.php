
<?php

$to = "Josue <josuevaldez1.com@outlook.com>";

$subject = "Porfolio: " . $_POST["subject"];

$msg = wordwrap($_POST["message"], 70, "\r\n");

$headers = "From: " . $_POST["name"] . " <" . $_POST["email"] . ">\r\n";

mail($to, $subject, $msg, $headers);

echo 'OK';
echo 'OK';

?>