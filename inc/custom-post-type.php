<?php


function add_category_to_custom_post_type()
{
    global $cpt;
    $cpt_slug = [];
    foreach ($cpt as $t) {

        $slug = 'bali-' . $t["slug"] . '-categories';

        register_taxonomy(
            $slug,
            $t["slug"],
            [
                'label' => $t["title"] . ' Category',
                'hierarchical' => true,
                'public' => true,
                'show_ui' => true,
                'show_admin_column' => true,
                'rewrite' => ['slug' => $slug],
                'show_in_rest' => true,
            ]
        );
    }
}
add_action('init', 'add_category_to_custom_post_type');


function __custom_post_type()
{

    global $cpt;

    foreach ($cpt as $t) {

        // Set UI labels for Custom Post Type
        $labels = array(
            'name' => _x($t["title"], 'Post Type General Name', 'twentysixteen'),
            'singular_name' => _x($t["title"] . 's', 'Post Type Singular Name', 'twentysixteen'),
            'menu_name' => __($t["title"], 'twentysixteen'),
            'parent_item_colon' => __('Parent ' . $t["title"], 'twentysixteen'),
            'all_items' => __('All ' . $t["title"], 'twentysixteen'),
            'view_item' => __('View ' . $t["title"] . ' Member', 'twentysixteen'),
            'add_new_item' => __('Add New ' . $t["title"], 'twentysixteen'),
            'add_new' => __('Add New', 'twentysixteen'),
            'edit_item' => __('Edit ' . $t["title"], 'twentysixteen'),
            'update_item' => __('Update ' . $t["title"], 'twentysixteen'),
            'search_items' => __('Search ' . $t["title"], 'twentysixteen'),
            'not_found' => __('Not Found', 'twentysixteen'),
            'not_found_in_trash' => __('Not found in Trash', 'twentysixteen'),
        );

        // Set other options for Custom Post Type
        $slug = $t["slug"];

        if (isset($t["rewrite_slug"]))  $slug = $t["rewrite_slug"];
        $args = array(
            'label' => $t["title"],
            'description' => $t["title"],
            'labels' => $labels,
            'rewrite' => array('slug' => $slug),
            'supports' => $t['supports'],
            'hierarchical' => false,
            'public' => true,
            'menu_icon' => 'dashicons-id',
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'show_in_admin_bar' => true,
            'menu_position' => 5,
            'can_export' => true,
            'has_archive' => false,
            'exclude_from_search' => false,
            'publicly_queryable' => true,
            'capability_type' => 'post',
            'show_in_rest' => true
        );


        if (isset($t['classic']))
            $args['show_in_rest'] = false;

        // Registering your Custom Post Type
        register_post_type($t["slug"], $args);
    }
}


function disable_gutenberg_for_cpt($use_block_editor, $post_type)
{


    global $cpt;

    foreach ($cpt as $t) {
        if (isset($t['classic']) && $post_type === $t['slug']) {
            return false;
        }
    }

    return $use_block_editor;
}
add_filter('use_block_editor_for_post_type', 'disable_gutenberg_for_cpt', 10, 2);



add_action('init', '__custom_post_type', 0);



function cpt_listig($id, $limit = -1, callable $template)
{

    $args = array(
        'post_type' => $id, // Specify the post type you want to query
        'post_status' => 'publish',
        'posts_per_page' => $limit     // Number of posts to display
    );

    $query = new WP_Query($args);

    if ($query->have_posts()):
        while ($query->have_posts()):
            $query->the_post();
            if ($template) $template();
        endwhile;
    endif;

    wp_reset_postdata();
}



function get_post_type_category($cpt)
{
    $terms = get_the_terms(get_the_ID(), $cpt);

    if ($terms && !is_wp_error($terms)) {
        echo '<div class="post-categories">';
        foreach ($terms as $term) {

            echo '<a href="' . esc_url(get_term_link($term)) . '">';
            echo esc_html($term->name);
            echo '</a>';
        }
        echo '</div>';
    }
}
