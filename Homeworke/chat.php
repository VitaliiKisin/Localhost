<?php
$file = fopen('chat.txt','a+');

 //echo $_GET['message'];

//die();
if (isset($_GET) ['message']); {
fputs($file, $message . "/n");

}

$messages = [];

while (!feof($file)) {
    $messages[] = fgets($file);

}
$messages = array_reverse($messages);

foreach ($messages as $key => $str) {
   echo $str;
   if ($key >=4) break
}
