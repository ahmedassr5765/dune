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
            navItems.classList.remove('space-x-20');
            navItems.classList.add('space-x-8');
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
            navItems.classList.remove('space-x-8');
            navItems.classList.add('space-x-20');
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
    const mainTitle = document.querySelector('.hero-title');
    if (mainTitle) {
        mainTitle.textContent = mainTitle.getAttribute('data-' + lang);
    }
    
    // Update main subtitle
    const mainSubtitle = document.querySelector('.hero-subtitle');
    if (mainSubtitle) {
        mainSubtitle.textContent = mainSubtitle.getAttribute('data-' + lang);
    }
    
    // Update hero CTA button
    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
        heroCta.textContent = heroCta.getAttribute('data-' + lang);
    }
    
    // Update hero brand
    const heroBrand = document.querySelector('.hero-brand');
    if (heroBrand) {
        heroBrand.textContent = heroBrand.getAttribute('data-' + lang);
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
