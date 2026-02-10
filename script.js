// --- 1. DATOS ---

// Mapeo de áreas para filtros
const FILTER_MAP = {
    'Industrial': 'Industrial',
    'Branding': 'Branding',
    'Producto': 'Producto',
    'Gráfico': 'Gráfico' 
};

// Datos de trabajos (ACTUALIZADO con campos GALERIA y descripcion_larga para el CASO DE ESTUDIO)
const trabajos = [
    {
        id: 1,
        nombre: "Intervención Textil",
        areas: ["Industrial", "Producto"],
        rol: "Diseño textil + dirección de arte + producción fotográfica",
        thumb: "img/img7.jpg",// <--- IMAGEN PRINCIPAL (TIRA ANCHA)
        detalle_thumb: "img/img7.jpg", // <--- ¡NUEVA IMAGEN PARA EL DESPLIEGUE!
        solucion_corta: "Implementación de técnica de aplicaciones y estampado en tela.", // <-- ¡AÑADIR ESTO!
        descripcion_larga: "Este proyecto se centró en la exploración de nuevas materialidades textiles y en la dirección de arte para la campaña fotográfica, buscando un estilo orgánico y natural.",
        galeria: [
            "img/estampado.webp", // <--- RUTA DE EJEMPLO 1
            "img/Proyecto nuevo (10).webp", // <--- RUTA DE EJEMPLO 2
            "img/Proyecto nuevo (11).webp",
             "img/img7.jpg"
        ]
    },
    {
        id: 2,
        nombre: "MIDO - Domótica",
        areas: ["UX/UI", "Branding"],
        rol: "Identidad de marca y diseño de APP",
        thumb: "img/Manual Oficial 1.jpg",// <--- IMAGEN PRINCIPAL (TIRA ANCHA)
        detalle_thumb: "img/mido.webp", // <--- ¡NUEVA IMAGEN PARA EL DESPLIEGUE!
        solucion_corta: "En MIDO se desarrolló la identidad de marca completa, desde el logo hasta el diseño de la interfaz de usuario, priorizando la simplicidad y la experiencia del usuario.", // <-- ¡AÑADIR ESTO!
        descripcion_larga: "MIDO busca transformar la forma en que las personas interactúan con sus hogares. El  propósito es acercar la domótica a la vida diaria y convertirla en una experiencia inmersiva, donde la eficiencia, seguridad, confianza y conectividad permitan estar conectado con lo que más quieres desde cualquier lugar y sin preocupaciones. ",
        galeria: [
            "img/Manual Oficial 1.jpg",
            "img/mido.webp",
            "img/Manual_Oficial16.jpg",
            "img/mido 4.png"
        ]
    },
    {
        id: 3,
        nombre: "Hábitat - Un mundo",
        areas: ["Producto"],
        rol: "Diseño de producto, propuesta para Atakama Outdoor SPA.",
        thumb: "img/panfufla.webp", // <--- IMAGEN PRINCIPAL (TIRA ANCHA)
        detalle_thumb: "img/panfufla.webp", // <--- ¡NUEVA IMAGEN PARA EL DESPLIEGUE!
        solucion_corta: "Propuesta nueva línea de pantuflas para Atakama Outdoor.", // <-- ¡AÑADIR ESTO!
        descripcion_larga: "Queremos invitar a las personas a valorar y proteger lo que nos rodea, haciendo entender que cada ecosistema mantiene distintas vidas en algún rincón de nuestro país.",
        galeria: [
             "img/pantufla bosque.png",
            "img/pantufla cordillera.png",
            "img/pantufla mar.png"
        ] // Puedes dejarlo vacío si no hay más imágenes
    },
    {
        id: 4,
        nombre: "Tesoros Naturales de Chile",
        areas: ["Producto"],
        rol: "Diseño de producto, botella tipo bitácora de los tesoros de nuestro País",
        thumb: "img/DSC8921.webp", // <--- IMAGEN PRINCIPAL (TIRA ANCHA)
        detalle_thumb: "img/botella.webp", // <--- ¡NUEVA IMAGEN PARA EL DESPLIEGUE!
        solucion_corta: "Implementación de una técnica de sublimación orgánica en algodón reciclado para reducir la huella hídrica.", // <-- ¡AÑADIR ESTO!
        descripcion_larga: "Este proyecto se centró en la exploración de nuevas materialidades textiles y en la dirección de arte para la campaña fotográfica, buscando un estilo orgánico y natural.",
        galeria: [
             "img/DSC8921.webp",
            "img/botella.webp",
            "img/DSC8915.webp",
             "img/TesorosNaturalesdeChile3.webp"
        ]
    },
    {
        id: 5,
        nombre: "Diseño para la Inclusividad Universal",
        areas: ["Industrial - Espacios"],
        rol: "Diseño de espacio para YUNUS, Municipalidad de Peñalolen",
        thumb: "img/Proyectos destacados-05.png",// <--- IMAGEN PRINCIPAL (TIRA ANCHA)
        detalle_thumb: "img/petaca.webp", // <--- ¡NUEVA IMAGEN PARA EL DESPLIEGUE!
        solucion_corta: "Implementación de una técnica de sublimación orgánica en algodón reciclado para reducir la huella hídrica.", // <-- ¡AÑADIR ESTO!
        descripcion_larga: "Este proyecto se centró en la exploración de nuevas materialidades textiles y en la dirección de arte para la campaña fotográfica, buscando un estilo orgánico y natural.",
        galeria: [
            "img/yunus.png",
            "img/yunus 2.png"
        ]
    },
    {
        id: 6,
        nombre: "Unidad de Urgencias UC",
        areas: ["Industrial", "Gráfico"],
        rol: "Diseño de espacios para habilitar estacios para personal médico de Urgencia pediátrica",
        thumb: "img/render 2.jpg", // <--- IMAGEN PRINCIPAL (TIRA ANCHA)
        detalle_thumb: "img/render 2.jpg", // <--- ¡NUEVA IMAGEN PARA EL DESPLIEGUE!
        solucion_corta: "En la unidad de Urgencia Pediátrica del Centro UC Christus Marcoleta se plantea la creación de un espacio destinado al personal médico, a partir de la necesidad de contar con áreas de descanso dentro del mismo sector. Esta propuesta busca ofrecer un entorno adecuado para el bienestar del equipo de salud, proporcionando un lugar cómodo y accesible que contribuya a mejorar su desempeño y, en consecuencia, la calidad de la atención entregada a los pacientes. ", // <-- ¡AÑADIR ESTO!
        descripcion_larga: "Proyecto de diseño para la innovación. Habilitación de espacio para personal médico de urgencia pediátrica",
        galeria: [
            "img/render 12.png",
            "img/render 2.jpg",
            "img/render 10.jpg",
            "img/render 15.png"
        ]
    },
    
    {
        id: 7,
        nombre: "Modelado 3D",
        areas: ["Industrial", "Gráfico"],
        rol: "Diseño Industrial",
        thumb: "img/vestido.jpg", // <--- IMAGEN PRINCIPAL (TIRA ANCHA)
        detalle_thumb: "img/intervencion_small_detail.jpg", // <--- ¡NUEVA IMAGEN PARA EL DESPLIEGUE!
        solucion_corta: "Módulo de atención para personas con discapacidad cognitiva, enfocado en TEA. Busca reducir el ruido ambiental en más de un 50%.", // <-- ¡AÑADIR ESTO!
        descripcion_larga: "Proyecto en colaboración con YUNUS, fundación de la comuna de peñalolén que busca la integración de personas en el ámbito laboral.",
        galeria: [
             "img/misma vista silla.jpg",
            "img/vestido.jpg",
            "img/Captura de pantalla 2024-04-24 220705.png"
        ]
    },
    
];

