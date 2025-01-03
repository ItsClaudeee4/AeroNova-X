const menu = document.querySelector(".menu");
const parts = document.querySelector(".parts");
const main = document.querySelector("#home");
const part = document.querySelectorAll(".parts a");
const aside = document.querySelectorAll("aside");
const hText = document.querySelector(".split");
const card = document.querySelectorAll(".card");
const card__content = document.querySelectorAll(".card__content");

card.forEach((card, index) => {
  card.addEventListener("click", () => {
    card__content[index].classList.toggle("cardHover");
  });
});

let clutter = "";

menu.addEventListener("click", () => {
  menu.classList.toggle("rotate");
  parts.classList.toggle("hidden");
});
for (let i = 0; i < part.length; i++) {
  part[i].addEventListener("click", () => {
    parts.classList.remove("hidden");
    menu.classList.toggle("rotate");
  });
}

let splitText = hText.textContent.split("");

splitText.forEach((char) => {
  clutter += `<span>${char}</span>`;
});

hText.innerHTML = clutter;

gsap.registerPlugin(ScrollTrigger);

function isDesktop() {
  return window.innerWidth >= 600;
}

if (isDesktop()) {
  gsap.from(" header .parts a, header img ", {
    y: 100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
  });

  gsap.from(".split span", {
    y: 100,
    duration: 1,
    delay: 1.5,
    opacity: 0,
    stagger: 0.02,
  });

  gsap.from(".b .picture ", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".b .picture",
      scroller: window,
      start: "top 50%",
    },
  });
  gsap.from(".b aside", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".b  aside",
      scroller: window,
      start: "top 60%",
    },
  });

  gsap.from(".c .asideA", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".c .asideA",
      scroller: window,
      start: "top 40%",
    },
  });
  gsap.from(".c .asideB", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".c .asideA",
      scroller: window,
      start: "top 30%",
    },
  });

  gsap.from(".d .picture", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".d .picture",
      scroller: window,
      start: "top 50%",
    },
  });

  gsap.from(".d aside", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".d aside",
      scroller: window,
      start: "top 50%",
    },
  });

  gsap.from(".e aside:nth-child(2) div span", {
    y: 100,
    duration: 1,
    opacity: 0,
    delay: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".e aside:nth-child(2) div", // Trigger is the <ul> container
      scroller: window, // Scroll container is the whole page
      start: "top 90%", // Trigger when the top of <ul> reaches 80% of the viewport
    },
  });

  gsap.from(".card1", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".card",
      scroller: window,
      start: "top 50%",
    },
  });
  gsap.from(".card2", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".card",
      scroller: window,
      start: "top 50%",
    },
  });

  gsap.from(".card3", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".card3",
      scroller: window,
      start: "top 60%",
    },
  });

  gsap.from(".card4", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".card3",
      scroller: window,
      start: "top 60%",
    },
  });
}

function isMobile() {
  return window.innerWidth <= 768;
}

if (isMobile()) {
  gsap.from(" header .parts a, header img ", {
    y: 100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
  });

  gsap.from(".split span", {
    y: 100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.02,
  });

  gsap.from(".b .picture ", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".b .picture",
      scroller: "body",
      start: "top 50%",
    },
  });
  gsap.from(".b aside", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".b  .picture",
      scroller: "body",
      start: "top 60%",
    },
  });

  gsap.from(".c .asideA", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".c .asideA",
      scroller: "body",
      start: "top 40%",
    },
  });
  gsap.from(".c .asideB", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".c .asideA",
      scroller: "body",
      start: "top 30%",
    },
  });

  gsap.from(".d .picture", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".d .picture",
      scroller: "body",
      start: "top 50%",
    },
  });

  gsap.from(".d aside", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".d aside",
      scroller: "body",
      start: "top 50%",
    },
  });

  gsap.from(".e aside:nth-child(2) div span", {
    y: 100,
    duration: 1,
    opacity: 0,
    delay: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".e aside:nth-child(2) div", // Trigger is the <ul> container
      scroller: "body", // Scroll container is the whole page
      start: "top 90%", // Trigger when the top of <ul> reaches 80% of the viewport
    },
  });

  gsap.from(".card1", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      start: "top 50%",
    },
  });
  gsap.from(".card2", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      start: "top 50%",
    },
  });

  gsap.from(".card3", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".card3",
      scroller: "body",
      start: "top 60%",
    },
  });

  gsap.from(".card4", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".card3",
      scroller: "body",
      start: "top 60%",
    },
  });
}

gsap.from(".slider-container ", {
  y: 100,
  duration: 1.5,
  delay: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: ".slider-container",
    scroller: "body",
    start: "top 60%",
  },
});

let currentSlide = 0;
const wrapper = document.querySelector(".slides-wrapper");
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

function updateSlidePosition() {
  wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
  const newSlide = currentSlide + direction;
  goToSlide(newSlide);
}

function goToSlide(n) {
  dots[currentSlide].classList.remove("active");

  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }

  dots[currentSlide].classList.add("active");

  updateSlidePosition();

  slides[currentSlide].querySelector("img").style.animation = "none";
  slides[currentSlide].querySelector("img").offsetHeight;
  slides[currentSlide].querySelector("img").style.animation =
    "slideIn 0.5s ease-out";
}
