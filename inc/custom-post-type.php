<?php


function post_type_category($id)
{
    // Mendaftarkan Custom Taxonomy (Kategori)
    register_taxonomy('category_' . $id, $id, array(
        'labels' => array(
            'name' => __('Categories', 'textdomain'),
            'singular_name' => __('Category', 'textdomain'),
            'search_items' => __('Search Categories', 'textdomain'),
            'all_items' => __('All Categories', 'textdomain'),
            'edit_item' => __('Edit Category', 'textdomain'),
            'update_item' => __('Update Category', 'textdomain'),
            'add_new_item' => __('Add New Category', 'textdomain'),
            'new_item_name' => __('New Category Name', 'textdomain'),
        ),
        'hierarchical' => true, // True untuk kategori seperti post (parent-child)
        'show_ui' => true,
        'show_in_rest' => true, // Untuk mendukung editor blok Gutenberg
        'rewrite' => array('slug' => 'category-' . $id),
    ));
}

function __custom_post_type()
{


    $cpt = [
        [
            "slug" => "venue",
            "title" => "Venues",
            "name" => "Venues"
        ],

        [
            "slug" => "career",
            "title" => "Career",
            "name" => "Career"
        ]
    ];



    foreach ($cpt as $t) {

        // Set UI labels for Custom Post Type
        $labels = array(
            'name' => _x($t["title"], 'Post Type General Name', 'twentysixteen'),
            'singular_name' => _x($t["title"], 'Post Type Singular Name', 'twentysixteen'),
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
        $args = array(
            'label' => __($t["title"], 'twentysixteen'),
            'description' => __('Ad Astra Law Group ' . $t["title"], 'twentysixteen'),
            'labels' => $labels,
            'rewrite' => array('slug' => $t["slug"]),
            'supports' => array('title', 'editor', 'thumbnail', 'revisions', 'page-attributes'),
            'hierarchical' => false,
            'public' => true,
            'menu_icon' => 'dashicons-id',
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'show_in_admin_bar' => true,
            'menu_position' => 5,
            'can_export' => true,
            'has_archive' => true,
            'exclude_from_search' => false,
            'publicly_queryable' => true,
            'capability_type' => 'post'
        );


        if ($t['slug'] == 'venue') {
            $args['show_in_rest'] = true;
            $args['template'] = array(array('nolsis/venue-detail'));
        } else {
            $args['taxonomies'] = array('custom_' . $t['slug']);
            post_type_category($t['slug']);
        }


        // Registering your Custom Post Type
        register_post_type($t["slug"], $args);

    }

}


add_action('init', '__custom_post_type', 0);


function nolsis_set_default_blocks_for_cpt($editor_settings, $post)
{
    if ($post->post->post_type === 'venue') {
        // $editor_settings['templateLock'] = true;
    }
    return $editor_settings;
}
add_filter('block_editor_settings_all', 'nolsis_set_default_blocks_for_cpt', 10, 2);


function __get_post_type($id, $limit = -1)
{

    $args = array(
        'post_type' => $id, // Specify the post type you want to query
        'posts_per_page' => $limit     // Number of posts to display
    );

    return new WP_Query($args);


}
