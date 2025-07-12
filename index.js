let currentLang = 'en';
const languageToggle = document.getElementById('languageToggle');
const htmlElement = document.documentElement;

// Mobile menu elements
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileLanguageEn = document.getElementById('mobileLanguageEn');
const mobileLanguageAr = document.getElementById('mobileLanguageAr');

// Mobile menu functionality
if (mobileMenuToggle && mobileMenu && closeMobileMenu) {
    // Open mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Close mobile menu
    closeMobileMenu.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close mobile menu when clicking on overlay
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close mobile menu when clicking on nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    });
}

// Mobile language toggle functionality
if (mobileLanguageEn && mobileLanguageAr) {
    mobileLanguageEn.addEventListener('click', function() {
        if (currentLang !== 'en') {
            switchLanguage('en');
            updateMobileLanguageButtons('en');
        }
    });
    
    mobileLanguageAr.addEventListener('click', function() {
        if (currentLang !== 'ar') {
            switchLanguage('ar');
            updateMobileLanguageButtons('ar');
        }
    });
}

// Function to update mobile language buttons
function updateMobileLanguageButtons(lang) {
    if (mobileLanguageEn && mobileLanguageAr) {
        if (lang === 'en') {
            mobileLanguageEn.classList.remove('bg-gray-300', 'text-black');
            mobileLanguageEn.classList.add('bg-black', 'text-white');
            mobileLanguageAr.classList.remove('bg-black', 'text-white');
            mobileLanguageAr.classList.add('bg-gray-300', 'text-black');
        } else {
            mobileLanguageAr.classList.remove('bg-gray-300', 'text-black');
            mobileLanguageAr.classList.add('bg-black', 'text-white');
            mobileLanguageEn.classList.remove('bg-black', 'text-white');
            mobileLanguageEn.classList.add('bg-gray-300', 'text-black');
        }
    }
}

// Function to switch language (used by both desktop and mobile)
function switchLanguage(lang) {
    if (lang === 'ar') {
        // Switch to Arabic
        currentLang = 'ar';
        if (languageToggle) languageToggle.textContent = 'AR';
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
        if (languageToggle) languageToggle.textContent = 'En';
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
}

// Desktop language toggle functionality
if (languageToggle) {
    languageToggle.addEventListener('click', function() {
        if (currentLang === 'en') {
            switchLanguage('ar');
            updateMobileLanguageButtons('ar');
        } else {
            switchLanguage('en');
            updateMobileLanguageButtons('en');
        }
    });
}

function updateTextContent(lang) {
    // Update navigation links (both desktop and mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.textContent = link.getAttribute('data-' + lang);
    });
    
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.textContent = link.getAttribute('data-' + lang);
    });
    
    // Update mobile language section label
    const languageLabel = document.querySelector('[data-en="Language"]');
    if (languageLabel) {
        languageLabel.textContent = languageLabel.getAttribute('data-' + lang);
    }
    
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
    
    // Update footer elements
    const footerDesc = document.querySelector('.footer-desc');
    if (footerDesc) {
        footerDesc.textContent = footerDesc.getAttribute('data-' + lang);
    }
    
    const footerQuickTitle = document.querySelector('.footer-quick-title');
    if (footerQuickTitle) {
        footerQuickTitle.textContent = footerQuickTitle.getAttribute('data-' + lang);
    }
    
    const footerPrivacyTitle = document.querySelector('.footer-privacy-title');
    if (footerPrivacyTitle) {
        footerPrivacyTitle.textContent = footerPrivacyTitle.getAttribute('data-' + lang);
    }
    
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.textContent = link.getAttribute('data-' + lang);
    });
    
    const footerCopyright = document.querySelector('.footer-copyright');
    if (footerCopyright) {
        footerCopyright.textContent = footerCopyright.getAttribute('data-' + lang);
    }
    
    // Update footer text (legacy)
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

// Function to fix paths for GitHub Pages deployment
function fixPathsForGitHubPages() {
    // Check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    if (isGitHubPages) {
        const repoName = 'dune'; // Your repository name
        const basePath = `/${repoName}`;
        
        // Fix all image src attributes
        const images = document.querySelectorAll('img[src^="/images/"]');
        images.forEach(img => {
            const currentSrc = img.getAttribute('src');
            img.setAttribute('src', basePath + currentSrc);
        });
        
        // Fix all background-image styles
        const elementsWithBgImage = document.querySelectorAll('[style*="background-image: url(\'/images/"]');
        elementsWithBgImage.forEach(element => {
            const currentStyle = element.getAttribute('style');
            const updatedStyle = currentStyle.replace(/url\('\/images\//g, `url('${basePath}/images/`);
            element.setAttribute('style', updatedStyle);
        });
        
        // Fix font URLs in stylesheets
        const styleSheets = document.styleSheets;
        for (let i = 0; i < styleSheets.length; i++) {
            try {
                const styleSheet = styleSheets[i];
                if (styleSheet.cssRules) {
                    for (let j = 0; j < styleSheet.cssRules.length; j++) {
                        const rule = styleSheet.cssRules[j];
                        if (rule.type === CSSRule.FONT_FACE_RULE) {
                            const cssText = rule.cssText;
                            if (cssText.includes("url('./Fonts/")) {
                                // Remove the existing rule
                                styleSheet.deleteRule(j);
                                // Add the updated rule
                                const updatedCss = cssText.replace(/url\('\.\//g, `url('${basePath}/`);
                                styleSheet.insertRule(updatedCss, j);
                            }
                        }
                    }
                }
            } catch (e) {
                // Some stylesheets might not be accessible due to CORS
                console.warn('Could not access stylesheet:', e);
            }
        }
        
        // Alternative approach for font URLs - update the style element directly
        const styleElements = document.querySelectorAll('style');
        styleElements.forEach(style => {
            if (style.innerHTML.includes("url('./Fonts/")) {
                style.innerHTML = style.innerHTML.replace(/url\('\.\//g, `url('${basePath}/`);
            }
        });
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fixPathsForGitHubPages);
