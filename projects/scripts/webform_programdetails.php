<?php
function cors()
{
    header("HTTP/1.1 " . "200" . " " . "OK");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");    
    header('Access-Control-Allow-Headers: Accept, Content-Type, Access-Control-Allow-Credentials, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods, X-Requested-With, X-API-KEY, X-Auth-Token, X-Requested-With, Authorization, Content-Range, Content-Disposition, Origin, Access-Control-Request-Method');
    header('Access-Control-Max-Age: 86400');
    header('Access-Control-Allow-Origin: '."https://www.plasma-lift.net");
    header('Access-Control-Allow-Credentials: true');   
}

function get_email_headers($to_email, $from_email, $cc_email) {

	$headers = 'From: ' . $from_email . PHP_EOL;	
    $headers .= 'Reply-To: ' . $from_email . PHP_EOL;
    $headers .= 'Cc: ' . $form_email . PHP_EOL;
	$headers .= 'X-Mailer: Adobe Muse CC 2018.0.0.379 with PHP' . PHP_EOL;
	$headers .= 'Content-type: text/html; charset=utf-8' . PHP_EOL;
	return $headers;
}

function get_email_body($subject, $from_name, $from_email) {

	$message = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
	$message .= '<html xmlns="http://www.w3.org/1999/xhtml">';
	$message .= '<head><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/><title>' . encode_for_form($subject) . '</title></head>';
	$message .= '<body style="background-color: #ffffff; color: #000000; font-style: normal; font-variant: normal; font-weight: normal; font-size: 12px; line-height: 18px; font-family: helvetica, arial, verdana, sans-serif;">';

    $message .= '<h2 style="background-color: #eeeeee;padding:1.5rem;border-radius:6px;">' . $subject . '</h2>';

    $message .= "<p><strong>Name:</strong> $from_name</p><p><strong>Email:</strong> $from_email</p>";
    $message .= '</body></html>';
    
    return cleanup_message($message);
}

header('Content-type: application/json');
$errors = '';
if(empty($errors))
{
    cors();

    $postdata = file_get_contents("php://input");

    $request = json_decode($postdata);

    $to_email = "admin@plasma-lift.net";
    $cc_email = "mannyfdev@gmail.com";

    $from_name = $request->name;       
    $from_email = $request->email;   

    $from_system = "admin@plasma-lift.net";    
    $email_subject = "Program Details Request";

    $email_body = get_email_body($email_subject, $from_name, $from_email);	  
      
    $headers = get_email_headers($from_system, $from_email, $cc_email);	    	    

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
function cleanup_email($email) {
	$email = encode_for_form($email);
	$email = preg_replace('=((<CR>|<LF>|0x0A/%0A|0x0D/%0D|\\n|\\r)\S).*=i', null, $email);
	return $email;
}
function cleanup_message($message) {
	$message = wordwrap($message, 70, "\r\n");
	return $message;
}

function encode_for_json($value) {
	return preg_replace(array('/([\'"\\t\\\\])/i', '/\\r/i', '/\\n/i'), array('\\\\$1', '\\r', '\\n'), $value);
}

function encode_for_form($text) {
	$text = stripslashes($text);
	return htmlentities($text, ENT_QUOTES, 'UTF-8');// need ENT_QUOTES or webpro.js jQuery.parseJSON fails
}

?>
