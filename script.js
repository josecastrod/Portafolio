// --- 1. DATOS ---

// Mapeo de áreas para filtros
const FILTER_MAP = {
    'Industrial': 'Industrial',
    'Branding': 'Branding',
    'Producto': 'Producto',
    'Gráfico': 'Gráfico' 
};

// Datos de trabajos (actualizados con placeholders de Unsplash para el estilo elegante)
const trabajos = [
    {
        id: 1,
        nombre: "Intervención Textil",
        areas: ["Industrial", "Producto"],
        rol: "Diseño textil + dirección de arte + producción fotográfica",
        thumb: "img/img7.jpg"
    },
    {
        id: 2,
        nombre: "MIDO - Domótica",
        areas: ["UX/UI", "Branding"],
        rol: "Identidad de marca y diseño de APP",
        thumb: "img/mido.webp"
    },
    {
        id: 3,
        nombre: "Hábitat - Un mundo",
        areas: ["Producto"],
        rol: "Diseño de producto, propuesta para Atakama Outdoor SPA de diseño nueva linea de pantuflas",
        thumb: "file:///C:/Users/josef/OneDrive%20-%20Universidad%20Cat%C3%B3lica%20de%20Chile/Documentos/Seminario%20de%20t%C3%ADtulo/web/trabajo%20final/img/panfufla.webp"
    },
    {
        id: 4,
        nombre: "Tesoros Naturales de Chile",
        areas: ["Producto"],
        rol: "Diseño de producto, botella tipo bitácora",
        thumb: "img/botella.webp"
    },
    {
        id: 5,
        nombre: "Línea de hidratación",
        areas: ["Producto"],
        rol: "Diseño de producto, petaca, Hecha en práctica de Atakama Outdoor SPA",
        thumb: "img/petaca.webp"
    },
    {
        id: 6,
        nombre: "Exhibidor Modular para Ferias",
        areas: ["Industrial", "Gráfico"],
        rol: "Diseño integral",
        thumb: ""
    },
    
    {
        id: 7,
        nombre: "Exhibidor Modular para Ferias",
        areas: ["Industrial", "Gráfico"],
        rol: "Diseño integral",
        thumb: ""
    },
    
];

// Extracción de áreas únicas para los botones de filtro, incluyendo 'Todos'
const allAreas = trabajos.flatMap(t => t.areas);
const uniqueAreas = ['Todos', ...new Set(allAreas)].filter(a => a !== 'Todos');

// --- 2. ESTADO GLOBAL ---
let currentPage = 'home';
let activeFilter = 'Todos';
let observer = null; // Variable para el Intersection Observer

// --- 3. FUNCIONES AUXILIARES Y LÓGICA DE NAVEGACIÓN ---

/**
 * Función para configurar el Intersection Observer para animar elementos al hacer scroll.
 * Se encarga de añadir/remover la clase 'visible' cuando el elemento entra/sale de la vista,
 * permitiendo que el efecto se repita cada vez.
 */
function setupScrollAnimation() {
    // Si ya existe un observador, lo desconectamos antes de crear uno nuevo.
    if (observer) {
        observer.disconnect();
    }
    
    // Definimos las opciones del observador.
    const options = {
        root: null, // El viewport
        // El elemento debe estar al menos 100px dentro de la vista para activarse
        rootMargin: '0px 0px -100px 0px', 
        threshold: 0.1
    };

    // Callback que se ejecuta cuando el elemento cruza el umbral
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.target.classList.contains('animate-on-scroll')) {
                if (entry.isIntersecting) {
                    // Si está visible, añade la clase 'visible' para activar la animación CSS
                    entry.target.classList.add('visible');
                } else {
                    // Si sale de la vista, remueve la clase 'visible' para resetear la animación
                    entry.target.classList.remove('visible');
                }
            }
        });
    };

    // Creamos una nueva instancia del observador
    observer = new IntersectionObserver(callback, options);

    // Seleccionamos todos los elementos con la clase 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
}


/**
 * Actualiza los botones de navegación en el header.
 */
