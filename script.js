// Dark mode toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll animation
const faders = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  faders.forEach(fade => {
    if (fade.getBoundingClientRect().top < window.innerHeight - 100) {
      fade.classList.add("show");
    }
  });
});

// Lightbox gallery
const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
  img.onclick = () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  };
});

lightbox.onclick = () => {
  lightbox.style.display = "none";
};
