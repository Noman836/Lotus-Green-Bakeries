// Lotus Footer JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Handle newsletter subscription form
  const subscribeForm = document.querySelector('.footer-subscribe form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email && isValidEmail(email)) {
        // Show success message
        showNotification('Thank you for subscribing! We\'ll keep you updated with our latest news and events.', 'success');
        emailInput.value = '';
      } else {
        showNotification('Please enter a valid email address.', 'error');
      }
    });
  }
  
  // Add smooth scroll behavior to footer links
  const footerLinks = document.querySelectorAll('.lotus-footer a[href^="#"]');
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add hover effect animation for social icons
  const socialIcons = document.querySelectorAll('.social-icons a');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show notification function
function showNotification(message, type) {
  // Remove any existing notifications
  const existingNotification = document.querySelector('.footer-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `footer-notification footer-notification-${type}`;
  notification.textContent = message;
  
  // Style the notification
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#6BB252' : '#F95F09'};
    color: white;
    padding: 15px 20px;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 9999;
    font-size: 14px;
    max-width: 300px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 4000);
}

// Add footer link click tracking (optional analytics)
function trackFooterClick(linkText, section) {
  // This is a placeholder for analytics tracking
  console.log(`Footer link clicked: ${linkText} in section: ${section}`);
  
  // If you have Google Analytics or other analytics, you can add tracking here:
  // gtag('event', 'footer_link_click', {
  //   'link_text': linkText,
  //   'section': section
  // });
}

// Add click tracking to all footer links
document.addEventListener('DOMContentLoaded', function() {
  const footerLinks = document.querySelectorAll('.lotus-footer a[href]');
  footerLinks.forEach(link => {
    link.addEventListener('click', function() {
      const linkText = this.textContent.trim();
      const parentColumn = this.closest('.footer-column');
      let section = 'unknown';
      
      if (parentColumn) {
        const heading = parentColumn.querySelector('h5');
        if (heading) {
          section = heading.textContent.trim();
        }
      }
      
      trackFooterClick(linkText, section);
    });
  });
});
