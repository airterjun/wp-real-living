<div class="slider-wrapper">
    <?php
            global $destinationDetail;
            $destinationDetail = array();
            $args = array(
            'post_type'      => 'destination', // Specify the post type you want to query
            'posts_per_page' => 30,     // Number of posts to display
            );

            $query = new WP_Query( $args );

            if ( $query->have_posts() ) {
            while ( $query->have_posts() ) {
            $query->the_post();
            array_push($destinationDetail, ["title" => get_the_title(), "excerpt" => get_the_content(), "id" => get_the_ID()])
    ?>

    <div class="slider-banner">
        <div class="content">
            <h3><?php the_title() ?></h3>
        </div>
        <?php echo get_the_post_thumbnail(); ?>
    </div>

    <?php
            }
            wp_reset_postdata(); // Restore original post data
            } else {
            // No posts found
            }
    ?>

</div>


