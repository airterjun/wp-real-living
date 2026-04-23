<?php

/**
 * =========================
 * CREATE TABLE (THEME SAFE)
 * =========================
 */
add_action('after_setup_theme', 'bb_create_email_submission_table_once');

function bb_create_email_submission_table_once()
{
        if (get_option('bb_email_table_created')) return;

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

        update_option('bb_email_table_created', 1);
}


/**
 * =========================
 * PARSE HTML → CLEAN TEXT
 * =========================
 */
function bb_extract_clean_email_content($html)
{
        libxml_use_internal_errors(true);

        $dom = new DOMDocument();
        $dom->loadHTML('<?xml encoding="utf-8" ?>' . $html);

        $xpath = new DOMXPath($dom);

        $output = '';

        // ambil semua <p>
        $paragraphs = $xpath->query('//p');

        if ($paragraphs->length > 0) {
                foreach ($paragraphs as $p) {
                        $text = trim($p->textContent);
                        if (!empty($text)) {
                                $output .= esc_html($text) . '<br/><br/>';
                        }
                }
        } else {
                // fallback: ambil semua <div>
                $divs = $xpath->query('//div');
                foreach ($divs as $div) {
                        $text = trim($div->textContent);
                        if (!empty($text)) {
                                $output .= esc_html($text) . '<br/><br/>';
                        }
                }
        }

        return $output;
}

/**
 * =========================
 * CF7 CAPTURE ONLY
 * =========================
 */
add_action('wpcf7_mail_sent', 'bb_capture_cf7_submission');

function bb_capture_cf7_submission($contact_form)
{
        global $wpdb;

        $submission = WPCF7_Submission::get_instance();
        if (!$submission) return;

        $posted_data = $submission->get_posted_data();

        $form_id = $contact_form->id();
        $form_title = $contact_form->title();

        $mail = $contact_form->prop('mail');

        // replace tag → jadi HTML final
        $subject = wpcf7_mail_replace_tags($mail['subject']);
        $body    = wpcf7_mail_replace_tags($mail['body'], false);

        // parse jadi clean text
        $clean_html = bb_extract_clean_email_content($body);

        /**
         * =========================
         * FLEXIBLE FIELD DETECTION
         * =========================
         */

        // EMAIL
        $sender_email = '';
        foreach (['email', 'your-email'] as $field) {
                if (!empty($posted_data[$field])) {
                        $sender_email = sanitize_email($posted_data[$field]);
                        break;
                }
        }

        // NAME
        $sender_name = '';
        foreach (['name', 'your-name', 'full-name'] as $field) {
                if (!empty($posted_data[$field])) {
                        $sender_name = sanitize_text_field($posted_data[$field]);
                        break;
                }
        }

        $table_name = $wpdb->prefix . 'bb_email_submissions';

        $wpdb->insert($table_name, [
                'submitted_at' => current_time('mysql'),
                'form_id'      => $form_id,
                'form_title'   => $form_title,
                'subject'      => $subject,
                'sender_email' => $sender_email,
                'sender_name'  => $sender_name,
                'email_html'   => $clean_html,
        ]);
}


/**
 * =========================
 * ADMIN MENU
 * =========================
 */
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


/**
 * =========================
 * ADMIN PAGE
 * =========================
 */
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

        /**
         * DETAIL VIEW
         */
        if (isset($_GET['view'])) {
                $id = intval($_GET['view']);
                $item = $wpdb->get_row(
                        $wpdb->prepare("SELECT * FROM $table_name WHERE id = %d", $id)
                );

                if ($item) {
                        echo '<h2 style="margin-top:40px;">Email Detail</h2>';
                        echo '<div style="background:#fff;padding:20px;border:1px solid #ddd;">';

                        echo $item->email_html; // sudah clean & aman

                        echo '</div>';
                }
        }

        echo '</div>';
}
