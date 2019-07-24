<?php 

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');


function curl($uri, $param) {
  $curl = curl_init($uri . $param . '?api_key=RGAPI-884025ac-e23d-4f71-b7b0-be62249e44d3');
  curl_setopt_array($curl, [
    CURLOPT_SSL_VERIFYPEER => false, // Bypass curl error because of https certificate
  ]);

  curl_exec($curl);
}