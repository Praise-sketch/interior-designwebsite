// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('hidden');
    // Accessibility: Update aria-expanded
    const isOpen = !mobileMenu.classList.contains('hidden');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    // Only prevent default for hash links
    if (href.startsWith('#')) {
      e.preventDefault();
      
      const targetId = href;
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Adjust for fixed header
          behavior: 'smooth'
        });
        
        // Hide mobile menu if visible
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          if (menuBtn) {
            menuBtn.setAttribute('aria-expanded', 'false');
          }
        }
      }
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  if (menuBtn && mobileMenu && !menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  }
});

// Close mobile menu on ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  }
});

// Adjust scroll offset on window resize (for fixed header)
window.addEventListener('resize', () => {
  const header = document.querySelector('header');
  if (header) {
    const headerHeight = header.offsetHeight;
    // Could be used to dynamically adjust scroll offset
  }
});

// Chat functionality
function toggleChat() {
  const chatBox = document.getElementById('chatBox');
  if (chatBox) {
    chatBox.classList.toggle('hidden');
    // Accessibility
    const isClosed = chatBox.classList.contains('hidden');
    const chatBtn = document.querySelector('#chatbot button');
    if (chatBtn) {
      chatBtn.setAttribute('aria-expanded', !isClosed);
    }
  }
}

function sendChat() {
  const chatInput = document.getElementById('chatInput');
  if (chatInput && chatInput.value.trim()) {
    // Handle chat message (you can add backend integration here)
    const message = chatInput.value;
    console.log('Chat message:', message);
    alert('Thanks for your message: ' + message);
    chatInput.value = '';
    chatInput.focus();
  }
}

// Form submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate form
    if (!this.checkValidity()) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Collect form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Log or send to backend
    console.log('Form submitted:', data);
    alert('Thank you for your consultation request! We will get back to you within 24 hours.');
    
    // Reset form
    this.reset();
    
    // Optional: Scroll to confirmation message (if added to HTML)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Prevent zoom on input focus (iOS)
document.addEventListener('touchstart', function() {}, { passive: true });

// Handle orientation change
window.addEventListener('orientationchange', function() {
  // Close mobile menu on orientation change
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  }
});

// Make toggleChat and sendChat globally available
window.toggleChat = toggleChat;
window.sendChat = sendChat;