// Extracción de áreas únicas para los botones de filtro, incluyendo 'Todos'
const allAreas = trabajos.flatMap(t => t.areas);
const uniqueAreas = ['Todos', ...new Set(allAreas)].filter(a => a !== 'Todos');

// --- 2. ESTADO GLOBAL ---
let currentPage = 'home';
let activeFilter = 'Todos';
let observer = null; // Variable para el Intersection Observer


// --- Intro Slides (Home) ---
const INTRO_SLIDES = [
  "img/portada 9.jpeg",
  "img/portada 14.jpeg",
  "img/portada 11.jpeg",
  "img/portada 15.jpeg",
  "img/portada 10.jpeg",
];



// --- 3. FUNCIONES AUXILIARES Y LÓGICA DE NAVEGACIÓN ---

/**
 * Función para configurar el Intersection Observer para animar elementos al hacer scroll.
 */
function setupScrollAnimation() {
    if (observer) {
        observer.disconnect();
    }
    
    const options = {
        root: null, 
        rootMargin: '0px 0px -100px 0px', 
        threshold: 0.1
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.target.classList.contains('animate-on-scroll')) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            }
        });
    };

    observer = new IntersectionObserver(callback, options);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
}


function setupIntroSlides(introSection) {
  if (!introSection) return;

  // Evitar duplicar listeners si HOME se re-renderiza
  if (introSection.dataset.ready === "1") return;
  introSection.dataset.ready = "1";

  const slides = Array.from(introSection.querySelectorAll(".intro-slide"));
  let enterIndex = -1;
  let enterTimer = null;

  let exitIndex = -1;
  let exitTimer = null;

  let mode = "enter"; // "enter" | "idle" | "exit" | "collapsed"
  let lastY = window.scrollY;

  // Helpers
  const clearTimers = () => {
    if (enterTimer) clearInterval(enterTimer);
    if (exitTimer) clearInterval(exitTimer);
    enterTimer = null;
    exitTimer = null;
  };

  const resetSlides = () => {
    slides.forEach((s) => {
      s.classList.remove("is-enter", "is-exit-up");
      // vuelven a estado inicial (arriba, ocultas)
      s.style.zIndex = "";
    });
    enterIndex = -1;
    exitIndex = -1;
  };

  const playEnter = () => {
  clearTimers();
  mode = "enter";
  introSection.classList.remove("is-collapsed");
  resetSlides();

  // 👉 1. Mostrar la PRIMERA imagen al tiro
  enterIndex = 0;
  const first = slides[0];
  first.style.zIndex = 10;
  void first.offsetWidth;
  first.classList.add("is-enter");

  // 👉 2. Las siguientes entran cada 2s
  enterTimer = setInterval(() => {
    enterIndex += 1;
    if (enterIndex >= slides.length) {
      clearTimers();
      mode = "idle";
      return;
    }
    const s = slides[enterIndex];
    s.style.zIndex = 10 + enterIndex;
    void s.offsetWidth;
    s.classList.add("is-enter");
  }, 2000);
};


  const playExit = () => {
    if (mode === "exit" || mode === "collapsed") return;

    clearTimers();
    mode = "exit";

    // partimos desde la última visible (si ya entraron todas, será la última)
    exitIndex = Math.min(enterIndex, slides.length - 1);
    if (exitIndex < 0) exitIndex = slides.length - 1;

    exitTimer = setInterval(() => {
      if (exitIndex < 0) {
        clearTimers();
        mode = "collapsed";
        introSection.classList.add("is-collapsed");
        return;
      }
      slides[exitIndex].classList.add("is-exit-up");
      exitIndex -= 1;
    }, 2000);
  };

  // Arranca automáticamente al cargar HOME
  playEnter();

  // Scroll trigger
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const goingDown = y > lastY;
    lastY = y;

    // Si baja (y ya se movió un poquito), iniciamos salida
    if (goingDown && y > 30) {
      playExit();
    }

    // Si vuelve arriba (cerca del top), reaparecemos y re-entramos
    if (!goingDown && y < 10) {
      // Reproducir de nuevo la entrada
      playEnter();
    }
  }, { passive: true });
}



