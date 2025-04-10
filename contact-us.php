<?php
    if (!empty($_POST)) {
        require_once('phpmailer/class.phpmailer.php');

        $mail = new PHPMailer();
        $to_email = 'danwellington44@gmail.com';
        $from_email = 'no-reply@need-ads.com';
        $subject = 'Need Add';

            $message = '
            First Name: '.$_POST['flname'].'
            Phone: '.$_POST['mobile'].'
            Email: '.$_POST['email'].'
            Company Name: '.$_POST['companyName'].'
            Company Site: '.$_POST['companysite'].'
            Inquiry: '.$_POST['inquiry'].'
            Inquiry Source: '.$_POST['inquiry-source'].'
            Message: '.$_POST['message'].'
            '; 

        $mail->IsHTML(true);   
        $headers  =  "From: ".$from_email."\r\n" . "Content-Type: text/plain; charset=utf-8" . "\r\n";
        $emailSent = mail($to_email, $subject, $message, $headers);

        if ($emailSent) { 
            $emailSent;
            header("Location: thank-you.html");
            return;

        }
    } 
?>