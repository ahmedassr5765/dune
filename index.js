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

/* 
   EASY PROPERTY MANAGEMENT SYSTEM
   
   To add a new property, simply copy the template below and add it to the appropriate floor array:
   
   PROPERTY TEMPLATE:
   {
       id: 'unique-id',                                      // Unique identifier
       title: { en: 'English Title', ar: 'Arabic Title' },   // Property name
       type: 'commercial' or 'hotel',                        // Property type (affects badge color)
       typeLabel: { en: 'English Label', ar: 'Arabic Label' }, // Badge text
       size: '1,200 sqft',                                   // Size display text
       sizeCategory: 'small' or 'medium' or 'large',        // For filtering
       layout: { en: 'Layout Name', ar: 'Arabic Layout' },   // Layout description
       layoutCategory: 'open' or 'divided' or 'mixed',      // For filtering
       availability: { en: 'Now', ar: 'الآن' },             // Availability text
       availabilityStatus: 'available' or 'coming-soon',    // For status color
       images: ['/images/image1.jpg', '/images/image2.jpg'], // Image URLs (1 or more)
       badgeColor: '#FBAA19'                                 // Badge background color
   }
   
   BADGE COLORS:
   - Commercial: '#FBAA19' (Orange)
   - Hotel: '#2563eb' (Blue)
   - Custom: Any hex color
   
   SIZE CATEGORIES:
   - 'small': Under 1000 sq.m
   - 'medium': 1000 - 2000 sq.m  
   - 'large': Over 2000 sq.m
   
   LAYOUT CATEGORIES:
   - 'open': Open Plan
   - 'divided': Divided Rooms
   - 'mixed': Mixed Layout
   
   FLOORS AVAILABLE:
   - 'lower-ground': Lower Ground Floor
   - 'ground': Ground Floor
   - 'first': First Floor
   - 'second': Second Floor
   - 'third': Third Floor
   - 'rooftop': Rooftop
   - 'commercial-units': Commercial Units
   
   EXAMPLE - Adding a new property to Second Floor:
   floorPlansData['second'].push({
       id: 's2-001',
       title: { en: 'Second floor - S2', ar: 'الطابق الثاني - S2' },
       type: 'commercial',
       typeLabel: { en: 'Commercial - Office', ar: 'تجاري - مكتب' },
       size: '1,800 sqft',
       sizeCategory: 'medium',
       layout: { en: 'Open Office', ar: 'مكتب مفتوح' },
       layoutCategory: 'open',
       availability: { en: 'Q4 2025', ar: 'الربع الرابع 2025' },
       availabilityStatus: 'coming-soon',
       images: ['/images/second-floor-1.jpg'],
       badgeColor: '#FBAA19'
   });
*/

