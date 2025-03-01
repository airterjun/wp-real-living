<section class="post-listing listing-all-articles">
    <div class="header grid">
        <h1><?php the_title() ?></h1>
    </div>
    <div class="listing">
        <?php

        $query_args = [
            'post_type' => 'post',
            'posts_per_page' => -1,
        ];
        $query = new WP_Query($query_args);

        if ($query->have_posts()):

            $no = 1;

            while ($query->have_posts()):

                $query->the_post();

                $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
                ?>

                <div class="post">
                    <div class="article-num">
                        <?php echo $no < 10 ? '0' . $no : $no ?>.
                    </div>
                    <div class="thumbnail">
                        <img src="<?php echo esc_url($thumbnail_url) ?>" alt="<?php echo esc_attr(get_the_title()) ?>">
                    </div>
                    <div class="detail">

                        <div class="detail-header">
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
                        </div>
                        <a href="<?php echo get_permalink() ?>" class="post-url">
                            <h2><?php the_title() ?></h2>
                        </a>
                    </div>
                </div>

                <?php
                $no++;
            endwhile;
        endif;

        wp_reset_postdata();

        ?>

        </>


</section>