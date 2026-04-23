<?php
function bb_create_email_submission_table()
{
        global $wpdb;

        $table_name = $wpdb->prefix . 'bb_email_submissions';

        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table_name (
        id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
        submitted_at DATETIME NOT NULL,
        form_id BIGINT(20) NOT NULL,
        form_title TEXT NULL,
        subject TEXT NULL,
        sender_email VARCHAR(255) NULL,
        sender_name VARCHAR(255) NULL,
        email_html LONGTEXT NULL,
        PRIMARY KEY (id)
    ) $charset_collate;";

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
}

register_activation_hook(__FILE__, 'bb_create_email_submission_table');


add_filter('wp_mail', 'bb_capture_all_wp_emails');

function bb_capture_all_wp_emails($args)
{
        global $wpdb;

        $table_name = $wpdb->prefix . 'bb_email_submissions';

        // ambil data dasar
        $to      = is_array($args['to']) ? implode(',', $args['to']) : $args['to'];
        $subject = $args['subject'];
        $message = $args['message'];
        $headers = $args['headers'];

        // extract sender email dari header
        $sender_email = '';
        if (!empty($headers)) {
                if (is_array($headers)) {
                        foreach ($headers as $header) {
                                if (stripos($header, 'From:') !== false) {
                                        $sender_email = trim(str_replace('From:', '', $header));
                                }
                        }
                } else {
                        if (stripos($headers, 'From:') !== false) {
                                preg_match('/From:\s*(.*)/i', $headers, $matches);
                                $sender_email = isset($matches[1]) ? trim($matches[1]) : '';
                        }
                }
        }

        // insert ke DB
        $wpdb->insert($table_name, [
                'submitted_at' => current_time('mysql'),
                'form_id'      => 0, // unknown/global
                'form_title'   => 'WP Mail',
                'subject'      => $subject,
                'sender_email' => $sender_email,
                'sender_name'  => '',
                'email_html'   => $message,
        ]);

        return $args;
}

add_action('admin_menu', function () {
        add_menu_page(
                'BB Email Submission',
                'BB Email Submission',
                'manage_options',
                'bb-email-submissions',
                'bb_email_submission_page',
                'dashicons-email',
                26
        );
});


function bb_email_submission_page()
{
        global $wpdb;

        $table_name = $wpdb->prefix . 'bb_email_submissions';
        $results = $wpdb->get_results("SELECT * FROM $table_name ORDER BY submitted_at DESC");

        echo '<div class="wrap"><h1>BB Email Submissions</h1>';
        echo '<table class="widefat fixed striped">';
        echo '<thead>
            <tr>
                <th>Date</th>
                <th>Form</th>
                <th>Subject</th>
                <th>Sender</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
          </thead><tbody>';

        foreach ($results as $row) {
                echo '<tr>';
                echo '<td>' . esc_html($row->submitted_at) . '</td>';
                echo '<td>' . esc_html($row->form_title) . ' (#' . $row->form_id . ')</td>';
                echo '<td>' . esc_html($row->subject) . '</td>';
                echo '<td>' . esc_html($row->sender_name) . '</td>';
                echo '<td>' . esc_html($row->sender_email) . '</td>';
                echo '<td><a href="?page=bb-email-submissions&view=' . $row->id . '">View</a></td>';
                echo '</tr>';
        }

        echo '</tbody></table>';

        // detail view
        if (isset($_GET['view'])) {
                $id = intval($_GET['view']);
                $item = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table_name WHERE id = %d", $id));

                if ($item) {
                        echo '<h2 style="margin-top:40px;">Email Detail</h2>';
                        echo '<div style="background:#fff;padding:20px;border:1px solid #ddd;">';
                        echo $item->email_html; // render HTML langsung
                        echo '</div>';
                }
        }

        echo '</div>';
}
