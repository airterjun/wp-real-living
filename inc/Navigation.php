<?php
function site_menu()
{

    add_theme_support('menus');
    register_nav_menu('main', 'Primary Menu');
    register_nav_menu('booking-menu', 'Booking Menu');
    register_nav_menu('footer', 'Footer Menu');

    register_nav_menu('footer-cafe', 'Cafe');
    register_nav_menu('footer-bistro', 'Bistro');
    register_nav_menu('footer-trattoria', 'Trattoria');

}

add_action('init', 'site_menu');



function venue_menu($pos)
{
    wp_nav_menu([
        'theme_location' => $pos,
        'walker' => new class extends Walker_Nav_Menu {
        function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
        {


            $description = '';

            if (!empty($item->description)) {
                $description = esc_html($item->description);
            }


            $classes = empty($item->classes) ? [] : (array) $item->classes;
            $class_names = join(' ', array_filter(apply_filters('nav_menu_css_class', array_unique($classes), $item, $args)));
            $class_names = esc_attr($class_names);

            $icon = '';
            if ($item->menu_order == 1) { // menu_order starts from 1 for the first item
                $icon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21"><g clip-path="url(#a)"><path fill="#2D2D2D" d="M17.93 20.68V4.76L2.58 20.07.61 18.1 15.92 2.76H0L2.79 0h17.89v17.89l-2.76 2.79h.01Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20.68v20.68H0z" /></clipPath></defs></svg>';
            }


            $output .= '<li class="' . $class_names . '"><a data-desc="' . $description . '" target="' . $item->target . '" href="' . esc_html($item->url) . '" class="menu-title"><div class="label">' . esc_html($item->title) . '</div>' . $icon . '</a></li>';
        }
        }
    ]);
}