/**
 * Aplica la clase animate-on-scroll a elementos típicos dentro de un contenedor.
 * Esto permite que TEXTO + IMÁGENES + BLOQUES aparezcan al hacer scroll.
 */
function applyScrollReveal(container) {
    if (!container) return;

    const selector = [
        'section',
        'article',
        '.main-container',
        '.project-card',
        '.project-card-full',
        '.project-details-container',
        '.project-info',
        '.home-about-container',
        '.contact-container',
        '.gallery-item-wrapper',
        'h1, h2, h3, h4',
        'p',
        'img',
        'button.action-button',
        'a.contact-link'
    ].join(',');

    const items = container.querySelectorAll(selector);

    items.forEach((el) => {
        // Evita animar cosas que no aportan / o muy chicas
        if (el.classList.contains('main-header') || el.classList.contains('main-footer')) return;
        if (el.id === 'mouse-spotlight' || el.id === 'project-preview-cursor') return;

        // No re-marcar si ya está
        if (!el.classList.contains('animate-on-scroll')) {
            el.classList.add('animate-on-scroll');
        }
    });
}



/**
 * Actualiza los botones de navegación en el header.
 */
function updateNavButtons() {
    document.querySelectorAll('.main-nav .nav-button').forEach(button => {
        const targetPage = button.id.replace('nav-', '');
        const targetMatch = (targetPage === 'projects' || targetPage === 'about' || targetPage === 'contact') ? 
                             targetPage : 'home'; 
        
        if (targetMatch === currentPage || (currentPage === 'full-projects' && targetMatch === 'projects') || (currentPage === 'single-project' && targetMatch === 'projects')) {
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 'projects': 
        case 'full-projects': 
            renderProjectsPage();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 'about':
            // Al hacer clic en ABOUT o CONTACT, siempre volvemos a renderizar HOME si no estamos en HOME
            if (document.getElementById('page-home').classList.contains('hidden')) {
                renderHomePage(); 
            }
            setTimeout(() => {
                const target = document.getElementById('about-section-home');
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            break;
        case 'contact':
            if (document.getElementById('page-home').classList.contains('hidden')) {
                renderHomePage(); 
            }
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
 * Configura los listeners de clic para los filtros (Ahora en la sección de Proyectos Seleccionados).
 */
function setupVerticalFilterListeners(areas) {
    // ESTA FUNCIÓN ESTÁ AQUÍ POR SI QUIERES RE-ACTIVAR LOS FILTROS
    const filterListDiv = document.getElementById('projects-filter-list');
    if (!filterListDiv) return;

    filterListDiv.innerHTML = areas.map(area => `
        <button class="vertical-filter-button ${activeFilter === area ? 'active' : ''}" data-filter="${area}">
            ${area}
        </button>
    `).join('');

    filterListDiv.querySelectorAll('.vertical-filter-button').forEach(button => {
        button.addEventListener('click', (event) => {
            activeFilter = event.target.getAttribute('data-filter');
            
            filterListDiv.querySelectorAll('.vertical-filter-button').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            const oldGridContainer = document.querySelector('.projects-list-section');
            if (oldGridContainer) {
                 oldGridContainer.remove(); 
            }
            const filteredTrabajos = activeFilter === 'Todos'
                ? trabajos
                : trabajos.filter(t => t.areas.includes(activeFilter));

            const newGrid = renderProjectGrid(filteredTrabajos);
            newGrid.classList.add('animate-on-scroll');
            
            const projectsHeader = document.getElementById('projects-header-home');
            if (projectsHeader && projectsHeader.nextSibling) {
                projectsHeader.parentNode.insertBefore(newGrid, projectsHeader.nextSibling);
            } else if (projectsHeader) {
                projectsHeader.parentNode.appendChild(newGrid);
            }

            setupScrollAnimation();
        });
    });
}

/**
 * Función auxiliar para crear la sección "Sobre Mí" en el Home (Diseño CV de 2 columnas simple)
 */
function renderHomeAboutSection() {
    const section = document.createElement('section');
    section.className = 'home-about-section'; 
    section.id = 'about-section-home'; 
    
    section.innerHTML = `
        <div class="home-about-container main-container">
            
            <div class="home-about-image-wrapper">
                <img src="img/fotito.webp" alt="Retrato María Josefina">
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
                        <p class="cv-date"><em class="cv-italic">Primer semestre,2025</em></p>
                        <p class="cv-detail">Practicante diseño de producto<br> <em class="cv-italic">Atakama Outdoor SPA</em></p>
                    </div>
                    <div class="cv-item">
                        <p class="cv-date"><em class="cv-italic">2025</em></p>
                        <p class="cv-detail">Diseñadora Gráfica y Marketing Digital <br> <em class="cv-italic">Mido</em></p>
                    </div>
                    <div class="cv-item">
                        <p class="cv-date"><em class="cv-italic">Segundo semestre,2025</em></p>
                        <p class="cv-detail">Practicante diseño de comunicaciones> <em class="cv-italic">Fundación La Esperanza</em></p>
                    </div>
                </div>
            </div>
            
        </div>
    `;
    
    return section;
}


/**
 * Función auxiliar para crear la sección de Contacto para el Home (REUTILIZABLE)
 */
function renderHomeContactSection() {
    const section = document.createElement('section');
    section.className = 'contact-section contact-section-dark'; 
    section.id = 'contact-section-home'; 

    section.innerHTML = `
        <div class="main-container contact-container">
            <h3 class="contact-title">Hablemos :)</h3>
            <div class="contact-info-grid">
                <p class="contact-cta-message">
                    Si quieres hablar o saber más, contáctame.
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
 * Función para alternar la visibilidad de los detalles del proyecto (DESPLIEGUE INTERNO).
 * @param {HTMLElement} card El elemento de la tarjeta del proyecto.
 */
function toggleDetails(card) {
    const details = card.querySelector('.project-details-container');
    const allDetails = document.querySelectorAll('.project-details-container.visible');
    const allCards = document.querySelectorAll('.project-card.active');
    
    // 1. Cerrar y desactivar todos los demás detalles abiertos
    allDetails.forEach(d => {
        if (d !== details) {
            d.classList.remove('visible');
        }
    });
    allCards.forEach(c => {
        if (c !== card) {
            c.classList.remove('active');
        }
    });

    // 2. Alternar el estado visible del proyecto actual
    details.classList.toggle('visible');
    card.classList.toggle('active');
}


/**
 * NUEVA FUNCIÓN: Configura la previsualización de la imagen al pasar el ratón (Devansh Prakash style).
 */
function setupProjectHoverPreview(container) {
    const previewCursor = document.getElementById('project-preview-cursor');
    const previewImage = document.getElementById('project-preview-image');
    if (!previewCursor || !previewImage) return;

    let currentPreviewId = null;

    // 1. Mostrar/Ocultar y Cargar Imagen
    container.querySelectorAll('.project-card').forEach(card => {
        const imgSource = card.getAttribute('data-preview-img');
        const projectId = card.getAttribute('data-project-id');

        card.addEventListener('mouseenter', () => {
            if (projectId !== currentPreviewId) {
                previewImage.src = imgSource;
                currentPreviewId = projectId;
            }
            previewCursor.classList.add('visible');
        });

        card.addEventListener('mouseleave', () => {
            previewCursor.classList.remove('visible');
            currentPreviewId = null; 
        });
    });

    // 2. Seguir el cursor
    document.addEventListener('mousemove', (e) => {
        if (!previewCursor.classList.contains('visible')) return;

        const offsetX = 50; 
        const offsetY = 50;

        const x = Math.min(e.clientX + offsetX, window.innerWidth - 180); 
        const y = Math.min(e.clientY + offsetY, window.innerHeight - 180);

        previewCursor.style.left = `${x}px`;
        previewCursor.style.top = `${y}px`;
    });
}

// --- LIGHTBOX (Galería en grande) ---
let lightboxOverlay = null;
let lightboxImg = null;

function ensureLightbox() {
    if (lightboxOverlay) return;

    lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    lightboxOverlay.setAttribute('role', 'dialog');
    lightboxOverlay.setAttribute('aria-modal', 'true');

    lightboxOverlay.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Cerrar imagen">×</button>
            <img class="lightbox-image" alt="">
            <div class="lightbox-hint">Click fuera o ESC para cerrar</div>
        </div>
    `;

    document.body.appendChild(lightboxOverlay);

    lightboxImg = lightboxOverlay.querySelector('.lightbox-image');
    const closeBtn = lightboxOverlay.querySelector('.lightbox-close');

    // Cerrar con botón
    closeBtn.addEventListener('click', closeLightbox);

    // Cerrar clickeando fuera de la imagen
    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) closeLightbox();
    });

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxOverlay.classList.contains('visible')) {
            closeLightbox();
        }
    });
}

