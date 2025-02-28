<?php 
get_header('success'); 
wp_enqueue_style('successcss', get_template_directory_uri().'/css/pages/success.css', array(), '1.0.0', 'all');
?>

<section id="not-found" class="pt-100">
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="tagline">
          <div class="text-center">
            <h1 class="title">404</h1>
            <p>The page you are looking for did not exist</p>
            <div class="pt-25">
              <a href="<?php echo get_option("siteurl"); ?>" class="btn btn-standard">BACK TO HOME</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>