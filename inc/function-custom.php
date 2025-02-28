<?php

//GET YOUTUBE ID
function tmdr_youtube_id($url) {
  preg_match('%(?:youtube(?:-nocookie)?.com/(?:[\w-?&!#=,;]+/[\w-?&!#=/,;]+/|(?:v|e(?:mbed)?)/|[\w-?&!#=,;]*[?&]v=)|youtu.be/)([\w-]{11})(?:[^\w-]|\Z)%i', $url, $match);
  return (isset($match[1])) ? $match[1] : $url;
}

?>