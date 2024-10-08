document.addEventListener('DOMContentLoaded', () => {
    // Featured Animals
    function initializeFeaturedAnimals() {
        const animals = [
            { name: 'Whiskers', type: 'Cat', image: 'images/cat1.jpg' },
            { name: 'Flopsy', type: 'Rabbit', image: 'images/rabbit1.jpg' },
            { name: 'Mittens', type: 'Cat', image: 'images/cat2.jpg' },
            { name: 'Thumper', type: 'Rabbit', image: 'images/rabbit2.jpg' }
        ];

        const animalGrid = document.querySelector('.animal-grid');
        if (animalGrid) {
            animals.forEach(animal => {
                const card = document.createElement('div');
                card.className = 'animal-card';
                card.innerHTML = `
                    <img src="${animal.image}" alt="${animal.name}">
                    <div class="animal-card-content">
                        <h3>${animal.name}</h3>
                        <p>${animal.type}</p>
                    </div>
                `;
                animalGrid.appendChild(card);
            });
        }
    }

    // Success Stories Carousel
    function initializeCarousel() {
        const carousel = document.querySelector('.carousel-inner');
        const items = carousel?.querySelectorAll('.carousel-item');
        const prevBtn = document.querySelector('.carousel-control.prev');
        const nextBtn = document.querySelector('.carousel-control.next');

        if (carousel && items && items.length > 0 && prevBtn && nextBtn) {
            let currentIndex = 0;

            function showSlide(index) {
                if (index < 0) index = items.length - 1;
                if (index >= items.length) index = 0;
                carousel.style.transform = `translateX(-${index * 100}%)`;
                currentIndex = index;
            }

            prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
            nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

            // Auto-advance carousel every 5 seconds
            setInterval(() => showSlide(currentIndex + 1), 5000);
        }
    }

    // Mobile Navigation
    function initializeMobileNav() {
        const nav = document.querySelector('nav');
        if (nav) {
            const mobileNavToggle = document.createElement('button');
            mobileNavToggle.className = 'mobile-nav-toggle';
            mobileNavToggle.innerHTML = '☰';
            nav.prepend(mobileNavToggle);

            const navList = nav.querySelector('ul');
            mobileNavToggle.addEventListener('click', () => {
                navList?.classList.toggle('show');
            });
        }
    }

    // Navbar functionality
    function initializeNavbar() {
        const navbarToggle = document.querySelector('.navbar-toggle');
        const navbarMenu = document.querySelector('.navbar-menu');

        if (navbarToggle && navbarMenu) {
            navbarToggle.addEventListener('click', () => {
                navbarMenu.classList.toggle('active');
                navbarToggle.classList.toggle('active');
            });

            // Close mobile menu when a link is clicked
            document.querySelectorAll('.navbar-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    navbarMenu.classList.remove('active');
                    navbarToggle.classList.remove('active');
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (event) => {
                const isClickInsideNavbar = navbarToggle.contains(event.target) || navbarMenu.contains(event.target);
                if (!isClickInsideNavbar && navbarMenu.classList.contains('active')) {
                    navbarMenu.classList.remove('active');
                    navbarToggle.classList.remove('active');
                }
            });
        }
    }

    // Smooth scrolling for anchor links
    function initializeSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.warn(`Element with id "${targetId}" not found`);
                }
            });
        });
    }

    // Initialize all components
    initializeFeaturedAnimals();
    initializeCarousel();
    initializeMobileNav();
    initializeNavbar();
    initializeSmoothScroll();
});
