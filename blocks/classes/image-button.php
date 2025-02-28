<?php

use Timber\Timber;

class ImageButton {
    public function __construct() {
        add_action( 'init', [ $this, 'register_block_type' ] );
    }

    public function register_block_type() {
        register_block_type('allseteventhire/image-button', [
            'render_callback' => [ $this, 'render_callback' ],
		    'style' => 'allseteventhire-style',
		    'editor_script' => 'allseteventhire-block'
        ]);
    }

    public function render_callback( $attributes ) {
        global $post;
        $args = [
            'post_type'        => 'accommodations',
            'posts_per_page'   => '-1',
            'post_status'      => 'publish',
            'order'            => 'DESC',
            'orderby'          => 'menu_order'
        ];

        if ( $post->post_type === 'accommodations' ) {
            $args['post__not_in'] = [ $post->ID ];
        }

        $recentPosts = Timber::get_posts( apply_filters( 'allseteventhire/list-post/widget_posts_args', $args ) );

        Timber::$locations = __DIR__ . '/../views';

        return Timber::compile('posts/image-button.twig', [
            'posts' => $recentPosts
        ]);
    }
}