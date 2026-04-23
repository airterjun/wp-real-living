<?php

/**
 * Plugin Name: BB Mail Template
 * Description: Custom email template builder for Contact Form 7 with banner, header, content blocks, and consistent short ticket ID from timestamp.
 * Version: 1.2.0
 * Author: Custom
 */

if (!defined('ABSPATH')) {
        exit; // Security: direct access not allowed
}

/**
 * =============================================
 * TICKET ID SETTINGS & GENERATION
 * =============================================
 */

// Register settings
function cf7cmt_register_settings()
{
        register_setting('cf7cmt_settings_group', 'cf7cmt_banner_id', ['type' => 'integer', 'sanitize_callback' => 'absint']);
        register_setting('cf7cmt_settings_group', 'cf7cmt_subject', ['type' => 'string', 'sanitize_callback' => 'sanitize_text_field']);
        register_setting('cf7cmt_settings_group', 'cf7cmt_from_name', ['type' => 'string', 'sanitize_callback' => 'sanitize_text_field']);
        register_setting('cf7cmt_settings_group', 'cf7cmt_from_email', ['type' => 'string', 'sanitize_callback' => 'sanitize_email']);
        register_setting('cf7cmt_settings_group', 'cf7cmt_content', ['type' => 'string', 'sanitize_callback' => 'wp_kses_post']);
        register_setting('cf7cmt_settings_group', 'cf7cmt_footer', ['type' => 'string', 'sanitize_callback' => 'wp_kses_post']);
        register_setting('cf7cmt_settings_group', 'cf7cmt_test_email', ['type' => 'string', 'sanitize_callback' => 'sanitize_email']);

        // New: Ticket Prefix
        register_setting('cf7cmt_settings_group', 'cf7cmt_ticket_prefix', [
                'type'              => 'string',
                'sanitize_callback' => 'cf7cmt_sanitize_prefix',
                'default'           => 'EL'
        ]);
}
add_action('admin_init', 'cf7cmt_register_settings');

/**
 * Sanitize ticket prefix
 */
function cf7cmt_sanitize_prefix($prefix)
{
        $prefix = sanitize_text_field($prefix);
        $prefix = preg_replace('/[^A-Za-z0-9]/', '', $prefix);
        return substr($prefix, 0, 10);
}

/**
 * Generate Short Ticket ID (max 5 chars after prefix)
 */
function cf7cmt_generate_ticket_id(): string
{
        $prefix = get_option('cf7cmt_ticket_prefix', 'EL');

        // Generate 5 character code from timestamp
        $timestamp = time();
        $short_id  = strtoupper(substr(base_convert($timestamp, 10, 36), -5));

        return $prefix . '-' . $short_id;
}

/**
 * Get Ticket ID - Single source of truth
 */
function cf7cmt_get_ticket_id(WPCF7_ContactForm $form): string
{
        $unit_tag = $form->unit_tag();
        if (empty($unit_tag)) {
                return cf7cmt_generate_ticket_id();
        }

        $transient_key = 'cf7_ticket_' . absint($form->id()) . '_' . sanitize_key($unit_tag);
        $ticket_id = get_transient($transient_key);

        if (empty($ticket_id)) {
                $ticket_id = cf7cmt_generate_ticket_id();
                set_transient($transient_key, $ticket_id, 1800); // 30 minutes
        }

        return $ticket_id;
}

/**
 * Force generate ticket_id early (before native email)
 */
add_action('wpcf7_submit', function (WPCF7_ContactForm $form, $result) {
        if (isset($result['status']) && in_array($result['status'], ['mail_sent', 'mail_failed'], true)) {
                cf7cmt_get_ticket_id($form);
        }
}, 1, 2);

/**
 * Special mail tag [ticket_id] for native CF7
 */
add_filter('wpcf7_special_mail_tags', function ($output, $name, $html, $mail_tag = null) {
        if ($name !== 'ticket_id') {
                return $output;
        }

        $form = WPCF7_ContactForm::get_current();
        if (!$form) {
                return $output;
        }

        return cf7cmt_get_ticket_id($form);
}, 10, 4);

/**
 * =============================================
 * SETTINGS & ADMIN PAGE
 * =============================================
 */

