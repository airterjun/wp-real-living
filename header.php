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

    <style>
        :root {
            --color-gold: #7F6E41;
            --color-dark: #231E14;
            --header-size: 95.6;
            --color-green: #93ea4e;
            --mobile-outer-padding: 20;
            --base-size: 1920;
            --mobile-browser: 876;
            --wrapper-padding: 20;
            --cubic-bezier: cubic-bezier(0.87, 0, 0.13, 1);
            --g-border: 2.6px solid var(--color-gold);
            --g-padding-container: 84;
            --g-outer-padding: 330;
            --font-main: "proxima-nova", sans-serif;
            --font-secondary: "neue-haas-grotesk-display", sans-serif;
            --font-medium: 500;
            --font-semi-bold: 600;
            --font-bold: 700;
            --font-extra: 800;
        }

        @media only screen and (max-width: 850px) {
            :root {
                --header-size: 52;
                --g-padding-container: 20;
            }
        }

        #main-website-wrapper {
            .editor-note {
                font-family: var(--font-main);
            }
        }
    </style>

    <title><?php the_title() ?></title>

    <!-- <link rel="stylesheet" href="https://use.typekit.net/pkj7fwh.css" crossorigin> -->

    <script>
        (function(d) {
            var config = {
                    kitId: 'pkj7fwh',
                    scriptTimeout: 3000,
                    async: true
                },
                h = d.documentElement,
                t = setTimeout(function() {
                    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
                }, config.scriptTimeout),
                tk = d.createElement("script"),
                f = false,
                s = d.getElementsByTagName("script")[0],
                a;
            h.className += " wf-loading";
            tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
            tk.async = true;
            tk.onload = tk.onreadystatechange = function() {
                a = this.readyState;
                if (f || a && a != "complete" && a != "loaded") return;
                f = true;
                clearTimeout(t);
                try {
                    Typekit.load(config)
                } catch (e) {}
            };
            s.parentNode.insertBefore(tk, s)
        })(document);
    </script>

    <?php
    $custom_class = get_post_meta(get_the_ID(), 'page_class_element', true);

    $use_new_header = get_post_meta(get_the_ID(), '_use_new_header', true);
    ?>


<body <?= body_class() ?> id="main-website-wrapper">
    <header class="main-header <?php echo $custom_class; ?>" id="main-header">
        <div class="inner">
            <div class="round-button  primary-button button-partner">
                <a href="/contact/">
                    Partner with Us

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 45">
                        <path fill="#BA9D63" fill-rule="evenodd" d="M.86 0h43.31v43.32h-2.42V2.42H.86V0Z" clip-rule="evenodd" />
                        <path fill="#BA9D63" fill-rule="evenodd" d="m.004 42.465 42.1-42.11 1.712 1.71-42.1 42.11-1.712-1.71Z" clip-rule="evenodd" />
                    </svg>
                </a>
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