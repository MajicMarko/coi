// script.js
document.addEventListener("DOMContentLoaded", () => {
  const blogShowcase = document.querySelector(".blog-showcase");

  // Intersection Observer to reveal/hide section on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blogShowcase.classList.add("blog-showcase--visible");
        } else {
          blogShowcase.classList.remove("blog-showcase--visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(blogShowcase);
});
