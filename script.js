// Query Selectors
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const aboutMe = document.querySelector(".aboutMeLink");
const projects = document.querySelector(".projectsLink");
const contact = document.querySelector(".contactLink");

// Force website to go to top when refrehed
window.onbeforeunload = function () {
  if (window.scrollTo) window.scrollTo(0, 0);
};

// Hambuger Menu Funtionality

// Listening for Click Event
navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  // Check for visibility and apply using conditional statement
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// Lenis Scroll Functionality

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Event Listeners for Smooth Scroll

aboutMe.addEventListener("click", () => {
  lenis.scrollTo("#aboutMe");
});

projects.addEventListener("click", () => {
  lenis.scrollTo("#projects");
});

contact.addEventListener("click", () => {
  lenis.scrollTo("#contact");
});


// GSAP
var gsapTimeLine = gsap.timeline({ default: { duration: 1 } });
gsap.registerPlugin(ScrollTrigger);

gsapTimeLine.from(".primary-header", {
  opacity: 0,
  duration: 1,
  y: -50,
  ease: "power3.in",
});

gsapTimeLine.from(".gsap-animation-1", {
  opacity: 0,
  duration: 1,
  y: -50,
  ease: "power3.in",
  stagger: 0.2,
});

gsapTimeLine.from(".gsap-animation-2", {
  opacity: 0,
  duration: 2,
  y: -50,
  ease: "bounce.in",
  stagger: 0.4,
});

gsap.from(".gsap-animation-3", {
  opacity: 0,
  duration: 2,
  y: -50,
  ease: "expo.in",
  stagger: 0.4,
});

gsap.from(".aboutMe", {
    scrollTrigger: ".article-animation-trigger", // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    ease: "power1.inOut",
    duration: 3,
    scrub: true,
    pin: true,
    x: -100
  });

  gsap.from(".imageContainer", {
    scrollTrigger: ".article-animation-trigger", // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    ease: "power1.inOut",
    duration: 3,
    scrub: true,
    pin: true,
    x: 100
  });

  gsap.from(".projectsContainer", {
    scrollTrigger: ".projectsContainer", // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    ease: "power1.inOut",
    duration: 3,
    scrub: true,
    pin: true,
    x: -100
  });

  gsap.from(".noteWorthyProjects", {
    scrollTrigger: ".noteWorthyProjects", // start the animation when ".box" enters the viewport (once)
      opacity: 0,
      ease: "expo.in",
      duration: 2,
      scrub: true,
      pin: true,
      x: -100
  });
 

gsap.from(".contact", {
  scrollTrigger: ".contact", // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    ease: "expo.in",
    duration: 2,
    scrub: true,
    pin: true,
    y: 100
});



  