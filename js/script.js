// Dark / Light Mode Toggle
const darkToggle = document.getElementById('darkToggle');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode'); // toggle class

  // Change button icon
  if (document.body.classList.contains('light-mode')) {
    darkToggle.textContent = '☀️'; // light mode icon
  } else {
    darkToggle.textContent = '🌙'; // dark mode icon
  }
});

/* Modal Functions */

// Open modal by ID
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }
}

// Close modal by ID
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Close modal if clicked outside content
window.addEventListener('click', (e) => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});
// Modal Open/Close
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // prevent background scroll
    if (id === 'certificatesModal') {
      currentCert = 0;
      showSlide(currentCert);
    }
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Close modal if clicked outside content
window.addEventListener('click', (e) => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

// Certificate Slider
let currentCert = 0;
const certSlides = document.querySelectorAll('.cert-slide');

function showSlide(index) {
  certSlides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentCert = (currentCert + 1) % certSlides.length;
  showSlide(currentCert);
}

function prevSlide() {
  currentCert = (currentCert - 1 + certSlides.length) % certSlides.length;
  showSlide(currentCert);
}
