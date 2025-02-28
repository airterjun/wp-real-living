<?php

namespace Endpoints\Services;

require_once dirname(__FILE__) . '/../../../../../wp-config.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;

const OPTION_KEY = 'guestappz_token';

class NewsletterService
{
    private $client;
    private $contacts = [];
    private $addresses = [];
    private $notes = [];

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://app.guestappz.io'
        ]);
    }

    public function addContact($contact)
    {
        array_push($this->contacts, $contact);
    }

    public function addAddress($address)
    {
        array_push($this->addresses, $address);
    }

    public function addNotes($note)
    {
        array_push($this->notes, $note);
    }

    private function createTokenRegistry($token)
    {
        if (get_option(OPTION_KEY) === false) {
            add_option(OPTION_KEY, $token);
        } else {
            update_option(OPTION_KEY, $token);
        }
    }

    private function issueToken()
    {
        $response = $this->client->post('https://app.guestappz.io/baseApiProd/authapp/login', [
            'headers' => [
                'Content-Type' => 'application/json',
            ],
            'body' => json_encode([
                'username' => 'fleavaApi',
                'passwordhash' => 'villa.2022',
                'channelname' => 'Web',
            ])
        ]);

        $response = json_decode((string)$response->getBody());
        $token = $response->data->token;

        return $token;
    }

    public function createCustomer($data)
    {
        $token = null;

        if (get_option(OPTION_KEY) === false) {
            $token = $this->issueToken();

            $this->createTokenRegistry($token);
        } else {
            $token = get_option(OPTION_KEY);
        }

        try {
            $response = $this->client->post('https://api.guestappz.io/vendor/v1/customer/profile', [
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Bearer ' . $token,
                ],
                'body' => json_encode([
                    'dublinCore' => [
                        'propertyId' => '4d60508b-0422-400b-9142-174f9f9cfe73',
                        'type' => 1,
                        'origin' => 'Web',
                    ],
                    'profile' => [
                        'lastName' => $data['last_name'],
                        'firstName' => $data['first_name'],
                        'title' => 'Mr'
                    ],
                    'contacts' => $this->contacts,
                    'addresses' => $this->addresses,
                    'notes' => $this->notes,
                ]),
            ]);

            return json_decode((string)$response->getBody());
        } catch (ClientException $e) {
            $statusCode = $e->getResponse()->getStatusCode();

            if ($statusCode === 400) {
                $token = $this->issueToken();
                $this->createTokenRegistry($token);

                $this->createCustomer($data);
            } else {
                var_dump('error');
                die;
            }
        }
    }
}