function openLightbox(src, altText = '') {
    ensureLightbox();
    lightboxImg.src = src;
    lightboxImg.alt = altText;

    lightboxOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove('visible');
    document.body.style.overflow = 'auto';

    // Limpieza opcional (evita parpadeos al cambiar rápido)
    if (lightboxImg) {
        lightboxImg.src = '';
        lightboxImg.alt = '';
    }
}



// script.js - Sustitución de la función renderSingleProjectPage

/**
 * Renders the dedicated page for a single project (Case Study).
 * @param {number} projectId El ID del proyecto a mostrar.
 */
function renderSingleProjectPage(projectId) {
    const projectData = trabajos.find(t => t.id === projectId);
    
    if (!projectData) {
        navigateTo('full-projects');
        return;
    }

    const mainContent = document.getElementById('main-content');
    const singlePageDivId = 'page-single-project';

    // Ocultar todas las secciones principales
    document.getElementById('page-home').classList.add('hidden');
    document.getElementById('page-projects').classList.add('hidden');
    document.getElementById('page-about').classList.add('hidden');

    // Limpiar y crear el contenedor de la página única
    let singlePageDiv = document.getElementById(singlePageDivId);
    if (singlePageDiv) {
        singlePageDiv.remove();
    }
    
    singlePageDiv = document.createElement('div');
    singlePageDiv.id = singlePageDivId;
    singlePageDiv.className = 'page-section single-project-page';
    singlePageDiv.style.paddingTop = '8rem';

    // CLAVE: Generación de la tira de carrusel básica
    const galleryHtml = projectData.galeria ? projectData.galeria.map(imgUrl => `
        <div class="gallery-item-wrapper">
            <img 
                src="${imgUrl}" 
                alt="Detalle de ${projectData.nombre}" 
                class="gallery-image"
                onerror="this.onerror=null; this.src='https://placehold.co/400x400?text=IMAGEN+GALERIA';"
            />
        </div>
    `).join('') : '<p style="color: var(--fg-thin);">No hay imágenes de galería disponibles.</p>';


    singlePageDiv.innerHTML = `
        <div class="main-container">
            <h1 class="main-title-thin" style="font-size: 4rem; margin-bottom: 0.5rem;">${projectData.nombre}</h1>
            <p class="project-category" style="font-size: 1.2rem; color: var(--accent-color);">${projectData.areas.join(' | ')}</p>
            <p style="font-size: 1.1rem; color: var(--fg-thin); margin-bottom: 3rem;">Rol: ${projectData.rol}</p>
            
            <div class="project-case-study">
                <img src="${projectData.thumb}" alt="${projectData.nombre}" 
                    style="width: 100%; max-height: 600px; object-fit: cover; border-radius: 8px; margin-bottom: 3rem;"
                    onerror="this.onerror=null; this.src='https://placehold.co/1200x600/DCDCDC/333333?text=CASO+ESTUDIO';"
                />
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-bottom: 4rem;">
                    <div>
                        <h3 class="cv-subtitle" style="font-size: 1.5rem; color: var(--fg-dark);">El Desafío</h3>
                        <p>${projectData.descripcion_larga || 'Descripción detallada del problema de diseño o el brief inicial. (Agrega la descripción al array "trabajos")'}</p>
                    </div>
                    <div>
                        <h3 class="cv-subtitle" style="font-size: 1.5rem; color: var(--fg-dark);">Solución</h3>
                        <p>${projectData.solucion_corta || 'Aún no se ha añadido una solución detallada para este proyecto.'}</p>
                    </div>
                </div>
                
                <div style="margin-top: 2rem;">
                    <h3 class="cv-subtitle" style="font-size: 1.5rem; color: var(--fg-dark); margin-bottom: 1rem;">Galería de Proceso</h3>
                    <div class="gallery-strip">
                        ${galleryHtml}
                    </div>
                </div>
                
                <button id="back-to-home-button" class="action-button" style="display: inline-block; margin-top: 4rem;">&larr; Volver al Inicio</button>
            </div>
        </div>
    `;

    mainContent.appendChild(singlePageDiv);
    currentPage = 'single-project'; 
    
    const backButton = document.getElementById('back-to-home-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            navigateTo('home');
        });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateNavButtons();
}


