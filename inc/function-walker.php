<?php
class WP_Break_Word_Nav_Walker extends Walker_Nav_Menu {
    /**
     * Start the element output.
     *
     * @param string $output Passed by reference. Used to append additional content.
     * @param object $item Menu item data object.
     * @param int $depth Depth of menu item. Used for padding.
     * @param array $args An array of arguments.
     * @param int $id Current item ID.
     */
    public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
        $title = $item->title;

        $title = apply_filters('the_title', $title, $item->ID);

        $item_output = sprintf(
            '%1$s<a href="%2$s" class="nav-link">%3$s%4$s%5$s</a>%6$s',
            $args->before,
            esc_url($item->url),
            $args->link_before,
            str_replace("/","<br/>", $title),
            $args->link_after,
            $args->after
        );

        $output .= sprintf(
            '<li id="menu-item-%1$s" class="%2$s nav-item">%3$s',
            $item->ID,
            implode(' ', $item->classes),
            $item_output
        );
    }
}