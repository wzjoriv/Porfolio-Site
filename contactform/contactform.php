<<<<<<< HEAD
<?php

$name = $_POST["name"];

$sub = "Email from josuenrivera.site by " . $name;

$headers = "From: " . $_POST["email"];

$msg = wordwrap("Subject(" . $_POST["subject"] . "):\n" . $_POST["message"], 70);

$to = "josuevaldez1.com@outlook.com";

mail($to, $sub, $msg, $headers);

echo "OK";

=======
<?php

$name = $_POST["name"];

$sub = "Email from josuenrivera.site by " . $name;

$headers = "From: " . $_POST["email"];

$msg = wordwrap("Subject(" . $_POST["subject"] . "):\n" . $_POST["message"], 70);

$to = "josuevaldez1.com@outlook.com";

mail($to, $sub, $msg, $headers);

echo "OK";

>>>>>>> 89da60dae3fa4c1088346536d22a4c7344f2e0ea
?>