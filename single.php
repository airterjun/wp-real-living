<?php get_header(); ?>
<?php
$featured = get_the_post_thumbnail_url(get_the_ID(), 'full');
?>
<div class="article-detail">
    <div class="top-detail">
        <?php get_template_part('template-parts/single/post-date-category'); ?>
    </div>
    <div class="title">
        <h1><?php the_title() ?></h1>
        <div class="post-number">01.</div>
    </div>
    <div class="featured-banner v-parallax">
        <img src="<?php echo esc_url($featured) ?>" alt="<?php echo esc_attr(get_the_title()) ?>">
    </div>
    <div class="main-detail grid">
        <div class="share">
            <h3><?php _e('Bagikan artikel', 'sherly') ?></h3>
            <a href="#">Facebook</a>
            <a href="#">Telegram</a>
            <a href="#">Whatsapp</a>
            <a href="#">Twitter</a>
        </div>
        <div class="content">
            <?php the_content(); ?>
        </div>

        <?php get_template_part('template-parts/related-articles') ?>
    </div>
</div>
<?php get_footer(); ?>