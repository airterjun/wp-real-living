<?php

add_action('wp_ajax_nopriv_filter','filter_ajax');
add_action('wp_ajax_filter','filter_ajax');

function filter_ajax() {
	$taxonomy = $_POST['blog_category'];
	$keyword  = $_POST['keyword'];

	$tax_query = array('relation' => 'AND');

	$args = array(
		'post_type'     =>'blogs',

        'post_status'   =>'publish',

        'posts_per_page'=>-1,

        'meta_key'      => 'date',

		    'orderby'       => 'meta_value',

        'order'         => 'DESC',
	);

	if( isset( $_POST['taxonomy'] ) )
		$args['tax_query'] = array(
			array(
				'taxonomy' => 'blog_category',
				'field'    => 'id',
				'terms'    => $_POST['taxonomy']
			)
		);

	if(isset($_GET['keyword'])) {
        $keyword = sanitize_text_field( $_GET['keyword'] );
        $keyword_query = new WP_Query( array(
            'post_type'      => 'blogs',
            'posts_per_page' => -1,
            'tax_query'      => $tax_query,
            's'              => $_POST['keywword']
        ) );
    } else {
        $keyword_query = new WP_Query( $args );
    }

	$query = new WP_Query($args);
	?>
	<div class="row">
	<?php

	if($query->have_posts()) :

	    while($query->have_posts()) : $query->the_post();
	    	?>

	    	<div class="col-12 col-md-6 col-lg-4">
                <div class="blog-content">
                    <a href="<?php the_permalink() ?>" class="blog-link">
                        <img src="<?php the_field('image_thumbnail') ?>" alt="<?php the_title(); ?>">
                        <p class="sub-text"><?php the_field('date') ?> • <span class="term-tax">
                          <?php 

                          $term_array = array();

                          $term_list = wp_get_post_terms($post->ID, 'blog_category', array("fields" => "all"));

                          foreach($term_list as $term_single) {

                              $term_array[] = $term_single->name ; //do something here

                          }

                          echo implode(", ",$term_array);

                          ?>
                      	</span></p>
                        <h2 class="item-title"><?php the_title(); ?></h2>
                        <p class="item-desc"><?php
                            $value = wp_trim_words(get_field('description'), 160);
                            echo $value;
                            ?></p>
                    </a>
                </div>
            </div>
            <?php
	    endwhile;
	endif;
	wp_reset_postdata();
	?>
	</div>
	<?php
	die();
}