// =========================
// LIGHTBOX GALERÍA (clic para ver grande)
// =========================
(function setupGalleryLightbox(){
  // 1) Crear overlay una sola vez
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <div class="lightbox-content" role="dialog" aria-modal="true">
      <button class="lightbox-close" aria-label="Cerrar">×</button>
      <img class="lightbox-img" alt="">
    </div>
  `;
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector('.lightbox-img');
  const closeBtn = overlay.querySelector('.lightbox-close');

  const open = (src, alt='') => {
    imgEl.src = src;
    imgEl.alt = alt;
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    overlay.classList.remove('is-open');
    document.body.style.overflow = 'auto';
    imgEl.src = '';
    imgEl.alt = '';
  };

  // 2) Cerrar: botón, click afuera, ESC
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });

  // 3) Event delegation: si hacen click en una imagen de galería, abrir
  document.addEventListener('click', (e) => {
    const img = e.target.closest('.gallery-strip .gallery-image');
    if (!img) return;

    // Evitar que otras capas/handlers interfieran
    e.preventDefault();
    e.stopPropagation();

    open(img.currentSrc || img.src, img.alt || 'Imagen de galería');
  }, true);
})();



// script.js - Sustitución de la función renderProjectGrid

/**
 * Renders the project grid section (Galeria de Imagen Dominante).
 */
function renderProjectGrid(projects) {
    const gridSection = document.createElement('section');
    gridSection.className = 'projects-list-section'; 

    gridSection.innerHTML = `
        <div class="projects-grid main-container">
            ${projects.map(p => `
                <article 
                    class="project-card" 
                    data-project-id="${p.id}" 
                    data-preview-img="${p.thumb || 'img/placeholder_mod.jpg'}"
                >
                    
                    <div class="project-thumb-wrapper">
                         <img 
                            src="${p.thumb}" 
                            alt="${p.nombre}" 
                            class="project-thumb"
                            loading="lazy"
                            onerror="this.onerror=null; this.src='https://placehold.co/1200x400/DCDCDC/333333?text=${p.nombre}';"
                        />
                        
                        <div class="project-text-overlay">
                            <h3>${p.nombre}</h3>
                            <p>${p.areas.join(' / ')}</p>
                        </div>
                    </div>
                    
                    <div class="project-details-container">
                        <div class="project-info">
                            <div class="details-image-wrapper">
                                <img 
                                    src="${p.detalle_thumb || p.thumb}" 
                                    alt="Detalle de ${p.nombre}" 
                                    class="details-thumb-small"
                                    onerror="this.onerror=null; this.src='https://placehold.co/250x250/F0F0F0/333333?text=DETAIL';"
                                />
                            </div>
                            
                            <div class="details-text">
                                <p class="project-category">${p.areas.join(' / ')}</p>
                                <h3 class="project-title">${p.nombre}</h3>
                                <p class="project-description">${p.rol} <br><br> (Haz clic en la tarjeta de imagen para cerrar.)</p>
                                
                                <button class="action-button saber-mas-button" data-project-id="${p.id}" style="margin-top: 1.5rem; background-color: var(--accent-color); color: var(--bg-white); border-color: var(--accent-color);">
                                    SABER MÁS
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            `).join('')}
        </div>
    `;
    
    // 1. Manejador de clic principal (DEPLIEGA DETALLES)
    gridSection.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (event) => {
            // Previene que el evento se propague si se hace clic en el botón "SABER MÁS"
            if (event.target.classList.contains('saber-mas-button')) {
                return;
            }
            toggleDetails(card);
        });
    });

    // 2. Manejador de clic del botón "SABER MÁS" (NAVEGA A PÁGINA ÚNICA)
    gridSection.querySelectorAll('.saber-mas-button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Evita que se dispare el evento toggleDetails del padre
            const projectId = parseInt(button.getAttribute('data-project-id'));
            renderSingleProjectPage(projectId);
        });
    });
    
    setupProjectHoverPreview(gridSection); 
    
    return gridSection;
}

/**
 * Proyectos Seleccionados: layout tipo catálogo/carrusel.
 * Click en tarjeta -> abre el Case Study (renderSingleProjectPage)
 */
function renderSelectedProjectsCatalog(projects) {
    const section = document.createElement('section');
    section.className = 'selected-projects-catalog';

    section.innerHTML = `
      <div class="main-container">
        <div class="catalog-track">
          ${projects.map(p => `
            <article class="catalog-card" data-project-id="${p.id}">
              <div class="catalog-image-wrap">
                <img
                  class="catalog-image"
                  src="${p.thumb}"
                  alt="${p.nombre}"
                  loading="lazy"
                  onerror="this.onerror=null; this.src='https://placehold.co/800x600/DCDCDC/333333?text=${encodeURIComponent(p.nombre)}';"
                />
              </div>
              <div class="catalog-meta">
                <h3 class="catalog-title">${p.nombre}</h3>
                <p class="catalog-subtitle">${(p.areas || []).join(', ')}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    `;

    // Click -> abrir caso de estudio
    section.querySelectorAll('.catalog-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.getAttribute('data-project-id'), 10);
            renderSingleProjectPage(projectId);
        });
    });

    return section;
}


