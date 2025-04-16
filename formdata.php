<?php
    if( isset($_GET['action'])){
        $action = $_GET['action'];

        require_once('./phpmailer/class.phpmailer.php');

        $fname      = $_POST['fname'];
        $lname      = $_POST['lname'];
        $email      = $_POST['email'];
        $phpne      = $_POST['phone'];
        $bsnsname   = $_POST['businessName'];
        $location   = $_POST['location'];
        $advtslocation = $_POST['advertisingLocation'];
        $binstime   = $_POST['YearsInBusiness'];
        $ymessage   = $_POST['Message'];
        $packageName = $_POST['packageName'];

        if($action === 'first_step'){
            $mail = new PHPMailer();
            $to_email = 'daniel@need-ads.com';
            $from_email = 'no-reply@need-ads.com';
            $subject = $packageName;

                $message = '
                Fast Name: '.$fname.'
                Last Name: '.$lname.'
                Email: '.$email.'
                Phone: '.$phpne.'
                ';
            $mail->IsHTML(true);   
            $headers  =  "From: ".$from_email."\r\n" . "Content-Type: text/plain; charset=utf-8" . "\r\n"; 
            $emailSent = mail($to_email, $subject, $message, $headers);

            if ($emailSent) { 
                $emailSent;
                return;
            }
        }
        else if($action === 'second_step'){
            $mail = new PHPMailer();
            $to_email = 'daniel@need-ads.com';
            $from_email = 'no-reply@need-ads.com';
            $subject = $packageName;

                $message = '
                Business Name: '.$bsnsname.'
                Location: '.$location.'
                Advertising Location: '.$advtslocation.'
                Years in business: '.$binstime.'
                Message : '.$ymessage.'
                ';
            $mail->IsHTML(true);   
            $headers  =  "From: ".$from_email."\r\n" . "Content-Type: text/plain; charset=utf-8" . "\r\n";
            $emailSent = mail($to_email, $subject, $message, $headers);

            if ($emailSent) { 
                $emailSent;
                return;
            }
        }

    };

 ?>
