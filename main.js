// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Adjust for fixed header
        behavior: 'smooth'
      });
      
      // Hide mobile menu if visible
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  if (menuBtn && mobileMenu && !menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add('hidden');
  }
});

// Chat functionality
function toggleChat() {
  const chatBox = document.getElementById('chatBox');
  if (chatBox) {
    chatBox.classList.toggle('hidden');
  }
}

function sendChat() {
  const chatInput = document.getElementById('chatInput');
  if (chatInput && chatInput.value.trim()) {
    // Handle chat message (you can add backend integration here)
    alert('Thanks for your message: ' + chatInput.value);
    chatInput.value = '';
  }
}

// Form submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Log or send to backend
    console.log('Form submitted:', data);
    alert('Thank you for your consultation request! We will get back to you within 24 hours.');
    
    // Reset form
    this.reset();
  });
}

// Make toggleChat and sendChat globally available
window.toggleChat = toggleChat;
window.sendChat = sendChat;
