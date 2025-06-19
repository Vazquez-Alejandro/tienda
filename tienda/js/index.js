/* INICIALIZACIÓN GENERAL */
document.addEventListener('DOMContentLoaded', function () {

    /* NAVBAR */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) { // Verificación para asegurar que los elementos existen
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('hidden');
        });
    }

    /* CARRUSELES */

    // DATOS PARA EL PRIMER CARRUSEL (BANNERS DE PANTALLA COMPLETA)
    const mainCarouselData = [
        {
            image: 'assets/sidebar_capsulas04_tablet_v2.jpg', // RUTA DE LA IMAGEN 1
            title: 'Proba nuestras',
            highlightedText: 'CAPSULAS',
            text: '100% aluminio compatibles con máquinas Nespresso*',
            buttonText: 'DESCUBRILAS',
            buttonLink: '#'
        },
        {
            image: 'assets/sidebar_tostadores02_tablet.jpg', // RUTA DE LA IMAGEN 2
            title: 'Desde 2007',
            highlightedText: 'TOSTANDO TU CAFÉ',
            text: 'Años de experiencia asegurando calidad en cada grano.'
        },
        {
            image: 'assets/sidebar_cafe01_tablet_v2.jpg', // RUTA DE LA IMAGEN 3
            title: 'Tu café preferido',
            highlightedText: 'SIEMPRE CERCA',
            text: 'Blends, varietales, cafés del mundo. Encontrá tu Tienda más cercana y tentate con nuestros sabores.',
            buttonText: 'ENCONTRANOS',
            buttonLink: '#'
        }
    ];

    // DATOS PARA EL SEGUNDO CARRUSEL (PRODUCTOS)
    const productCarouselData = [
        { name: 'Café Brasil', url: 'assets/Productos_cafe_packs_BRASIL_frente-600x600.jpg', link: '../cafe-brasil.html'},
        { name: 'Café Barista', url: 'assets/Productos_cafe_packs_BARISTA_frente-600x600.jpg', link: '#' },
        { name: 'Café Minka', url: 'assets/Productos_cafe_packs_MINKA_frente-600x600.jpg', link: '#' },
        { name: 'Café Colombia', url: 'assets/Productos_cafe_packs_COLOMBIA_frente-600x600.jpg', link: '#' },
        { name: 'Café Scegliere', url: 'assets/Productos_cafe_packs_SCEGLIERE_frente-600x600.jpg', link: '#' },
        { name: 'Café Descafeinado', url: 'assets/Productos_cafe_packs_descaf_frente-600x600.jpg', link: '#' },
        { name: 'Cápsulas de Café Barista', url: 'assets/capsulas_taza_barista-600x600.jpg', link: '#' },
        { name: 'Cápsulas de Café Scegliere', url: 'assets/capsulas_taza_scegliere-600x600.jpg', link: '#' },
        { name: 'Cápsulas de Café Colombia', url: 'assets/capsulas_taza_colombia-600x600.jpg', link: '#' },
        { name: 'Cápsulas de Café Minka', url: 'assets/capsulas_taza_minka-600x600.jpg', link: '#' }
    ];

    // FUNCIÓN PARA GENERAR EL PRIMER CARRUSEL (BANNERS)
    const renderMainCarousel = () => {
        const mainCarouselInner = document.getElementById('mainCarouselInner');
        const mainCarouselIndicators = document.getElementById('mainCarouselIndicators');

        if (!mainCarouselInner || !mainCarouselIndicators) {
            console.error('ERROR: No se encontraron los elementos HTML para el carrusel principal. Verifica los IDs.');
            return; // Salir si no encontramos los elementos
        }

        mainCarouselInner.innerHTML = '';
        mainCarouselIndicators.innerHTML = '';

        mainCarouselData.forEach((slide, index) => {
            const carouselItemDiv = document.createElement('div');
            carouselItemDiv.classList.add('carousel-item');
            if (index === 0) {
                carouselItemDiv.classList.add('active');
            }

            const img = document.createElement('img');
            img.classList.add('d-block', 'w-100');
            img.src = slide.image;
            img.alt = `Slide ${index + 1}`;
            carouselItemDiv.appendChild(img);

            const captionDiv = document.createElement('div');
            captionDiv.classList.add('carousel-caption');
            captionDiv.classList.add('text-center');

            const titleElement = document.createElement('h5');
            titleElement.classList.add('carousel-title');
            titleElement.textContent = slide.title;
            captionDiv.appendChild(titleElement);

            if (slide.highlightedText) {
                const highlightedTextElement = document.createElement('h1');
                highlightedTextElement.classList.add('carousel-highlighted-text');
                highlightedTextElement.textContent = slide.highlightedText;
                captionDiv.appendChild(highlightedTextElement);
            }

            const textElement = document.createElement('p');
            textElement.classList.add('carousel-text');
            textElement.textContent = slide.text;
            captionDiv.appendChild(textElement);

            if (slide.buttonText && slide.buttonLink) {
                const button = document.createElement('a');
                button.href = slide.buttonLink;
                button.classList.add('carousel-custom-btn');
                button.textContent = slide.buttonText;
                captionDiv.appendChild(button);
            }

            carouselItemDiv.appendChild(captionDiv);
            mainCarouselInner.appendChild(carouselItemDiv);

            const indicatorLi = document.createElement('li');
            indicatorLi.dataset.bsTarget = '#mainCarousel';
            indicatorLi.dataset.bsSlideTo = index;
            if (index === 0) {
                indicatorLi.classList.add('active');
            }
            mainCarouselIndicators.appendChild(indicatorLi);
        });
    };

    // FUNCIÓN PARA GENERAR EL SEGUNDO CARRUSEL (PRODUCTOS)
    const renderProductCarousel = () => {
        const productCarouselInner = document.getElementById('productCarouselInner');
        const productCarouselIndicators = document.getElementById('productCarouselIndicators');
        
        if (!productCarouselInner || !productCarouselIndicators) {
            console.error('ERROR: No se encontraron los elementos HTML para el carrusel de productos. Verifica los IDs.');
            return; // Salir si no encontramos los elementos
        }

        productCarouselInner.innerHTML = '';
        productCarouselIndicators.innerHTML = '';

        const slidesContent = [
            productCarouselData.slice(0, 4),
            productCarouselData.slice(4, 8),
            [...productCarouselData.slice(8, 10), ...productCarouselData.slice(0, 2)]
        ];

        const createProductHTML = (item) => `
            <div class="product-item">
                <a href="${item.link}">
                    <img src="${item.url}" class="img-fluid" alt="${item.name}">
                    <p>${item.name}</p>
                </a>
            </div>
        `;

        slidesContent.forEach((slideItems, index) => {
            const carouselItemDiv = document.createElement('div');
            carouselItemDiv.classList.add('carousel-item');
            if (index === 0) {
                carouselItemDiv.classList.add('active');
            }

            const carouselContentDiv = document.createElement('div');
            carouselContentDiv.classList.add('carousel-item-content');

            slideItems.forEach(item => {
                carouselContentDiv.innerHTML += createProductHTML(item);
            });

            carouselItemDiv.appendChild(carouselContentDiv);
            productCarouselInner.appendChild(carouselItemDiv);

            const indicatorLi = document.createElement('li');
            indicatorLi.dataset.bsTarget = '#productCarousel';
            indicatorLi.dataset.bsSlideTo = index;
            if (index === 0) {
                indicatorLi.classList.add('active');
            }
            productCarouselIndicators.appendChild(indicatorLi);
        });
    };

    // INICIALIZACIÓN DE AMBOS CARRUSELES AL CARGAR LA PÁGINA
    renderMainCarousel();
    renderProductCarousel();
});