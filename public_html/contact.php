<?php

/**
 * !!-IMPORTANT-!!
 *
 * - PLEASE MAKE SURE YOU HAVE SET THE 'URL' FIELD ON THE AJAX METHOD IN THE JAVASCRIPT CORRECTLY OTHERWISE NONE OF THE
 * CODE BELOW WILL RUN.
 * - PLEASE EDIT THE PATH TO 'SWIFT MAILER' IF IT'S NOT IN THE ROOT DIRECTORY OTHERWISE YOU WILL NOT RECEIVE ANY MAIL
 */

/**
 * Change path to swift mailer if necessary
 */
require_once './swiftmailer/swift_required.php';

/**
 * SETTINGS
 *
 * 1. Replace $to_name value with your Full name
 * 2. Replace $to_email value with your Email address
 * 4. Done!
 */
$to_name = 'Jackalope';
$to_email = 'mike@weddingvideographers.com';

// Feedback messages
$messages = NULL;

// Detect AJAX request
if ( !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' )
{
	// Form data
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$text = "Name: " . $_POST['name'] . "\r\nPhone: $phone\r\nEmail: $email";
	// SwiftMailer
	$transport = Swift_MailTransport::newInstance(); // Uses the PHP mail() function
	//$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')
		//->setUsername('mikeinthesis')
		//->setPassword('adastraperaspera');
	$message = Swift_Message::newInstance();
	$message->setFrom( $to_email, $to_name );
	$message->setTo( $to_email, $to_name );
	$message->setReplyTo( $email, $name );
	$message->setSubject( $name );
	$message->setBody( $text );
	$mailer = Swift_Mailer::newInstance( $transport );

	// Send email and give feedback
	if( $mailer->send( $message ) )
	{
		$messages = json_encode(array(
			'type' => 'success',
			'title' => 'Success ',
			'content' => 'Message has been sent successfully'
		));
	}
	else
	{
		$messages = json_encode(array(
			'type' => 'danger',
			'title' => 'Error ',
			'content' => 'The message could not be sent successfully. Please check your mail server settings.'
		));
	}

	// Return JSON data
	exit( $messages );
}