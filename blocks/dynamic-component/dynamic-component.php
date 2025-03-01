<?php

add_action('init', 'register_dynamic_component');





function render_event_listing($attr)
{

    ob_start();


    $query_args = [
        'post_type' => 'post',
        'posts_per_page' => 5,
    ];
    $query = new WP_Query($query_args);


    $i = 1;
    if ($query->have_posts()): ?>
        <div class="post-listing">
            <div class="post-heading grid">
                <h2 class="h2">Artikel</h2>
            </div>
            <div class="latest-post-wrapper">
                <ul>
                    <?php while ($query->have_posts()):
                        $query->the_post(); ?>
                        <li class="grid article">
                            <div class="article_a">
                                <div class="article_a_a h3">0<?php echo $i; ?>.</div>
                                <div class="article_a_b desktop"><?php echo get_the_date('l, j M Y'); ?></div>
                                <div class="article_a_c desktop">Berita — DetikSulsel</div>
                            </div>
                            <div class="article_b">
                                <div class="article_b_a">
                                    <?php
                                    $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
                                    echo '<img src="' . esc_url($thumbnail_url) . '" alt="' . esc_attr(get_the_title()) . '">';
                                    ?>
                                </div>

                                <div class="article_b_b">
                                    <div class="mobile article_b_b_a">
                                        <?php get_template_part('template-parts/single/post-date-category'); ?>
                                    </div>
                                    <h2 class="s3"><?php the_title() ?></h2>
                                    <a href="<?php echo esc_url(get_permalink()); ?>">
                                        Baca Article
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15">
                                            <path fill="#fff"
                                                d="M8.75 1.475c0 .814-1.25 3.275-1.25 3.275S6.25 2.29 6.25 1.475 6.808 0 7.499 0c.69 0 1.25.66 1.25 1.475h.001ZM1.475 6.25c.814 0 3.275 1.25 3.275 1.25S2.29 8.75 1.475 8.75 0 8.19 0 7.5s.66-1.25 1.475-1.25ZM6.25 13.525c0-.814 1.25-3.275 1.25-3.275s1.25 2.46 1.25 3.275S8.19 15 7.5 15s-1.25-.66-1.25-1.475ZM13.525 8.75c-.814 0-3.275-1.25-3.275-1.25s2.46-1.25 3.275-1.25S15 6.81 15 7.5s-.66 1.25-1.475 1.25ZM7.5 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </li>
                        <?php $i++; endwhile; ?>
                </ul>

                <div class="button-more grid">
                    <div class="button-wrapper">
                        <a href="/artikel">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15">
                                <path fill="#fff"
                                    d="M8.75 1.475c0 .814-1.25 3.275-1.25 3.275S6.25 2.29 6.25 1.475 6.808 0 7.499 0c.69 0 1.25.66 1.25 1.475h.001ZM1.475 6.25c.814 0 3.275 1.25 3.275 1.25S2.29 8.75 1.475 8.75 0 8.19 0 7.5s.66-1.25 1.475-1.25ZM6.25 13.525c0-.814 1.25-3.275 1.25-3.275s1.25 2.46 1.25 3.275S8.19 15 7.5 15s-1.25-.66-1.25-1.475ZM13.525 8.75c-.814 0-3.275-1.25-3.275-1.25s2.46-1.25 3.275-1.25S15 6.81 15 7.5s-.66 1.25-1.475 1.25ZM7.5 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                            </svg>
                            baca selengkapnya
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15">
                                <path fill="#fff"
                                    d="M8.75 1.475c0 .814-1.25 3.275-1.25 3.275S6.25 2.29 6.25 1.475 6.808 0 7.499 0c.69 0 1.25.66 1.25 1.475h.001ZM1.475 6.25c.814 0 3.275 1.25 3.275 1.25S2.29 8.75 1.475 8.75 0 8.19 0 7.5s.66-1.25 1.475-1.25ZM6.25 13.525c0-.814 1.25-3.275 1.25-3.275s1.25 2.46 1.25 3.275S8.19 15 7.5 15s-1.25-.66-1.25-1.475ZM13.525 8.75c-.814 0-3.275-1.25-3.275-1.25s2.46-1.25 3.275-1.25S15 6.81 15 7.5s-.66 1.25-1.475 1.25ZM7.5 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    <?php else: ?>

    <?php endif;

    // Reset query
    wp_reset_postdata();

    return ob_get_clean();

}


function summarize($text, $length, $append = '...', $splitOnWholeWords = true)
{
    if (strlen($text) <= $length)
        return $text;
    $split = 0;
    if ($splitOnWholeWords) {
        $i = 0;
        $lplus1 = $length + 1;
        while (($i = strpos($text, ' ', $i + 1)) < $lplus1) {
            if ($i === false)
                break;
            $split = $i;
        }
    } else {
        $split = $length;
    }
    return substr($text, 0, $split) . $append;
}

function register_dynamic_component()
{

    register_block_type(
        'nolsis/latest-news',
        array(
            'api_version' => 3,
            'attributes' => array(
                'title' => array(
                    'type' => 'string',
                    'default' => "Latest News",
                )
            ),
            'render_callback' => 'render_event_listing',
        )
    );


    register_block_type(
        'nolsis/article-listing',
        array(
            'api_version' => 3,
            'render_callback' => 'articles_listings',
        )
    );
}



function articles_listings()
{
    ob_start();

    get_template_part("template-parts/articles-listings");

    wp_reset_postdata();

    return ob_get_clean();
}