/**
 * Renders the dedicated Projects page (Portafolio completo, con diseño de galería de tarjetas).
 */
function renderProjectsPage() {
    const homePageDiv = document.getElementById('page-home');
    const projectsPageDiv = document.getElementById('page-projects');
    const singlePageDiv = document.getElementById('page-single-project');
    
    // Ocultar la página de proyecto único si existe
    if (singlePageDiv) singlePageDiv.remove();
    
    // Ocultar Home y mostrar Projects
    homePageDiv.classList.add('hidden');
    projectsPageDiv.classList.remove('hidden');
    
    // Limpiar contenido anterior
    projectsPageDiv.innerHTML = ''; 

    const header = document.createElement('div');
    header.className = 'main-container page-header';
    header.style.paddingTop = '5rem';
    header.innerHTML = `
        <h1 class="main-title-thin" style="font-size: 3rem; margin-bottom: 1rem;">PORTAFOLIO COMPLETO</h1>
        <p style="font-size: 1.1rem; color: var(--fg-thin);">Aquí puedes explorar todos mis trabajos de diseño.</p>
    `;
    projectsPageDiv.appendChild(header);

    const fullProjectsGrid = document.createElement('div');
    fullProjectsGrid.className = 'projects-grid-full main-container';

    fullProjectsGrid.innerHTML = `
        ${trabajos.map(p => `
  <article class="project-card-full" data-project-id="${p.id}" role="button" tabindex="0">
    
    <div class="project-header-full">
      <p class="project-year-full">2025</p> 
      <p class="project-category">${p.areas[0] || 'Diseño'}</p>
    </div>

    <div class="project-thumb-wrapper-full">
      <img 
        src="${p.thumb}" 
        alt="${p.nombre}" 
        class="project-thumb"
        loading="lazy"
        onerror="this.onerror=null; this.src='https://placehold.co/400x300/DCDCDC/333333?text=${p.nombre}';"
      />
    </div>
    
    <div class="project-info-full">
      <h3 class="project-title-full">${p.nombre}</h3>
      <p class="project-category-full">${p.rol}</p>
    </div>

  </article>
`).join('')}

    `;
    
    projectsPageDiv.appendChild(fullProjectsGrid);

    // Click en tarjeta -> abrir página del proyecto
fullProjectsGrid.querySelectorAll('.project-card-full').forEach(card => {
  const open = () => {
    const projectId = parseInt(card.getAttribute('data-project-id'), 10);
    renderSingleProjectPage(projectId);
  };

  card.addEventListener('click', open);

  // Accesibilidad: Enter/Space abre también
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });
});

    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateNavButtons();
}


