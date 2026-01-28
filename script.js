// AOS
AOS.init({
  duration: 900,
  easing: "ease-out-cubic",
  once: true,
  offset: 80
});

// GSAP hero animation
gsap.from(".hero-card", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

// Theme toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggle.innerHTML =
    document.body.classList.contains("light")
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
});

// Fake form submit (demo)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent 🚀");
});

/*Active section highlight*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6 // triggers when 60% of section is visible
  }
);

sections.forEach((section) => observer.observe(section));

/* Skills flip logic */

const skillCards = document.querySelectorAll(".skill-flip");

skillCards.forEach((card) => {
  card.addEventListener("click", () => {

    // close others first
    skillCards.forEach((c) => {
      if (c !== card) c.classList.remove("flipped");
    });

    // toggle clicked
    card.classList.toggle("flipped");
  });
});

/* Navbar blur on scroll */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

/* Back to top logic */

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
