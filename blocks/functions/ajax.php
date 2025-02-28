<?php
add_action('wp_ajax_form_contact','submit_form_contact');

function submit_form_contact(){
	global $wpdb;

	echo "test";

	wp_die();
}