/**
 * Renders the main Home page content.
 */
function renderHomePage() {
    const homePageDiv = document.getElementById('page-home');
    const aboutPageDiv = document.getElementById('page-about');
    const projectsPageDiv = document.getElementById('page-projects');
    const singlePageDiv = document.getElementById('page-single-project');
    
    // Limpiar páginas no utilizadas si existen
    if (singlePageDiv) singlePageDiv.remove();
    
    // Mostrar HOME y ocultar otras secciones
    homePageDiv.classList.remove('hidden');
    aboutPageDiv.classList.add('hidden');
    projectsPageDiv.classList.add('hidden');
    
    // FORZAMOS LA RE-RENDERIZACIÓN para garantizar que la página no esté en blanco.
    homePageDiv.innerHTML = ''; 

    const filteredTrabajos = activeFilter === 'Todos'
        ? trabajos
        : trabajos.filter(t => t.areas.includes(activeFilter));

    // CLAVE: Dividir la palabra "PORTAFOLIO" y aplicar el retraso escalonado
    const titleText = "PORTAFOLIO";
    const staggeredHtml = titleText.split('').map((letter, index) => {
        // Aplicar el retraso progresivo (80ms por letra)
        return `<span class="stagger-letter" style="animation-delay: ${index * 0.08}s;">${letter === ' ' ? '&nbsp;' : letter}</span>`;
    }).join('');
    

// 1) Intro Slides (lo primero que se ve)
const intro = document.createElement("section");
intro.className = "intro-slides";
intro.id = "intro-slides";

intro.innerHTML = INTRO_SLIDES.map((src) => `
  <div class="intro-slide" style="background-image:url('${src}')"></div>
`).join("");

homePageDiv.appendChild(intro);
setupIntroSlides(intro);


    
    // 2. Hero Section (Portada - Título Minimalista y Centrado)
    const heroSection = document.createElement('section');
    heroSection.className = 'hero-section new-minimalist-hero'; 
    
    heroSection.innerHTML = `
        <div class="main-container">
            <h1 class="main-title-thin">${staggeredHtml}</h1> 
            <div class="personal-info">
                <p>Maria Josefina Castro Dintrans</p>
                <p class="role">Diseñadora Integral</p>
            </div>
        </div>
    `;
    homePageDiv.appendChild(heroSection);
    
    // 3. Agregar Sección Sobre Mí
    const homeAboutSection = renderHomeAboutSection(); 
    homeAboutSection.classList.add('animate-on-scroll'); 
    homePageDiv.appendChild(homeAboutSection);
    
    // 4. Agregar Header de Proyectos (Título Simple)
    const projectsTitle = document.createElement('div');
    projectsTitle.className = 'main-container animate-on-scroll'; 
    projectsTitle.style.paddingTop = '4rem';
    projectsTitle.innerHTML = `<h3 style="font-weight: 300; font-size: 1.5rem; color: var(--fg-dark);">Proyectos Seleccionados</h3>`;
    homePageDiv.appendChild(projectsTitle); 

    
    setupVerticalFilterListeners(uniqueAreas);


    // 5. Proyectos Seleccionados (Catálogo/Carrusel)
const catalogSection = renderSelectedProjectsCatalog(filteredTrabajos);
catalogSection.classList.add('animate-on-scroll');
homePageDiv.appendChild(catalogSection);


    // 5.5. Agregar botón de "Saber Más" (Portafolio Completo)
    const moreButtonContainer = document.createElement('div');
    moreButtonContainer.className = 'main-container';
    moreButtonContainer.style.textAlign = 'center';
    moreButtonContainer.style.paddingTop = '2rem';
    moreButtonContainer.innerHTML = `
        <button id="nav-all-projects" class="action-button">SABER MÁS</button>
    `;
    homePageDiv.appendChild(moreButtonContainer);
    
    moreButtonContainer.querySelector('#nav-all-projects').addEventListener('click', () => {
        navigateTo('full-projects'); 
    });
    
    // 6. Agregar la Sección de Contacto (como bloque de cierre en el Home)
    const contactSection = renderHomeContactSection(); 
    contactSection.classList.add('animate-on-scroll');
    homePageDiv.appendChild(contactSection);

    applyScrollReveal(homePageDiv);
setupScrollAnimation();


    // 7. Configurar el observador después de agregar todos los elementos
    setupScrollAnimation();
    
    updateNavButtons();
}

