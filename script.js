// Scroll reveal animation
const faders = document.querySelectorAll(".fade");

const revealOnScroll = () => {
  faders.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) section.classList.add("show");
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
