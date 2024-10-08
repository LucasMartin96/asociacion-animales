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

    // New function for the Animals of the Region carousel
    function initializeAnimalCarousel() {
        const carousel = document.querySelector('.carousel-container');
        const slides = document.querySelectorAll('.carousel-slide');
        const prevButton = document.querySelector('.carousel-button.prev');
        const nextButton = document.querySelector('.carousel-button.next');
        let currentIndex = 0;

        function showSlide(index) {
            carousel.style.transform = `translateX(-${index * 33.333}%)`;
        }

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                showSlide(currentIndex);
            });

            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            });
        }
    }

    // New function for the animal information modal
    function initializeAnimalModal() {
        const modal = document.getElementById('animalModal');
        const modalContent = document.querySelector('.modal-content');
        const closeButton = document.querySelector('.close');

        const animalData = {
            1: {
                name: 'Le Renard',
                image: 'images/animal1.jpg',
                title: "Je côtoie le renard",
                text: "Le renard s’est invité lui-même en ville. Sa chasse est interdite en ville et on a pu observer que les populations arrivaient à s’autoréguler, le nombre de renards dépendant plutôt de la disponibilité en territoire et en nourriture. Diminuer sa population ne servirait à rien et pourrait même avoir l’effet inverse. Les naturalistes et les chasseurs ne semblent pas pouvoir se mettre d’accord sur la « bonne manière » de gérer cet animal.",
                advices_title: "Vivre avec, quelques conseils:Se basant sur des études scientifiques, des organismes œuvrant à la préservation du renard en ville nous donnent quelques conseils",
                advices: [
                    "Il est inutile de tuer l’animal car il sera directement remplacer par un autre (autorégulation de la population).", 
                    "Il faut éviter de mettre de la nourriture en évidence à l’extérieur de la maison. Utiliser des poubelles solides plu-tôt que des sacs plastiques.",
                    "Il ne faut pas tenter de domestiquer le renard, car il pourrait prendre pour acquis qu’il est le bienvenu dans toutes les maisons et créer plus de désagréments pour certains habitants.",
                    "La maladie de la rage a disparu de France. Il faut toutefois rester prudent : ne pas toucher l’animal et se laver les mains si on touche ses excréments.",
                    "Il est très efficace à la chasse des mulots et est un nettoyeur des cadavres hors pair. Les oiseaux, hérissons, lapins écrasés sur la route font son repas.",
                    "Il est très utile."
                ]
            },
            2: {
                name: 'Les Chats',
                image: 'images/animal2.jpg',
                title: "",
                text: "",
                advices_title: "",
                advices: "",
            },
            3: {
                name: 'Les Chiens',
                image: 'images/animal3.jpg',
                title: "",
                text: "",
                advices_title: "",
                advices: "",
            },
            4: {
                name: 'Les Oiseaux',
                image: 'images/animal3.jpg',
                title: "",
                text: "",
                advices_title: "",
                advices: "",
            },
            5: {
                name: 'Les Oiseaux',
                image: 'images/animal3.jpg',
                title: "",
                text: "",
                advices_title: "",
                advices: "",
            },
            6: {
                name: "Les L'Ecureuil",
                image: 'images/animal3.jpg',
                title: "",
                text: "",
                advices_title: "",
                advices: "",
            }
        };

        document.querySelectorAll('.animal-card').forEach(card => {
            card.addEventListener('click', () => {
                const animalId = card.dataset.animalId;
                const animal = animalData[animalId];
                if (animal && modalContent) {
                    modalContent.innerHTML = `
                        <span class="close">&times;</span>
                        <h2>${animal.name}</h2>
                        <img src="${animal.image}" alt="${animal.name}">
                        <div class="modal-text">
                            <h3>${animal.title}</h3>
                            <p>${animal.text}</p>
                            <h4>${animal.advices_title}</h4>
                            <ul>
                                ${animal.advices.map(advice => `<li>${advice}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                    modal.style.display = 'block';

                    // Reattach close button event listener
                    const newCloseButton = modalContent.querySelector('.close');
                    if (newCloseButton) {
                        newCloseButton.addEventListener('click', () => {
                            modal.style.display = 'none';
                        });
                    }
                }
            });
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Initialize all components
    initializeFeaturedAnimals();
    initializeCarousel();
    initializeMobileNav();
    initializeNavbar();
    initializeSmoothScroll();
    initializeAnimalCarousel(); // Add this line
    initializeAnimalModal(); // Add this line
});
