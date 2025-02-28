<div class="text-center mt-10">
  
  <?php

  $big = 999999999; // need an unlikely integer

  echo paginate_links( array(
    'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
    'format' => '?paged=%#%',
    'current' => max( 1, get_query_var('paged') ),
    'total' => $content->max_num_pages,
    'prev_text' => __( '<i class="fa fa-angle-left" aria-hidden="true"></i>', 'textdomain' ),
    'next_text' => __( '<i class="fa fa-angle-right" aria-hidden="true"></i>', 'textdomain' )

  ) );

  ?>
  
</div>