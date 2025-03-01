</main>
<footer id="footer" class="footer">
    <div class="footer-content container">
        <div class="footer-content-top">
            <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 137 74">
                    <path fill="#EDEDED"
                        d="M114.44 0 0 24.82l37.6-3.47-27.33 51.97 20.81-14.16 5.65-20.13L114.44 0ZM63.93 18.93 38.27 33.6l3.54-12.63 22.12-2.04Z" />
                    <path fill="#EDEDED"
                        d="m56.28 42.99-4.64-1.5 8.65-7.4-14.67 2.56-10.15 21.63 17.05-3.01-5.89-4.88 9.65-7.4ZM111.43 34.09l-5.8-1.47 8.77-7.67-14.67 2.22-12.34 22.37 19.18-3.1-7.33-4.98 12.19-7.37ZM55.78 54.86l9.02-4.72 29.83 23.18-31.21-39.73-7.64 21.27ZM81.72 50.64l28.83-47.63-30.71 34.34-11.9-4.09 13.78 17.38ZM124.15 26.51l-8.27-1.88 3.57 6.67-12.22 38.26 29.14-53.58-12.22 10.53ZM96.96 63.33c-2.16 0-3.92-1.76-3.92-3.92s1.76-3.92 3.92-3.92 3.92 1.76 3.92 3.92-1.76 3.92-3.92 3.92Zm0-7.27a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7Z" />
                    <path fill="#EDEDED"
                        d="M95.68 57.22H97c.86 0 1.48.31 1.48 1.19 0 .66-.37 1.06-.95 1.2l1.08 1.84H98l-1.02-1.79h-.77v1.79h-.53v-4.23Zm1.24 2c.66 0 1.03-.27 1.03-.82 0-.55-.37-.75-1.03-.75h-.71v1.57h.71Z" />
                </svg>
            </a>
            <div class="footer-content-top-menus">
                <div class="footer-content-top-menus--item">
                    <?php
                    show_menu_name('quick');
                    wp_nav_menu([
                        'theme_location' => 'quick',
                        'container' => false
                    ]);
                    ?>
                </div>
                <div class="footer-content-top-menus--item">
                    <?php
                    show_menu_name('support');
                    wp_nav_menu([
                        'theme_location' => 'support',
                        'container' => false
                    ]);
                    ?>
                </div>

                <div class="footer-content-top-menus--item">
                    <?php
                    show_menu_name('social');
                    wp_nav_menu([
                        'theme_location' => 'social',
                        'container' => false
                    ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="footer-content-bottom">
            <div class="footer-content-bottom-a">
                Copyright ©2025. Peavey Electronics Corporation. All Rights Reserved.
            </div>

            <div class="footer-content-bottom-b">
                Website by <a href="https://matanyaniv.com" target="_blank">Bali Branding</a>
            </div>
        </div>
    </div>
</footer>

<link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/style.css' ?>" />
<link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/dist/app.css?v=1.2' ?>" />
<?php wp_footer(); ?>
</body>

</html>