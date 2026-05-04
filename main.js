document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Modal Functionality for Lookbook
  const lookbookItems = document.querySelectorAll('.lookbook-item');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalImg = document.querySelector('.modal-img');
  const modalCaption = document.querySelector('.modal-caption');
  const modalClose = document.querySelector('.modal-close');

  if (lookbookItems.length > 0 && modalOverlay) {
    lookbookItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const img = item.querySelector('img');
        const caption = item.querySelector('.polaroid-caption');
        
        if (img) modalImg.src = img.src;
        if (caption) modalCaption.textContent = caption.textContent;
        
        modalOverlay.classList.add('active');
      });
    });

    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // Form Validation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      let isValid = true;
      const inputs = contactForm.querySelectorAll('[required]');
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'red';
        } else {
          input.style.borderColor = ''; // reset
        }
      });

      if (!isValid) {
        e.preventDefault(); // Only prevent default if invalid
      }
    });
  }
});
