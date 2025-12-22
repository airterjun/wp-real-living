<?php
$cpt = array();


$requires = [
    "blocks/blocks.php",
    "inc/custom-post-type.php",
];


foreach ($requires as $file) {
    require_once $file;
};




$arg = array(
    "slug" => "team",
    "title" => "Team",
    "name" => "Team",
    'supports' => array('title', 'thumbnail', 'editor', 'page-attributes'),
);


array_push($cpt, $arg);

add_action("init", function () {
    add_theme_support('post-thumbnails');
});


/*

===========================

INCLUDE SCRIPTS

===========================

*/


function website_style()
{

    wp_enqueue_script('app-script', get_template_directory_uri() . '/dist/script.bundle.js', array(), '2.0.2', true);
}


add_action('wp_enqueue_scripts', 'website_style');

/*

===========================

ACTIVATE MENUS

===========================

*/


require get_template_directory() . '/inc/Navigation.php';


/*

===========================

ADMIN BAR

===========================

*/


show_admin_bar(false);


/*

==========================================

INCLUDE FUNCTION

==========================================

*/


require get_template_directory() . '/inc/function-walker.php';



add_filter('wp_lazy_loading_enabled', '__return_false');



function add_defer_attribute($tag, $handle)
{
    // List of scripts to defer
    $scripts_to_defer = array('Grow_Form-frontend');

    foreach ($scripts_to_defer as $defer_script) {
        if ($defer_script === $handle) {
            return str_replace(' src', ' defer="defer" src', $tag);
        }
    }
    return $tag;
}
add_filter('script_loader_tag', 'add_defer_attribute', 10, 2);


function my_custom_editor_styles()
{

    if (is_admin()) {
        wp_enqueue_style('admin-block-style', get_template_directory_uri() . '/dist/block.css');
    }
}
add_action('enqueue_block_assets', 'my_custom_editor_styles');



function enable_page_excerpts()
{
    add_post_type_support('page', 'excerpt');
}
add_action('init', 'enable_page_excerpts');


function add_open_graph_tags()
{
    if (is_single() || is_page()) {
        global $post;
        if (has_post_thumbnail($post->ID)) {
            $thumbnail_id = get_post_thumbnail_id($post->ID);
            $thumbnail_url = wp_get_attachment_image_url($thumbnail_id, 'full');
            echo '<meta property="og:image" content="' . esc_url($thumbnail_url) . '" />';
        }
    }
}
add_action('wp_head', 'add_open_graph_tags');

function fix_media_library_conflict()
{
    $host = $_SERVER['HTTP_HOST'];

    if ($host === 'localhost') {
        return;
    }

    wp_enqueue_script(
        'fix-media-library-conflict',
        get_template_directory_uri() . '/dist/noConflict.bundle.js',
        ['jquery'], // Dependensi
        '1.0.0',
        true
    );
}
add_action('admin_enqueue_scripts', 'fix_media_library_conflict');




function wp_add_ga4_tracking_code()
{
    // Dapatkan domain / host saat ini
    $current_host = $_SERVER['HTTP_HOST'];

    // Disable di localhost atau domain dev/staging
    $disabled_hosts = ['localhost', '127.0.0.1', 'dev.', 'staging.'];

    // Cek apakah domain mengandung salah satu kata di atas
    foreach ($disabled_hosts as $disabled) {
        if (stripos($current_host, $disabled) !== false) {
            return; // Jangan load script
        }
    }

    // Kalau bukan localhost atau staging, load GA4
?>
    <!-- Google Analytics 4 (only active on live site) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-2YKGKS6G0L"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-2YKGKS6G0L');
    </script>
<?php
}
add_action('wp_head', 'wp_add_ga4_tracking_code');

// Additional meta box for set new header on for new layout

// Add meta box
function wp_add_header_option_metabox()
{
    add_meta_box(
        'wp_header_option_metabox',        // ID
        'Header',                  // Title
        'wp_render_header_option_metabox', // Callback
        'page',                            // Post type
        'side',                            // Context (side, normal, advanced)
        'default'                          // Priority
    );
}
add_action('add_meta_boxes', 'wp_add_header_option_metabox');

// Render meta box content
function wp_render_header_option_metabox($post)
{
    $value = get_post_meta($post->ID, '_use_new_header', true);
    wp_nonce_field('wp_save_header_option', 'wp_header_option_nonce');
?>
    <p>
        <label>
            <input type="checkbox" name="use_new_header" value="1" <?php checked($value, '1'); ?> />
            Use new header
        </label>
    </p>
<?php
}

// Save meta box value
function wp_save_header_option_metabox($post_id)
{
    // Verify nonce
    if (
        !isset($_POST['wp_header_option_nonce']) ||
        !wp_verify_nonce($_POST['wp_header_option_nonce'], 'wp_save_header_option')
    ) {
        return;
    }

    // Skip autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Check user permission
    if (!current_user_can('edit_page', $post_id)) {
        return;
    }

    // Update or delete meta
    if (isset($_POST['use_new_header'])) {
        update_post_meta($post_id, '_use_new_header', '1');
    } else {
        delete_post_meta($post_id, '_use_new_header');
    }
}
add_action('save_post', 'wp_save_header_option_metabox');
