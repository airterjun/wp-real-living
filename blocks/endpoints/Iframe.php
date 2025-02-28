<?php

namespace Endpoints;

class Iframe {
    public function show() {
        $c = curl_init();
        curl_setopt_array($c, [
            CURLOPT_URL => 'https://player.vimeo.com/video/670347521',
            CURLOPT_USERAGENT => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
        ]);

        $response = curl_exec($c);

        echo $response;
    }
}