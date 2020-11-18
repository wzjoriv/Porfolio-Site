
<?php

$to = "Josue Rivera <admin@josuenrivera.site>";

$sub = "Porfolio: " . $_POST["subject"];

$msg = wordwrap($_POST["message"], 70, "\r\n");

$headers = "From: " . $_POST["name"] . " <" . $_POST["email"] . ">";

mail($to, $sub, $msg, $headers);

echo "OK";

?>