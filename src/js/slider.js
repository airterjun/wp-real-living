const Slider = () => {
  const swiperWrapper = document.querySelectorAll(".swiper");

  if (swiperWrapper) {
    swiperWrapper.forEach((s) => {
      const sliderNavItems = s.parentNode.querySelectorAll(".pagination-item");

      sliderNavItems[0].classList.add("active");

      const swiper = new Swiper(s, {
        slidesPerView: "auto",
        spaceBetween: 72,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },

        on: {
          autoplayTimeLeft(s, time, progress) {
            let bar = sliderNavItems[0];
            bar = sliderNavItems[s.activeIndex].querySelector(".progress-bar");

            // progressCircle.style.setProperty("--progress", 1 - progress);
            // progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            bar.style.transform = `translateX(-${Math.ceil(time / 100)}%)`;
          },

          activeIndexChange() {
            sliderNavItems.forEach((item) => item.classList.remove("active"));
            sliderNavItems[swiper.activeIndex].classList.add("active");
          },
        },
      });

      sliderNavItems.forEach((button, index) => {
        button.addEventListener("click", () => {
          sliderNavItems.forEach((item) =>
            item.classList.remove("active", "selected")
          );
          button.classList.add("selected");
          swiper.autoplay.stop();

          swiper.slideTo(index);
        });
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Slider();
});
