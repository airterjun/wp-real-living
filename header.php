<!DOCTYPE html>
<html lang="en-lang">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="theme-color">

    <link rel="icon" href="<?php echo get_template_directory_uri() ?>/images/favicon.png" sizes="32x32" />
    <link rel="icon" href="<?php echo get_template_directory_uri() ?>/images/favicon-apple.png" sizes="192x192" />
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri() ?>/images/favicon-apple.png" />

    <?php wp_head(); ?>


    <title><?php the_title() ?></title>
    <meta property="og:title" content="<?php the_title() ?>">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="description" content="<?php the_excerpt() ?>">
    <meta property="og:description" content="<?php the_excerpt() ?>">

    <link rel="stylesheet" href="https://use.typekit.net/pkj7fwh.css">

</head>

<?php
$custom_class = get_post_meta(get_the_ID(), 'page_class_element', true);
?>



<body <?= body_class() ?> id="main-website-wrapper">
    <header class="main-header <?php echo $custom_class; ?>" id="main-header">
        <div class="inner">
            <div class="timer">
                <div class="location">London Time</div>
                <div class="line"></div>
                <div class="time">14:30 GMT</div>
            </div>

            <a href="<?php echo get_option("siteurl"); ?>" class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 52">
                    <g fill="#937E4E" clip-path="url(#a)">
                        <path
                            d="M0 51.73V0h25.26v26.47c0 13.95-11.31 25.26-25.26 25.26ZM31.04 22.86V0H53.9c0 12.63-10.24 22.86-22.86 22.86ZM31.04 28.87H53.9v22.86c-12.63 0-22.86-10.24-22.86-22.86Z" />
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h53.9v51.73H0z" />
                        </clipPath>
                    </defs>
                </svg>
            </a>

            <div class="burger">
                <div class="inner-line" id="burger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </div>

    </header>

    <div class="header-menu grid">
        <a href="<?php echo get_option("siteurl"); ?>" class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 62">
                <g clip-path="url(#abzxczxcas)">
                    <path fill="#919191"
                        d="M9.44 4.33h.16a9.393 9.393 0 0 1 6.95 3.31c2.11 2.37 3.23 5.45 3.14 8.62 0 .82-.08 1.86-.16 3.23a10.19 10.19 0 0 1-1.78 4.36l-.08.08c-.92 1.83-2.18 3.48-3.71 4.84a6.188 6.188 0 0 1-3.55 1.13h-.98V4.33h.01Zm0 30.18h2.18c2.09 0 2.95.48 3.22.73.28.25 1.13 1.29 2.26 4.52l.65 2.17c.41 1.28.71 2.6.88 3.93.17.98.25 1.86.4 2.66-.05 2.32.06 4.63.32 6.94v.08c.4 1.73.91 3.43 1.53 5.09l.49 1.21h12.26L32.1 59.1c-.78-1.42-1.44-2.91-1.96-4.44-.58-1.94-1.03-3.9-1.38-5.89-.38-2.21-.92-4.39-1.61-6.53v-.08c-.82-2.05-1.89-4-3.19-5.79a18.81 18.81 0 0 0-4.12-4.28l.24-.16a29.12 29.12 0 0 0 7.26-7.26c1.59-2.31 2.43-5.05 2.43-7.86 0-5.32-1.13-9.2-3.47-11.46-1.75-1.9-3.9-3.38-6.3-4.34h-.08a21.7 21.7 0 0 0-7.25-1H0V61.8h9.52V34.51h-.08Z" />
                </g>
                <defs>
                    <clipPath id="abzxczxcas">
                        <path fill="#fff" d="M0 0h33.64v61.83H0z" />
                    </clipPath>
                </defs>
            </svg>
        </a>
        <div class="menu-wrapper">
            <div class="close-menu" id="close-menu">
                <div class="inner">
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
            <?php

            wp_nav_menu([
                'container_class' => 'menu-list',
                'theme_location' => 'main',
            ]);
            ?>


            <?php

            wp_nav_menu([
                'container_class' => 'menu-list reserve-list',
                'theme_location' => 'booking-menu'
            ]);
            ?>

        </div>

    </div>

    <?php
    $mainClass = implode(' ', array_map(function ($word) {
        return "class-$word";
    }, explode(' ', $custom_class)));

    ?>
    <main class="main-container <?php echo $mainClass ?>">