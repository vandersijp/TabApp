<?
$postData = json_decode(file_get_contents("php://input") , true);

ini_set('display_errors', 1);
error_reporting(E_ALL);

$defs = array(
	"action" => false,
	"actionlabel" => "contact",
	"bcc" => "c@asklearnshare.com",
	"g-recaptcha-response" => "",
	"from" => "noreply@asklearnshare.com",
	"query" => "",
	"querylabel" => "query",
	"signature" => "Kind regards.",
	"subject" => "Your query",
	"to" => "unknown@somewhere.com");

$postData = array_default($postData, $defs);

$ip = $_SERVER['REMOTE_ADDR'];
$secretKey = "6LfWQykTAAAAAKtiN04o23bUzHPGAYR7c3XvmDOE";

// find concerns
$concerns = array();
if (!filter_var($postData["to"], FILTER_VALIDATE_EMAIL))
	{
	$concerns[] = "Your email address doesn't look right.";
	}

if (is_robot ($postData, $secretKey, $ip)) {
  // throw an error to allow re-edit
  header("HTTP/1.0 400 Bad Request");
	$concerns[] = "Please confirm that you are not a robot.";
	}

if (empty($concerns))
	{
	$body = bodylines($postData);
	$notes = notelines($postData);

	$echoStr = compose_message ($postData, $body, $notes);
	mail($postData["to"], $postData["subject"], $echoStr, implode("\r\n", headers($postData)));
	mail($postData["bcc"], $postData["subject"]." - ".$postData["to"], $echoStr, implode("\r\n", headers($postData)));
}
else
  {
  $echoStr = compose_message ($postData, $concerns);
  }

echo $echoStr;
log_insert ("../../log.html", $echoStr);

//=====================
function log_insert ($file, $text) {
	$n = "\r\n";
	$s0 = "<div>".$n."<div>".$n;
	$s1 = $n."</div>".$n."<hr></hr>".$n."</div>".$n;

	if(file_exists($file))
	{
	  $content = file_get_contents($file);
	}
	else
	{
		$content = "<p>(C) 2016 Ask Learn Share Ltd</p>";
	}

	file_put_contents ($file, $s0.$text.$s1.$content);
	return true;
}

function headers($postData) {
		$headers = array();
  	$headers[] = "From: " . $postData["from"];
  	$headers[] = "BCC: " . $postData["bcc"];
  	// "Reply-To: "
  	$headers[] = "Sensitivity: Personal";
  	$headers[] = "MIME-Version: 1.0";
  	$headers[] = "Content-Type: text/html; charset=utf-8";
  	$headers[] = "X-Mailer: PHP/" . phpversion();
  return $headers;
}

function bodylines ($postData) {
	$lines=array();
  $lines[] = "Thank you for reaching out.";
  if (!empty($postData["query"])) $lines[] = "Your " . $postData["querylabel"] . " " . chr(34) . $postData["query"] . chr(34) . " has been noted.";
  if ($postData["action"] == true) $lines[] = "We will ".$postData["actionlabel"]." you.";
  return $lines;
}

function notelines ($postData) {
	$lines=array();
  $lines[] = "This confirmation was emailed to you on " . gmdate ('c'). " UTC.";
	$lines[] = "Our apologies if your provider stored this in your spam folder.";
  return $lines;
}

function is_robot ($postData, $secretKey, $ip){
  if (empty($postData["g-recaptcha-response"]))
    {
      $robot = true;
    }
  else
    {
      $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$postData["g-recaptcha-response"]."&remoteip=".$ip);
      $responseKeys = json_decode($response,true);
      $robot = intval($responseKeys["success"]) !== 1;
    }
return $robot;
}

function array_encapsulate ($array) {
  return array_map(
     function ($el) {
        return "<p>". $el. "</p>";
     },
     $array
  );
}

function array_default ($array, $defs) {
	foreach ($defs as $k => $v) {
		if (!isset($array[$k])) $array[$k] = $v;
	}
	foreach ($array as $k => $v) {
		if (empty($array[$k])) $array[$k] = $v;
	}
	foreach ($array as $k => $v) {
		$array[$k] = htmlentities(trim($array[$k]));
	}
	return $array;
}

function compose_message ($postData, array $lines = NULL, array $notes = NULL) {
  $echo[] = "Dear " . $postData["to"] . ",";
  if (isset($lines)) $echo[] = implode(" ", $lines);
	if (isset($notes)) $echo[] = implode(" ", $notes);
	$echo[] = $postData["signature"];
  return array_to_html($echo);
}

function array_to_html ($array) {
return implode("", array_encapsulate($array));
}
?>