function updateNavButtons() {
    document.querySelectorAll('.main-nav .nav-button').forEach(button => {
        const targetPage = button.id.replace('nav-', '');
        // Lógica simple para vincular botones a secciones renderizadas
        const targetMatch = (targetPage === 'projects' || targetPage === 'about' || targetPage === 'contact') ? 
                             targetPage : 'home'; 
        
        if (targetMatch === currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

/**
 * Maneja el cambio de página y renderiza el contenido.
 */
function navigateTo(page) {
    currentPage = page;
    switch (page) {
        case 'home':
            renderHomePage();
            // *** CORRECCIÓN CLAVE: Scroll al inicio de la página (top: 0) ***
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 'projects': 
            renderHomePage(); 
            // Esperar un tick para hacer scroll a la sección de Proyectos
            setTimeout(() => {
                const target = document.getElementById('projects-header-home'); 
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            break;
        case 'about':
            renderHomePage(); 
            // Esperar un tick para que el contenido se renderice antes de hacer scroll
            setTimeout(() => {
                const target = document.getElementById('about-section-home');
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            break;
        case 'contact':
            renderHomePage(); // Mantiene la navegación en la página de inicio
            // Esperar un tick para hacer scroll a la sección de Contacto
            setTimeout(() => {
                const target = document.getElementById('contact-section-home');
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            break;
        default:
            renderHomePage();
    }
}

/**
 * Configura los listeners de clic para la navegación.
 */
function setupNavigationListeners() {
    document.querySelectorAll('.main-nav .nav-button').forEach(button => {
        button.addEventListener('click', () => {
            const targetPage = button.id.replace('nav-', '');
            navigateTo(targetPage);
        });
    });
}

/**
 * Configura los listeners de clic para los filtros verticales del HOME.
 */
function setupVerticalFilterListeners(areas) {
    const filterListDiv = document.getElementById('home-filter-list');
    if (!filterListDiv) return;

    filterListDiv.innerHTML = areas.map(area => `
        <button class="vertical-filter-button ${activeFilter === area ? 'active' : ''}" data-filter="${area}">
            ${area}
        </button>
    `).join('');

    filterListDiv.querySelectorAll('.vertical-filter-button').forEach(button => {
        button.addEventListener('click', (event) => {
            activeFilter = event.target.getAttribute('data-filter');
            
            // Actualizar estado visual del filtro
            filterListDiv.querySelectorAll('.vertical-filter-button').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Re-renderiza solo la sección de proyectos, no toda la página.
            const oldGridContainer = document.querySelector('.projects-list-section');
            if (oldGridContainer) {
                 oldGridContainer.remove(); 
            }
            const filteredTrabajos = activeFilter === 'Todos'
                ? trabajos
                : trabajos.filter(t => t.areas.includes(activeFilter));

            const newGrid = renderProjectGrid(filteredTrabajos);
            newGrid.classList.add('animate-on-scroll');
            
            // Insertar el nuevo grid después del header de proyectos
            const projectsHeader = document.querySelector('.main-container[style*="padding-top: 4rem"]');
            if (projectsHeader) {
                projectsHeader.parentNode.insertBefore(newGrid, projectsHeader.nextSibling);
            }

            // Re-observar solo el nuevo grid 
            setupScrollAnimation();
        });
    });
}

/**
 * Función auxiliar para crear la sección "Sobre Mí" en el Home
 */
/**
 * Función auxiliar para crear la sección "Sobre Mí" en el Home (Diseño CV)
 */
/**
 * Función auxiliar para crear la sección "Sobre Mí" en el Home (Diseño CV)
 */
function renderHomeAboutSection() {
    const section = document.createElement('section');
    section.className = 'home-about-section'; 
    section.id = 'about-section-home'; 
    
    section.innerHTML = `
        <div class="home-about-container main-container">
            
            <div class="home-about-image-wrapper">
                <img src="img/IMG_1917.jpg" alt="Retrato Maria Josefina">
            </div>
            
            <div class="cv-full-width-details">
                <div class="cv-details-section">
                    <h3 class="cv-subtitle">Estudios</h3>
                    <div class="cv-item">
                        <p class="cv-detail">Diseño Integral<br> <em class="cv-italic">Pontificia Universidad Católica de Chile</em></p>
        <p class="cv-date"><em class="cv-italic">2021-2026</em></p>
                    </div>

                    <div class="cv-item">
                        <p class="cv-detail">Colegio Sagrado Corazón de Apoquindo<br> <em class="cv-italic">Santiago, Chile</em></p>
        <p class="cv-date"><em class="cv-italic">2008-2020</em></p>
                    </div>
                </div>
            </div>

            <div class="home-about-text">
                <h2 class="cv-main-title">María Josefina Castro Dintrans</h2>
                <p>
                    Hola! Mi nombre <strong>Josefina</strong>, soy estudiante de quinto año de Diseño Integral en la 
                    Pontificia Universidad Católica de Santiago, Chile. Mis principales 
                    intereses están enfocados en diseño industrial, de servicio, experiencia y producto.
                </p>
                <p>
                    Me caracterizo por ser una persona entusiasta y comprometida, la cual siempre está a disposición a nuevos desafíos.
                    Tengo un buen desempeño tanto en proyectos individuales como colaborativos, donde se busco sacar el mayor provecho a ambos medios.
                </p>

                <div class="cv-details-section">
                    <h3 class="cv-subtitle">Experiencia Laboral</h3>
                    <div class="cv-item">
                        <p class="cv-date">Primer semestre,2025</p>
                        <p class="cv-detail">Practicante en diseño de producto<br> <em class="cv-italic">Atakama Outdoor SPA</em></p>
                    </div>
                    <div class="cv-item">
                        <p class="cv-date">2025</p>
                        <p class="cv-detail">Diseñador Gráfico y Marketing Digital <br> <em class="cv-italic">Mido</em></p>
                    </div>
                </div>
            </div>
            
        </div>
        <button class="nav-button" style="margin-top: 1rem; border-bottom: 1px solid #333;">...</button>
    `;
    
    return section;
}






/**
 * Función auxiliar para crear la sección de Contacto para el Home (REUTILIZABLE)
 */
function renderHomeContactSection() {
    const section = document.createElement('section');
    // Aplicamos la clase dark
    section.className = 'contact-section contact-section-dark'; 
    section.id = 'contact-section-home'; // ID CLAVE AÑADIDO PARA SCROLL

    section.innerHTML = `
        <div class="main-container contact-container">
            <h2 class="contact-title">Hablemos :)</h2>
            <div class="contact-info-grid">
                <p class="contact-cta-message">
                    Si quieres hablar o saber más, contactame.
                </p>
                <div class="contact-links">
                    <a href="mailto: castro.josefina@uc.cl" class="contact-link">
                        <span class="link-label">Email:</span> castro.josefina@uc.cl
                    </a>
                    <a href="https://linkedin.com/in/tuperfil" target="_blank" class="contact-link">
                        <span class="link-label">LinkedIn:</span> /María Josefina Castro Dintrans
                    </a>
        <a href="https://instagram.com/in/tuperfil" target="_blank" class="contact-link">
                        <span class="link-label">Instagram:</span> /josefina_castrod
                    </a>
                    <span class="contact-link">
                        <span class="link-label">Ubicación:</span> Santiago, Chile
                    </span>
                </div>
            </div>
        </div>
    `;
    return section;
}


/**
 * Renders the project grid section.
 */
function renderProjectGrid(projects) {
    const gridSection = document.createElement('section');
    gridSection.className = 'projects-list-section main-container';

    gridSection.innerHTML = `
        <div class="projects-grid">
            ${projects.map(p => `
                <article class="project-card">
                    <div class="project-thumb-wrapper">
                        <img 
                            src="${p.thumb}" 
                            alt="${p.nombre}" 
                            class="project-thumb"
                            loading="lazy"
                            onerror="this.onerror=null; this.src='https://placehold.co/400x400/DCDCDC/333333?text=IMAGEN+FALTANTE';"
                        />
                    </div>
                    <div class="project-info">
                        <p class="project-category">${p.areas.join(' / ')}</p>
                        <h3 class="project-title">${p.nombre}</h3>
                        <p class="project-description">${p.rol}</p>
                    </div>
                </article>
            `).join('')}
        </div>
    `;
    return gridSection;
}



// --- 4. FUNCIONES DE PÁGINA PRINCIPAL ---

/**
 * Renders the main Home page content.
 */
function renderHomePage() {
    const homePageDiv = document.getElementById('page-home');
    const aboutPageDiv = document.getElementById('page-about');
    const projectsPageDiv = document.getElementById('page-projects');
    
    // Mostrar/Ocultar secciones
    homePageDiv.classList.remove('hidden');
    aboutPageDiv.classList.add('hidden');
    projectsPageDiv.classList.add('hidden');
    
    // Limpiar contenido anterior
    homePageDiv.innerHTML = ''; 

    // 1. Filtrar trabajos (se mantiene la lógica de filtro para el grid)
    const filteredTrabajos = activeFilter === 'Todos'
        ? trabajos
        : trabajos.filter(t => t.areas.includes(activeFilter));

    // 2. Hero Section (Portada)
    const heroSection = document.createElement('section');
    heroSection.className = 'hero-section new-minimalist-hero main-container';
    heroSection.innerHTML = `
        <div class="hero-left-sidebar">
            <div class="filter-list" id="home-filter-list"></div>
        </div>
        <div class="hero-center-content">
            <h1 class="main-title-thin">PORTAFOLIO</h1>
            <div class="curved-links">
                <p class="curved-link-text text-1">Design</p>
                <p class="curved-link-text text-2">Projects</p>
                <p class="curved-link-text text-3">Selection</p>
            </div>
            <div class="personal-info">
                <p>Maria Josefina Castro Dintrans</p>
                <p class="role">Diseñadora Integral</p>
            </div>
        </div>
        <div class="hero-right-image"></div>
    `;
    homePageDiv.appendChild(heroSection);
    
    // Configurar listeners de filtros
    setupVerticalFilterListeners(uniqueAreas);

    // 3. Agregar Sección Sobre Mí
    const homeAboutSection = renderHomeAboutSection(); 
    homeAboutSection.classList.add('animate-on-scroll'); 
    homePageDiv.appendChild(homeAboutSection);
    
    // 4. Agregar Header de Proyectos
    const projectsHeader = document.createElement('div');
    projectsHeader.className = 'main-container animate-on-scroll'; 
    projectsHeader.style.paddingTop = '4rem';
    projectsHeader.id = 'projects-header-home'; 
    projectsHeader.innerHTML = '<h3 style="font-weight: 300; font-size: 1.5rem; color: var(--fg-dark);">Proyectos Seleccionados</h3>';
    homePageDiv.appendChild(projectsHeader);

    // 5. Agregar Grid de Proyectos
    const gridSection = renderProjectGrid(filteredTrabajos);
    gridSection.classList.add('animate-on-scroll'); 
    homePageDiv.appendChild(gridSection);
    
    // 6. Agregar la Sección de Contacto (como bloque de cierre en el Home)
    const contactSection = renderHomeContactSection(); 
    contactSection.classList.add('animate-on-scroll');
    homePageDiv.appendChild(contactSection);

    // 7. Configurar el observador después de agregar todos los elementos
    setupScrollAnimation();

    updateNavButtons();
}

/**
 * Configura el efecto de foco de luz (spotlight) que sigue al cursor, 
 * haciendo que el círculo de luz sea del color #7777DF.
 */
function setupMouseSpotlight() {
    const spotlight = document.getElementById('mouse-spotlight');
    if (!spotlight) return;

    // Escuchar el movimiento del ratón en toda la ventana
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        // ** Círculo de luz (Spotlight) **
        // El degradado va de:
        // 1. Centro: #7777DF (Tu color sólido)
        // 2. Afuera: Transparente (revela el color de fondo de la página)

        spotlight.style.backgroundImage = `
            radial-gradient(
                circle 50px at ${x}px ${y}px, /* Tamaño del foco: 100px */
                #7777DF, /* Color del foco: Tu color, sólido */
                transparent 70% /* Afuera del foco: Transparente, a partir del 70% del radio */
            )
        `;
    });
}


// --- 5. INICIALIZACIÓN ---

window.onload = () => {
    // Inicializar listeners de navegación
    setupNavigationListeners();
    
    // Inicializar el foco de luz
    setupMouseSpotlight();

    // Determinar la página inicial y renderizar
    navigateTo('home');
};