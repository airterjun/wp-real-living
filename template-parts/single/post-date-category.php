<div class="detail-header__date item"><?php echo get_the_date('l, j M Y'); ?> </div>
<?php
$categories = get_the_category(); // Mendapatkan daftar kategori
if (!empty($categories)):
    foreach ($categories as $category):
        ?>
        <a class="item" href="<?php echo esc_url(get_category_link($category->term_id)); ?>">
            <?php echo esc_html($category->name); ?>
        </a>
        <?php
    endforeach;

endif;
?>