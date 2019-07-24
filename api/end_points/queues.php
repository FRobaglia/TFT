<?php

require '../bootstrap.php';

curl("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/", $_GET['s']);