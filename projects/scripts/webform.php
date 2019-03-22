<?php
function cors()
{
    header("HTTP/1.1 " . "200" . " " . "OK");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");    
    header('Access-Control-Allow-Headers: Accept, Content-Type, Access-Control-Allow-Credentials, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods, X-Requested-With, X-API-KEY, X-Auth-Token, X-Requested-With, Authorization, Content-Range, Content-Disposition, Origin, Access-Control-Request-Method');
    header('Access-Control-Max-Age: 86400');
    header('Access-Control-Allow-Origin: '."http://localhost:4200");
    header('Access-Control-Allow-Credentials: true');   
}

header('Content-type: application/json');
$errors = '';
if(empty($errors))
{
    cors();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    $to_email = "mannyfdev@gmail.com";

    $from_name = $request->name;    
    $message = $request->message;
    $from_email = $request->email;   
    
    $contact = "<p><strong>Name:</strong> $from_name</p><p><strong>Email:</strong> $from_email</p>";
    $content = "<p>$message</p>";
    
    $email_subject = "Webform Submission";
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    $headers .= "Cc: someone@domain.com \r\n";
    $headers .= "Bcc: someoneelse@domain.com \r\n";

    mail($to_email,$email_subject,$email_body,$headers);

    $response_array['status'] = 'success';
    $response_array['from'] = $from_email;
    
	echo json_encode($response_array);
   // echo json_encode($from_email);
    
    header($response_array);
    
    return ;
    
} else {

	$response_array['status'] = 'error';
	echo json_encode($response_array);
	return ;
}

?>
