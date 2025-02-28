<?php


/*

  Template Name: Success Page

*/


//summon header

get_header('success');

wp_enqueue_style('successcss', get_template_directory_uri().'/css/pages/success.css', array(), '1.0.0', 'all');
?>

<section id="success" class="pt-100">
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="tagline">
          <div class="text-center">
            <h1 class="title">THANK YOU</h1>
            <p>We've received your message and will get back to you as soon as possible. <br>A confirmation email has been sent to your inbox for your reference.</p>
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