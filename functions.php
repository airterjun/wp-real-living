<?php

include "blocks/blocks.php";

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

    wp_enqueue_script('app-script', get_template_directory_uri() . '/dist/script.bundle.js', array(), '1.0.2', true);
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
    wp_enqueue_script(
        'fix-media-library-conflict',
        get_template_directory_uri() . '/dist/noConflict.bundle.js',
        ['jquery'], // Dependensi
        '1.0.0',
        true
    );
}
// add_action('admin_enqueue_scripts', 'fix_media_library_conflict');