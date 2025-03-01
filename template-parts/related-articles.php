<?php
$current_post_id = get_the_ID();
$current_categories = wp_get_post_categories($current_post_id);
$current_tags = wp_get_post_tags($current_post_id);
$tag_ids = array();
if ($current_tags) {
    foreach ($current_tags as $tag) {
        $tag_ids[] = $tag->term_id;
    }
}

$args = array(
    'category__in' => $current_categories,
    'tag__in' => $tag_ids,
    'post__not_in' => array($current_post_id),
    'posts_per_page' => 4,
    'orderby' => 'rand',
);

$i = 2;

$related_posts = new WP_Query($args);

if ($related_posts->have_posts()): ?>
    <div class="related-posts">
        <h3><?php _e("artikel terkait", "sherly") ?></h3>
        <ul>
            <?php while ($related_posts->have_posts()):
                $related_posts->the_post();
                $featured_thumb = get_the_post_thumbnail_url($post->ID, 'full');
                ?>
                <li>
                    <a href="<?php the_permalink(); ?>">
                        <div class="num">0<?php echo $i; ?>.</div>
                        <div class="featured">
                            <img src="<?php echo esc_url($featured_thumb) ?>" alt="<?php echo esc_attr(get_the_title()) ?>">
                        </div>
                    </a>
                    <div class="date-cat">
                        <?php get_template_part('template-parts/single/post-date-category'); ?>
                    </div>
                    <a href="<?php the_permalink(); ?>">
                        <h2><?php the_title(); ?></h2>
                    </a>
                </li>
                <?php $i++; endwhile; ?>
        </ul>
    </div>
    <?php wp_reset_postdata(); ?>
<?php else: ?>
    <div class="related-posts">
        <h3><?php _e("No related posts found.", "sherly") ?></h3>
    </div>
<?php endif; ?>