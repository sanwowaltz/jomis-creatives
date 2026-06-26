const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "×";
  } else {
    menuBtn.textContent = "☰";
  }
});

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});


// Scroll reveal animation
const revealItems = document.querySelectorAll(
  ".section, .case-study, .model-card, .service-card, .brand-strip"
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
});

function revealOnScroll() {
  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 80) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);