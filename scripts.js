const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight - 100) {
    navbar.classList.add('transparent');
    navbar.classList.remove('solid');
  } else {
    navbar.classList.add('solid');
    navbar.classList.remove('transparent');
  }
});
// Toggle menu for small screens
document.getElementById('menuToggle').addEventListener('click', function () {
  document.querySelector('.nav-right').classList.toggle('active');
});

// Dark mode toggle
document.getElementById("toggleMode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Section slide-in when scrolled into view
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-down");
    }
  });
}, {
  threshold: 0.2,
});

sections.forEach(section => {
  observer.observe(section);
});


