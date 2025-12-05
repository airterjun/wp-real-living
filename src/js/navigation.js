import gsap from "gsap";

const Navigation = (lenis) => {
  const header = document.getElementById("main-header");
  const burger = document.getElementById("burger");
  const headerMenu = document.querySelector(".header-menu");
  const menuList = headerMenu.querySelectorAll("li");

  const tl = gsap.timeline({
    paused: true,
  });

  tl.to(headerMenu, {
    clipPath: "inset(0 0 0% 0)",
    duration: 1,
    ease: "power4.inOut",
  }).to(menuList, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1,
    ease: "power4.out",
  });

  burger.addEventListener("click", () => {
    header.classList.toggle("menu-active");

    if (burger.classList.contains("active")) {
      tl.reverse(1.5);
      burger.classList.remove("active");
      return;
    }

    burger.classList.add("active");

    tl.play();
  });
};

const buttonScrollDowm = () => {
  const heroBanner = document.querySelector(".hero-banner");
  const primaryButtons = document.querySelectorAll(".primary-button a");

  if (primaryButtons) {
    primaryButtons.forEach((link) => {
      if (link.hash.includes("#")) {
        console.log("link.href", link.hash);

        link.addEventListener("click", (e) => {
          e.preventDefault();

          console.log("cli");

          const container = document.getElementById(link.hash.replace("#", ""));
          if (!container) return;
          const rect = container.getBoundingClientRect();
          window.lenis.scrollTo(container);
        });
      }
    });
  }

  if (!heroBanner) return;

  const rect = heroBanner.getBoundingClientRect();

  const button = heroBanner.querySelector(".hero-banner-button a");

  if (!button) return;

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const container = document.getElementById(button.hash.replace("#", ""));
    const header = document.querySelector("header");
    const headerRect = header.getBoundingClientRect();
    if (container) {
      const rect = container.getBoundingClientRect();
      window.lenis.scrollTo(container, {
        offset: headerRect.height * -1,
      });
    } else {
      window.lenis.scrollTo(rect.height);
    }
  });
};

// Navigation for card team

const cardTeam = () => {
  const members = document.querySelectorAll(".member");

  if (members) {
    members.forEach((member) => {
      member.addEventListener("click", () => {
        const link = member.querySelector("a");
        window.location.href = link.href;
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Navigation();
  buttonScrollDowm();
  cardTeam();
});
