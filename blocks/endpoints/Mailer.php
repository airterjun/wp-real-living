<?php

namespace Endpoints;

if (!file_exists('./vendor/autoload.php')) {
	die;
}

require('./vendor/autoload.php');

use Endpoints\Services\NewsletterService;
use PHPMailer\PHPMailer\PHPMailer;
use Timber\Timber;

class Mailer
{
	public function send()
	{
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

		if ($_POST['phone'] != '') {
			$service->addContact([
				'contactCategory' => 'phone',
				'mainContact' => 'false',
				'contactType' => 'Work',
				'isValid' => true,
				'value' => $_POST['phone']
			]);
		}

		if ($_POST['country'] != '') {
			$service->addAddress([
				'mainAddress' => true,
				'addressType' => 'Work',
				'street1' => 'not defined',
				'country' => $_POST['country'],
			]);
		}

		$service->addNotes([
			'note' => $_POST['messages']
		]);

		$name = explode(' ', $_POST['full_name']);
		$firstName = $name[0];
		$lastName = 'not defined';

		if (count($name) >= 2) {
			$lastName = $name[1];
		}

		$response = $service->createCustomer([
			'first_name' => $firstName,
			'last_name' => $lastName,
		]);

		header('location: /thank-you');
	}

	private $host = 'smtpout.secureserver.net';
	private $SMTPAuth = true;
	private $port = 465;
	private $username = 'info@villanolsis.com';
	private $password = 'InfoPword1';
	private $from = 'info@villanolsis.com';

	private $mail;

	function __construct()
	{
		$mail = new PHPMailer();
		$mail->isSMTP();
		$mail->Host = $this->host;
		$mail->SMTPAuth = $this->SMTPAuth;
		$mail->Port = $this->port;
		$mail->Username = $this->username;
		$mail->Password = $this->password;
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

		$this->mail = $mail;
	}

	public function sendMail()
	{
		$recaptcha = new \ReCaptcha\ReCaptcha('6Lc4uPAdAAAAANEV9DmNVGba9YN7FnJve_JS-wyr');

		$resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);

		if (!$resp->isSuccess()) {
			header('location: /');

			return;
		}

		Timber::$locations = __DIR__ . '/../views';

		$template = Timber::compile("mail.twig", $_POST);

		$this->mail->setFrom($this->from, 'Villa nolsis');
		$this->mail->addAddress('info@villanolsis.com');

		$this->mail->Subject = 'New Submission From Contact Us Page';
		$this->mail->Body = $template;

		$this->mail->send();

		header('location: /thank-you');
	}
}
