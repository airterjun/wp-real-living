<?php

add_action('init', 'register_dynamic_component');





function render_event_listing($attr)
{
    $limit = isset($attr['limit']) ? esc_html($attr['limit']) : '';
    $title = isset($attr['title']) ? esc_html($attr['title']) : '';
    ob_start();


    // $args = array(
    //     'posts_per_page' => 3
    // );
    // $query = new WP_Query($args);


    // if ($query->have_posts()):


    // endif;

    $posts = [
        [
            "date" => "25/7/24",
            "title" => "New Panoramika Website Launched",
            "description" => "We are excited to announce the launch of the new Panoramika company website, providing comprehensive information about our innovative hospitality offerings.",
            "slug" => "/about-us",
            "new_tab" => false,
            "thumb" => "/images/news_points_a_1.jpg"
        ],

        [
            "date" => "30/4/24",
            "title" => "Aurora Cabins IG Exceeds 4K+ Followers",
            "description" => "Aurora Cabins' Instagram account has surpassed 4,000 organic followers, reflecting our growing online presence and engagement with guests.",
            "slug" => "https://instagram.com/aurora.cabins",
            "new_tab" => true,
            "thumb" => "/images/news_points_b_1.jpg"
        ],

        [
            "date" => "14/3/24",
            "title" => "Monthly Occupancy Rate Surpasses 80%",
            "description" => "By the fourth month of operation, Panoramika's properties achieved a monthly occupancy rate of over 80%, demonstrating our growing appeal and guest satisfaction.",
            "slug" => "/services",
            "new_tab" => false,
            "thumb" => "/images/news_points_d_1.jpg"
        ],


        [
            "date" => "21/12/23",
            "title" => "Operational Profitability Achieved in Three Months",
            "description" => "Panoramika reached operational profitability within the first three months of operation, highlighting our efficient management and strategic location choices.",
            "slug" => "/about-us",
            "new_tab" => false,
            "thumb" => "/images/news_points_c_1.jpg"
        ]
    ]


        ?>

    <section class="grid grid-col-card latest-post">
        <div class="grid-col-card__s1">
            Latest <strong>News</strong>
        </div>
        <div class="group">
            <?php foreach ($posts as $key => $post):
                ?>

                <div class="card news">
                    <div class="card__content news">
                        <div class="card__content--date">
                            <?= $post["date"] ?>
                        </div>
                        <p class="title">
                            <?= $post["title"] ?>
                        </p>
                        <p class="desc">
                            <?= $post["description"] ?>
                        </p>
                        <div class="round-button inside">
                            <div class="button news">
                                <div class="original button__styled">
                                    <a href="<?= $post["slug"] ?>" <?php echo $post["new_tab"] ? 'target="_blank"' : "" ?>>Learn
                                        more</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <polyline points="14 19 21 12 14 5" fill="none" stroke="#000" stroke-miterlimit="10">
                                        </polyline>
                                        <line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" stroke-miterlimit="10">
                                        </line>
                                    </svg>
                                </div>
                                <div class="copied button__styled">
                                    <a href="<?= $post["slug"] ?>" <?php echo $post["new_tab"] ? 'target="_blank"' : "" ?>>Learn
                                        more</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <polyline points="14 19 21 12 14 5" fill="none" stroke="#000" stroke-miterlimit="10">
                                        </polyline>
                                        <line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" stroke-miterlimit="10">
                                        </line>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure class="news-thumb v-parallax no-scale">
                        <img src="<?= get_template_directory_uri() ?><?= $post["thumb"] ?>" />
                    </figure>
                </div>

            <?php endforeach; ?>
        </div>
        <div class="scale--corner --white" data-trigger="bottom"></div>
    </section>

    <?php

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
            'editor_script' => 'nolsis-block',
            'render_callback' => 'render_event_listing',
        )
    );
}