function cf7cmt_add_submenu()
{
        add_submenu_page(
                'wpcf7',
                'BB Mail Template',
                'BB Mail Template',
                'manage_options',
                'bb-mail-template',
                'cf7cmt_settings_page'
        );
}
add_action('admin_menu', 'cf7cmt_add_submenu');

function cf7cmt_enqueue_scripts($hook)
{
        if ($hook !== 'contact_page_bb-mail-template') return;
        wp_enqueue_media();
}
add_action('admin_enqueue_scripts', 'cf7cmt_enqueue_scripts');

function cf7cmt_settings_page()
{
        if (!current_user_can('manage_options')) {
                wp_die(__('You do not have sufficient permissions to access this page.'));
        }

        $banner_id     = (int) get_option('cf7cmt_banner_id', 0);
        $banner_url    = $banner_id ? wp_get_attachment_url($banner_id) : '';
        $subject       = get_option('cf7cmt_subject', "We've received your submission.");
        $from_name     = get_option('cf7cmt_from_name', get_bloginfo('name'));
        $from_email    = get_option('cf7cmt_from_email', 'no-reply@' . parse_url(home_url(), PHP_URL_HOST));
        $content       = get_option('cf7cmt_content', "Hi {full_name},\n\nOur team has received your submission and registered it under reference number #{ticket_id}.");
        $footer        = get_option('cf7cmt_footer', 'Copyright © ' . date('Y') . '. All Rights Reserved.');
        $test_email    = get_option('cf7cmt_test_email', get_option('admin_email'));
        $ticket_prefix = get_option('cf7cmt_ticket_prefix', 'EL');

?>
        <div class="wrap" style="max-width:860px;">
                <h1>BB Mail Template Settings plugin by <a href="https://balibranding.com" target="_blank">Bali Branding</a></h1>
                <hr class="wp-header-end">

                <form method="post" action="options.php">
                        <?php settings_fields('cf7cmt_settings_group'); ?>

                        <table class="form-table">

                                <!-- Ticket Prefix -->
                                <tr>
                                        <th scope="row"><label for="cf7cmt_ticket_prefix">Ticket ID Prefix</label></th>
                                        <td>
                                                <input type="text" name="cf7cmt_ticket_prefix" id="cf7cmt_ticket_prefix"
                                                        class="regular-text" value="<?php echo esc_attr($ticket_prefix); ?>"
                                                        maxlength="10" style="width:140px;">
                                                <p class="description">Prefix for ticket ID (example: EL, TKT, REF). Maximum 10 characters. Default: EL</p>
                                        </td>
                                </tr>

                                <!-- Banner -->
                                <tr>
                                        <th scope="row"><label>Banner Image</label></th>
                                        <td>
                                                <div style="display:flex;align-items:flex-start;gap:16px;flex-wrap:wrap;">
                                                        <?php if ($banner_url): ?>
                                                                <img id="cf7cmt-banner-preview" src="<?php echo esc_url($banner_url); ?>"
                                                                        style="max-width:320px;height:auto;border-radius:6px;border:1px solid #ddd;" />
                                                        <?php else: ?>
                                                                <img id="cf7cmt-banner-preview" src="" style="display:none;max-width:320px;height:auto;border-radius:6px;border:1px solid #ddd;" />
                                                        <?php endif; ?>
                                                        <input type="hidden" name="cf7cmt_banner_id" id="cf7cmt_banner_id" value="<?php echo esc_attr($banner_id); ?>">
                                                        <button type="button" class="button" id="cf7cmt-select-banner">Select / Change Banner</button>
                                                        <?php if ($banner_id): ?>
                                                                <button type="button" class="button" id="cf7cmt-remove-banner">Remove</button>
                                                        <?php endif; ?>
                                                </div>
                                                <p class="description">Recommended width: 600px. Will be used at the top of the email.</p>
                                        </td>
                                </tr>

                                <!-- Subject -->
                                <tr>
                                        <th scope="row"><label for="cf7cmt_subject">Email Subject</label></th>
                                        <td>
                                                <input type="text" name="cf7cmt_subject" id="cf7cmt_subject" class="regular-text"
                                                        value="<?php echo esc_attr($subject); ?>">
                                                <p class="description">Ticket ID will be automatically added at the end.</p>
                                        </td>
                                </tr>

                                <!-- From Name -->
                                <tr>
                                        <th scope="row"><label for="cf7cmt_from_name">From Name</label></th>
                                        <td>
                                                <input type="text" name="cf7cmt_from_name" id="cf7cmt_from_name" class="regular-text"
                                                        value="<?php echo esc_attr($from_name); ?>">
                                        </td>
                                </tr>

                                <!-- From Email -->
                                <tr>
                                        <th scope="row"><label for="cf7cmt_from_email">From Email</label></th>
                                        <td>
                                                <input type="email" name="cf7cmt_from_email" id="cf7cmt_from_email" class="regular-text"
                                                        value="<?php echo esc_attr($from_email); ?>">
                                        </td>
                                </tr>

                                <!-- Content -->
                                <tr>
                                        <th scope="row"><label for="cf7cmt_content">Email Content</label></th>
                                        <td>
                                                <textarea name="cf7cmt_content" id="cf7cmt_content" rows="8" class="large-text"
                                                        style="font-family:monospace;"><?php echo esc_textarea($content); ?></textarea>
                                                <p class="description">
                                                        Available variables: <code>{full_name}</code> and <code>{ticket_id}</code><br>
                                                        <strong>Note:</strong> {ticket_id} will appear bold in the email.
                                                </p>
                                        </td>
                                </tr>

                                <!-- Footer -->
                                <tr>
                                        <th scope="row"><label for="cf7cmt_footer">Footer Text</label></th>
                                        <td>
                                                <textarea name="cf7cmt_footer" id="cf7cmt_footer" rows="3" class="large-text"
                                                        style="font-family:monospace;"><?php echo esc_textarea($footer); ?></textarea>
                                        </td>
                                </tr>

                        </table>

                        <?php submit_button('Save Settings'); ?>
                </form>

                <!-- Test Email Section -->
                <div style="background:#f9f9f9;border:1px solid #e0e0e0;border-radius:6px;padding:20px;margin-top:30px;max-width:600px;">
                        <h2 style="margin-top:0;">Send Test Email</h2>
                        <form method="post">
                                <?php wp_nonce_field('cf7cmt_test_email_nonce', 'cf7cmt_test_nonce'); ?>
                                <table class="form-table" style="margin-top:0;">
                                        <tr>
                                                <th scope="row" style="width:160px;">Test Email Address</th>
                                                <td>
                                                        <input type="email" name="cf7cmt_test_email" id="cf7cmt_test_email_input"
                                                                class="regular-text" value="<?php echo esc_attr($test_email); ?>" style="min-width:260px;">
                                                        <button type="submit" name="cf7cmt_send_test" value="1" class="button button-secondary" style="margin-left:10px;">
                                                                Send Test Email
                                                        </button>
                                                </td>
                                        </tr>
                                </table>
                        </form>
                        <p class="description">Save settings first before sending test email.</p>
                </div>
        </div>

        <!-- Media Uploader Script -->
        <script>
                (function($) {
                        var mediaUploader;
                        $('#cf7cmt-select-banner').on('click', function(e) {
                                e.preventDefault();
                                if (mediaUploader) {
                                        mediaUploader.open();
                                        return;
                                }
                                mediaUploader = wp.media({
                                        title: 'Select Banner Image',
                                        button: {
                                                text: 'Use this image'
                                        },
                                        multiple: false
                                });
                                mediaUploader.on('select', function() {
                                        var attachment = mediaUploader.state().get('selection').first().toJSON();
                                        $('#cf7cmt_banner_id').val(attachment.id);
                                        $('#cf7cmt-banner-preview').attr('src', attachment.url).show();
                                        if (!$('#cf7cmt-remove-banner').length) {
                                                $('#cf7cmt-select-banner').after(' <button type="button" class="button" id="cf7cmt-remove-banner">Remove</button>');
                                        }
                                });
                                mediaUploader.open();
                        });

                        $(document).on('click', '#cf7cmt-remove-banner', function(e) {
                                e.preventDefault();
                                $('#cf7cmt_banner_id').val('');
                                $('#cf7cmt-banner-preview').attr('src', '').hide();
                                $(this).remove();
                        });
                })(jQuery);
        </script>
<?php
}

