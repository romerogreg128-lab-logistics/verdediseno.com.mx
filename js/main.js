// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Animated counters
const counters = document.querySelectorAll('.stats__number');

const animateCounter = (el) => {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1500;
  const step = target / (duration / 16);
  let current = 0;

  const update = () => {
    current += step;
    if (current < target) {
      el.textContent = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  };
  update();
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

// Contact form feedback
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const feedback = document.getElementById('formFeedback');
  feedback.textContent = 'Mensaje enviado. Te contactaremos pronto.';
  feedback.className = 'form-feedback success';
  e.target.reset();
  setTimeout(() => { feedback.textContent = ''; }, 5000);
});

// Smooth navbar shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 4px 20px rgba(0,0,0,0.3)'
    : '0 2px 10px rgba(0,0,0,0.2)';
});
