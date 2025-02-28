<?php
require __DIR__ . '/classes/custom-post-type-widget-blocks.php';
require __DIR__ . '/classes/image-button.php';

include "dynamic-component/dynamic-component.php";


new ImageButton();


function website_enqueue_block_editor_assets()
{

    wp_enqueue_script('media-editor');  // Pastikan media-editor sudah dimuat
    wp_enqueue_script('lodash');
    wp_enqueue_script(
        'nolsis-block',
        get_template_directory_uri() . '/dist/nolsis.bundle.js',
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-block-editor', 'lodash'),
        true
    );
}

function website_block_parser($source_block, $parsed_block)
{
    $core_blocks = [
        'core/group',
        'core/column',
        'core/columns',
        'website/privacy-policy',
        'website/video-button',
    ];

    if (
        in_array($source_block['blockName'], $core_blocks, true) &&
        !is_admin() &&
        !wp_is_json_request()
    ) {
        $parsed_block['attrs']['hasChild'] = 1;
        $parsed_block['innerBlocks'] = array_map(function ($item) {
            $item['hasParent'] = true;

            $item['innerBlocks'] = array_map(function ($child) {
                $child['hasParent'] = true;

                return $child;
            }, $item['innerBlocks']);

            return $item;
        }, $parsed_block['innerBlocks']);
    }

    return $parsed_block;
}


add_action('init', function () {

    function wpdocs_embed_handler_forbes($matches, $attr, $url, $rawattr)
    {
        $embed = sprintf(
            '<iframe src="http%1$s://website.%2$s/website/iframe"></iframe>',
            esc_attr($matches[1]),
            esc_attr($matches[2])
        );

        return $embed;
    }


    register_block_style('core/table', [
        'name' => 'bottom-border',
        'label' => 'Bottom Border',
    ]);

    register_block_style('core/spacer', [
        'name' => 'bg-white',
        'label' => 'Background White',
    ]);

    register_block_style('core/spacer', [
        'name' => 'bg-primary',
        'label' => 'Background Primary',
    ]);

    register_block_style('website/right-image', [
        'name' => 'less-space',
        'label' => 'Less Space',
    ]);

    register_block_style('core/image', [
        'name' => 'article-image',
        'label' => 'Article Image'
    ]);

    register_block_style('core/paragraph', [
        'name' => 'article',
        'label' => 'Article',
    ]);

    register_block_style('core/paragraph', [
        'name' => 'terms',
        'label' => 'Terms',
    ]);

    register_block_style('core/heading', [
        'name' => 'article',
        'label' => 'Article',
    ]);

    register_block_style('website/right-image-float', [
        'name' => 'right-image-float-larger',
        'label' => 'right-image-float-larger',
    ]);

    register_block_style('core/spacer', [
        'name' => 'spacer-with-pattern',
        'label' => 'With Pattern',
    ]);

    register_block_style('core/columns', [
        'name' => 'section',
        'label' => 'section'
    ]);

    register_block_style('core/image', [
        'name' => 'image-full-width',
        'label' => 'Full Width',
    ]);

    // wp_enqueue_style(
    //     'website-plugins-style',
    //     plugins_url('style.css', __FILE__),
    //     [],
    //     filemtime(plugin_dir_path(__FILE__) . 'style.css')
    // );

    add_post_type_support('experiences', 'thumbnail');


    flush_rewrite_rules();
});


function my_deregister_styles()
{
    wp_deregister_style('dashicons');
    wp_deregister_style('thickbox');
    wp_deregister_style('buttons');
    wp_deregister_style('imgareaselect');

    // wp_dequeue_style('wp-block-library');
    // wp_dequeue_style('wp-block-library-theme');

    wp_deregister_script('react');
    // wp_deregister_script('jquery');
    wp_deregister_script('utils');

}


add_action('wp_print_styles', 'my_deregister_styles', 100);


add_filter('get_site_icon_url', '__return_false');

// Add Custom Rewrite Rules


add_filter('render_block_data', 'website_block_parser', 10, 2);

add_action('admin_enqueue_scripts', 'website_enqueue_block_editor_assets');


add_action('enqueue_block_assets', function () {
    wp_enqueue_style(
        'nolsis-style',
        get_template_directory_uri() . '/dist/app.css',
        array(),
        '1.1.1'
    );

});