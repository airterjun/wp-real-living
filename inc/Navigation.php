<?php
function site_menu()
{

    add_theme_support('menus');
    register_nav_menu('main', 'Primary Menu');
    register_nav_menu('footer', 'Footer');
    register_nav_menu('quick', 'Quick footer');
    register_nav_menu('support', 'support footer');
    register_nav_menu('social', 'Social footer');

}

add_action('init', 'site_menu');



class Menu_Thumb extends Walker_Nav_Menu
{

    // Start List Element
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        $post_id = !empty($item->object_id) ? $item->object_id : 0; // Ambil ID dari post/page

        $output .= '<div class="thumb-post">';
        $output .= get_the_post_thumbnail($post_id, 'full');
        $output .= '</div>';
    }

}



function show_menu_name($position)
{
    $menu_location = $position;
    $locations = get_nav_menu_locations();

    // Pastikan lokasi ada dan menu terkait tersedia
    if (isset($locations[$menu_location])) {
        $menu_id = $locations[$menu_location];
        $menu_obj = wp_get_nav_menu_object($menu_id);

        // Tampilkan nama menu jika berhasil ditemukan
        if ($menu_obj) {
            echo '<h4>' . esc_html($menu_obj->name) . '</h4>';
        }
    }

}


function add_svg_to_menu_title($title, $item, $args, $depth)
{
    // Cek kalau ini menu dari 'main' location
    if ($args->theme_location == 'main') {
        // SVG Icon (ganti isi path sesuai kebutuhan)
        $svg_icon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 45"><path fill="#BA9D63" fill-rule="evenodd" d="M.86 0h43.31v43.32h-2.42V2.42H.86V0Z" clip-rule="evenodd" /><path fill="#BA9D63" fill-rule="evenodd" d="m.004 42.465 42.1-42.11 1.712 1.71-42.1 42.11-1.712-1.71Z" clip-rule="evenodd" /></svg>';

        // Tambahkan SVG setelah title
        $title .= ' ' . $svg_icon;
    }
    return $title;
}
add_filter('nav_menu_item_title', 'add_svg_to_menu_title', 10, 4);
