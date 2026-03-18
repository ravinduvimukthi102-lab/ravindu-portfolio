// Initialize Lucide Icons
lucide.createIcons();

// Navbar scroll effect
const navContainer = document.getElementById("nav-container");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  // Change navbar appearance on scroll
  if (window.scrollY > 50) {
    navContainer.classList.add(
      "bg-white/5",
      "backdrop-blur-xl",
      "border",
      "border-white/10",
      "shadow-2xl"
    );
    navContainer.classList.remove("bg-transparent");
  } else {
    navContainer.classList.remove(
      "bg-white/5",
      "backdrop-blur-xl",
      "border",
      "border-white/10",
      "shadow-2xl"
    );
    navContainer.classList.add("bg-transparent");
  }

  // Active section highlight logic
  const sections = ["home", "about", "skills", "projects", "contact"];
  const scrollPos = window.scrollY + 150;

  sections.forEach((id) => {
    const section = document.getElementById(id);
    const link = document.querySelector(`a[href="#${id}"]`);

    if (section && link) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        link.classList.add("text-blue-500");
        link.classList.remove("text-slate-400");
      } else {
        link.classList.remove("text-blue-500");
        link.classList.add("text-slate-400");
      }
    }
  });
});

// Form submission handler (Mock)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    contactForm.reset();
  });
}