/**
 * =============================================
 * CUSTOM EMAIL FUNCTIONS
 * =============================================
 */

function cf7cmt_send_custom_mail($contact_form)
{
        $submission = WPCF7_Submission::get_instance();
        if (!$submission) return;

        $posted_data = $submission->get_posted_data();

        $ticket_id = cf7cmt_get_ticket_id($contact_form);

        cf7cmt_send_mail([
                'email'     => $posted_data['email'] ?? $posted_data['your-email'] ?? '',
                'full_name' => $posted_data['full-name'] ?? $posted_data['name'] ?? $posted_data['your-name'] ?? 'there',
                'ticket_id' => $ticket_id
        ]);
}
add_action('wpcf7_mail_sent', 'cf7cmt_send_custom_mail', 10, 1);

function cf7cmt_send_mail(array $data): bool
{
        $user_email = sanitize_email($data['email'] ?? '');
        $full_name  = sanitize_text_field($data['full_name'] ?? 'there');

        if (!is_email($user_email)) return false;

        $banner_id    = (int) get_option('cf7cmt_banner_id', 0);
        $banner_url   = $banner_id ? wp_get_attachment_url($banner_id) : '';
        $base_subject = sanitize_text_field(get_option('cf7cmt_subject', "We've received your submission."));
        $from_name    = sanitize_text_field(get_option('cf7cmt_from_name', get_bloginfo('name')));
        $from_email   = sanitize_email(get_option('cf7cmt_from_email', 'no-reply@' . parse_url(home_url(), PHP_URL_HOST)));
        $raw_content  = wp_kses_post(get_option('cf7cmt_content', ''));
        $raw_footer   = wp_kses_post(get_option('cf7cmt_footer', ''));

        $ticket_id = sanitize_text_field($data['ticket_id'] ?? cf7cmt_generate_ticket_id());

        $subject = $base_subject . ' #' . $ticket_id;

        $raw_content = str_replace(
                ['{full_name}', '{ticket_id}'],
                [esc_html($full_name), '<strong>' . esc_html($ticket_id) . '</strong>'],
                $raw_content
        );

        $raw_footer = str_replace(
                ['{full_name}', '{ticket_id}'],
                [esc_html($full_name), esc_html($ticket_id)],
                $raw_footer
        );

        $content_html = nl2br(wp_kses($raw_content, ['strong' => [], 'em' => [], 'br' => [], 'p' => []]));
        $footer_html  = nl2br(wp_kses($raw_footer, ['a' => ['href' => [], 'target' => []], 'strong' => [], 'em' => [], 'br' => [], 'p' => []]));

        $banner_html = $banner_url
                ? '<img src="' . esc_url($banner_url) . '" style="width:100%;height:auto;display:block;" alt="Banner"/>'
                : '';

        $message = '
    <div style="max-width:600px;margin:auto;background:#ffffff;border:1px solid #eeeeee;border-radius:8px;overflow:hidden;">
        ' . $banner_html . '
        <div style="padding:30px;font-family:Arial,sans-serif;line-height:1.6;color:#333;">
            <p style="margin:0 0 20px 0;font-weight:bold;">Hi ' . esc_html($full_name) . ',</p>
            <div style="margin-bottom:30px;">' . $content_html . '</div>
            ' . ($footer_html ? '<div style="margin-top:40px;padding-top:20px;border-top:1px solid #eeeeee;font-size:13px;color:#777;text-align:center;">' . $footer_html . '</div>' : '') . '
        </div>
    </div>';

        $headers = [
                'Content-Type: text/html; charset=UTF-8',
                'From: ' . $from_name . ' <' . $from_email . '>',
        ];

        return wp_mail($user_email, $subject, $message, $headers);
}


add_action('admin_init', function () {

        if (
                isset($_POST['cf7cmt_send_test'], $_POST['cf7cmt_test_email']) &&
                check_admin_referer('cf7cmt_test_email_nonce', 'cf7cmt_test_nonce')
        ) {

                $test_email = sanitize_email($_POST['cf7cmt_test_email']);
                $status = 'error';

                if (is_email($test_email)) {

                        update_option('cf7cmt_test_email', $test_email);

                        $sent = cf7cmt_send_mail([
                                'email'     => $test_email,
                                'full_name' => 'Test User',
                                'ticket_id' => cf7cmt_generate_ticket_id()
                        ]);

                        $status = $sent ? 'success' : 'error';
                }

                // 🔥 REDIRECT DENGAN QUERY
                $redirect_url = add_query_arg(
                        ['page' => 'bb-mail-template', 'test' => $status],
                        admin_url('admin.php')
                );

                wp_redirect($redirect_url);
                exit;
        }
}, 5);
