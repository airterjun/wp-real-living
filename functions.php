<?php

include "blocks/blocks.php";
include "inc/custom-metabox.php";
include "inc/custom-post-type.php";

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


    //CSS

    // wp_enqueue_style('maincss', get_template_directory_uri() . '/dist/app.css', array(), '1.3', 'all');


    //J


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

LOGO

===========================

*/


function tmdr_custom_logo_setup()
{

    $defaults = array(

        'flex-height' => true,

        'flex-width' => true,

        'header-text' => array('site-title', 'site-description'),

    );

    add_theme_support('custom-logo', $defaults);

}

add_action('after_setup_theme', 'tmdr_custom_logo_setup');


/*

===========================

LOGO IN ADMIN LOGIN

===========================

*/


function my_login_logo()
{ ?>

    <style type="text/css">
        #login h1 a,
        .login h1 a {

            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/images/logo.svg);

            height: 150px;

            width: 320px;

            background-size: 210px 150px;

            background-repeat: no-repeat;
        }
    </style>

<?php }

add_action('login_enqueue_scripts', 'my_login_logo');


function my_login_logo_url()
{

    return home_url();

}

add_filter('login_headerurl', 'my_login_logo_url');


function my_login_logo_url_title()
{

    return 'JAIF';

}

add_filter('login_headertitle', 'my_login_logo_url_title');


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


/*

==========================================

CUSTOM FUNCTIONS

==========================================

*/

require get_template_directory() . '/inc/function-custom.php';


/*

==========================================

DIRECT CONTACT FORM 7 TO SUCCESS PAGE

==========================================
*/
function cf7_footer_script()
{ ?>

    <script>
        document.addEventListener('wpcf7mailsent', function (event) {
            location = '/';
        }, false);
    </script>

<?php }

add_action('wp_footer', 'cf7_footer_script');

/*

==========================================

HIDE BUTTON ADD NEW PAGE

==========================================

*/
function custom_role_admin_body_class($classes)
{
    global $current_user;
    foreach ($current_user->roles as $role)
        $classes .= ' role-' . $role;
    return trim($classes);
}

add_filter('admin_body_class', 'custom_role_admin_body_class');




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
        wp_enqueue_style('admin-custom-style', get_template_directory_uri() . '/dist/admin-style.css');
        wp_enqueue_style('admin-block-style', get_template_directory_uri() . '/dist/nolsis.css');
        wp_enqueue_style('block-style', get_template_directory_uri() . '/dist/style-nolsis.css');
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

// function fix_media_library_conflict()
// {
//     wp_enqueue_script(
//         'fix-media-library-conflict',
//         get_template_directory_uri() . '/dist/noConflict.bundle.js',
//         ['jquery'], // Dependensi
//         '1.0.0',
//         true
//     );
// }
// add_action('admin_enqueue_scripts', 'fix_media_library_conflict');

class Custom_Nav_Walker extends Walker_Nav_Menu
{

    // Start List Element
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        $classes = empty($item->classes) ? [] : (array) $item->classes;
        $class_names = join(' ', array_filter(apply_filters('nav_menu_css_class', array_unique($classes), $item, $args)));
        $class_names = esc_attr($class_names);


        $has_children = !empty($args->walker->has_children) ? ' has-children' : 'main';

        $description = '';

        if (!empty($item->description)) {
            $description = esc_html($item->description);
        }

        $output .= '<li class="' . $class_names . $has_children . '">';

        $output .= '<a href="' . esc_url($item->url) . '" class="menu-title ' . $has_children . '-link-wrapper" data-desc="' . $description . '">';
        $output .= '<div class="link-inner-wrapper">' . wp_kses_post($item->title) . '</div>';


        if (!empty($args->walker->has_children)) {
            $output .= '
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.61 14.01">
                    <path d="M13.31 14.01 0 .71.71 0l12.6 12.6L25.9 0l.71.71-13.3 13.3z" style="fill:#3d3d3d;stroke-width:0"/>
                </svg>
            ';
        }

        $output .= '</a>';
    }

    // Close List Element
    function end_el(&$output, $item, $depth = 0, $args = null)
    {
        $output .= '</li>';
    }

    // Submenu Wrapper Start
    function start_lvl(&$output, $depth = 0, $args = null)
    {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class='sub-menu'>\n";
    }

    // Submenu Wrapper End
    function end_lvl(&$output, $depth = 0, $args = null)
    {
        $indent = str_repeat("\t", $depth);
        $output .= "$indent</ul>\n";
    }
}



class FooterCustomNav extends Walker_Nav_Menu
{

    // Start List Element
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        $classes = empty($item->classes) ? [] : (array) $item->classes;
        $class_names = join(' ', array_filter(apply_filters('nav_menu_css_class', array_unique($classes), $item, $args)));
        $class_names = esc_attr($class_names);


        $has_children = !empty($args->walker->has_children) ? ' has-children' : 'main';

        $description = '';

        if (!empty($item->description)) {
            $description = esc_html($item->description);
        }

        $output .= '<li class="' . $class_names . $has_children . '">';

        $output .= '<a href="' . esc_url($item->url) . '" class="menu-title ' . $has_children . '-link-wrapper" data-desc="' . $description . '">';
        $output .= '<div class="link-inner-wrapper">' . wp_kses_post($item->title) . '</div>';


        if (!empty($args->walker->has_children)) {
            $output .= '
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.61 14.01">
                    <path d="M13.31 14.01 0 .71.71 0l12.6 12.6L25.9 0l.71.71-13.3 13.3z" style="fill:#3d3d3d;stroke-width:0"/>
                </svg>
            ';
        }

        $output .= '</a>';
    }

    // Close List Element
    function end_el(&$output, $item, $depth = 0, $args = null)
    {
        $output .= '</li>';
    }

    // Submenu Wrapper Start
    function start_lvl(&$output, $depth = 0, $args = null)
    {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class='sub-menu'>\n";
    }

    // Submenu Wrapper End
    function end_lvl(&$output, $depth = 0, $args = null)
    {
        $indent = str_repeat("\t", $depth);
        $output .= "$indent</ul>\n";
    }
}
