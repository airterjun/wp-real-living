<?php


function page_class_element()
{
    add_meta_box(
        'page-class',          // Unique ID
        'Page Class Style',         // Box title
        'input_page_class',    // Content callback, must be a function
        'page',                    // Post type,
        "side"
    );
}
add_action('add_meta_boxes', 'page_class_element');


function input_page_class($post)
{
    // Add a nonce field for security
    wp_nonce_field('nonce_', 'discover_stars');

    // Retrieve the current value, if available
    $custom_value = get_post_meta($post->ID, 'page_class_element', true);

    // Display the form field
    echo '<label for="my_custom_field">Enter custom value:</label>';
    echo '<input type="text" id="my_custom_field" name="my_custom_field" value="' . esc_attr($custom_value) . '" />';
}

function my_save_metabox_data($post_id)
{
    // Verify the nonce before proceeding
    if (!isset($_POST['discover_stars']) || !wp_verify_nonce($_POST['discover_stars'], 'nonce_')) {
        return;
    }

    // Prevent auto-saves from triggering the save
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Check the user’s permissions
    if (!current_user_can('edit_page', $post_id)) {
        return;
    }

    // Save or update the meta value in the database
    if (isset($_POST['my_custom_field'])) {
        update_post_meta($post_id, 'page_class_element', sanitize_text_field($_POST['my_custom_field']));
    }
}
add_action('save_post', 'my_save_metabox_data');

