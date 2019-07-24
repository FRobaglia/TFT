<?php

require '../bootstrap.php';

curl("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/", $_GET['s']);