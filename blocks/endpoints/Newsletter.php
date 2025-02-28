<?php

namespace Endpoints;

use Endpoints\Services\NewsletterService;
use MailchimpMarketing;

if (!file_exists('./vendor/autoload.php')) {
    die;
}

require('./vendor/autoload.php');

class Newsletter
{
    public function subscribe()
    {
        if ((filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) === false
            || !array_key_exists('g-recaptcha-response', $_POST)
        ) {
            header('location: /');

            return;
        }

        $recaptcha = new \ReCaptcha\ReCaptcha('6Lc4uPAdAAAAANEV9DmNVGba9YN7FnJve_JS-wyr');

        $resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);

        if (!$resp->isSuccess()) {
            header('location: /');

            return;
        }

        $service = new NewsletterService();

        $service->addContact([
            'contactCategory' => 'email',
            'mainContact' => 'false',
            'contactType' => 'Work',
            'isValid' => true,
            'value' => $_POST['email']
        ]);

        $firstName = substr($_POST['email'], -1, strpos($_POST['email'], '@'));

        $response = $service->createCustomer([
            'first_name' => $firstName,
            'last_name' => 'Newsletter',
        ]);

        header('location: /thank-you');
    }
}