/**
 * Configura el efecto de foco de luz (spotlight) que sigue al cursor, 
 * haciendo que el círculo de luz sea sutilmente blanco.
 */
function setupMouseSpotlight() {
    const spotlight = document.getElementById('mouse-spotlight');
    if (!spotlight) return;

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        spotlight.style.backgroundImage = `
            radial-gradient(
                circle 120px at ${x}px ${y}px, 
                var(--bg-white), 
                transparent 70% 
            )
        `;
    });
}


// --- 5. INICIALIZACIÓN ---

window.onload = () => {
    // Restauramos la inicialización simple
    setupNavigationListeners();
    setupMouseSpotlight();
    
    // Mostrar la página principal inmediatamente
    navigateTo('home'); 
    
    // Restaurar el scroll del cuerpo
    document.body.style.overflowY = 'auto';

};

// =========================
// CURSOR PERSONALIZADO (punto)
// =========================
(function setupCustomCursor() {

  // Solo en dispositivos con mouse real
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  document.body.appendChild(cursor);
  document.body.classList.add('custom-cursor');

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  // Detectar hover en links y botones
  const hoverables = 'a, button, .project-card, .gallery-image';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverables)) {
      cursor.classList.add('is-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverables)) {
      cursor.classList.remove('is-hover');
    }
  });

})();
