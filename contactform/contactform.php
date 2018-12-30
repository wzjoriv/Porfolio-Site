<?php

$name = $_POST["name"];

$sub = "Email from josuenrivera.site by " . $name;

$headers = "From: " . $_POST["email"];

$msg = wordwrap("Subject(" . $_POST["subject"] . "):\n" . $_POST["message"], 70);

$to = "josuevaldez1.com@outlook.com";

mail($to, $sub, $msg, $headers);

echo "OK";

?>