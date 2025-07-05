<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="theme-color">

    <link rel="icon" href="<?php echo get_template_directory_uri() ?>/images/favicon.ico" sizes="32x32" />
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri() ?>/images/apple-touch-icon.ico" />

    <?php wp_head(); ?>


    <title><?php the_title() ?></title>
    <!-- <meta property="og:title" content="<?php the_title() ?>">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="description" content="<?php the_excerpt() ?>">
    <meta property="og:description" content="<?php the_excerpt() ?>"> -->

    <link rel="stylesheet" href="https://use.typekit.net/pkj7fwh.css">


    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2YKGKS6G0L"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2YKGKS6G0L');
</script>
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
                <div class="time" id="time-ticker">00:00 GMT</div>
            </div>

            <a href="<?php echo get_option("siteurl"); ?>" class="logo" aria-label="We Are Real">
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

            <div class="close-menu" id="close-menu">
                <div class="line"></div>
                <div class="line"></div>

            </div>
        </div>

    </header>

    <nav class="header-menu" role="navigation">

        <div class="menu-wrapper">
            <?php

            wp_nav_menu([
                'container_class' => 'menu-list',
                'theme_location' => 'main',
            ]);
            ?>


        </div>

    </nav>

    <?php
    $mainClass = implode(' ', array_map(function ($word) {
        return "class-$word";
    }, explode(' ', $custom_class)));

    ?>
    <main class="main-container <?php echo $mainClass ?>" role="main">