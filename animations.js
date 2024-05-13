const animateOnScrolltext = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const textAnimations = entry.target.querySelectorAll(
        ".text-animation span"
      );
      // Stagger the animations for a smoother effect
      textAnimations.forEach((animation, index) => {
        gsap.to(animation, {
          y: 0,
          duration: 1,
          opacity: 1,
          ease: "ease-in-out",
          delay: index * 0.1,
        });
      });
      observer.unobserve(entry.target);
    }
  });
};

const observertext = new IntersectionObserver(animateOnScrolltext, {
  threshold: 1,
});

document.querySelectorAll(".text-container").forEach((element) => {
  observertext.observe(element);
});

//
// Img animation 1
const animateOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const imgContainers = entry.target.querySelectorAll(".img-container");
      imgContainers.forEach((imgContainer, index) => {
        gsap.to(imgContainer, {
          opacity: 1,
          duration: "1",
          scale: 1,

          delay: index * 0.15,
        });
      });
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, {
  threshold: 0.3,
});

document.querySelectorAll(".cards").forEach((element) => {
  observer.observe(element);
});

//

const animateOnScrollimg3 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to(entry.target, {
        duration: 1.5,
        scale: 1,
      });
      observer.unobserve(entry.target);
    }
  });
};

const observerimg3 = new IntersectionObserver(animateOnScrollimg3, {
  threshold: 0.3,
});

document.querySelectorAll(".img-container3").forEach((imgContainer3) => {
  observerimg3.observe(imgContainer3);
});

//

const animateOnScrollpoints = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const points = entry.target.parentElement.querySelectorAll(".point");
      let delay = 0;
      points.forEach((point, index) => {
        gsap.to(point, { scale: 1.4, duration: 0.5, delay: delay });
        gsap.to(point, { scale: 1, duration: 0.5, delay: delay + 0.5 });
        delay += 0.5;
      });
    }
  });
};

const observerpoints = new IntersectionObserver(animateOnScrollpoints, {
  threshold: 0.1,
});

document.querySelectorAll(".point3").forEach((element) => {
  observerpoints.observe(element);
});
