<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Por favor completa el formulario y prueba de nuevo.";
        exit;
    }

    $recipient = "byronhernan1613@gmail.com";
    $subject = "Nuevo mensaje de $name";
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        echo "Gracias! Tu mensaje ha sido enviado.";
    } else {
        echo "Lo siento, algo salió mal. Por favor intenta nuevamente.";
    }
} else {
    echo "Oops! Algo salió mal y no pudimos enviar tu mensaje.";
}
?>