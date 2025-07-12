let currentLang = 'en';
const languageToggle = document.getElementById('languageToggle');
const htmlElement = document.documentElement;

// Language toggle functionality
languageToggle.addEventListener('click', function() {
    if (currentLang === 'en') {
        // Switch to Arabic
        currentLang = 'ar';
        languageToggle.textContent = 'AR';
        htmlElement.setAttribute('lang', 'ar');
        htmlElement.setAttribute('dir', 'rtl');
        
        // Update all translatable elements
        updateTextContent('ar');
        
        // Add RTL specific classes
        document.body.classList.add('rtl-mode');
        
        // Update navigation spacing for RTL
        const navItems = document.querySelector('.nav-items');
        if (navItems) {
            navItems.classList.remove('space-x-8');
            navItems.classList.add('space-x-reverse', 'space-x-8');
        }
        
    } else {
        // Switch to English
        currentLang = 'en';
        languageToggle.textContent = 'En';
        htmlElement.setAttribute('lang', 'en');
        htmlElement.setAttribute('dir', 'ltr');
        
        // Update all translatable elements
        updateTextContent('en');
        
        // Remove RTL specific classes
        document.body.classList.remove('rtl-mode');
        
        // Reset navigation spacing for LTR
        const navItems = document.querySelector('.nav-items');
        if (navItems) {
            navItems.classList.remove('space-x-reverse');
            navItems.classList.add('space-x-8');
        }
    }
});

function updateTextContent(lang) {
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.textContent = link.getAttribute('data-' + lang);
    });
    
    // Update main title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        mainTitle.textContent = mainTitle.getAttribute('data-' + lang);
    }
    
    // Update main subtitle
    const mainSubtitle = document.querySelector('.main-subtitle');
    if (mainSubtitle) {
        mainSubtitle.textContent = mainSubtitle.getAttribute('data-' + lang);
    }
    
    // Update buttons
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.textContent = ctaButton.getAttribute('data-' + lang);
    }
    
    const secondaryButton = document.querySelector('.secondary-button');
    if (secondaryButton) {
        secondaryButton.textContent = secondaryButton.getAttribute('data-' + lang);
    }
    
    // Update feature titles
    const featureTitles = document.querySelectorAll('.feature-title');
    featureTitles.forEach(title => {
        title.textContent = title.getAttribute('data-' + lang);
    });
    
    // Update feature descriptions
    const featureDescs = document.querySelectorAll('.feature-desc');
    featureDescs.forEach(desc => {
        desc.textContent = desc.getAttribute('data-' + lang);
    });
    
    // Update footer text
    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        footerText.innerHTML = footerText.getAttribute('data-' + lang);
    }
}

// Add smooth transitions for RTL switch
document.addEventListener('DOMContentLoaded', function() {
    // Add transition classes after page load
    setTimeout(() => {
        document.body.classList.add('rtl-transition');
    }, 100);
});
