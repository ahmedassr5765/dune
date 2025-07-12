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
    
    // Update welcome section title
    const welcomeTitle = document.querySelector('.welcome-title');
    if (welcomeTitle) {
        welcomeTitle.textContent = welcomeTitle.getAttribute('data-' + lang);
    }
    
    // Update welcome section description
    const welcomeDesc = document.querySelector('.welcome-desc');
    if (welcomeDesc) {
        welcomeDesc.textContent = welcomeDesc.getAttribute('data-' + lang);
    }
    
    // Update welcome section CTA button
    const welcomeCta = document.querySelector('.welcome-cta');
    if (welcomeCta) {
        welcomeCta.textContent = welcomeCta.getAttribute('data-' + lang);
    }
    
    // Update office section title
    const officeTitle = document.querySelector('.office-title');
    if (officeTitle) {
        officeTitle.textContent = officeTitle.getAttribute('data-' + lang);
    }
    
    // Update office section description
    const officeDesc = document.querySelector('.office-desc');
    if (officeDesc) {
        officeDesc.innerHTML = officeDesc.getAttribute('data-' + lang);
    }
    
    // Update office section CTA button
    const officeCta = document.querySelector('.office-cta');
    if (officeCta) {
        officeCta.textContent = officeCta.getAttribute('data-' + lang);
    }
    
    // Update leasing section title
    const leasingTitle = document.querySelector('.leasing-title');
    if (leasingTitle) {
        leasingTitle.textContent = leasingTitle.getAttribute('data-' + lang);
    }
    
    // Update leasing section subtitle
    const leasingSubtitle = document.querySelector('.leasing-subtitle');
    if (leasingSubtitle) {
        leasingSubtitle.textContent = leasingSubtitle.getAttribute('data-' + lang);
    }
    
    // Update leasing section description
    const leasingDesc = document.querySelector('.leasing-desc');
    if (leasingDesc) {
        leasingDesc.textContent = leasingDesc.getAttribute('data-' + lang);
    }
    
    // Update leasing section CTA button
    const leasingCta = document.querySelector('.leasing-cta');
    if (leasingCta) {
        leasingCta.textContent = leasingCta.getAttribute('data-' + lang);
    }
    
    // Update featured section main title
    const featuredMainTitle = document.querySelector('.featured-main-title');
    if (featuredMainTitle) {
        featuredMainTitle.textContent = featuredMainTitle.getAttribute('data-' + lang);
    }
    
    // Update featured section items
    for (let i = 1; i <= 3; i++) {
        const featuredTitle = document.querySelector(`.featured-title-${i}`);
        if (featuredTitle) {
            featuredTitle.textContent = featuredTitle.getAttribute('data-' + lang);
        }
        
        const featuredDesc = document.querySelector(`.featured-desc-${i}`);
        if (featuredDesc) {
            featuredDesc.textContent = featuredDesc.getAttribute('data-' + lang);
        }
    }
    
    // Update "See What Sets Us Apart" section
    const apartMainTitle = document.querySelector('.apart-main-title');
    if (apartMainTitle) {
        apartMainTitle.textContent = apartMainTitle.getAttribute('data-' + lang);
    }
    
    const apartDescription = document.querySelector('.apart-description');
    if (apartDescription) {
        apartDescription.textContent = apartDescription.getAttribute('data-' + lang);
    }
    
    const apartCta = document.querySelector('.apart-cta');
    if (apartCta) {
        apartCta.textContent = apartCta.getAttribute('data-' + lang);
    }
    
    // Update "Discover the Advantage" section
    const discoverMainTitle = document.querySelector('.discover-main-title');
    if (discoverMainTitle) {
        discoverMainTitle.textContent = discoverMainTitle.getAttribute('data-' + lang);
    }
    
    const discoverDescription = document.querySelector('.discover-description');
    if (discoverDescription) {
        discoverDescription.textContent = discoverDescription.getAttribute('data-' + lang);
    }
    
    const discoverCta = document.querySelector('.discover-cta');
    const discoverCtaText = document.querySelector('.discover-cta-text');
    if (discoverCta && discoverCtaText) {
        discoverCtaText.textContent = discoverCta.getAttribute('data-' + lang);
    }
    
    // Update Gallery section
    const galleryMainTitle = document.querySelector('.gallery-main-title');
    if (galleryMainTitle) {
        galleryMainTitle.textContent = galleryMainTitle.getAttribute('data-' + lang);
    }
    
    // Update Contact Us section
    const contactTitle = document.querySelector('.contact-title');
    if (contactTitle) {
        contactTitle.textContent = contactTitle.getAttribute('data-' + lang);
    }
    
    const contactDesc = document.querySelector('.contact-desc');
    if (contactDesc) {
        contactDesc.textContent = contactDesc.getAttribute('data-' + lang);
    }
    
    const contactSubmit = document.querySelector('.contact-submit');
    if (contactSubmit) {
        contactSubmit.textContent = contactSubmit.getAttribute('data-' + lang);
    }
    
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
