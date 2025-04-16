<!DOCTYPE html>
<html lang="en-lang">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0">
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

    <div class="header-menu">

        <div class="menu-wrapper">
            <?php

            wp_nav_menu([
                'container_class' => 'menu-list',
                'theme_location' => 'main',
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













        -----



        <?php
        /*
        Template Name: Reservation
        */
        get_header();
        ?>

        <style>
            :root {
                --primary-color: #48aa69;
                --secondary-color: #333;
            }

            [v-cloak] {
                display: none
            }

            .main-wrapper * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }

            .main-wrapper {
                margin: 200px 3rem;
            }

            h1 {
                font-size: 50px;
                color: #333;
            }

            .availability {
                display: flex;
                justify-content: left;
                align-items: center;
                background-color: #333;
                gap: 1rem;
                padding: 1rem 1.5rem;
                border-radius: 5px;
                margin-top: 1rem;
            }

            .availability .search-btn {
                background-color: var(--primary-color);
                margin-top: .5rem;
                border-radius: 5px;
                padding: .75rem 1.5rem;
            }

            .availability .search-btn:hover {
                background-color: rgba(72, 170, 105, 0.8);
            }

            .steps {
                display: flex;
                margin-top: .5rem;
                gap: .5rem;
            }

            .step {
                gap: .8rem;
                display: flex;
                align-items: center;
                flex-grow: 1;
                border: 1px solid var(--primary-color);
                padding: .3rem 1rem;
                border-radius: 5px;
                user-select: none;
            }

            .step div {
                background-color: var(--primary-color);
                color: #fff;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: bold;
                border: 1px solid #40FF69;
            }

            .step p {
                color: #333;
                font-weight: bold;
                font-size: 18px;
                text-transform: uppercase;
            }

            .step.active {
                background-color: var(--primary-color);
                color: #fff;
            }

            .step.active div {
                background-color: #fff;
                color: var(--primary-color);
            }

            .step.active p {
                color: #fff;
            }

            .empty,
            .loading {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f1f1f1;
                padding: 1.5rem 1rem;
                margin-top: 1rem;
                border-radius: 5px;
            }

            .content {
                display: grid;
                grid-template-columns: 4fr 1.5fr;
                gap: 1rem;
                margin-top: 1rem;
            }

            .list .head {
                background-color: #333;
                color: #fff;
                padding: 0.5rem 0.5rem 0.5rem 1rem;
            }

            .list .body {
                padding: 0 0 1rem 0;
            }

            .list .contact {
                padding: 1.5rem;
                border: 1px solid #f1f1f1;
                border-radius: 5px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            }

            .list .contact hr {
                margin: 1rem 0;
            }

            .list .contact form {
                display: grid;
                gap: 1rem;
                grid-template-columns: 1fr 1fr;
            }

            .list .contact .input input {
                border: 1px solid grey;
                margin-bottom: 0;
            }

            .list .contact .input input:focus {
                border: 1px solid var(--primary-color);
            }

            .list .contact .input label {
                color: #333;
                font-weight: bold;
            }

            .list .contact .input span {
                color: red;
            }

            .list .contact .input select {
                padding: 0.5rem 1rem;
                border: 1px solid grey;
                border-radius: 5px;
                outline: none;
                font-size: 18px;
                background-color: rgba(255, 255, 255, 0.9);
                color: #333;
                cursor: pointer;
                width: 100%;
            }

            .list .contact .input select:focus {
                background-color: #fff !important;
                border: 1px solid var(--primary-color);
            }

            .list .contact .consent {
                display: flex;
                align-items: center;
                gap: .5rem;
                margin-top: 2rem;
                user-select: none;
            }

            .list .contact .consent label,
            .list .contact .consent a {
                font-size: 18px;
                cursor: pointer;
            }

            .list .contact .err-msg {
                font-size: 16px;
                color: red;
                margin-top: 0;
            }

            .list .contact .consent input {
                width: 20px;
                height: 20px;
                cursor: pointer;
            }

            .rightbar {
                background-color: #f1f1f1;
                padding: 1.5rem;
            }

            .rightbar__msg {
                color: #333;
                font-weight: bold;
                text-align: center;
                font-size: 18px;
            }

            .rightbar__item {
                /* border: 1px solid #48aa69; */
                border-bottom: 1px solid grey;
                padding: 1rem 0;
            }

            .rightbar__item div {
                display: flex;
                gap: 1rem;
            }

            .rightbar__item .total {
                text-align: right;
                font-size: 20px;
                color: var(--primary-color);
                font-weight: bold;
                margin-top: .5rem;
            }

            .rightbar__dates {
                display: flex;
                gap: 1rem;
            }

            .rightbar__dates div {
                display: flex;
                flex-direction: column;
                gap: 0rem;
            }

            .rightbar__dates b {
                color: var(--primary-color);
                font-weight: normal;
            }

            .rightbar__summary {
                width: 100%;
                margin-top: 1rem;
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding-bottom: 1rem;
                border-bottom: 1px solid grey;
            }

            .rightbar__summary * {
                width: 100%;
            }

            .rightbar__summary .total {
                color: var(--primary-color);
                font-weight: bold;
                font-size: 20px;
            }

            .input input,
            .input input:focus {
                width: 100%;
                padding: 0.5rem 1rem;
                border: 1px solid var(--primary-color);
                border-radius: 5px;
                outline: none;
                font-size: 18px;
                background-color: rgba(255, 255, 255, 0.9);
                color: #333;
            }

            .input label {
                color: var(--primary-color);
                font-weight: bold;
            }

            /* room  */

            .room__wrapper {
                margin-top: 1rem;
            }

            .room {
                display: flex;
                gap: 1rem;
                border: 1px solid #f1f1f1;
                border-radius: 5px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            }

            .room hr {
                margin: .5rem 0;
            }

            .room__cover img {
                width: 400px;
                height: 100%;
                object-fit: cover;
                border-radius: 5px 0 0 5px;
            }

            .room__content {
                flex: 1;
                padding: 1rem 1rem 1rem 0;
            }

            .room__content h4 {
                font-size: 22px;
                color: #333;
                font-weight: 500;
            }

            .room__metric {
                display: flex;
                gap: 1.5rem;
                margin-top: .5rem;
            }

            .room__metric p {
                color: rgba(0, 0, 0, 0.7);
            }

            .room__price {
                text-align: right;
                margin-top: -1rem;
            }

            .room__price p {
                color: rgba(0, 0, 0, 0.7);
            }

            .room__action {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .room__action p {
                color: var(--primary-color);
                cursor: pointer;
                font-size: 18px;
                user-select: none;
            }

            .room__action p:hover {
                font-weight: bold;
            }

            .room__action>div {
                display: flex;
                gap: 1rem;
            }

            .room__select {
                display: flex;
                flex-direction: column;
                justify-content: baseline;
                align-items: center;
            }

            .room__select select {
                padding: 0.5rem 2rem;
                border: 1px solid var(--primary-color);
                border-radius: 5px;
                outline: none;
                font-size: 14px;
                background-color: rgba(255, 255, 255, 0.9);
                color: #333;
                width: max-content;
                text-align: left;
                margin-top: 0;
                cursor: pointer;
            }

            .room__select select:focus {
                background-color: #fff !important;
            }

            .room__details {
                border: 1px solid #f1f1f1;
                padding: 1rem;
                border-radius: 0px 0px 5px 5px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
                margin-top: .5rem;
            }

            .room__details hr {
                margin: .5rem 0 .8rem 0;
            }

            .room__tabs {
                display: flex;
                gap: 1.5rem;
            }

            .room__tabs .tabSelected {
                font-weight: bold;
            }

            .room__tab p {
                color: var(--primary-color);
                cursor: pointer;
            }

            .room__tab p:hover {
                font-weight: bold;
            }

            .room__amenities {
                display: flex;
                flex-wrap: wrap;
                gap: .5rem;
                flex-direction: column;
                max-height: 150px;
            }

            .room__photos {
                display: flex;
                gap: 1rem;
                margin-top: 1rem;
                flex-wrap: wrap;
            }

            .room__photos div {
                width: 200px;
                height: 200px;
                border: 1px solid #f1f1f1;
                border-radius: 5px;
                overflow: hidden;
                cursor: pointer;
            }

            .room__photos img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .book-btn {
                background-color: var(--primary-color) !important;
                padding: 1rem 2rem;
                border-radius: 5px !important;
                color: #fff;
                cursor: pointer;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: bold;
                text-transform: uppercase;
                margin-top: 1rem;
            }

            .book-btn:hover {
                background-color: rgba(72, 170, 105, 0.8) !important;
            }

            .book-btn:disabled {
                background-color: grey !important;
                color: #333;
                cursor: not-allowed;
            }

            /* Modal  */
            .modal {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 10000;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .modal__wrapper {
                width: 70%;
                background-color: #fff;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
            }

            .modal__header {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                padding: .5rem 1rem .5rem 1rem;
                background-color: var(--primary-color);
                border-radius: 5px 5px 0 0;
                color: #fff;
            }

            .modal__header .close-btn {
                width: 30px;
                height: 30px;
                background-color: #600;
                cursor: pointer;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .modal__body {
                padding: 1rem;
                background-color: #fff;
                border-radius: 0 0 5px 5px;
            }

            .modal__payview iframe {
                height: 85dvh;
            }

            .modal__imageview {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                max-height: 80vh;
                overflow-y: auto;
            }

            .imageview__preview {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
            }

            .imageview__preview img {
                width: 850px;
                height: 600px;
                object-fit: scale-down !important;
                border-radius: 5px !important;
            }

            .imageview__gallery {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                padding: 0 2rem 1rem 2rem;
            }

            .imageview__gallery div {
                width: 100px;
                height: 100px;
                border: 1px solid #f1f1f1;
                border-radius: 5px;
                overflow: hidden;
                cursor: pointer;
            }

            .imageview__gallery img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .terms {
                margin-top: 1rem;
                padding: 1rem;
                border: 1px solid #f1f1f1;
                border-radius: 5px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            }

            /* Datepicker  */
            .air-datepicker {
                border-color: var(--primary-color) !important;
                width: 380px;
            }

            .air-datepicker-body--day-name {
                color: var(--primary-color);
            }

            .air-datepicker-cell.-current- {
                color: #4a4a4a;
            }

            .air-datepicker-cell.-selected-,
            .air-datepicker-cell.-selected-:hover,
            .air-datepicker-cell>.-selected- {
                background-color: var(--primary-color) !important;
                color: #fff;
            }

            .air-datepicker-nav {
                padding: .5rem .5rem;
            }

            .air-datepicker-nav--title {
                font-size: 20px;
            }

            .air-datepicker-body--day-name {
                font-size: 16px;
            }

            .air-datepicker-cell {
                font-size: 18px;
            }

            .air-datepicker-nav--action>svg {
                filter: invert(1);
                scale: 1.5;
            }

            .air-datepicker--content {
                padding: .5rem;
            }

            /* Mobile  */

            @media screen and (max-width: 768px) {
                .main-wrapper {
                    margin: 150px 10px;
                }

                h1 {
                    font-size: 30px;
                }

                .availability {
                    display: flex;
                    flex-direction: column;
                    gap: 0rem;
                }

                .availability input {
                    width: 100%;
                }

                .search-btn {
                    flex-basis: 100%;
                    width: 100%;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                }

                .content {
                    display: flex;
                    flex-direction: column;
                }

                .modal__wrapper {
                    width: 100%;
                }

                .modal__payview iframe {
                    height: 80dvh;
                }

                .room__wrapper {
                    margin-top: 1rem;
                }

                .room {
                    flex-direction: column;
                    gap: 0rem;
                }

                .room__cover img {
                    width: 100%;
                    height: 300px;
                    border-radius: 5px 5px 0 0;
                }

                .room__content {
                    padding: 1rem;
                }

                .room__metric {
                    flex-direction: column;
                    gap: 1rem;
                }

                .room__action {
                    flex-direction: column;
                    gap: 1rem;
                    flex-flow: column-reverse;
                }

                .room__details {
                    padding: 1rem;
                }

                .room__amenities {
                    max-height: fit-content;
                }

                .room__photos {
                    flex-direction: column;
                    gap: 1rem;
                }

                .room__photos div {
                    width: 100%;
                    height: 300px;
                }

                .list .contact form {
                    grid-template-columns: 1fr;
                }

                .list .contact .input select {
                    width: 100%;
                }

                .list .contact .consent {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .list .contact .consent label,
                .list .contact .consent a {
                    font-size: 16px;
                    text-wrap: wrap;
                }
            }
        </style>

        <div id="book-content" class="main-wrapper" v-cloak @mounted="mounted">
            <div class="modal" v-show="showModal" @click="backdropClicked($event)">
                <div class="modal__wrapper">
                    <div class="modal__header">
                        <h4 style="color: #fff">{{modalTitle}}</h4>
                        <div class="close-btn" @click="showModal = false"><i class="fa fa-times"></i></div>
                    </div>
                    <div class="modal__body">

                        <div class="modal__imageview" v-show="modalSection == 'image'">
                            <div class="imageview__preview">
                                <img :src="imageView.current" alt="Room Image" />
                            </div>
                            <div class="imageview__gallery">
                                <div v-for="(image, index) in imageView.gallery" :key="index"
                                    @click="imageView.current = image">
                                    <img :src="image" alt="Room Image">
                                </div>
                            </div>
                        </div>

                        <div class="modal__payview" v-show="modalSection == 'payment'">
                            <iframe id="paymentIframe" frameborder="0" style="width: 100%;"></iframe>
                            <p>You can find this page again through your email/whatsapp.</p>
                        </div>

                    </div>
                </div>
            </div>

            <h1>Reservation</h1>
            <hr style=" margin-top: 1rem;">

            <section class="availability">
                <div class="input">
                    <label><i class="fa fa-calendar"></i> Check In</label>
                    <input type="text" placeholder="Check In" id="ci-date" />
                </div>
                <div class="input">
                    <label><i class="fa fa-calendar"></i> Check Out</label>
                    <input type="text" placeholder="Check Out" id="co-date" />
                </div>
                <button class="search-btn" @click="searchAvailability" :disabled="isLoading">Search</button>
            </section>

            <section class="steps" v-if="!isMobile()">
                <div class="step" :class="{active: step == 1}" style="cursor: pointer;" @click="step = 1">
                    <div>1</div>
                    <p>Choose a room</p>
                </div>
                <div class="step" :class="{active: step == 2}">
                    <div>2</div>
                    <p>Check out</p>
                </div>
            </section>

            <section class="empty" v-if="isRoomEmpty() && !isLoading && pageLoaded">
                <h4>Sorry, there are no available rooms for your selected dates, please modify your dates above and
                    search again.</h4>
            </section>

            <section class="loading" v-if="isLoading">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="150"
                    height="150" style="shape-rendering: auto; display: block; background: transparent;"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g>
                        <circle cx="50" cy="50" fill="none" stroke="#48aa69" stroke-width="10" r="35"
                            stroke-dasharray="164.93361431346415 56.97787143782138">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                dur="1.5625s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        </circle>
                        <g></g>
                    </g>
                </svg>
            </section>

            <section class="content" v-if="!isLoading && !isRoomEmpty()">
                <div class="list" v-if="step == 1">
                    <div class="head">
                        <p>Available Rooms</p>
                    </div>
                    <div class="body">

                        <div class="room__wrapper" v-for="(room, index) in rooms" :key="index">
                            <div class="room">
                                <div class="room__cover" @click="viewImage(room)" style="cursor:pointer">
                                    <img :src="room.roomTypePhotos[0]?.image" alt="Room Image">
                                </div>
                                <div class="room__content">
                                    <h4>{{room.roomTypeName}}</h4>

                                    <div class="room__metric">
                                        <div>
                                            <p>Maximum Occupancy</p>
                                            <p><i class="fa fa-user"></i> {{room.maxGuests}} Person(s)</p>
                                        </div>
                                        <div>
                                            <p>Minimum Stay</p>
                                            <p><i class="fa fa-moon"></i> 1 Night(s)</p>
                                        </div>
                                    </div>

                                    <div class="room__price">
                                        <p>Price for {{room.nights}} night(s)</p>
                                        <h4>{{room.formattedRate}}</h4>
                                    </div>

                                    <hr>

                                    <div class="room__action">
                                        <p @click="room.showDetails = !room.showDetails; room.tabIndex = 0">
                                            <i class="fa fa-info-circle" v-if="!room.showDetails"></i>
                                            <i class="fa fa fa-chevron-circle-up" v-else></i>
                                            See Details
                                        </p>
                                        <div>
                                            <div class="room__select">
                                                Adults
                                                <select name="" id="" v-model="room.payload.adults"
                                                    @change="updateOption(room, $event, 'adult')">
                                                    <option v-for="i in room.adultOption" :key="i" :value="i">{{i}}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="room__select">
                                                Children
                                                <select name="" id="" v-model="room.payload.children"
                                                    @change="updateOption(room, $event, 'child')">
                                                    <option :value="0" selected>0</option>
                                                    <option v-for="i in room.childOption" :key="i" :value="i">{{i}}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="room__select">
                                                Rooms
                                                <select name="" id="" v-model="room.payload.rooms"
                                                    @change="toggleSelectedRoom(room, $event)">
                                                    <option :value="0" selected>0</option>
                                                    <option v-for="i in room.roomsAvailable" :key="i" :value="i">{{i}}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="room__details" v-if="room.showDetails">
                                <div class="room__tabs">
                                    <div class="room__tab" @click="room.tabIndex = 0"
                                        :class="{tabSelected: room.tabIndex == 0}">
                                        <p>Description</p>
                                    </div>
                                    <div class="room__tab" @click="room.tabIndex = 1"
                                        :class="{tabSelected: room.tabIndex == 1}">
                                        <p>Amenities</p>
                                    </div>
                                    <div class="room__tab" @click="room.tabIndex = 2"
                                        :class="{tabSelected: room.tabIndex == 2}">
                                        <p>Photos</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="room__description" v-show="room.tabIndex == 0">
                                    <p v-html="room.roomTypeDescription"></p>
                                </div>
                                <div class="room__amenities" v-show="room.tabIndex == 1">
                                    <p v-for="amenity in room.roomTypeFeatures"><i class="fa fa-check-circle"></i>
                                        {{amenity}}</p>
                                </div>
                                <div class="room__photos" v-show="room.tabIndex == 2">
                                    <div v-for="photo in room.roomTypePhotos">
                                        <img :src="photo.image" alt="Room Image" @click="viewImage(room, photo)" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="list" v-if="step == 2">
                    <div class="contact">
                        <h3>Contact Information</h3>
                        <hr>
                        <form>
                            <div class="input">
                                <label><span>*</span>First Name</label>
                                <input type="text" placeholder="First Name" v-model="customer.firstName">
                                <p class="err-msg" v-show="errors?.firstName">{{errors?.firstName}}</p>
                            </div>
                            <div class="input">
                                <label><span>*</span>Last Name</label>
                                <input type="text" placeholder="Last Name" v-model="customer.lastName">
                                <p class="err-msg" v-show="errors?.lastName">{{errors?.lastName}}</p>
                            </div>
                            <div class="input">
                                <label><span>*</span>Email</label>
                                <input type="email" placeholder="Email Address" v-model="customer.email">
                                <p class="err-msg" v-show="errors?.email">{{errors?.email}}</p>
                            </div>
                            <div class="input">
                                <label><span>*</span>Phone</label>
                                <input type="text" placeholder="Phone Number" v-model="customer.phone">
                                <p class="err-msg" v-show="errors?.phone">{{errors?.phone}}</p>
                            </div>
                            <div class="input">
                                <label><span>*</span>Select Your Country</label>
                                <select v-model="customer.country">
                                    <option value="" selected disabled>Select Country</option>
                                    <option v-for="country in countryList" :key="country.code" :value="country.code">
                                        {{country.name}}</option>
                                </select>
                                <p class="err-msg" v-show="errors?.country">{{errors?.country}}</p>
                            </div>
                        </form>
                        <div class="consent">
                            <input type="checkbox" id="agree" v-model="customer.agree">
                            <label for="agree">I agree to the </label> <a @click.stop="showTerms = !showTerms">terms and
                                conditions</a>
                        </div>
                        <p class="err-msg" v-show="errors?.agree">{{errors?.agree}}</p>
                        <div class="terms" v-show="showTerms">
                            <b>Check-in/Check-out Policies</b>
                            <p>This property has the following check-in and check-out times and policies</p>
                            <p>Check-In: {{getPolicy().checkInTime}}</p>
                            <p>Check-Out: {{getPolicy().checkOutTime}}</p>
                            <p>Late Check-out Hour: {{getPolicy().lateCheckoutTime}}</p>
                            <p>Late Check-out Fees: {{getPolicy().lateCheckoutFee}}%</p>
                            <p>Late Check-out (after {{getPolicy().checkOutTime}} and before
                                {{getPolicy().lateCheckoutTime}}) may result in a fee.</p>
                            <b>Property and Cancelation Policies</b>
                            <p>Partial Charge - First Night Stay - If canceled within 1 days of arrival</p>
                        </div>
                    </div>
                </div>

                <div class="rightbar">
                    <p class="rightbar__msg" v-if="selectedRooms.length <= 0">Select a room to continue</p>
                    <p class="rightbar__msg" v-else>Your Reservation</p>
                    <div class="rightbar__item" v-for="room in selectedRooms" :key="room.roomTypeID">
                        <b>{{room.roomTypeName}}</b>
                        <div>
                            <p>{{room.payload.adults}} Adults</p>
                            <p>{{room.payload.children}} Children</p>
                            <p>{{room.payload.rooms}} Rooms</p>
                        </div>
                        <p class="total">
                            {{formatCurrency(calculateRoomQty(room))}}
                        </p>
                    </div>
                    <div class="rightbar__summary" v-if="selectedRooms.length > 0">
                        <b>Arrival Date</b>
                        <p>{{ciDate}}</p>
                        <b>Departure Date</b>
                        <p>{{coDate}}</p>
                        <b>Room Night(s)</b>
                        <p>{{nights}}</p>
                        <b>Grand Total</b>
                        <p class="total">{{formatCurrency(calculateGrandTotal())}}</p>
                    </div>
                    <button class="book-btn" :disabled="isLoading || selectedRooms.length <= 0" @click="bookClicked">
                        {{step == 1 ? "Book Now" : "Proceed to Payment"}}
                    </button>
                </div>
            </section>
        </div>

        <?php
        get_footer();
        ?>

        <noscript>
            <h1>JavaScript is disabled in your browser. Please enable it to access this page.</h1>
        </noscript>

        <script>
            const $ = jQuery;

            const dateConfig = {
                autoClose: isMobile(),
                selectedDates: new Date(),
                minDate: new Date(),
                maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 5)),
                inline: false,
                isMobile: isMobile(),
                locale: {
                    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    today: 'Today',
                    clear: 'Clear',
                    dateFormat: 'dd/MM/yyyy',
                    timeFormat: 'hh:mm aa',
                    firstDay: 0
                },
            }

            const ciDate = new AirDatepicker('#ci-date', {
                ...dateConfig,
                onSelect: function (date, dateStr, instance) {
                    // when check-in date is selected, update check-out date to the next day
                    const current = new Date(ciDate.selectedDates[0])
                    const nextDate = new Date(current.setDate(current.getDate() + 1))
                    /*
                    coDate.update({
                        selectedDates: nextDate
                    })*/
                }
            })
            const coDate = new AirDatepicker('#co-date', {
                ...dateConfig,
                selectedDates: new Date(new Date().setDate(new Date().getDate() + 1))
            })

            PetiteVue.createApp({
                pageLoaded: false,
                step: 1,
                errors: {},

                showModal: false,
                modalSection: '',
                modalTitle: '',
                backdropDisabled: false,
                detailInfo: {},
                showTerms: false,
                countryList: ISO2CountryList,

                ciDate: null,
                coDate: null,
                nights: 0,
                isEmpty: false,
                isLoading: false,
                rooms: [],
                selectedRooms: [],
                customer: {
                    firstName: null,
                    lastName: null,
                    email: null,
                    phone: null,
                    country: "",
                    agree: false
                },
                imageView: {
                    current: null,
                    gallery: []
                },
                isRoomEmpty() {
                    return this.rooms.length === 0
                },
                searchAvailability,
                toggleSelectedRoom,
                bookClicked,
                http,
                calculateGrandTotal,
                viewImage,
                backdropClicked,
                getDetailInfo,
                getPolicy,
                updateOption,
                makeReservation,
                formatDate,
                mounted() {
                    $(document).ready(() => {
                        const to = setTimeout(() => {
                            this.searchAvailability()
                            this.getDetailInfo()
                            clearTimeout(to)
                        }, 350)
                    })
                },
                initValues() {
                    this.rooms = []
                    this.selectedRooms = []
                    this.step = 1
                    this.ciDate = formatDate(ciDate.selectedDates[0])
                    this.coDate = formatDate(coDate.selectedDates[0])
                    this.nights = calculateNights(ciDate.selectedDates[0], coDate.selectedDates[0])
                }
            }).mount('#book-content')

            function formatDate(date) {
                const parsed = new Date(date)
                const utc = Date.UTC(parsed.getFullYear(), parsed.getMonth(), parsed.getDate())
                return new Date(utc).toISOString().split('T')[0]
            }

            function http(method, url, data) {
                const self = this
                self.isLoading = true
                self.errors = {}
                return new Promise((resolve, reject) => {
                    $.ajax({
                        url,
                        method,
                        data,
                        success(response) {
                            resolve(response)
                        },
                        error(err) {
                            console.error(err)
                            reject(err)
                        },
                        complete() {
                            self.isLoading = false
                        },
                    })
                })
            }

            function isMobile() {
                let check = false;
                (function (a) {
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
                })(navigator.userAgent || navigator.vendor || window.opera);
                return check;
            }

            async function getDetailInfo() {
                try {
                    const result = await this.http('GET', '/wp-json/booking/details')
                    this.detailInfo = result
                } catch (err) {
                    console.error(err)
                }
            }

            async function searchAvailability() {
                try {
                    this.initValues()
                    const result = await this.http('GET', '/wp-json/booking/availability', {
                        startDate: formatDate(ciDate.selectedDates[0]),
                        endDate: formatDate(coDate.selectedDates[0])
                    })
                    this.rooms = result.map(room => {
                        return {
                            ...room,
                            nights: calculateNights(ciDate.selectedDates[0], coDate.selectedDates[0]),
                            ciDate: formatDate(ciDate.selectedDates[0]),
                            coDate: formatDate(coDate.selectedDates[0]),
                            formattedRate: formatCurrency(room.roomRate),
                            showDetails: false,
                            tabIndex: 0,
                            payload: {
                                adults: 1,
                                children: 0,
                                rooms: 0
                            },
                            adultOption: Number(room.adultsIncluded),
                            childOption: 1,
                        }
                    })
                } catch (err) {
                    console.error(err)
                } finally {
                    this.pageLoaded = true
                }
            }

            function toggleSelectedRoom(room, ev) {
                // if payload empty
                if ((room.payload.adults + room.payload.children) === 0) {
                    this.selectedRooms = this.selectedRooms.filter(r => r.roomTypeID !== room.roomTypeID)
                    return
                }

                const item = this.selectedRooms.find(r => r.roomTypeID === room.roomTypeID)
                if (ev.currentTarget.value === '0' && item) {
                    this.selectedRooms = this.selectedRooms.filter(r => r.roomTypeID !== room.roomTypeID)
                    return
                }
                if (!item) {
                    this.selectedRooms.push(room)
                    return
                }
            }

            function calculateRoomQty(room) {
                return room.roomRate * room.payload.rooms
            }

            function formatCurrency(value) {
                return new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR'
                }).format(value)
            }

            function calculateNights(startDate, endDate) {
                const startMs = new Date(startDate).getTime();
                const endMs = new Date(endDate).getTime();
                const differenceMs = endMs - startMs;
                const differenceDays = differenceMs / (1000 * 60 * 60 * 24);
                const nights = Math.floor(differenceDays);
                return nights;
            }

            async function bookClicked() {
                if (this.selectedRooms.length <= 0) return
                if (this.step === 1) {
                    if (isMobile()) {
                        window.scrollTo({
                            top: 300,
                            behavior: 'smooth'
                        })
                    }
                    this.step = 2
                    return
                }

                await this.makeReservation()
            }

            function calculateGrandTotal() {
                return this.selectedRooms.reduce((acc, room) => acc + calculateRoomQty(room), 0)
            }

            function viewImage(room, photo = null) {
                if (isMobile()) return
                this.showModal = true
                this.backdropDisabled = false
                this.modalSection = 'image'
                this.modalTitle = room.roomTypeName + ' Photos'
                this.imageView = {
                    current: (photo) ? photo.image : room.roomTypePhotos[0].image,
                    gallery: room.roomTypePhotos.map(photo => photo.image)
                }
            }

            function backdropClicked(ev) {
                if (ev.target.classList.contains('modal')) {
                    if (!this.backdropDisabled) this.showModal = false
                }
            }

            function addOneHour(time) {
                time = time + ':00'
                const date = new Date('1970-01-01T' + time)
                date.setHours(date.getHours() + 1)
                return date.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            }

            function formatTime(time) {
                time = time + ':00'
                return new Date('1970-01-01T' + time).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            }

            function getPolicy() {
                const policy = this.detailInfo?.propertyPolicy ?? {}
                return {
                    checkInTime: formatTime(policy.propertyCheckInTime),
                    checkOutTime: formatTime(policy.propertyCheckOutTime),
                    lateCheckoutTime: addOneHour(policy.propertyCheckOutTime),
                    lateCheckoutFee: Number(policy.propertyLateCheckOutValue ?? '20')
                }
            }

            function updateOption(room, ev, context) {
                const maxGuests = Number(room.maxGuests)
                if (context === 'adult') {
                    room.childOption = maxGuests - Number(ev.currentTarget.value)
                    return
                }
                if (context === 'child') {
                    room.adultOption = maxGuests - Number(ev.currentTarget.value)
                    return
                }
            }

            async function makeReservation() {
                try {
                    const result = await this.http('POST', '/wp-json/booking/reservation', {
                        rooms: this.selectedRooms,
                        customer: this.customer,
                        startDate: formatDate(ciDate.selectedDates[0]),
                        endDate: formatDate(coDate.selectedDates[0])
                    })
                    console.log('result', result)

                    if (result.invoice_url) {
                        this.showModal = true
                        this.backdropDisabled = true
                        this.modalSection = 'payment'
                        this.modalTitle = 'Complete your payment'
                        $('#paymentIframe').attr('src', result.invoice_url)
                        return
                    }

                    if (!result.success) {
                        if (typeof result.message === 'string') return alert(result.message)
                        this.errors = result.message
                        return
                    }

                    alert('Unknown error occured, please try again later or contact us directly')
                } catch (err) {
                    console.error(err)
                }
            }
        </script>