// Floor Plans Data Structure - Easy to add new properties
const floorPlansData = {
    'ground': [
        {
            id: 'gr-001',
            title: { en: 'Ground floor - GR', ar: 'الطابق الأرضي - GR' },
            type: 'commercial',
            typeLabel: { en: 'Commercial / Retail', ar: 'تجاري / تجزئة' },
            size: '464 sq.m',
            sizeCategory: 'small', // Under 1000 sq.m
            layout: { en: 'Terrace  167 sq.m / Direct Accsess', ar: 'مساحة مفتوحة 167 متر مربع / وصول مباشر' },
            layoutCategory: 'open', // open, divided, mixed
            availability: { en: 'Now', ar: 'الآن' },
            availabilityStatus: 'available', // available, coming-soon
            images: ['/images/groundfloor-1.png', '/images/groundfloor-1.png'],
            badgeColor: '#FBAA19' // Orange for commercial
        },
        {
            id: 'gr-002',
            title: { en: 'Ground floor - RL', ar: 'الطابق الأرضي - RL' },
            type: 'hotel',
            typeLabel: { en: 'Commercial / Retail', ar: 'تجاري / تجزئة' },
            size: '464 sq.m',
            sizeCategory: 'small', // Under 1000 sq.m
            layout: { en: 'Terrace  167 sq.m / Direct Accsess', ar: 'مساحة مفتوحة 167 متر مربع / وصول مباشر' },
            layoutCategory: 'divided',
            availability: { en: 'Q2 2025', ar: 'الربع الثاني 2025' },
            availabilityStatus: 'coming-soon',
            images: ['/images/groundfloor-2.png', '/images/groundfloor-2.png'],
            badgeColor: '#2563eb' // Blue for hotel
        }
    ],
    'lower-ground': [
        {
            id: 'lg-001',
            title: { en: 'Lower Ground floor - LG', ar: 'الطابق الأرضي - LG' },
            type: 'commercial',
            typeLabel: { en: 'Commercial - Retail', ar: 'تجاري - تجزئة' },
            size: '195 sq.m',
            sizeCategory: 'small', // Under 1000 sq.m (converted from 2,100 sqft)
            layout: { en: 'Mixed Layout', ar: 'تصميم مختلط' },
            layoutCategory: 'mixed',
            availability: { en: 'Now', ar: 'الآن' },
            availabilityStatus: 'available',
            images: ['/images/ground-floor-1.jpg', '/images/ground-floor-1-alt.jpg'],
            badgeColor: '#FBAA19'
        }
    ],
    'first': [
        {
            id: 'f1-001',
            title: { en: 'First floor - F1', ar: 'الطابق الأول - F1' },
            type: 'hotel',
            typeLabel: { en: 'Hotel', ar: 'فندق' },
            size: '111 sq.m',
            sizeCategory: 'small', // Under 1000 sq.m (converted from 1,200 sqft)
            layout: { en: 'Divided Rooms', ar: 'غرف منفصلة' },
            layoutCategory: 'divided',
            availability: { en: 'Q3 2025', ar: 'الربع الثالث 2025' },
            availabilityStatus: 'coming-soon',
            images: ['/images/first-floor-1.jpg', '/images/first-floor-1-alt.jpg'],
            badgeColor: '#2563eb'
        }
    ],
    'second': [
        {
            id: 's2-001',
            title: { en: 'Second floor - S2A', ar: 'الطابق الثاني - S2A' },
            type: 'commercial',
            typeLabel: { en: 'Commercial / Office', ar: 'تجاري / مكتب' },
            size: '1,200 sq.m',
            sizeCategory: 'medium', // 1000-2000 sq.m
            layout: { en: 'Open Office Space', ar: 'مساحة مكتبية مفتوحة' },
            layoutCategory: 'open',
            availability: { en: 'Q4 2025', ar: 'الربع الرابع 2025' },
            availabilityStatus: 'coming-soon',
            images: ['/images/second-floor-1.jpg', '/images/second-floor-1-alt.jpg'],
            badgeColor: '#FBAA19'
        }
    ], // Add properties here
    'third': [
        {
            id: 't3-001',
            title: { en: 'Third floor - T3A', ar: 'الطابق الثالث - T3A' },
            type: 'commercial',
            typeLabel: { en: 'Commercial / Warehouse', ar: 'تجاري / مستودع' },
            size: '2,500 sq.m',
            sizeCategory: 'large', // Over 2000 sq.m
            layout: { en: 'Large Open Space', ar: 'مساحة مفتوحة كبيرة' },
            layoutCategory: 'open',
            availability: { en: 'Q1 2026', ar: 'الربع الأول 2026' },
            availabilityStatus: 'coming-soon',
            images: ['/images/third-floor-1.jpg', '/images/third-floor-1-alt.jpg'],
            badgeColor: '#FBAA19'
        }
    ], // Add properties here
    'rooftop': [], // Add properties here
    'commercial-units': [] // Add properties here
};

