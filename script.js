// Grab every element with the fade-in class
const fadeEls = document.querySelectorAll('.fade-in');

// Trigger on page load with a tiny delay so CSS is ready
window.addEventListener('load', () => {
  fadeEls.forEach(el => {
    el.classList.add('visible');
  });
});

// Also watch for elements that scroll into view (About, Contact sections)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once only
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));