// Property Card Template Generator
function generatePropertyCard(property) {
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    
    return `
        <div class="property-card bg-white overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300" 
             style="width: 623px; height: 462px; border-radius: 20px;"
             data-type="${property.type}" 
             data-size="${property.sizeCategory}" 
             data-layout="${property.layoutCategory}">
            
            <!-- Image Section -->
            <div class="relative" style="height: 250px;">
                <div class="carousel-container relative h-full overflow-hidden" style="border-radius: 20px 20px 0 0;">
                    ${property.images.map((img, index) => `
                        <img src="${img}" alt="Floor Plan" class="carousel-slide ${index === 0 ? 'active' : ''} w-full h-full object-cover">
                    `).join('')}
                </div>
                
                <!-- Carousel Navigation -->
                ${property.images.length > 1 ? `
                    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        ${property.images.map((_, index) => `
                            <button class="carousel-dot ${index === 0 ? 'active' : ''} w-2 h-2 rounded-full bg-white ${index === 0 ? 'opacity-70' : 'opacity-40'} hover:opacity-100 transition-opacity duration-200"></button>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            
            <!-- Property Details -->
            <div class="p-6 flex flex-col justify-between" style="height: 212px;">
                <!-- Title -->
                <div class="mb-4">
                    <h3 class="font-bold font-ddin text-[24px] text-black mb-4" data-en="${property.title.en}" data-ar="${property.title.ar}">${property.title[currentLang]}</h3>
                    
                    <!-- Two Column Layout -->
                    <div class="flex justify-between">
                        <!-- Left Side: Size and Type Info -->
                        <div class="flex-1">
                            <div class="mb-2">
                                <span class="text-[#2A2A2A] text-[16px] font-helvetica">
                                    <span data-en="Size" data-ar="المساحة">Size</span>: ${property.size}
                                </span>
                            </div>
                            <div>
                                <span class="text-[#2A2A2A] text-[16px] font-helvetica" data-en="${property.typeLabel.en}" data-ar="${property.typeLabel.ar}">${property.typeLabel[currentLang]}</span>
                            </div>
                        </div>
                        
                        <!-- Right Side: Access Info -->
                        <div class="flex-1 text-left">
                            <div class="mb-2">
                                <span class="text-[#2A2A2A] text-[16px] font-helvetica font-medium">
                                    <span data-en="Access" data-ar="الوصول">Access</span>
                                </span>
                            </div>
                            <div>
                                <span class="text-[#2A2A2A] text-[16px] font-helvetica" data-en="${property.layout.en}" data-ar="${property.layout.ar}">${property.layout[currentLang]}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- View Details Button -->
                <button class="bg-black hover:bg-gray-800 text-white py-2 px-8 text-[16px] font-ddin font-medium transition-colors duration-200" 
                        style="border-radius: 0; width: fit-content;"
                        data-en="View Details" data-ar="عرض التفاصيل">
                    View Details
                </button>
            </div>
        </div>
    `;
}

// Function to render properties for a specific floor
function renderFloorProperties(floorName) {
    const properties = floorPlansData[floorName] || [];
    const floorContent = document.getElementById(floorName + '-content');
    
    if (!floorContent) return;
    
    const flexContainer = floorContent.querySelector('.flex');
    if (!flexContainer) return;
    
    // Clear existing content except coming soon messages
    const existingCards = flexContainer.querySelectorAll('.property-card');
    existingCards.forEach(card => card.remove());
    
    if (properties.length === 0) {
        // Show "coming soon" message if no properties
        if (!flexContainer.querySelector('.coming-soon-message')) {
            const comingSoonMessage = document.createElement('div');
            comingSoonMessage.className = 'coming-soon-message w-full text-center py-12';
            comingSoonMessage.innerHTML = '<p class="text-gray-500 text-[16px] font-helvetica" data-en="Floor plans coming soon" data-ar="مخططات الأرضيات قريباً">Floor plans coming soon</p>';
            flexContainer.appendChild(comingSoonMessage);
        }
    } else {
        // Remove coming soon message if it exists
        const comingSoonMessage = flexContainer.querySelector('.coming-soon-message');
        if (comingSoonMessage) {
            comingSoonMessage.remove();
        }
        
        // Generate and insert property cards
        properties.forEach(property => {
            const cardHTML = generatePropertyCard(property);
            flexContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
}

// Function to render all floors
function renderAllFloors() {
    Object.keys(floorPlansData).forEach(floorName => {
        renderFloorProperties(floorName);
    });
    
    // Re-initialize carousels after rendering
    setTimeout(() => {
        initializeCarousels();
    }, 100);
}

// Function to add a new property to a floor
function addProperty(floorName, propertyData) {
    if (!floorPlansData[floorName]) {
        floorPlansData[floorName] = [];
    }
    
    floorPlansData[floorName].push(propertyData);
    renderFloorProperties(floorName);
    
    // Re-apply filters
    setTimeout(() => {
        applyFilters();
    }, 100);
}

// Helper function to quickly create a property with common defaults
function createProperty({
    id,
    titleEn,
    titleAr,
    type = 'commercial', 
    typeLabelEn = type === 'commercial' ? 'Commercial - Unit' : 'Hotel',
    typeLabelAr = type === 'commercial' ? 'تجاري - وحدة' : 'فندق',
    size,
    sizeCategory = 'medium',
    layoutEn,
    layoutAr,
    layoutCategory = 'open',
    availabilityEn = 'Now',
    availabilityAr = 'الآن',
    availabilityStatus = 'available',
    images = [],
    badgeColor = type === 'commercial' ? '#FBAA19' : '#2563eb'
}) {
    return {
        id,
        title: { en: titleEn, ar: titleAr },
        type,
        typeLabel: { en: typeLabelEn, ar: typeLabelAr },
        size,
        sizeCategory,
        layout: { en: layoutEn, ar: layoutAr },
        layoutCategory,
        availability: { en: availabilityEn, ar: availabilityAr },
        availabilityStatus,
        images,
        badgeColor
    };
}

/* 
   QUICK ADD EXAMPLE using helper function:
   
   // Add a commercial property to second floor
   floorPlansData['second'].push(createProperty({
       id: 's2-001',
       titleEn: 'Second floor - S2',
       titleAr: 'الطابق الثاني - S2',
       size: '1,800 sqft',
       layoutEn: 'Open Office',
       layoutAr: 'مكتب مفتوح',
       images: ['/images/second-floor-1.jpg', '/images/second-floor-1-alt.jpg']
   }));
   
   // Add a hotel property to third floor
   floorPlansData['third'].push(createProperty({
       id: 't3-001',
       titleEn: 'Third floor - T3',
       titleAr: 'الطابق الثالث - T3',
       type: 'hotel',
       size: '2,500 sqft',
       sizeCategory: 'large',
       layoutEn: 'Hotel Suite',
       layoutAr: 'جناح فندقي',
       layoutCategory: 'divided',
       availabilityEn: 'Q1 2026',
       availabilityAr: 'الربع الأول 2026',
       availabilityStatus: 'coming-soon',
       images: ['/images/third-floor-1.jpg']
   }));
*/

// Floor Plans Section Functionality for Leasing Page
document.addEventListener('DOMContentLoaded', function() {
    // Floor Tab Functionality
    const floorTabs = document.querySelectorAll('.floor-tab');
    const floorContents = document.querySelectorAll('.floor-content');
    
    if (floorTabs.length > 0) {
        floorTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetFloor = this.getAttribute('data-floor');
                
                // Remove active class from all tabs and contents
                floorTabs.forEach(t => {
                    t.classList.remove('active');
                    t.classList.remove('bg-black', 'text-white', 'hover:bg-gray-800');
                    t.classList.add('bg-transparent', 'text-gray-700', 'hover:bg-gray-100');
                });
                floorContents.forEach(content => {
                    content.classList.remove('active');
                    content.style.display = 'none';
                });
                
                // Add active class to clicked tab
                this.classList.add('active');
                this.classList.remove('bg-transparent', 'text-gray-700', 'hover:bg-gray-100');
                this.classList.add('bg-black', 'text-white', 'hover:bg-gray-800');
                
                // Show corresponding content
                const targetContent = document.getElementById(targetFloor + '-content');
                if (targetContent) {
                    targetContent.classList.add('active');
                    targetContent.style.display = 'block';
                }
                
                // Apply current filters to new content
                applyFilters();
            });
        });
    }
    
    // Filter Functionality
    const typeFilter = document.getElementById('typeFilter');
    const sizeFilter = document.getElementById('sizeFilter');
    const layoutFilter = document.getElementById('layoutFilter');
    
    function applyFilters() {
        const typeValue = typeFilter ? typeFilter.value : '';
        const sizeValue = sizeFilter ? sizeFilter.value : '';
        const layoutValue = layoutFilter ? layoutFilter.value : '';
        
        const propertyCards = document.querySelectorAll('.property-card');
        
        propertyCards.forEach(card => {
            const cardType = card.getAttribute('data-type');
            const cardSize = card.getAttribute('data-size');
            const cardLayout = card.getAttribute('data-layout');
            
            let showCard = true;
            
            // Filter by type
            if (typeValue && cardType !== typeValue) {
                showCard = false;
            }
            
            // Filter by size
            if (sizeValue && cardSize !== sizeValue) {
                showCard = false;
            }
            
            // Filter by layout
            if (layoutValue && cardLayout !== layoutValue) {
                showCard = false;
            }
            
            // Show or hide card
            if (showCard) {
                card.style.display = 'block';
                card.classList.remove('hidden');
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
            }
        });
        
        // Check if any cards are visible in current floor
        const activeFloorContent = document.querySelector('.floor-content.active');
        if (activeFloorContent) {
            const visibleCards = activeFloorContent.querySelectorAll('.property-card:not(.hidden)');
            const noResultsMessage = activeFloorContent.querySelector('.no-results');
            
            if (visibleCards.length === 0) {
                // Show no results message
                if (!noResultsMessage) {
                    const noResults = document.createElement('div');
                    noResults.className = 'no-results col-span-full text-center py-12';
                    noResults.innerHTML = '<p class="text-gray-500 text-[16px] font-helvetica">No properties match your filters</p>';
                    activeFloorContent.querySelector('.grid').appendChild(noResults);
                }
            } else {
                // Remove no results message if it exists
                if (noResultsMessage) {
                    noResultsMessage.remove();
                }
            }
        }
    }
    
    // Add event listeners to filters
    if (typeFilter) {
        typeFilter.addEventListener('change', applyFilters);
    }
    if (sizeFilter) {
        sizeFilter.addEventListener('change', applyFilters);
    }
    if (layoutFilter) {
        layoutFilter.addEventListener('change', applyFilters);
    }
    
    // Image Carousel Functionality
    function initializeCarousels() {
        const carouselContainers = document.querySelectorAll('.carousel-container');
        
        carouselContainers.forEach(container => {
            const slides = container.querySelectorAll('.carousel-slide');
            const dots = container.parentElement.querySelectorAll('.carousel-dot');
            let currentSlide = 0;
            
            if (slides.length <= 1) return; // Skip if only one slide
            
            // Initially hide all slides except the first
            slides.forEach((slide, index) => {
                if (index === 0) {
                    slide.style.display = 'block';
                    slide.classList.add('active');
                } else {
                    slide.style.display = 'none';
                    slide.classList.remove('active');
                }
            });
            
            // Dot click functionality
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Hide current slide
                    slides[currentSlide].style.display = 'none';
                    slides[currentSlide].classList.remove('active');
                    dots[currentSlide].classList.remove('active');
                    
                    // Show new slide
                    currentSlide = index;
                    slides[currentSlide].style.display = 'block';
                    slides[currentSlide].classList.add('active');
                    dots[currentSlide].classList.add('active');
                });
            });
            
            // Auto-advance carousel every 5 seconds
            setInterval(() => {
                if (slides.length > 1) {
                    // Hide current slide
                    slides[currentSlide].style.display = 'none';
                    slides[currentSlide].classList.remove('active');
                    dots[currentSlide].classList.remove('active');
                    
                    // Move to next slide
                    currentSlide = (currentSlide + 1) % slides.length;
                    
                    // Show new slide
                    slides[currentSlide].style.display = 'block';
                    slides[currentSlide].classList.add('active');
                    dots[currentSlide].classList.add('active');
                }
            }, 5000);
        });
    }
    
    // Initialize floor data and render all floors
    renderAllFloors();
    
    // Initialize floor content display
    const activeFloorContent = document.querySelector('.floor-content.active');
    if (activeFloorContent) {
        activeFloorContent.style.display = 'block';
    }
    
    // Hide non-active floor contents
    floorContents.forEach(content => {
        if (!content.classList.contains('active')) {
            content.style.display = 'none';
        }
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
    
    // Update meeting section title (for about.html)
    const meetingTitle = document.querySelector('.meeting-title');
    if (meetingTitle) {
        meetingTitle.textContent = meetingTitle.getAttribute('data-' + lang);
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
    
    // Update amenities page elements
    const amenitiesTitle = document.querySelector('.hero-title');
    if (amenitiesTitle && amenitiesTitle.hasAttribute('data-' + lang)) {
        amenitiesTitle.textContent = amenitiesTitle.getAttribute('data-' + lang);
    }
    
    const amenitiesSubtitle = document.querySelector('.hero-subtitle');
    if (amenitiesSubtitle && amenitiesSubtitle.hasAttribute('data-' + lang)) {
        amenitiesSubtitle.textContent = amenitiesSubtitle.getAttribute('data-' + lang);
    }
    
    // Update section headings (Tech Infrastructure, Building Facilities, Services)
    const sectionHeadings = document.querySelectorAll('h2[data-en][data-ar]');
    sectionHeadings.forEach(heading => {
        heading.textContent = heading.getAttribute('data-' + lang);
    });
    
    // Update card titles
    const cardTitles = document.querySelectorAll('h3[data-en][data-ar]');
    cardTitles.forEach(title => {
        title.textContent = title.getAttribute('data-' + lang);
    });
    
    // Update card descriptions
    const cardDescriptions = document.querySelectorAll('p[data-en][data-ar]');
    cardDescriptions.forEach(desc => {
        desc.textContent = desc.getAttribute('data-' + lang);
    });
    
    // Update leasing page elements
    const floorplansTitle = document.querySelector('.floorplans-title');
    if (floorplansTitle && floorplansTitle.hasAttribute('data-' + lang)) {
        floorplansTitle.textContent = floorplansTitle.getAttribute('data-' + lang);
    }
    
    const floorplansSubtitle = document.querySelector('.floorplans-subtitle');
    if (floorplansSubtitle && floorplansSubtitle.hasAttribute('data-' + lang)) {
        floorplansSubtitle.textContent = floorplansSubtitle.getAttribute('data-' + lang);
    }
    
    // Update floor tabs
    const floorTabSpans = document.querySelectorAll('.floor-tab span[data-en][data-ar]');
    floorTabSpans.forEach(span => {
        span.textContent = span.getAttribute('data-' + lang);
    });
    
    // Update property card elements
    const propertyElements = document.querySelectorAll('[data-en][data-ar]');
    propertyElements.forEach(element => {
        if (element.hasAttribute('data-' + lang)) {
            element.textContent = element.getAttribute('data-' + lang);
        }
    });
    
    // Re-render floor plans if they exist (for language update)
    if (typeof renderAllFloors === 'function') {
        renderAllFloors();
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

// Dynamic Overlay Height Synchronization for Amenities Page
document.addEventListener('DOMContentLoaded', function() {
    // Function to synchronize overlay heights within each section
    function synchronizeOverlaysInSection(sectionSelector) {
        const section = document.querySelector(sectionSelector);
        if (!section) return;
        
        const overlays = section.querySelectorAll('[data-overlay]');
        let maxHeight = 0;
        
        // Reset all overlays to auto height to measure natural height
        overlays.forEach(overlay => {
            overlay.style.height = 'auto';
        });
        
        // Find the maximum height needed
        overlays.forEach(overlay => {
            const height = overlay.offsetHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        });
        
        // Apply the maximum height to all overlays in this section
        overlays.forEach(overlay => {
            overlay.style.height = maxHeight + 'px';
        });
    }
    
    // Apply to each section independently
    synchronizeOverlaysInSection('[data-section="tech"]');
    synchronizeOverlaysInSection('[data-section="building"]');
    synchronizeOverlaysInSection('[data-section="services"]');
    
    // Re-synchronize on window resize
    window.addEventListener('resize', function() {
        synchronizeOverlaysInSection('[data-section="tech"]');
        synchronizeOverlaysInSection('[data-section="building"]');
        synchronizeOverlaysInSection('[data-section="services"]');
    });
});
