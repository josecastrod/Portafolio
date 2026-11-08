'use strict';

/* =========================================================
   0. CONFIGURACIÓN
   ========================================================= */
const IMG = 'img/web/';          // carpeta de imágenes optimizadas
const EMAIL = 'castro.josefina@uc.cl';
const SITE_TITLE = document.title;
const I = n => IMG + n;          // atajo: I('muma-uso.webp') → 'img/web/muma-uso.webp'

/* Reel de la portada: fotos que van pasando dentro del marco central */
const reel = [
    { src: I('muma-ecosistema.webp'),     label: 'MUMA' },
    { src: I('mido-afiches.jpg'),         label: 'MIDO' },
    { src: I('tesoros-botella-bosque.jpg'), label: 'Tesoros Naturales' },
    { src: I('urgencias-sala.webp'),      label: 'Urgencias Pediátricas UC' },
    { src: I('ruta7-11.jpg'),             label: 'Ruta 7' },
    { src: I('muma-proto-5.webp'),        label: 'MUMA · prototipos' },
    { src: I('habitat-portada-3.jpg'),      label: 'Hábitat — Un Mundo' },
    { src: I('mido-patron.jpg'),          label: 'MIDO' },
    { src: I('yunus-modulos.webp'),       label: 'Inclusividad Universal' },
    { src: I('ruta7-14.jpg'),             label: 'Ruta 7' },
    { src: I('exp-07.jpg'),               label: 'Exploraciones visuales' },
    { src: I('muma-uso.webp'),            label: 'MUMA' }
];

/* =========================================================
   1. PROYECTOS
   ---------------------------------------------------------
   Un solo lugar para editar todo.
   - resumen + etiquetas  → lo que se ve en la tarjeta
   - bloques              → arman la página del caso de estudio:
       cita     { texto, autor }
       galeria  { titulo?, subtitulo?, columnas?: 2|3, formato?: 'ancho', imagenes: [] }
       imagen   { titulo?, texto?, src, fondo?: true }   (imagen ancha)
       dato     { titulo, intro?, numero, descripcion, texto? }
       lista    { titulo, intro?, columnas?: 2|3, items: [{ titulo, texto }] }
       cifras   { titulo, intro?, items: [{ numero, texto, destacado? }] }
       voces    { titulo, intro?, items: [{ texto, autor }] }   (citas cortas)
       pasos    { titulo, subtitulo?, items: [{ titulo, texto, img }] }
       cita     admite tono: 'acento' (usa el color del proyecto)
   Cada proyecto puede tener color: { acento, medio, suave, tinta }
       tira     { titulo, estilo: 'proceso' | 'app', imagenes: [] }
       marca    { titulo, texto?, piezas: [{ label, src, ancho }] }
   ========================================================= */
const proyectos = [
    {
        slug: 'muma',
        nombre: 'muma',
        categoria: 'Salud materna',
        year: '2026',
        portada: I('muma-ecosistema.webp'),
        hero: I('muma-uso.webp'),
        logos: { isotipo: I('muma-isotipo.webp'), logotipo: I('muma-logotipo.webp') },
        intro: 'muma',    // portada animada: el sello de muma gira y el corazón aparece
        manifiesto: 'Quien cuida también merece ser cuidada',
        // Colores propios del caso (lila MUMA)
        color: { acento: '#9497e0', medio: '#cdd0f6', suave: '#eef0fd', tinta: '#2f3168' },
        cliente: 'Proyecto de Título / Diseño Integral',
        servicios: 'Sistema Producto-Servicio, UI/UX & Diseño Industrial',
        resumen: 'Un sistema que nació del dolor de muchas madres en su lactancia: un dispositivo de masaje, su empaque y una app que las acompañan desde los primeros signos de la mastitis.',
        etiquetas: ['Sistema producto-servicio', 'Diseño industrial', 'UI/UX', 'Packaging'],
        tagline: 'MUMA nace del dolor que muchas madres viven en silencio durante su lactancia, y de la convicción de que quien cuida también merece ser cuidada.',
        tagline2: 'Es un sistema de acompañamiento y cuidado frente a los primeros síntomas de la mastitis, compuesto por un dispositivo de masaje de resina y madera de arce que entrega frío y alivio, su packaging, y una app que orienta a la madre: le enseña a reconocer los signos y la guía paso a paso en cada masaje.',
        objetivo: 'Diseñar un Sistema Producto-Servicio que facilite el manejo temprano de la mastitis en mujeres lactantes, integrando prevención, bienestar y autocuidado para contribuir a una experiencia de lactancia más informada, positiva y consciente.',
        rol: 'Como Diseñadora Integral, abordé la investigación de la problemática clínica, el diseño ergonómico del dispositivo físico de madera y resina, y la arquitectura de la interfaz móvil de apoyo y seguimiento.',
        resultados: 'Una solución integral que llena el vacío del manejo temprano de la patología, permitiendo a las madres reconocer síntomas a tiempo, previniendo su progresión y entregando herramientas efectivas de autocuidado.',
        bloques: [
            { tipo: 'cita', texto: 'La sociedad ha construido la maternidad desde el cuidado hacia otros, olvidando muchas veces el cuidado de quien sostiene ese proceso.', autor: 'M. Castro' },
            { tipo: 'galeria', imagenes: [I('muma-caja-2.jpg'), I('muma-dispositivo-3.jpg')] },
            {
                tipo: 'dato',
                titulo: 'Etapa investigativa y de desarrollo',
                intro: 'Si vemos la mastitis desde su espectro completo dentro del sistema de salud en Chile, se revela una necesidad crítica desatendida:',
                numero: '+50.000',
                // ⚠️ Revisa esta frase: "madres chilenas" + "cifras mundiales" se contradice. Idealmente cita la fuente.
                descripcion: 'Madres chilenas sufren de mastitis al año según cifras mundiales.',
                texto: 'A través de un trabajo junto a madres, matronas y recopilación de la literatura se llegó a que se necesita un sistema preventivo para la mastitis desde el alivio, el acompañamiento y la educación dentro de la etapa de lactancia.'
            },
            { tipo: 'imagen', titulo: 'Espectro de la mastitis', src: I('muma-diagrama.jpg'), fondo: true },
            {
                tipo: 'voces', titulo: 'Encuesta a madres',
                intro: 'Junto con entrevistas a matronas y revisión de literatura. Al 78,9% de las madres solo se les recomendó seguir amamantando como solución.',
                items: [
                    { texto: 'Lloraba mientras amamantaba, callada soportando el dolor. Luego sentía culpa, por no tener ganas de amamantar.', autor: 'Madre, encuesta' },
                    { texto: 'El posparto es una etapa muy solitaria.', autor: 'Francisca Orchard, matrona UC Christus' },
                    { texto: 'Las madres necesitan herramientas que les permitan comprender lo que está ocurriendo con su cuerpo y actuar a tiempo.', autor: 'Rocío Klenner, matrona' }
                ]
            },
            {
                tipo: 'tira', estilo: 'proceso', titulo: 'Proceso físico y maquetación',
                imagenes: [I('muma-proto-1.jpg'), I('muma-proto-2.jpg'), I('muma-proto-7.webp'), I('muma-proto-5.webp'), I('muma-agarre.jpg'), I('muma-detalle.jpg'), I('muma-proto-6.jpg'), I('muma-proto-4.jpg'), I('muma-proto-3.jpg')]
            },
            {
                tipo: 'galeria', titulo: 'Ecosistema MUMA', subtitulo: 'dispositivo físico + empaque + app', fondo: '#dcdff9',
                imagenes: [I('muma-ecosistema.webp'), I('muma-caja-5.jpg'), I('muma-caja-interior.jpg'), I('muma-dispositivo-1.jpg')]
            },
            {
                tipo: 'pasos', titulo: 'Modo de uso', subtitulo: 'sistema muma paso a paso',
                items: [
                    { titulo: 'Identificar', texto: 'Reconocer la molestia, identificar el problema y elegir el masaje adecuado.', img: I('muma-app-6.webp') },
                    { titulo: 'Orientarse', texto: 'Revisar en la app la explicación, las recomendaciones, las advertencias y el video demostrativo.', img: I('muma-app-2.webp') },
                    { titulo: 'Masajear', texto: 'Realizar el masaje paso a paso, siguiendo las indicaciones del video.', img: I('muma-app-8.webp') }
                ]
            },
            {
                tipo: 'carrusel', titulo: 'Interfaz de aplicación móvil',
                imagenes: [7, 6, 1, 2, 3, 8, 4, 5].map(n => I(`muma-app-${n}.webp`))
            },
            { tipo: 'cita', tono: 'acento', escena: true, logo: true, texto: 'Diseñar no siempre significa crear algo. A veces significa acompañar a una persona en el momento en que más lo necesita.', autor: 'M. Castro' }
        ]
    },
    {
        slug: 'mido',
        nombre: 'MIDO',
        categoria: 'Identidad & UI/UX',
        year: '2025',
        portada: I('mido-portada-morado.jpg'),
        hero: I('mido-letrero.jpg'),
        logos: { isotipo: I('mido-imagotipo.svg'), isotipoAncho: 'clamp(150px, 18vw, 220px)' },
        intro: 'mido',    // portada animada: el isotipo se arma sobre el azul de la marca
        color: { acento: '#5b5cf2', medio: '#dedefd', suave: '#f1f1ff', tinta: '#26237e' },
        manifiesto: 'Transforma tu casa en un hogar inteligente',
        cliente: 'MIDO Tech · En colaboración con Agustín Avendaño',
        servicios: 'Identidad de marca & Diseño UI/UX',
        resumen: 'Identidad de marca y diseño de la app para un servicio de domótica: un isotipo modular que se convierte en patrón, tipografía, paleta e interfaz.',
        etiquetas: ['Identidad de marca', 'Sistema gráfico', 'UI/UX'],
        tagline: 'Mido es un servicio de domótica creado para transformar la relación entre las personas y sus hogares, facilitando la conexión con lo que más importa.',
        objetivo: 'Construir una marca cercana para un servicio tecnológico: que la domótica se sienta simple, confiable y al alcance de cualquier persona.',
        // ⚠️ Confirma tu rol y el de Agustín.
        rol: 'Junto a Agustín Avendaño diseñé la identidad de marca y su sistema gráfico, y la interfaz de la app.',
        resultados: 'Una identidad completa (isotipo modular, patrón, tipografías y paleta) aplicada a la app, la señalética y los afiches de Mido.',
        bloques: [
            {
                // ⚠️ Textos descriptivos: agrega el concepto o el porqué de cada decisión.
                tipo: 'escena', visual: 'construccion', titulo: 'Construcción del isotipo',
                pasos: [
                    { lado: 'derecha', textos: ['Una retícula de círculos.', 'El isotipo se dibuja sobre una grilla de círculos del mismo tamaño, alternados en diagonal.'] },
                    { lado: 'derecha', textos: ['Los módulos se unen.', 'Curvas de unión convierten círculos sueltos en una sola forma continua.'] },
                    { lado: 'derecha', textos: ['Un punto azul.', 'El círculo que queda libre se convierte en el acento de color de la marca.'] }
                ]
            },
            {
                tipo: 'escena', visual: 'patron', titulo: 'Sistema de identidad',
                pasos: [
                    { lado: 'izquierda', textos: ['Del isotipo nace un patrón continuo.', 'El módulo se repite y se extiende en la app, los afiches y la señalética.'] },
                    { lado: 'derecha', textos: ['Osborn para la marca, Helvetica Neue para la información.', 'Una tipografía principal con carácter y una secundaria para la lectura.'] },
                    { lado: 'izquierda', final: true, textos: ['Azul, negro y blanco.', 'Una paleta reducida, donde el azul marca lo importante.'] }
                ]
            },
            {
                tipo: 'marca', titulo: 'Versiones de marca',
                piezas: [
                    { label: 'Isotipo', src: I('mido-isotipo.svg'), ancho: '90px' },
                    { label: 'Logotipo', src: I('mido-logotipo.svg'), ancho: '160px' },
                    { label: 'Imagotipo', src: I('mido-imagotipo.svg'), ancho: '110px' }
                ]
            },
            {
                tipo: 'paleta', titulo: 'Paleta de color',
                grupos: [
                    { nombre: 'Primarios', colores: [
                        { hex: '#5954FF', rgb: '89 · 84 · 255' },
                        { hex: '#FFFFFF', rgb: '255 · 255 · 255' },
                        { hex: '#000000', rgb: '0 · 0 · 0' }
                    ] },
                    { nombre: 'Secundarios', colores: [
                        { hex: '#ACAAFE', rgb: '172 · 170 · 254' },
                        { hex: '#847FFF', rgb: '132 · 127 · 255' },
                        { hex: '#2E2A7F', rgb: '46 · 42 · 127' }
                    ] }
                ]
            },
            {
                tipo: 'tipos', titulo: 'Tipografías',
                principal: I('mido-tipo-osborn.jpg'), secundaria: I('mido-tipo-helvetica.jpg'),
                nombreSecundaria: 'Helvética Neue',
                pesos: [I('mido-tipo-titulos.jpg'), I('mido-tipo-subtitulos.jpg')]
            },
            { tipo: 'recurso', src: I('mido-recurso.webp') },
            {
                tipo: 'carrusel', titulo: 'Diseño UI/UX',
                // Agrega aquí las pantallas nuevas en el orden que quieras
                imagenes: [I('mido-app.jpg'), I('mido-mockup-2.webp'), I('mido-celular.jpg')]
            },
            // formato 'destacado': la primera imagen (pendón) ocupa toda la columna izquierda
            { tipo: 'galeria', titulo: 'Aplicaciones', formato: 'destacado', imagenes: [I('mido-pendon.jpg'), I('mido-afiches.jpg'), I('mido-elemento.jpg')] },
            // Cierre: "midomótica" se reduce a "mido", como al final de la presentación
            { tipo: 'nombre', partes: [I('mido-nombre-a.png'), I('mido-nombre-b.png')], proporcion: [1416, 1864] }
        ]
    },
    {
        slug: 'tesoros-naturales',
        nombre: 'TESOROS NATURALES DE CHILE',
        categoria: 'Ilustración & producto',
        year: '2025',
        portada: I('tesoros-portada.jpg'),
        hero: I('tesoros-camping.jpg'),
        intro: 'foto',    // portada con fotografía a pantalla completa
        // Foto horizontal de la botella frente a la Base Las Torres (extendida con Firefly)
        portadaFoto: I('tesoros-portada.jpg'),
        portadaAgua: I('tesoros-portada-agua.png'),   // máscara del agua que se anima
        portadaLugar: ['Base Las Torres', '50°56′ S · 72°57′ O · Magallanes'],
        titulo: 'Tesoros naturales de Chile',
        color: { acento: '#2f5d3a', medio: '#dce8d8', suave: '#f1f5ef', tinta: '#1d3323' },
        cliente: 'Atakama Outdoor — Colección Verano 26',
        servicios: 'Ilustración, Diseño de Producto & Packaging',
        manifiesto: 'Exclusiva selección de maravillas naturales de Chile',
        resumen: 'Botella de la colección Verano 26 de Atakama Outdoor que reúne un tesoro natural de cada región de Chile, con ilustraciones grabadas, stickers coleccionables y packaging.',
        etiquetas: ['Ilustración', 'Diseño de producto', 'Stickers', 'Packaging'],
        tagline: 'Esta botella presenta una exclusiva selección de maravillas naturales de Chile, reuniendo destinos únicos de cada región. Es un incentivo a visitar y descubrir la diversidad de paisajes naturales a lo largo de todo nuestro país.',
        objetivo: 'Lanzar una nueva botella para la colección Verano 26 que acompañe a la botella Parques Nacionales y amplíe su público: personas inspiradas en el outdoor que aprecian la naturaleza y la diversidad de Chile desde una mirada más contemplativa.',
        rol: 'Diseñé e ilustré la botella, que luego se mandó a grabar, y los stickers para ir completando la ruta de los lugares visitados. Junto al equipo participé en la selección de los destinos y en la diagramación del packaging.',
        resultados: 'Una botella grabada, una línea de stickers coleccionables y un packaging que integran un mismo relato: invitar a descubrir y valorar los tesoros naturales de Chile, región por región.',
        bloques: [
            {
                tipo: 'lista', titulo: 'Criterios de selección', formato: 'tarjetas',
                intro: 'Cómo elegimos los Tesoros Naturales de Chile.',
                items: [
                    { titulo: 'Atractivos naturales', texto: 'Solo consideramos paisajes o destinos naturales, para potenciar el sello outdoor de la marca.' },
                    { titulo: 'Atractivos por región', texto: 'Nos preocupamos de que todas las regiones del país estuvieran consideradas.' },
                    { titulo: 'Atractivo específico', texto: 'Cada lugar hace referencia a un hito en particular y no a una zona, salvo en dos excepciones.' },
                    { titulo: 'Atractivos exclusivos', texto: 'La selección integra destinos menos turísticos para aportar novedad al proyecto.' }
                ]
            },
            // Ruta de norte a sur: un tesoro por región (fotos de Wikimedia Commons, con crédito)
            {
                tipo: 'ruta', titulo: 'Una maravilla por región',
                texto: 'Un recorrido de norte a sur por Chile: un destino natural en cada una de sus 16 regiones.',
                lugares: [
                    { nombre: 'Lago Chungará', region: 'Arica y Parinacota', lat: '18°14′ S', src: I('tesoros-region-01.jpg'), credito: 'WeHaKa · CC BY-SA 4.0' },
                    { nombre: 'Laguna del Huasco', region: 'Tarapacá', lat: '20°17′ S', src: I('tesoros-region-02.jpg'), credito: 'Freddy A. Bugueño Tolmo · CC BY-SA 4.0' },
                    { nombre: 'Valle de la Luna', region: 'Antofagasta', lat: '22°55′ S', src: I('tesoros-region-03.jpg'), credito: 'Diego Delso · CC BY-SA 4.0' },
                    { nombre: 'Desierto Florido', region: 'Atacama', lat: '28°10′ S', src: I('tesoros-region-04.jpg'), credito: 'Pato Novoa · CC BY 2.0' },
                    { nombre: 'Valle del Elqui', region: 'Coquimbo', lat: '30°00′ S', src: I('tesoros-region-05.jpg'), credito: 'Menaqs · CC BY-SA 3.0' },
                    { nombre: 'Cerro La Campana', region: 'Valparaíso', lat: '32°57′ S', src: I('tesoros-region-06.jpg'), credito: 'Carlos Figueroa Rojas · CC BY-SA 4.0' },
                    { nombre: 'Embalse El Yeso', region: 'Metropolitana', lat: '33°40′ S', src: I('tesoros-region-07.jpg'), credito: 'Rod Sot · CC0' },
                    { nombre: 'Punta de Lobos', region: 'O’Higgins', lat: '34°25′ S', src: I('tesoros-region-08.jpg'), credito: 'Sergiowehinger · CC BY-SA 3.0' },
                    { nombre: 'Velo de la Novia', region: 'Maule', lat: '35°28′ S', src: I('tesoros-region-09.jpg'), credito: 'Drdiegoept · CC BY-SA 4.0' },
                    { nombre: 'Valle Las Trancas', region: 'Ñuble', lat: '36°54′ S', src: I('tesoros-region-10.jpg'), credito: 'Camilo (Flickr) · CC BY 2.0' },
                    { nombre: 'Saltos del Laja', region: 'Biobío', lat: '37°13′ S', src: I('tesoros-region-11.jpg'), credito: 'Yordan Garrido González · CC BY-SA 4.0' },
                    { nombre: 'Volcán Villarrica', region: 'Araucanía', lat: '39°25′ S', src: I('tesoros-region-12.jpg'), credito: 'Falk2 · CC BY-SA 4.0' },
                    { nombre: 'Huilo Huilo', region: 'Los Ríos', lat: '39°52′ S', src: I('tesoros-region-13.jpg'), credito: 'Claudio López · CC BY-SA 3.0' },
                    { nombre: 'Volcán Osorno', region: 'Los Lagos', lat: '41°06′ S', src: I('tesoros-region-14.jpg'), credito: 'Draceane · CC BY-SA 4.0' },
                    { nombre: 'Catedrales de Mármol', region: 'Aysén', lat: '46°41′ S', src: I('tesoros-region-15.jpg'), credito: 'Felipe Del Valle · CC BY 2.0' },
                    { nombre: 'Base Las Torres', region: 'Magallanes', lat: '50°56′ S', src: I('tesoros-region-16.jpg'), credito: 'Luchomunozm · CC BY-SA 4.0' }
                ]
            },
            { tipo: 'galeria', imagenes: [I('tesoros-detalle.jpg'), I('tesoros-botella-hd.jpg')], claro: true },   // desde aquí la página pasa a blanco con curvas verdes
            {
                tipo: 'lista', titulo: 'Proceso', columnas: 3, formato: 'linea',
                items: [
                    { titulo: 'Ideación', texto: 'Junto al equipo reunimos un tesoro natural representativo de cada región. Más que una búsqueda técnica, fue una instancia colaborativa donde se cruzaron recuerdos, viajes y experiencias personales: una bitácora colectiva de lugares significativos, complementada con los libros ChileTur y páginas especializadas.' },
                    { titulo: 'Ilustración', texto: 'Un estilo gráfico coherente con la marca y con la botella anterior, Parques Nacionales: línea clara, reconocible y fácil de adaptar a distintos formatos. Cada ilustración debía transmitir la esencia del destino, con un balance entre lo detallado y lo simbólico.' },
                    { titulo: 'Packaging y diagramación', texto: 'Una presentación que integra la botella, los stickers y el empaque. El packaging se pensó como una extensión del relato, invitando a descubrir los tesoros naturales de Chile desde el primer contacto con el producto.' }
                ]
            },
            {
                tipo: 'imagen', titulo: 'Diseño final',
                texto: 'La forma de la botella se mantuvo en coherencia con Parques Nacionales para dar continuidad a la colección. Cada trazo grabado condensa la esencia de un lugar, transformando los paisajes en íconos reconocibles y memorables.',
                src: I('tesoros-iconografia.webp'), fondo: true, efecto: 'grabado'   // lupa que agranda los íconos al pasar el mouse
            },
            // Stickers: la lámina entra girando como si se pegara
            {
                tipo: 'sticker', titulo: 'Stickers: una bitácora de viaje',
                texto: 'Los stickers aportan un carácter más cercano y lúdico. Funcionan como páginas de una bitácora personal: invitan a registrar los lugares visitados y a coleccionar los tesoros naturales del país.',
                src: I('tesoros-stickers.jpg')
            },
            // Packaging: el troquel parte acercado y se aleja con el scroll
            {
                tipo: 'packaging', titulo: 'Packaging',
                texto: 'El packaging integra la botella, los stickers y el empaque, pensado como una extensión del relato.',
                src: I('tesoros-packaging.jpg')
            }
        ]
    },
    {
        slug: 'urgencias-pediatricas-uc',
        nombre: 'URGENCIA PEDIÁTRICA UC',
        categoria: 'Interiorismo en salud',
        year: '2024',
        intro: 'pausa',   // portada con fotografía y un círculo que "respira"
        portada: I('urgencia-estar-2.jpg'),
        portadaFoto: I('urgencia-nicho.jpg'),
        hero: I('urgencia-estar-2.jpg'),
        titulo: 'Urgencia Pediátrica UC',
        manifiesto: 'Un espacio transitorio para renovar la energía durante el turno.',
        color: { acento: '#6f9773', medio: '#dbe8d9', suave: '#f1f6f0', tinta: '#243a2a' },
        cliente: 'UC Christus Marcoleta · Urgencia Pediátrica',
        servicios: 'Arquitectura Interior & Ergonomía',
        resumen: 'Un espacio transitorio de trabajo, descanso y conversación para el personal médico del pasillo de pediatría.',
        etiquetas: ['Interiorismo', 'Ergonomía', 'Diseño de servicio'],
        tagline: 'Un espacio transitorio para el personal médico del pasillo de pediatría, pensado para acompañar los turnos de trabajo.',
        tagline2: 'Reúne un área de trabajo, un lugar de descanso y un área de conversación donde doctor y apoderado pueden discutir el tratamiento. Su estética busca generar una sensación de renovación y despeje, para que el personal mantenga la energía durante las horas prolongadas del turno.',
        objetivo: 'Dar al personal médico un lugar de pausa y trabajo dentro del pasillo de pediatría, haciendo un uso óptimo del espacio para mantener un flujo de tránsito adecuado y un mobiliario con los parámetros correctos.',
        rol: 'Diseñadora de espacios y servicio, encargada de la distribución espacial, selección de materialidad acústica y mobiliario.',
        resultados: 'Optimización del bienestar del personal de turno y mejora documentada en los tiempos de descanso.',
        bloques: [
            {
                tipo: 'colabora', titulo: 'En colaboración',
                texto: 'Un proyecto desarrollado entre la Escuela de Diseño y la Escuela de Medicina UC, trabajando junto al área de urgencia pediátrica de UC Christus Marcoleta.',
                partes: [
                    { logo: I('logo-diseno-uc.svg'), alto: 62, nombre: 'Escuela de Diseño UC' },
                    { logo: I('logo-uc.svg'), alto: 68, nombre: 'Escuela de Medicina UC' },
                    { logo: I('logo-ucchristus.svg'), alto: 24, nombre: 'Marcoleta · Urgencia pediátrica' }
                ]
            },
            {
                tipo: 'planta', titulo: 'Recorrido por el recinto', fondo: '#eef4ee',
                texto: 'El recinto aprovecha al máximo el espacio para mantener un flujo de tránsito adecuado. Pasa el cursor o toca cada punto para conocer sus zonas.',
                src: I('urgencia-planta-2.jpg'),
                puntos: [
                    { x: 22, y: 33, titulo: 'Acceso', texto: 'Mamparas de vidrio esmerilado separan el recinto del pasillo sin interrumpir el tránsito: dejan pasar la luz y resguardan la privacidad.' },
                    { x: 46, y: 75, titulo: 'Área de trabajo', texto: 'Puestos de pie para revisar y registrar, con mobiliario dimensionado según parámetros ergonómicos.' },
                    { x: 34, y: 27, titulo: 'Lugar de descanso', texto: 'Nichos tapizados para una pausa breve y semiprivada durante el turno.' },
                    { x: 49, y: 21, titulo: 'Punto de hidratación', texto: 'Dispensador de agua y guardado integrados al mueble de madera.' },
                    { x: 64, y: 26, titulo: 'Área de conversación', texto: 'Un asiento continuo para descansar o para que doctor y apoderado conversen sobre el tratamiento.' },
                    { x: 78, y: 58, titulo: 'Luz natural', texto: 'Una ventana esmerilada aporta luz natural sin exponer a quienes descansan.' }
                ]
            },
            {
                tipo: 'recorrido', titulo: 'Las zonas',
                texto: 'Un mismo recinto para trabajar, descansar y conversar.',
                items: [
                    { src: I('urgencia-acceso-2.jpg'), titulo: 'Acceso', texto: 'Una entrada señalizada desde el pasillo de pediatría.' },
                    { src: I('urgencia-estacion-2.jpg'), titulo: 'Área de trabajo', texto: 'Trabajo de pie, cerca pero separado del descanso.' },
                    { src: I('urgencia-estar-2.jpg'), titulo: 'Área de conversación', texto: 'Para descansar o discutir el tratamiento entre doctor y apoderado.' },
                    { src: I('urgencia-nicho.jpg'), titulo: 'Lugar de descanso', texto: 'Una pausa que renueva y despeja.' }
                ]
            },
            {
                tipo: 'paleta', titulo: 'Paleta de materiales',
                grupos: [
                    { nombre: 'Materiales', colores: [
                        { hex: '#A9C4A2', rgb: '169, 196, 162', nombre: 'Tapiz verde salvia' },
                        { hex: '#D2B48C', rgb: '210, 180, 140', nombre: 'Roble claro' },
                        { hex: '#F2F0EB', rgb: '242, 240, 235', nombre: 'Blanco cálido' }
                    ] }
                ]
            },
            { tipo: 'cita', escena: true, texto: 'Cuidar a quienes cuidan también es parte de la atención.', logo: I('logo-elemental-blanco.png'), logoTexto: 'Equipo de trabajo' }
        ]
    },
    {
        slug: 'ruta-7',
        nombre: 'RUTA 7',
        categoria: 'Fotografía',
        year: '2026',
        intro: 'ruta',   // portada con foto + bitácora libre de fotos unidas por la carretera
        libre: true,     // sin objetivo / rol / resultados: solo fotos
        portada: I('ruta7-09.jpg'),
        portadaFoto: I('ruta7-13.jpg'),
        titulo: 'Ruta 7',
        kicker: 'Carretera Austral · Chile',
        manifiesto: 'Un viaje por la Carretera Austral, foto a foto.',
        color: { acento: '#cfa84a', medio: '#ece4d2', suave: '#f6f2ea', tinta: '#2b2a26' },
        cliente: 'Proyecto personal',
        servicios: 'Fotografía de viaje',
        resumen: 'Un recopilado de fotos de un viaje por la Carretera Austral.',
        etiquetas: ['Fotografía', 'Viaje', 'Carretera Austral'],
        tagline: 'Un recopilado de fotos de un viaje por la Carretera Austral: bosque, agua, piedra y camino.',
        bloques: [
            {
                tipo: 'bitacora',
                fotos: [
                    { src: I('ruta7-03.jpg'), c: 1, w: 12, r: 1, h: 24, rot: 0, v: .08, ar: '1600 / 1066', lugar: 'Laguna Triángulo', zona: 'Parque Nacional Alerce Andino · Los Lagos', info: 'Protege bosques de alerce milenario.', full: true },
                    { src: I('ruta7-02.jpg'), c: 1, w: 6, r: 29, h: 29, rot: 0, v: .1, ar: '960 / 1280', lugar: 'Parque Hornopirén', zona: 'Los Lagos' },
                    { src: I('ruta7-01.jpg'), c: 7, w: 6, r: 29, h: 12, rot: 0, v: .12, ar: '1280 / 854', lugar: 'Termas de Puyuhuapi', zona: 'Aysén' },
                    { src: I('ruta7-06.jpg'), c: 7, w: 6, r: 44, h: 14, rot: 0, v: .12, ar: '1280 / 960', lugar: 'Parque Nacional Vicente Pérez Rosales', zona: 'Los Lagos', info: 'El parque nacional más antiguo de Chile.' },
                    { src: I('ruta7-09.jpg'), c: 1, w: 12, r: 61, h: 26, rot: 0, v: .08, ar: '2000 / 1333', lugar: 'En el camino', zona: 'Carretera Austral', full: true },
                    { src: I('ruta7-04.jpg'), c: 1, w: 6, r: 90, h: 29, rot: 0, v: .1, ar: '854 / 1280', lugar: 'Ventisquero Colgante', zona: 'Parque Nacional Queulat · Aysén', info: 'Un glaciar suspendido sobre la roca.' },
                    { src: I('ruta7-10.jpg'), c: 7, w: 6, r: 90, h: 12, rot: 0, v: .12, ar: '2000 / 1333', lugar: 'Termas de Puyuhuapi', zona: 'Aysén' },
                    { src: I('ruta7-12.jpg'), c: 7, w: 6, r: 105, h: 14, rot: 0, v: .12, ar: '2000 / 1333', lugar: 'Termas de Puyuhuapi', zona: 'Aysén' },
                    { src: I('ruta7-11.jpg'), c: 1, w: 12, r: 122, h: 26, rot: 0, v: .08, ar: '2000 / 1333', lugar: 'Parque Nacional Queulat', zona: 'Aysén', full: true },
                    { src: I('ruta7-05.jpg'), c: 1, w: 4, r: 151, h: 10, rot: 0, v: .12, ar: '1280 / 914', lugar: 'Lago Tagua-Tagua', zona: 'Los Lagos' },
                    { src: I('ruta7-14.jpg'), c: 5, w: 4, r: 151, h: 10, rot: 0, v: .12, ar: '2000 / 1333', lugar: 'Catedrales de Mármol', zona: 'Lago General Carrera · Aysén', info: 'Cavernas de mármol talladas por el agua del lago.' },
                    { src: I('ruta7-15.jpg'), c: 9, w: 4, r: 151, h: 10, rot: 0, v: .12, ar: '2000 / 1333', lugar: 'Cerca de la confluencia de los dos ríos', zona: 'Aysén' }
                ]
            }
        ]
    },
    {
        slug: 'habitat-un-mundo',
        nombre: 'HÁBITAT, UN MUNDO',
        categoria: 'Diseño industrial',
        year: '2025',
        intro: 'habitat',   // portada en tres paneles: bosque, cordillera y mar
        portada: I('habitat-portada-3.jpg'),
        titulo: 'Hábitat, un mundo',
        manifiesto: 'Tres pantuflas inspiradas en los grandes hábitats de Chile.',
        habitats: [
            { id: 'bosque', nombre: 'Bosque', foto: I('habitat-foto-bosque.jpg'), credito: 'Parque Nacional Huerquehue · Vicente Fernández Rioja · CC BY-SA 4.0', pantufla: I('habitat-pantufla-bosque.webp'), color: '#7b8a5e' },
            { id: 'cordillera', nombre: 'Cordillera', foto: I('habitat-foto-cordillera.jpg'), credito: 'Araucaria y volcán Llaima, P. N. Conguillío · Eduardo Torres · CC BY-SA 4.0', pantufla: I('habitat-pantufla-cordillera.webp'), color: '#7d4766' },
            { id: 'mar', nombre: 'Mar', foto: I('habitat-foto-mar.jpg'), credito: 'Ballena jorobada (Megaptera novaeangliae) · Giles Laurent · CC BY-SA 4.0', pantufla: I('habitat-pantufla-mar.webp'), color: '#7b96cf' }
        ],
        color: { acento: '#5f6f45', medio: '#e3e6d8', suave: '#f3f4ee', tinta: '#2c3322' },
        cliente: 'Atakama Outdoor SPA',
        servicios: 'Diseño Industrial & Materialidad',
        resumen: 'Pantuflas para Atakama Outdoor inspiradas en tres territorios de Chile: bosque, cordillera y mar.',
        etiquetas: ['Diseño industrial', 'Materialidad', 'Patronaje'],
        tagline: 'Colección de pantuflas Futaleufú para Atakama Outdoor, inspirada en los tres grandes hábitats de Chile: bosque, cordillera y mar.',
        tagline2: 'Cada pantufla lleva un print ilustrado con especies de su hábitat, para llevar un pedacito de Chile a casa.',
        objetivo: 'Generar una nueva propuesta del producto más vendido de Atakama Outdoor, dándole un nuevo enfoque. Proyecto desarrollado durante mi práctica en la empresa.',
        rol: 'Desarrollar la propuesta completa, tanto el concepto como la gráfica.',
        resultados: 'La propuesta fue presentada al equipo de diseño de Atakama Outdoor como colección para el año siguiente.',
        bloques: [
            {
                tipo: 'especies', separado: true, titulo: 'Tres hábitats, tres prints',
                texto: 'Cada pantufla lleva ilustradas especies de su hábitat.',
                items: [
                    { id: 'bosque', nombre: 'Bosque', modelo: 'Futaleufú bosque', color: '#7b8a5e', print: I('habitat-print-bosque.jpg'), src: I('habitat-pantufla-bosque.webp'), especies: [
                        { x: 17, y: 52, nombre: 'Chucao', texto: 'Ave de los bosques templados del sur de Chile.' },
                        { x: 42, y: 26, nombre: 'Morchella', texto: 'Hongo que crece en el suelo del bosque nativo.' },
                        { x: 78, y: 46, nombre: 'Quillay', texto: 'Árbol endémico de Chile, típico del bosque esclerófilo.' }
                    ] },
                    { id: 'cordillera', nombre: 'Cordillera', modelo: 'Futaleufú cordillera', color: '#7d4766', print: I('habitat-print-cordillera.jpg'), src: I('habitat-pantufla-cordillera.webp'), especies: [
                        { x: 40, y: 58, nombre: 'Araucaria', texto: 'Árbol sagrado del pueblo mapuche, que crece en la cordillera.' },
                        { x: 57, y: 24, nombre: 'Cóndor andino', texto: 'Ave que habita la cordillera de los Andes.' }
                    ] },
                    { id: 'mar', nombre: 'Mar', modelo: 'Futaleufú mar', color: '#7b96cf', print: I('habitat-print-mar.jpg'), src: I('habitat-pantufla-mar.webp'), especies: [
                        { x: 22, y: 55, nombre: 'Corvina', texto: 'Pez de las costas chilenas.' },
                        { x: 55, y: 38, nombre: 'Tortuga laúd', texto: 'La tortuga marina más grande del mundo, que visita las costas de Chile.' },
                        { x: 76, y: 44, nombre: 'Ballena jorobada', texto: 'Migra cada año por las costas de Chile.' }
                    ] }
                ]
            },
            {
                tipo: 'prints', titulo: 'Las ilustraciones',
                texto: 'Los prints se dibujaron a mano alzada, especie por especie. Pasa el cursor para ver el detalle.',
                items: [
                    { src: I('habitat-print-bosque.jpg'), nombre: 'Print bosque' },
                    { src: I('habitat-print-cordillera.jpg'), nombre: 'Print cordillera' },
                    { src: I('habitat-print-mar.jpg'), nombre: 'Print mar' }
                ]
            },
            {
                tipo: 'coleccion', titulo: 'La colección', texto: 'Tres modelos Futaleufú, uno por hábitat. Pasa el cursor sobre cada pantufla.',
                items: [
                    { nombre: 'Bosque', modelo: 'Futaleufú bosque', color: '#6f8457', src: I('habitat-pantufla-bosque.webp') },
                    { nombre: 'Cordillera', modelo: 'Futaleufú cordillera', color: '#a8893a', src: I('habitat-pantufla-cordillera.webp') },
                    { nombre: 'Mar', modelo: 'Futaleufú mar', color: '#5d84ad', src: I('habitat-pantufla-mar.webp') }
                ]
            }
        ]
    },
    {
        slug: 'inclusividad-universal',
        nombre: 'INCLUSIVIDAD UNIVERSAL',
        subtitulo: 'YUNUS',
        categoria: 'Diseño espacial',
        year: '2024',
        intro: 'yunus',   // portada verde YUNUS con figuras que flotan y el módulo dentro de una "casa"
        portada: I('yunus-portada-2.jpg'),
        portadaFoto: I('yunus-modulo.webp'),
        titulo: 'Inclusividad Universal',
        manifiesto: 'Un módulo de trabajo que atenúa el ruido y la luz para favorecer la calma.',
        color: { acento: '#00a877', medio: '#d8ee4a', suave: '#eef6f1', tinta: '#0b3a2d' },
        cliente: 'Municipalidad de Peñalolén / YUNUS',
        servicios: 'Diseño Espacial & Accesibilidad',
        resumen: 'Módulo de trabajo y entorno adaptado para personas con neurodivergencia, enfocado específicamente en quienes tienen TEA.',
        etiquetas: ['Diseño espacial', 'Accesibilidad', 'Mobiliario modular'],
        tagline: 'Módulo de trabajo y entorno adaptado para personas con neurodivergencia, enfocado específicamente en quienes tienen TEA.',
        objetivo: 'Crear un entorno con atenuación acústica y lumínica ambiental que favorezca la concentración y la calma sensorial.',
        rol: 'Investigación de necesidades especiales, diseño de mobiliario modular y especificación de acabados sensoriales.',
        resultados: 'La propuesta se presentó a la fundación YUNUS como cierre del proyecto.',
        bloques: [
            {
                tipo: 'calma', titulo: 'Del ruido a la calma',
                pasos: [
                    { titulo: 'Estímulos', texto: 'El ruido, la luz y el movimiento del entorno pueden ser abrumadores para personas con neurodivergencia, especialmente para quienes tienen TEA.' },
                    { titulo: 'Atenuación', texto: 'El módulo atenúa el sonido y la luz ambiental, bajando la intensidad de lo que llega a cada puesto.' },
                    { titulo: 'Calma', texto: 'Un entorno que favorece la concentración y la calma sensorial.' }
                ]
            },
            {
                tipo: 'planta', titulo: 'El módulo',
                texto: 'Un puesto de trabajo envolvente. Pasa el cursor o toca cada punto para conocer sus partes.',
                src: I('yunus-modulo.webp'),
                puntos: [
                    { x: 33, y: 14, titulo: 'Visera curva', texto: 'Cubre el puesto desde arriba y suaviza la luz ambiental.' },
                    { x: 64, y: 58, titulo: 'Paneles laterales', texto: 'Envuelven el puesto y ayudan a atenuar el ruido del entorno.' },
                    { x: 45, y: 35, titulo: 'Panel translúcido', texto: 'Separa el puesto del frente sin cerrarlo por completo.' },
                    { x: 51, y: 50, titulo: 'Superficie de trabajo', texto: 'Una mesa de madera para trabajar de a dos.' }
                ]
            },
            {
                tipo: 'serie', titulo: 'Mobiliario modular',
                texto: 'El módulo se repite para armar una fila de puestos, según el espacio disponible.',
                src: I('yunus-modulos.webp')
            },
            {
                tipo: 'firma', texto: 'Un proyecto de',
                logos: [
                    { src: I('logo-diseno-uc.svg'), nombre: 'Escuela de Diseño UC', alto: 100, blanco: true },
                    { src: I('logo-penalolen-blanco.png'), nombre: 'Municipalidad de Peñalolén', alto: 84 },
                    { src: I('yunus-isotipo-blanco.png'), nombre: 'YUNUS', alto: 92 }
                ]
            }
        ]
    },
    {
        slug: 'variacion-textil',
        nombre: 'VARIACIÓN TEXTIL',
        categoria: 'Diseño textil',
        year: '2025',
        intro: 'vt',       // estilo portafolio de fotografía: foto a pantalla completa y galerías limpias
        libre: true,       // sin objetivo / rol / resultados (pendiente de texto)
        portada: I('recon-5.jpg'),
        portadaFoto: I('recon-5.jpg'),
        titulo: 'Variación Textil',
        kicker: 'Diseño textil · 2025',
        manifiesto: 'Aplicaciones sobre fibras naturales y re-confección de prendas',
        color: { acento: '#151412', medio: '#8a857c', suave: '#ffffff', tinta: '#111111' },
        cliente: 'Proyecto Independiente',
        servicios: 'Estampado, tintura, aplicación botánica & sastrería',
        resumen: 'Aplicaciones sobre fibras naturales y re-confección de prendas con técnicas de sastrería.',
        etiquetas: ['Diseño textil', 'Sastrería', 'Moda'],
        tagline: 'Tres trabajos textiles: aplicaciones de estampado, tintura y técnica botánica sobre fibras naturales; re-confección de prendas con técnicas de sastrería; y un tercero que une ambas técnicas.',
        bloques: [
            // ── Sección 01 ─────────────────────────────────────────
            {
                tipo: 'vtSeccion', numero: '01', titulo: 'Aplicaciones en textil', texto: 'estampado, tintura y aplicación botánica sobre fibras naturales',
                tecnicas: [
                    { titulo: 'Estampado', texto: 'Un motivo que se repite sobre la tela.' },
                    { titulo: 'Tintura', texto: 'El color se absorbe y se expande en la fibra.' },
                    { titulo: 'Aplicación botánica', texto: 'Hojas y flores dejan su huella sobre la fibra natural.' }
                ]
            },
            { tipo: 'vtLado', grande: { src: I('textil-retrato-bn.jpg'), ar: '1466 / 2200' }, fotos: [I('textil-1.jpg'), I('textil-3.jpg'), I('textil-2.jpg')] },
            // ── Sección 02 ─────────────────────────────────────────
            { tipo: 'vtSeccion', numero: '02', oscuro: true, titulo: 'Re-confección de prendas', texto: 'sastrería para crear piezas nuevas a partir de prendas existentes' },
            {
                tipo: 'vtMasonry', oscuro: true,
                cols: [
                    [{ src: I('recon-7.jpg'), ar: '1183 / 1800' }],
                    [{ src: I('recon-1.jpg'), ar: '1224 / 1800' }]
                ]
            },
            { tipo: 'vtAncho', oscuro: true, foto: I('recon-6.jpg'), ar: '1800 / 1218', bn: true },
            {
                tipo: 'vtMasonry', oscuro: true,
                cols: [
                    [{ src: I('recon-4.jpg'), ar: '1800 / 1130' }, { src: I('recon-3.jpg'), ar: '1388 / 1800' }],
                    [{ src: I('recon-2.jpg'), ar: '1074 / 1800' }]
                ]
            },
            // ── Sección 03 ─────────────────────────────────────────
            { tipo: 'vtSeccion', numero: '03', tono: 'piedra', titulo: 'Aplicación y re-confección', texto: 'une dos técnicas de las secciones anteriores: la aplicación sobre la tela y la re-confección de prendas' },
            { tipo: 'vtPar', tono: 'piedra', fotos: [{ src: I('union-5.jpg'), ar: '1024 / 1536' }, { src: I('union-1.jpg'), ar: '1024 / 1536' }] },
            { tipo: 'vtFila', tono: 'piedra', fotos: [I('union-2.jpg'), I('union-3.jpg'), I('union-4.jpg'), I('union-6.jpg')] }
        ]
    },
    {
        slug: 'exploraciones-visuales',
        nombre: 'EXPLORACIONES VISUALES',
        categoria: 'Ilustración & gráfica',
        year: '2026',
        libre: true,       // conjunto de mini proyectos personales, sin objetivo / rol / resultados
        intro: 'collage',  // portada: las láminas se reparten alrededor del título como cartas
        portada: I('ex-libro-2.jpg'),
        titulo: 'Exploraciones visuales',
        kicker: 'Mini proyectos personales',
        collage: [
            { src: I('ex-libro-2.jpg'), x: 3, y: 6, w: 23, r: -7, d: 1.1, ar: '3 / 2' },
            { src: I('exp-06.jpg'), x: 70, y: 4, w: 27, r: 6, d: .8 },
            { src: I('exp-10.jpg'), x: 76, y: 50, w: 22, r: -5, d: 1.3 },
            { src: I('ex-panama.jpg'), x: 2, y: 55, w: 23, r: 5, d: .9 },
            { src: I('exp-05.jpg'), x: 31, y: 72, w: 17, r: -3, d: 1.5 },
            { src: I('ilani-3-ancho.jpg'), x: 54, y: 74, w: 16, r: 4, d: 1.2 }
        ],
        cliente: 'Proyectos personales',
        servicios: 'Ilustración, Acuarela & Diseño Gráfico',
        resumen: 'Mini proyectos personales: ilustración en acuarela y digital, y piezas gráficas hechas a mano para otros.',
        etiquetas: ['Acuarela', 'Ilustración digital', 'Papelería'],
        tagline: 'Un conjunto de mini proyectos hechos de forma libre: lo que me gusta hacer fuera de lo laboral, y lo que hago para otros.',
        bloques: [
            { tipo: 'carrusel', slides: true, titulo: 'Acuarela & digital', texto: 'Ilustraciones botánicas: cebollas, flores y cacao.', imagenes: [3, 2, 4, 5, 6, 7].map(n => I(`exp-${String(n).padStart(2, '0')}.jpg`)) },
            { tipo: 'imagen', titulo: 'Acuarela', texto: 'Paisajes y colores del sur de Chile. Pasa el cursor sobre las acuarelas.', src: I('exp-10.jpg'), agua: true },
            { tipo: 'galeria', formato: 'ancho', efecto: 'agua', imagenes: [I('exp-08.jpg'), I('exp-09.jpg')] },
            { tipo: 'imagen', titulo: 'Regalitos a mano', texto: 'Invitaciones, menús y guías de viaje diseñadas como regalo.', src: I('exp-13.jpg'), junto: true },
            { tipo: 'galeria', formato: 'ancho', efecto: 'tilt', junto: true, imagenes: [I('exp-12.jpg'), I('exp-14.jpg')] },
            { tipo: 'imagen', src: I('ex-libro-2.jpg'), junto: true },
            { tipo: 'imagen', src: I('ex-panama-2.jpg'), max: '72%', junto: true },
            { tipo: 'imagen', src: I('ex-panama.jpg') },
            { tipo: 'galeria', titulo: 'Ilani', texto: 'Diseño y confección de estuches.', columnas: 2, efecto: 'tilt', aspecto: '4 / 5',
              imagenes: [I('ilani-logo.jpg'), I('ilani-1.jpg'), I('ilani-4.jpg'), I('ilani-5.jpg'), I('ilani-3.jpg'), I('ilani-2.jpg')] }
        ]
    }
];



/* Isotipo MIDO en línea (para las escenas animadas) */
const MIDO_ISO = {
    dot: 'M142.49,42.82c5.71,0,10.9-2.24,14.74-5.88.12-.13.25-.26.37-.39.14-.14.27-.27.42-.4,3.65-3.84,5.88-9.03,5.88-14.74s-2.24-10.92-5.9-14.76c0,0-.01,0-.01-.01-.13-.12-.25-.24-.37-.36-.12-.12-.24-.24-.36-.37v-.02c-3.86-3.65-9.05-5.9-14.77-5.9s-10.93,2.25-14.77,5.91c0,0-.01.01-.02.02-.12.12-.24.25-.36.37-.12.12-.23.23-.35.34,0,0,0,0-.02.01-3.65,3.84-5.9,9.04-5.9,14.76s2.24,10.9,5.89,14.74l.03.03c.12.12.25.24.37.36s.24.24.36.37v.02c3.86,3.65,9.05,5.9,14.77,5.9Z',
    a: 'M157.99,127.72c-.13-.12-.25-.24-.37-.36s-.24-.24-.36-.37h-.01c-3.65-3.85-5.9-9.05-5.9-14.77s2.24-10.9,5.88-14.74c.13-.13.26-.27.39-.4.13-.13.27-.26.4-.39,3.65-3.84,5.88-9.03,5.88-14.74s-2.24-10.92-5.9-14.76c0,0-.01,0-.01-.01-.13-.12-.25-.24-.37-.36-.12-.12-.24-.24-.36-.37h-.01c-3.84-3.67-9.04-5.91-14.75-5.91s-10.93,2.25-14.77,5.91c-.12.12-.24.25-.36.37s-.24.24-.37.36c-3.84,3.66-9.04,5.91-14.77,5.91s-10.91-2.24-14.75-5.9c0,0-.01,0-.01-.01-.13-.12-.25-.24-.37-.36-.12-.12-.24-.24-.36-.37l-.02-.02s0,0,0,0h0c-3.84-3.65-9.03-5.89-14.74-5.89s-10.93,2.25-14.77,5.91c-.12.12-.24.25-.36.37-.12.12-.24.24-.37.36-3.66,3.84-5.91,9.04-5.91,14.77s2.24,10.9,5.89,14.74c0,.01.02.02.03.03.12.12.25.24.37.36.12.12.24.24.36.37h.01c3.84,3.67,9.04,5.91,14.76,5.91s10.9-2.24,14.74-5.88c.13-.13.26-.27.39-.4.13-.13.27-.26.4-.39,3.84-3.65,9.03-5.88,14.74-5.88s10.92,2.24,14.76,5.9h.01c.12.13.25.25.37.37.12.12.24.24.36.37,0,0,.01,0,.01.01,3.65,3.84,5.9,9.03,5.9,14.75s-2.25,10.93-5.91,14.77c-.12.12-.24.25-.36.37-.12.12-.24.24-.37.36-3.84,3.66-9.04,5.91-14.77,5.91s-10.91-2.24-14.75-5.9c0,0-.01,0-.01-.01-.13-.12-.25-.24-.37-.36-.12-.12-.24-.24-.36-.37h-.01c-3.84-3.67-9.04-5.91-14.75-5.91s-10.93,2.25-14.77,5.91c-.12.12-.24.25-.36.37-.12.12-.24.24-.37.36-3.84,3.66-9.04,5.91-14.77,5.91s-10.93-2.25-14.77-5.91c-.12-.12-.25-.24-.37-.36-.12-.12-.24-.24-.36-.37-3.84-3.66-9.04-5.91-14.77-5.91s-10.78,2.18-14.6,5.76c-.17.18-.34.36-.51.54-.18.18-.36.35-.55.53C2.18,131.72,0,136.85,0,142.49s2.24,10.9,5.88,14.74c.13.13.27.26.4.39s.26.27.39.4c3.84,3.65,9.03,5.88,14.74,5.88s11.13-2.34,14.99-6.13c.05-.05.09-.1.14-.15.04-.04.09-.09.13-.13,3.86-3.79,9.16-6.13,14.99-6.13s11.26,2.39,15.13,6.26h0c3.87,3.87,9.23,6.26,15.14,6.26s11.09-2.32,14.95-6.09c.06-.06.12-.12.18-.19.06-.06.12-.12.18-.18,3.86-3.77,9.13-6.09,14.95-6.09s11.13,2.34,15,6.13c.04.04.09.09.13.13.05.05.09.09.14.14,3.86,3.8,9.16,6.13,15,6.13s10.9-2.24,14.74-5.88c.13-.13.26-.27.39-.4s.27-.26.4-.39c3.65-3.84,5.88-9.03,5.88-14.74s-2.24-10.92-5.9-14.76c0,0-.01,0-.01-.01Z',
    b: 'M21.43,103.36c5.65,0,10.78-2.19,14.61-5.76.16-.18.33-.35.5-.52s.35-.34.53-.51c3.58-3.83,5.77-8.97,5.77-14.62s-2.18-10.78-5.76-14.6c-.18-.17-.37-.34-.55-.52-.18-.18-.35-.35-.52-.54-3.57-3.82-5.76-8.96-5.76-14.6s2.24-10.91,5.9-14.75c0,0,0-.01.01-.02.12-.13.24-.25.36-.37.12-.12.24-.24.37-.36,0,0,0,0,.02-.02,3.84-3.65,9.04-5.9,14.76-5.9s10.92,2.24,14.76,5.9l.02.02c.12.12.25.24.37.36s.24.24.36.37c0,0,.01,0,.01.02,3.84,3.65,9.04,5.9,14.76,5.9s10.9-2.24,14.74-5.88c.13-.13.26-.27.39-.4s.27-.26.4-.39c3.64-3.84,5.88-9.03,5.88-14.74s-2.16-10.72-5.69-14.54c-.21-.19-.41-.38-.6-.58-.2-.2-.39-.4-.58-.6-3.82-3.53-8.93-5.69-14.54-5.69s-10.92,2.24-14.76,5.9c0,0,0,0-.01.01-.12.12-.24.25-.36.37-.11.11-.21.21-.33.32,0,0,0,0-.01.01-3.84,3.66-9.04,5.9-14.76,5.9s-11.27-2.4-15.14-6.27l-.03.03c-3.87-3.88-9.23-6.27-15.14-6.27S10.5,2.24,6.66,5.9c0,0-.01,0-.01.02-.12.12-.24.25-.36.37-.12.12-.24.24-.37.36h-.01C2.24,10.49,0,15.69,0,21.41s2.4,11.26,6.27,15.14h-.01c3.89,3.88,6.29,9.25,6.29,15.17s-2.18,10.76-5.74,14.58c-.17.18-.34.36-.52.54-.18.18-.36.36-.54.52C2.2,71.19.02,76.31.02,81.95s2.39,11.26,6.26,15.13c3.87,3.88,9.23,6.28,15.15,6.28Z'
};
function midoBuild() {
    // Retícula de Josefina: filas de 5 círculos alternadas con filas de 4 (desplazadas en diagonal),
    // del mismo radio que los módulos del isotipo y unidas por diagonales.
    const r = 21.4, step = 60.55, o = 21.4;
    const A = [-1, 0, 1, 2, 3].map(k => o + k * step);          // filas y columnas de 5
    const B = [-1, 0, 1, 2].map(k => o + step / 2 + k * step);  // filas y columnas de 4
    const circles = [
        ...A.flatMap(y => A.map(x => [x, y])),
        ...B.flatMap(y => B.map(x => [x, y]))
    ].map(([x, y], i) => `<circle pathLength="100" style="--g:${i}" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${r}"/>`).join('');
    const lo = A[0], hi = A[A.length - 1], ext = 12;
    // Diagonales a 45° que pasan por todos los centros, recortadas al cuadrado exterior
    const diag = [];
    for (let k = -4; k <= 4; k++) {
        const d = k * step;
        // x - y = d  y  x + y = s
        diag.push([Math.max(lo, lo + d), Math.max(lo, lo - d), Math.min(hi, hi + d), Math.min(hi, hi - d)]);
        const sum = (lo + hi) + d;
        diag.push([Math.max(lo, sum - hi), Math.min(hi, sum - lo), Math.min(hi, sum - lo), Math.max(lo, sum - hi)]);
    }
    const lines = diag.filter(([x1, y1, x2, y2]) => Math.hypot(x2 - x1, y2 - y1) > 1)
        .map(([x1, y1, x2, y2]) => `<line pathLength="100" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`).join('');
    const frame = `<rect pathLength="100" x="${lo}" y="${lo}" width="${hi - lo}" height="${hi - lo}"/>`;
    const pad = r + ext;
    return `<div class="scene-iso"><svg viewBox="${(lo - pad).toFixed(1)} ${(lo - pad).toFixed(1)} ${(hi - lo + 2 * pad).toFixed(1)} ${(hi - lo + 2 * pad).toFixed(1)}" aria-hidden="true">
        <g class="iso-grid">${frame}${lines}${circles}</g>
        <path class="iso-line" pathLength="100" d="${MIDO_ISO.a}"/><path class="iso-line" pathLength="100" d="${MIDO_ISO.b}"/>
        <path class="iso-fill" d="${MIDO_ISO.a}"/><path class="iso-fill" d="${MIDO_ISO.b}"/>
        <path class="iso-line iso-dot-line" pathLength="100" d="${MIDO_ISO.dot}"/><path class="iso-dot" d="${MIDO_ISO.dot}"/>
    </svg></div>`;
}
/* Portada del caso MIDO: fondo azul con el patrón, isotipo que se arma y datos del proyecto */
function midoHero(p) {
    const words = esc(p.manifiesto || '').split(' ').map((w, i) => `<span class="mh-w" style="--i:${i}"><span>${w}</span></span>`).join(' ');
    return `
        <section class="mido-hero" data-exit>
          <div class="mh-stage">
            <div class="mh-glow" aria-hidden="true"></div>
            <div class="mh-center">
                ${p.intro === 'muma' ? `
                <div class="mh-sello" aria-hidden="true">
                    <img class="mh-anillo" src="${esc(I('muma-iso-anillo.png'))}" alt="" draggable="false">
                    <img class="mh-corazon" src="${esc(I('muma-iso-corazon.png'))}" alt="" draggable="false">
                </div>
                <img class="mh-logo" src="${esc(I('muma-logotipo-blanco.png'))}" alt="" draggable="false">` : `
                <svg class="mh-iso" viewBox="-4 -4 172 172" aria-hidden="true">
                    <path class="mh-b" d="${MIDO_ISO.b}"/><path class="mh-a" d="${MIDO_ISO.a}"/><path class="mh-dot" d="${MIDO_ISO.dot}"/>
                </svg>
                <img class="mh-logo" src="${esc(I('mido-logotipo.svg'))}" alt="" draggable="false">`}
                <h1 class="visually-hidden">${esc(p.nombre)}</h1>
                <p class="mh-manifesto">${words}</p>
            </div>
            <div class="mh-meta">
                <div><span>Año</span>${esc(p.year)}</div>
                <div><span>Servicios</span>${esc(p.servicios)}</div>
                <div><span>Cliente / Contexto</span>${esc(p.cliente)}</div>
            </div>
            <span class="mh-scroll" aria-hidden="true"><i></i>Scroll</span>
          </div>
        </section>`;
}
/* Cambio de color de fondo: secciones con data-bg tiñen el caso mientras están en pantalla */
function setupBgShift(body) {
    const secs = $$('[data-bg]', body);
    if (!secs.length) return [];
    const m = modal(), c = $('.kippa-case-container', body);
    let cur = '';
    return [() => {
        const mid = m.clientHeight * 0.5;
        const hit = secs.find(s => { const r = s.getBoundingClientRect(); return r.top < mid && r.bottom > mid; });
        const col = hit ? hit.dataset.bg : '';
        if (col === cur) return;
        cur = col;
        m.style.setProperty('--case-page', col || '');
        m.classList.toggle('is-tinted', !!col);
    }];
}
/* Encuesta: las frases aparecen una a una y se desvanecen al salir, siguiendo el scroll */
function setupVoices(body) {
    const m = modal();
    return $$('[data-voices]', body).map(g => () => {
        const vh = m.clientHeight, r = g.getBoundingClientRect();
        const k = prefersReducedMotion ? 1 : clamp((vh * 0.92 - r.top) / (vh * 0.55));
        const x = prefersReducedMotion ? 0 : clamp((vh * 0.3 - r.bottom) / (vh * 0.3));
        g.style.setProperty('--k', k.toFixed(3));
        g.style.setProperty('--x', x.toFixed(3));
    });
}

/* Ruta: latitud que avanza con el scroll y fotos con paralaje dentro de cada tarjeta */
function setupRuta(body) {
    const m = modal();
    return $$('[data-ruta]', body).map(sec => {
        const lat = $('.ruta-lat', sec), cards = $$('.ruta-card', sec);
        return () => {
            const r = sec.getBoundingClientRect();
            const p = clamp(-r.top / Math.max(1, sec.offsetHeight - m.clientHeight));
            lat.textContent = `${(18.23 + p * (50.94 - 18.23)).toFixed(1).replace('.', ',')}° S`;
            const vw = m.clientWidth;
            cards.forEach(c => {
                const b = c.getBoundingClientRect();
                c.style.setProperty('--px', ((b.left + b.width / 2 - vw / 2) / vw).toFixed(3));
            });
        };
    });
}

/* Tesoros: el fondo cambia de tono a lo largo del recorrido (como viajar de norte a sur) */
function setupTesorosBg(body) {
    if (!$('.intro-foto', body)) return [];
    const m = modal();
    const stops = [[0, [29, 51, 35]], [.3, [38, 48, 30]], [.5, [26, 46, 44]], [.72, [22, 44, 56]], [1, [30, 33, 46]]];
    const mix = t => {
        let i = 0; while (i < stops.length - 2 && t > stops[i + 1][0]) i++;
        const [t0, a] = stops[i], [t1, b] = stops[i + 1], k = clamp((t - t0) / (t1 - t0));
        return a.map((v, j) => Math.round(v + (b[j] - v) * k));
    };
    const claro = $('.is-claro', body);
    return [() => {
        const t = prefersReducedMotion ? 0 : clamp(m.scrollTop / Math.max(1, m.scrollHeight - m.clientHeight));
        // Desde las fotos de la botella (después de la ruta) hasta el final, la página pasa a blanco con curvas verdes
        // k: 0 = oscuro, 1 = blanco; el paso es gradual mientras la sección entra
        const k = claro ? clamp((m.clientHeight * 0.9 - claro.getBoundingClientRect().top) / (m.clientHeight * 0.5)) : 0;
        m.classList.toggle('is-luz', k > 0.55);
        const dark = mix(t), light = [244, 247, 242];
        const [r, g, bl] = dark.map((v, j) => Math.round(v + (light[j] - v) * k));
        m.style.setProperty('--tes-bg', `rgb(${r}, ${g}, ${bl})`);
        m.style.setProperty('--tes-t', t.toFixed(4));
    }];
}

/* Diseño final: lupa que sigue al mouse */
function setupGrabado(body) {
    const m = modal();
    return $$('[data-grabado]', body).map(fig => {
        const lupa = $('.gr-lupa', fig);
        if (window.matchMedia('(pointer: fine)').matches) {
            fig.addEventListener('pointermove', e => {
                const r = fig.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
                fig.style.setProperty('--lx', `${(x * 100).toFixed(2)}%`);
                fig.style.setProperty('--ly', `${(y * 100).toFixed(2)}%`);
                lupa.style.backgroundSize = `${r.width * 2.4}px auto`;
                lupa.style.backgroundPosition = `${(x * 100).toFixed(2)}% ${(y * 100).toFixed(2)}%`;
                fig.classList.add('is-lupa');
            });
            fig.addEventListener('pointerleave', () => fig.classList.remove('is-lupa'));
        }
        return () => {};
    });
}

/* Cifras que suben siguiendo el scroll */
/* Hábitats con scroll: la escena queda fija; al bajar cambia de hábitat y sus especies se encienden una a una */
function setupColeccion(body) {
    const sec = $('[data-coleccion]', body);
    if (!sec) return [];
    const m = modal();
    const items = $$('.col-item', sec);
    const stage = $('.col-stage', sec);
    items.forEach(it => {
        it.addEventListener('pointerenter', () => stage.classList.add('has-hot'));
        it.addEventListener('pointerleave', () => stage.classList.remove('has-hot'));
        it.addEventListener('focus', () => stage.classList.add('has-hot'));
        it.addEventListener('blur', () => stage.classList.remove('has-hot'));
    });
    const wide = window.matchMedia('(min-width: 761px)');
    return [() => {
        const vh = m.clientHeight;
        items.forEach((it, i) => {
            if (prefersReducedMotion) { it.style.setProperty('--e', 1); return; }
            const r = it.getBoundingClientRect();
            const raw = (vh * 0.98 - r.top) / (vh * 0.55);
            const e = clamp(wide.matches ? (raw - i * 0.16) / 0.68 : raw);
            it.style.setProperty('--e', e.toFixed(4));
            it.style.setProperty('--hop', (Math.abs(Math.sin(e * Math.PI * 3)) * (1 - e)).toFixed(4));
        });
    }];
}

function setupHabScroll(body) {
    const sec = $('[data-habscroll]', body);
    if (!sec) return [];
    const m = modal();
    const layers = $$('.hab-layer', sec), prints = $$('.hab-print', sec), steps = $$('.hab-progress span', sec);
    const wide = window.matchMedia('(min-width: 901px)');
    const n = layers.length;
    let cur = -1;
    const encender = (L, cuantos) => {
        $$('.hab-leyenda li', L).forEach((li, k) => li.classList.toggle('is-vis', k < cuantos));
        $$('.hab-pt', L).forEach((pt, k) => pt.classList.toggle('is-vis', k < cuantos));
    };
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !wide.matches) encender(e.target, 99); }), { root: m, threshold: 0.3 });
        layers.forEach(l => io.observe(l));
    }
    // al pasar el cursor por una especie de la leyenda, se marca su punto en la pantufla
    layers.forEach(L => $$('.hab-leyenda li', L).forEach(li => {
        const pt = $(`.hab-pt[data-k="${li.dataset.k}"]`, L);
        li.addEventListener('pointerenter', () => pt?.classList.add('is-hot'));
        li.addEventListener('pointerleave', () => pt?.classList.remove('is-hot'));
    }));
    return [() => {
        if (!wide.matches || prefersReducedMotion) { layers.forEach(l => { l.classList.add('is-on'); encender(l, 99); }); return; }
        const r = sec.getBoundingClientRect();
        const p = clamp(-r.top / Math.max(1, sec.offsetHeight - m.clientHeight));
        const f = Math.min(n - 0.0001, p * n), i = Math.floor(f), local = f - i;
        if (i !== cur) {
            cur = i;
            layers.forEach((l, j) => { l.classList.toggle('is-on', j === i); l.classList.toggle('is-antes', j < i); });
            prints.forEach((pr, j) => pr.classList.toggle('is-on', j === i));
            sec.style.setProperty('--hc', layers[i].dataset.color);
        }
        steps.forEach((st, j) => st.style.setProperty('--sp', j < i ? 1 : j > i ? 0 : local.toFixed(3)));
        sec.style.setProperty('--pp', p.toFixed(4));
        const L = layers[i];
        L.style.setProperty('--lp', local.toFixed(3));
        const total = $$('.hab-pt', L).length;
        encender(L, local > 0.08 ? Math.min(total, 1 + Math.floor(clamp((local - 0.08) / 0.6) * total)) : 0);
    }];
}

/* Especies (Hábitat): pestañas por hábitat; el fondo toma el color de cada uno */
function setupEspecies(body) {
    const sep = $$('[data-especie] .esp-panel', body);
    if (sep.length) {
        if (prefersReducedMotion || !('IntersectionObserver' in window)) sep.forEach(p => p.classList.add('is-on'));
        else {
            const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-on'); io.unobserve(e.target); } }), { root: modal(), threshold: 0.35 });
            sep.forEach(p => io.observe(p));
        }
    }
    $$('[data-especies]', body).forEach(sec => {
        const tabs = $$('.esp-tab', sec), panels = $$('.esp-panel', sec);
        const show = i => {
            tabs.forEach((t, j) => { t.classList.toggle('is-on', j === i); t.setAttribute('aria-selected', String(j === i)); });
            panels.forEach((pn, j) => pn.classList.toggle('is-on', j === i));
            sec.style.setProperty('--hc', panels[i].dataset.color);
        };
        tabs.forEach((t, i) => t.addEventListener('click', () => show(i)));
    });
    return [];
}

/* Bitácora (Ruta 7): las fotos flotan a distinta velocidad y una carretera las une */
function setupBitacora(body) {
    const sec = $('[data-bitacora]', body);
    if (!sec) return [];
    const m = modal();
    const svg = $('.bt-road', sec), asfalto = $('.bt-asfalto', sec), linea = $('.bt-linea', sec);
    const figs = $$('.bt-foto', sec);
    const build = () => {
        const b = sec.getBoundingClientRect();
        svg.setAttribute('viewBox', `0 0 ${b.width} ${b.height}`);
        const pts = figs.map(f => {
            const r = $('.bt-img', f).getBoundingClientRect();
            const ty = parseFloat(f.style.getPropertyValue('--ty')) || 0;
            return [r.left - b.left + r.width / 2, r.top - b.top - ty + r.height / 2];
        });
        if (pts.length < 2) return;
        pts.unshift([pts[0][0] - b.width * .2, 0]);
        const last = pts[pts.length - 1];
        pts.push([b.width * .5, b.height]);
        let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
        for (let i = 0; i < pts.length - 1; i++) {
            const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
            const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
            const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
            d += ` C ${c1[0].toFixed(1)} ${c1[1].toFixed(1)}, ${c2[0].toFixed(1)} ${c2[1].toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
        }
        asfalto.setAttribute('d', d); linea.setAttribute('d', d);
    };
    const update = () => {
        const b = sec.getBoundingClientRect(), vh = m.clientHeight;
        const p = prefersReducedMotion ? 1 : clamp((vh * .75 - b.top) / b.height);
        sec.style.setProperty('--road', p.toFixed(4));
        if (prefersReducedMotion) return;
        figs.forEach(f => {
            const r = f.getBoundingClientRect();
            const off = (r.top + r.height / 2 - vh / 2) * parseFloat(f.dataset.v || 0);
            f.style.setProperty('--ty', `${off.toFixed(1)}px`);
        });
    };
    $$('img', sec).forEach(im => { if (!im.complete) im.addEventListener('load', build, { once: true }); });
    window.addEventListener('resize', debounce(() => { build(); update(); }), { signal: modalAbort?.signal });
    requestAnimationFrame(() => { build(); update(); });
    return [update];
}

/* Planta: puntos que muestran cada zona al pasar el cursor o tocar */
function setupPlanta(body) {
    $$('[data-planta]', body).forEach(pl => {
        const sec = pl.closest('.case-planta');
        const data = JSON.parse($('.pl-data', sec).textContent);
        const dots = $$('.pl-dot', pl), items = $$('.pl-list li', sec);
        const card = $('.pl-card', pl);
        let cur = -1;
        const show = i => {
            if (i === cur) return;
            cur = i;
            dots.forEach((d, j) => { d.classList.toggle('is-on', j === i); d.setAttribute('aria-expanded', String(j === i)); });
            items.forEach((d, j) => d.classList.toggle('is-on', j === i));
            if (i < 0) { card.classList.remove('is-on'); return; }
            $('.pl-num', card).textContent = pad(i + 1);
            $('.pl-title', card).textContent = data[i].t;
            $('.pl-text', card).textContent = data[i].d;
            const d = dots[i];
            card.style.setProperty('--x', d.style.getPropertyValue('--x'));
            card.style.setProperty('--y', d.style.getPropertyValue('--y'));
            card.classList.toggle('is-left', parseFloat(d.style.getPropertyValue('--x')) > 55);
            card.classList.add('is-on');
        };
        dots.forEach((d, i) => {
            d.addEventListener('pointerenter', () => show(i));
            d.addEventListener('focus', () => show(i));
            d.addEventListener('click', () => show(i));
        });
        items.forEach((it, i) => it.addEventListener('pointerenter', () => show(i)));
        pl.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') show(-1); });
    });
    return [];
}

function setupCountScroll(body) {
    const m = modal();
    return $$('[data-count-scroll]', body).map(el => {
        const mm = el.dataset.countScroll.match(/^(\D*)([\d.,]+)(.*)$/);
        if (!mm) return () => {};
        const [, pre, digits, suf] = mm, target = parseInt(digits.replace(/[.,]/g, ''), 10);
        let last = -1;
        return () => {
            const vh = m.clientHeight, top = el.getBoundingClientRect().top;
            const k = prefersReducedMotion ? 1 : clamp((vh * 0.95 - top) / (vh * 0.5));
            const v = Math.round(target * (1 - Math.pow(1 - k, 3)));
            if (v === last) return;
            last = v;
            el.textContent = pre + v.toLocaleString('es-CL') + suf;
        };
    });
}

/* Frase final: las palabras se encienden a medida que se baja */
function setupWords(body) {
    const m = modal();
    return $$('[data-words]', body).map(sc => {
        const w = $$('.sc-quote span', sc);
        const logo = !!$('.sc-logo', sc);
        return () => {
            const r = sc.getBoundingClientRect();
            const t = prefersReducedMotion ? 1 : clamp((-r.top + m.clientHeight * 0.3) / (sc.offsetHeight - m.clientHeight * 0.7));
            // Con logo: la frase se enciende en la primera mitad y al final aparece muma
            const span = logo ? 0.55 : 0.9;
            w.forEach((el, i) => el.classList.toggle('is-lit', i / w.length < t / span));
            if (logo) sc.classList.toggle('is-logo', t > 0.74);
        };
    });
}

/* Portada con fotografía (Tesoros): la imagen se acerca al abrir y se desplaza más lento al bajar */
function fotoHero(p) {
    const words = esc(p.titulo || p.nombre).split(' ').map((w, i) => `<span class="mh-w" style="--i:${i}"><span>${w}</span></span>`).join(' ');
    return `
        <section class="foto-hero" data-exit>
            <div class="fh-img"><img src="${esc(p.portadaFoto)}" alt="" draggable="false">${p.portadaAgua ? `<img class="fh-water" src="${esc(p.portadaFoto)}" alt="" draggable="false" style="--mask:url('${esc(p.portadaAgua)}')">` : ''}</div>
            <div class="fh-shade" aria-hidden="true"></div>
            ${p.intro === 'pausa' ? `<div class="ph-breath" aria-hidden="true"><span class="ph-ring"></span><span class="ph-ring ph-ring-2"></span><span class="ph-word ph-in">inhala</span><span class="ph-word ph-out">exhala</span></div>` : ''}
            ${p.portadaCredito ? `<span class="fh-credit">${esc(p.portadaCredito)}</span>` : ''}
            ${p.portadaAgua ? `<svg class="fh-defs" width="0" height="0" aria-hidden="true" focusable="false"><filter id="fh-ondas" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.006 0.045" numOctaves="2" seed="3" result="n"><animate attributeName="baseFrequency" dur="14s" values="0.006 0.045;0.008 0.06;0.006 0.045" repeatCount="indefinite"/></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="9" xChannelSelector="R" yChannelSelector="G"/></filter></svg>` : ''}
            <div class="fh-content">
                <p class="fh-kicker">${esc(p.kicker || p.cliente)}</p>
                <h1 class="fh-title">${words}</h1>
                ${p.manifiesto ? `<p class="fh-sub">${esc(p.manifiesto)}</p>` : ''}
            </div>
            ${p.portadaLugar ? `<p class="fh-coords"><b>${esc(p.portadaLugar[0])}</b>${esc(p.portadaLugar[1])}</p>` : ''}
            <div class="mh-meta">
                <div><span>Año</span>${esc(p.year)}</div>
                <div><span>Servicios</span>${esc(p.servicios)}</div>
                <div><span>Categoría</span>${esc(p.categoria)}</div>
            </div>
        </section>`;
}
/* Exploraciones visuales: portada con las láminas repartidas como cartas alrededor del título */
function collageHero(p) {
    const tit = esc(p.titulo).split(' ');
    return `
        <section class="cl-hero" data-exit data-clhero>
            <div class="cl-cartas">
                ${p.collage.map((c, i) => `<figure class="cl-carta" style="--x:${c.x}%;--y:${c.y}%;--w:${c.w}vw;--r:${c.r}deg;--d:${c.d};--k:${i}${c.ar ? `;--ar:${c.ar}` : ''}"><img src="${esc(c.src)}" alt="" draggable="false"></figure>`).join('')}
            </div>
            <div class="cl-txt">
                <p class="cl-kicker">${esc(p.kicker)} · ${esc(p.year)}</p>
                <h1 class="cl-title">${tit.map((w, i) => `<span class="mh-w" style="--i:${i}"><span>${i ? `<em>${w}</em>` : w}</span></span>`).join(' ')}</h1>
                ${p.manifiesto ? `<p class="cl-sub">${esc(p.manifiesto)}</p>` : ''}
            </div>
            <div class="mh-meta">
                <div><span>Año</span>${esc(p.year)}</div>
                <div><span>Servicios</span>${esc(p.servicios)}</div>
                <div><span>Categoría</span>${esc(p.categoria)}</div>
            </div>
        </section>`;
}
function setupCollage(body) {
    const h = $('[data-clhero]', body);
    if (!h) return [];
    if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
        h.addEventListener('pointermove', e => {
            const r = h.getBoundingClientRect();
            h.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3));
            h.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3));
        });
        h.addEventListener('pointerleave', () => { h.style.setProperty('--mx', 0); h.style.setProperty('--my', 0); });
    }
    return [() => { const r = h.getBoundingClientRect(); h.style.setProperty('--q', prefersReducedMotion ? 0 : clamp(-r.top / r.height).toFixed(3)); }];
}

/* Ilani: mazo de fotos que se baraja al elegir una tela */
function setupIlani(body) {
    $$('[data-ilani]', body).forEach(sec => {
        const btns = $$('.il2-tela', sec), cartas = $$('.il2-carta', sec), mazo = $('.il2-mazo', sec);
        let orden = cartas.map((_, i) => i), timer = null, visible = false, pausa = false;
        const pintar = () => orden.forEach((c, pos) => {
            cartas[c].style.setProperty('--pos', pos);
            cartas[c].setAttribute('aria-hidden', pos !== 0);
        });
        const ir = i => {
            if (orden[0] === i) return;
            const viejo = cartas[orden[0]];
            viejo.classList.remove('is-sale'); void viejo.offsetWidth; viejo.classList.add('is-sale');
            orden = [i, ...orden.filter(c => c !== i)];
            const nueva = cartas[i];
            nueva.classList.remove('is-entra'); void nueva.offsetWidth; nueva.classList.add('is-entra');
            pintar();
            btns.forEach((b, k) => { b.classList.toggle('is-on', k === i); b.setAttribute('aria-selected', k === i); });
        };
        const sig = () => ir((orden[0] + 1) % cartas.length);
        const correr = () => {
            clearInterval(timer); timer = null;
            if (visible && !pausa && !prefersReducedMotion) timer = setInterval(sig, 3600);
        };
        btns.forEach((b, k) => b.addEventListener('click', () => { ir(k); pausa = true; correr(); }));
        mazo.addEventListener('click', e => { if (e.target.closest('[data-lightbox]')) return; sig(); pausa = true; correr(); });
        sec.addEventListener('mouseleave', () => { pausa = false; correr(); });
        new IntersectionObserver(([e]) => { visible = e.isIntersecting; correr(); }, { threshold: .2 }).observe(sec);
        pintar();
    });
    return [];
}

/* filtro de agua: la acuarela se ondula al pasar el cursor */
const AGUA_SVG = '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><filter id="ex-agua" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.01 0.028" numOctaves="2" seed="5"><animate attributeName="baseFrequency" dur="8s" values="0.01 0.028;0.014 0.038;0.01 0.028" repeatCount="indefinite"/></feTurbulence><feDisplacementMap in="SourceGraphic" scale="12" xChannelSelector="R" yChannelSelector="G"/></filter></svg>';
/* inclinación 3D suave al pasar el cursor (galerías con efecto 'tilt') */
function setupTilt(body) {
    if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return [];
    $$('.efecto-tilt .kippa-duo-frame', body).forEach(f => {
        f.addEventListener('pointermove', e => {
            const r = f.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
            f.style.setProperty('--tx', (x * 10).toFixed(2) + 'deg'); f.style.setProperty('--ty', (y * -10).toFixed(2) + 'deg');
            f.style.setProperty('--gx', ((x + .5) * 100).toFixed(1) + '%'); f.style.setProperty('--gy', ((y + .5) * 100).toFixed(1) + '%');
        });
        f.addEventListener('pointerleave', () => { f.style.setProperty('--tx', '0deg'); f.style.setProperty('--ty', '0deg'); });
    });
    return [];
}

/* Exploraciones visuales: portada tipo cuaderno, con ilustraciones que flotan y se pueden arrastrar */
function cuadernoHero(p) {
    return `
        <section class="cq-hero" data-exit data-cqhero>
            <div class="cq-figs" data-arrastre>
                ${p.figuras.map((f, i) => `<img class="cq-fig cq-drag" src="${esc(f.src)}" alt="" draggable="false" style="--x:${f.x}%;--y:${f.y}%;--w:${f.w}vw;--r:${f.r}deg;--d:${f.d};--k:${i}">`).join('')}
            </div>
            <div class="cq-txt">
                <p class="cq-kicker">${esc(p.kicker)} · ${esc(p.year)}</p>
                <h1 class="cq-title"><span class="cq-t1">Exploraciones</span><span class="cq-t2">visuales</span></h1>
                <svg class="cq-trazo" viewBox="0 0 400 30" preserveAspectRatio="none" aria-hidden="true"><path d="M4 18 C 80 4, 160 26, 240 12 S 360 8, 396 16"/></svg>
                <p class="cq-sub">${esc(p.manifiesto)}</p>
            </div>
            <p class="cq-pista" aria-hidden="true">psst… puedes moverlas ↺</p>
            <div class="mh-meta">
                <div><span>Año</span>${esc(p.year)}</div>
                <div><span>Servicios</span>${esc(p.servicios)}</div>
                <div><span>Categoría</span>${esc(p.categoria)}</div>
            </div>
        </section>`;
}
/* arrastrar ilustraciones (portada y mesa de trabajo) */
function hacerArrastrable(zona) {
    let top = 10;
    $$('.cq-drag', zona).forEach(el => {
        let sx = 0, sy = 0, ox = 0, oy = 0, on = false;
        el.style.setProperty('--dx', '0px'); el.style.setProperty('--dy', '0px');
        el.addEventListener('pointerdown', e => {
            on = true; el.setPointerCapture(e.pointerId); sx = e.clientX; sy = e.clientY;
            ox = parseFloat(el.style.getPropertyValue('--dx')) || 0; oy = parseFloat(el.style.getPropertyValue('--dy')) || 0;
            el.classList.add('is-drag'); el.style.zIndex = ++top; zona.classList.add('is-tocada');
            e.preventDefault();
        });
        el.addEventListener('pointermove', e => {
            if (!on) return;
            el.style.setProperty('--dx', `${ox + e.clientX - sx}px`); el.style.setProperty('--dy', `${oy + e.clientY - sy}px`);
        });
        const fin = () => { on = false; el.classList.remove('is-drag'); };
        el.addEventListener('pointerup', fin); el.addEventListener('pointercancel', fin);
    });
}
function setupCuaderno(body) {
    const hero = $('[data-cqhero]', body);
    const ups = [];
    $$('[data-arrastre]', body).forEach(hacerArrastrable);
    if (hero) {
        if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
            hero.addEventListener('pointermove', e => {
                const r = hero.getBoundingClientRect();
                hero.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3));
                hero.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3));
            });
        }
        ups.push(() => { const r = hero.getBoundingClientRect(); hero.style.setProperty('--q', prefersReducedMotion ? 0 : clamp(-r.top / r.height).toFixed(3)); });
    }
    // mesa: ordenar / desordenar
    $$('[data-mesa]', body).forEach(mesa => {
        const btn = $('[data-ordenar]', mesa), zona = $('.cq-mesa-zona', mesa);
        btn?.addEventListener('click', () => {
            const orden = zona.classList.toggle('is-orden');
            $$('.cq-drag', zona).forEach(el => { el.style.setProperty('--dx', '0px'); el.style.setProperty('--dy', '0px'); });
            btn.textContent = orden ? 'desordenar' : 'ordenar la mesa';
        });
    });
    // regalos: mazo de cartas
    $$('[data-mazo]', body).forEach(mazo => {
        const cartas = $$('.cq-carta', mazo), n = cartas.length, cnt = $('.cq-mazo-n b', mazo), nom = $('.cq-mazo-nombre', mazo);
        let orden = cartas.map((_, i) => i), ocupado = false;
        const pintar = () => {
            orden.forEach((c, pos) => { cartas[c].style.setProperty('--pos', pos); cartas[c].style.zIndex = n - pos; cartas[c].setAttribute('aria-hidden', String(pos !== 0)); });
            if (cnt) cnt.textContent = pad(orden[0] + 1);
            if (nom) nom.textContent = cartas[orden[0]].dataset.nombre;
        };
        const sig = () => {
            if (ocupado) return; ocupado = true;
            const c = cartas[orden[0]];
            c.classList.add('is-sale');
            setTimeout(() => { orden.push(orden.shift()); c.classList.remove('is-sale'); pintar(); ocupado = false; }, prefersReducedMotion ? 0 : 420);
        };
        $('.cq-mazo-cartas', mazo).addEventListener('click', sig);
        $('.cq-mazo-cartas', mazo).addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sig(); } });
        $('[data-sig]', mazo)?.addEventListener('click', sig);
        pintar();
    });
    // reveal suave
    const m = modal();
    const els = $$('[data-cq]', body);
    if (!('IntersectionObserver' in window) || prefersReducedMotion) els.forEach(e => e.classList.add('is-in'));
    else {
        const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { root: m, threshold: .2 });
        els.forEach(e => io.observe(e));
    }
    return ups;
}

/* Variación Textil: portada a pantalla completa con título centrado (estilo portafolio de fotografía) */
function vtHero(p) {
    return `
        <section class="vt-hero" data-exit data-vthero>
            <div class="vt-hero-img"><img src="${esc(p.portadaFoto)}" alt="" draggable="false"></div>
            <div class="vt-hero-txt">
                <p class="vt-mono">${esc(p.kicker)}</p>
                <h1 class="vt-h1">${esc(p.titulo)}</h1>
                <p class="vt-mono vt-mono-lg">${esc(p.manifiesto)}</p>
            </div>
            <a class="vt-scroll vt-mono" href="#vt-01" data-vtscroll>Ver proyecto ↓</a>
        </section>`;
}
function setupVt(body) {
    const hero = $('[data-vthero]', body);
    if (!hero) return [];
    const m = modal();
    $('[data-vtscroll]', hero)?.addEventListener('click', e => { e.preventDefault(); const t = $('#vt-01', body); if (t) m.scrollTo({ top: t.getBoundingClientRect().top + m.scrollTop - 40, behavior: prefersReducedMotion ? 'auto' : 'smooth' }); });
    const els = $$('[data-vt]', body);
    if (!('IntersectionObserver' in window) || prefersReducedMotion) els.forEach(e => e.classList.add('is-in'));
    else {
        const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { root: m, threshold: 0.12 });
        els.forEach(e => io.observe(e));
    }
    return [() => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty('--q', prefersReducedMotion ? 0 : clamp(-r.top / r.height).toFixed(3));
    }];
}

/* Portada estilo revista de moda: cabecera "Variación Textil", número y foto de portada */
function revistaHero(p) {
    const cab = 'Variación Textil'.split('').map((c, i) => c === ' ' ? '<span class="rv-sp"> </span>' : `<span style="--i:${i}">${c}</span>`).join('');
    const tit = esc(p.titulo).split(' ');
    return `
        <section class="rv-cover" data-exit data-rvcover>
            <div class="rv-top">
                <span>Edición ${esc(p.year)}</span>
                <span>${esc(p.categoria)}</span>
            </div>
            <p class="rv-cabecera" aria-label="Variación Textil">${cab}</p>
            <div class="rv-cover-body">
                <div class="rv-lines">
                    <p class="rv-kicker">En esta edición</p>
                    <h1 class="rv-title">${tit.map((w, i) => `<span class="mh-w" style="--i:${i}"><span>${i === tit.length - 1 ? `<em>${w}</em>` : w}</span></span>`).join(' ')}</h1>
                    <p class="rv-sub">${esc(p.manifiesto)}</p>
                    <ol class="rv-index">${(p.secciones || p.etiquetas).map((t, i) => `<li style="--i:${i}"><span>${['I', 'II', 'III', 'IV'][i]}</span>${esc(t)}</li>`).join('')}</ol>
                </div>
                <figure class="rv-cover-foto${p.portadaBn ? ' is-bn' : ''}"><img src="${esc(p.portadaFoto)}" alt="${esc(p.titulo)}" draggable="false"></figure>
            </div>
            <div class="rv-foot">
                <span>${esc(p.servicios)}</span>
                <span>${esc(p.cliente)}</span>
            </div>
        </section>`;
}
function setupRevista(body) {
    const els = $$('[data-rv]', body);
    const cover = $('[data-rvcover]', body);
    if (!els.length && !cover) return [];
    const m = modal();
    if (!('IntersectionObserver' in window) || prefersReducedMotion) els.forEach(e => e.classList.add('is-in'));
    else {
        const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { root: m, threshold: 0.2 });
        els.forEach(e => io.observe(e));
    }
    const par = $$('.rv-par', body);
    return [() => {
        const vh = m.clientHeight;
        if (cover) { const r = cover.getBoundingClientRect(); cover.style.setProperty('--q', prefersReducedMotion ? 0 : clamp(-r.top / (r.height * .9)).toFixed(3)); }
        if (prefersReducedMotion) return;
        par.forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.bottom < -50 || r.top > vh + 50) return;
            el.style.setProperty('--py', (((r.top + r.height / 2) - vh / 2) / vh * -40).toFixed(2) + 'px');
        });
    }];
}

/* Portada Aplicaciones en textil: el print de fondo, una ficha crema y la foto de la prenda */
function telaHero(p) {
    const words = esc(p.titulo || p.nombre).split(' ').map((w, i) => `<span class="mh-w" style="--i:${i}"><span>${w}</span></span>`).join(' ');
    return `
        <section class="tl-hero" data-exit data-tlhero>
            <div class="tl-bg" aria-hidden="true"><img src="${esc(p.portada)}" alt="" draggable="false"></div>
            <div class="tl-card">
                <p class="fh-kicker">${esc(p.cliente)}</p>
                <h1 class="fh-title tl-title">${words}</h1>
                <ul class="tl-tecnicas">${p.etiquetas.map((t, i) => `<li style="--i:${i}">${esc(t)}</li>`).join('')}</ul>
            </div>
            <figure class="tl-foto"><img src="${esc(p.portadaFoto)}" alt="Prenda con estampado y tintura" draggable="false"></figure>
            <div class="mh-meta">
                <div><span>Año</span>${esc(p.year)}</div>
                <div><span>Servicios</span>${esc(p.servicios)}</div>
                <div><span>Categoría</span>${esc(p.categoria)}</div>
            </div>
        </section>`;
}

/* Portada Re-confección: título con costura que se cose sola y una huincha de medir */
function sastreHero(p) {
    const cm = Array.from({ length: 31 }, (_, i) => `<span style="--i:${i}">${i * 5}</span>`).join('');
    return `
        <section class="ss-hero" data-exit data-sshero>
            <figure class="ss-foto"><img src="${esc(p.portadaFoto)}" alt="Los dos looks re-confeccionados" draggable="false"></figure>
            <div class="ss-content">
                <p class="fh-kicker">${esc(p.cliente)}</p>
                <h1 class="ss-title"><span class="mh-w" style="--i:0"><span>Re—</span></span><br><span class="mh-w" style="--i:1"><span>confección</span></span></h1>
                <svg class="ss-costura" viewBox="0 0 600 20" preserveAspectRatio="none" aria-hidden="true"><path d="M0 10 C150 2 300 18 450 8 S560 12 600 10"/></svg>
                <p class="fh-sub">${esc(p.manifiesto)}</p>
            </div>
            <div class="ss-huincha" aria-hidden="true"><div class="ss-huincha-track">${cm}</div></div>
            <div class="mh-meta">
                <div><span>Año</span>${esc(p.year)}</div>
                <div><span>Servicios</span>${esc(p.servicios)}</div>
                <div><span>Categoría</span>${esc(p.categoria)}</div>
            </div>
        </section>`;
}
function setupTextilHeroes(body) {
    const h = $('[data-tlhero], [data-sshero]', body);
    if (!h) return [];
    return [() => {
        const r = h.getBoundingClientRect();
        h.style.setProperty('--q', prefersReducedMotion ? 0 : clamp(-r.top / (r.height * 0.9)).toFixed(3));
    }];
}

/* Taller: tela interactiva para probar estampado, tintura y aplicación botánica */
function setupTaller(body) {
    const sec = $('[data-taller]', body);
    if (!sec) return [];
    const cv = $('canvas', sec), ctx = cv.getContext('2d');
    const btns = $$('[data-tec]', sec), desc = $('.tt-desc', sec);
    let tool = 'estampado', W = 0, H = 0, dpr = 1, down = false, lx = 0, ly = 0, blooms = [], raf = 0;
    const rnd = (a, b) => a + Math.random() * (b - a);
    const fondo = () => {
        ctx.save(); ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = '#f4ede1'; ctx.fillRect(0, 0, W, H);
        // trama del tejido
        ctx.globalAlpha = .05; ctx.strokeStyle = '#6b5a45'; ctx.lineWidth = 1;
        for (let y = 0; y < H; y += 3) { ctx.beginPath(); ctx.moveTo(0, y + rnd(-.4, .4)); ctx.lineTo(W, y + rnd(-.4, .4)); ctx.stroke(); }
        ctx.globalAlpha = .035;
        for (let x = 0; x < W; x += 3) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + rnd(-.6, .6), H); ctx.stroke(); }
        ctx.restore();
    };
    const size = () => {
        const r = cv.getBoundingClientRect(); dpr = Math.min(2, window.devicePixelRatio || 1);
        W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); fondo(); semilla();
    };
    const sello = (x, y) => {
        const R = rnd(17, 23), rot = rnd(0, Math.PI);
        ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.globalCompositeOperation = 'multiply';
        ctx.fillStyle = ctx.strokeStyle = '#3f55a5'; ctx.globalAlpha = rnd(.7, .9);
        ctx.lineWidth = 3.2; ctx.beginPath(); ctx.arc(0, 0, R, 0, 6.283); ctx.stroke();
        for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; ctx.beginPath(); ctx.ellipse(Math.cos(a) * R * .58, Math.sin(a) * R * .58, R * .2, R * .1, a, 0, 6.283); ctx.fill(); }
        ctx.beginPath(); ctx.arc(0, 0, R * .18, 0, 6.283); ctx.fill();
        // tinta irregular: pequeñas faltas
        ctx.globalCompositeOperation = 'destination-out'; ctx.globalAlpha = .5;
        for (let i = 0; i < 9; i++) { ctx.beginPath(); ctx.arc(rnd(-R, R), rnd(-R, R), rnd(.6, 2), 0, 6.283); ctx.fill(); }
        ctx.restore();
        // restaurar el fondo bajo las faltas
        ctx.save(); ctx.globalCompositeOperation = 'destination-over'; ctx.fillStyle = '#f4ede1'; ctx.fillRect(x - 30, y - 30, 60, 60); ctx.restore();
    };
    const hoja = (x, y) => {
        const L = rnd(28, 52), rot = rnd(0, 6.283), flor = Math.random() < .25;
        ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.globalCompositeOperation = 'multiply';
        if (flor) {
            ctx.fillStyle = '#b4572e'; ctx.globalAlpha = .45;
            for (let i = 0; i < 5; i++) { ctx.rotate(1.2566); ctx.beginPath(); ctx.ellipse(0, -L * .28, L * .14, L * .26, 0, 0, 6.283); ctx.fill(); }
            ctx.globalAlpha = .7; ctx.fillStyle = '#7a3a1c'; ctx.beginPath(); ctx.arc(0, 0, L * .08, 0, 6.283); ctx.fill();
        } else {
            ctx.fillStyle = '#6f7032'; ctx.globalAlpha = rnd(.35, .55);
            ctx.beginPath(); ctx.moveTo(0, -L); ctx.bezierCurveTo(L * .5, -L * .5, L * .45, L * .4, 0, L * .6); ctx.bezierCurveTo(-L * .45, L * .4, -L * .5, -L * .5, 0, -L); ctx.fill();
            ctx.strokeStyle = '#4b4b1e'; ctx.globalAlpha = .5; ctx.lineWidth = 1.1;
            ctx.beginPath(); ctx.moveTo(0, -L * .9); ctx.lineTo(0, L * .9); ctx.stroke();
            for (let i = -3; i <= 3; i++) { const yy = i * L * .2; ctx.beginPath(); ctx.moveTo(0, yy); ctx.lineTo(L * .3, yy - L * .16); ctx.moveTo(0, yy); ctx.lineTo(-L * .3, yy - L * .16); ctx.stroke(); }
        }
        ctx.restore();
    };
    const tinta = (x, y) => { blooms.push({ x, y, R: rnd(50, 110), t: 0, c: Math.random() < .5 ? '201,98,45' : '226,150,60' }); if (!raf) raf = requestAnimationFrame(tick); };
    const tick = () => {
        ctx.save(); ctx.globalCompositeOperation = 'multiply';
        blooms.forEach(b => {
            b.t += .035; const r = b.R * (1 - Math.pow(1 - Math.min(1, b.t), 3));
            const g = ctx.createRadialGradient(b.x, b.y, r * .1, b.x, b.y, Math.max(1, r));
            g.addColorStop(0, `rgba(${b.c},.07)`); g.addColorStop(.85, `rgba(${b.c},.05)`); g.addColorStop(1, `rgba(${b.c},0)`);
            ctx.fillStyle = g; ctx.beginPath(); ctx.arc(b.x, b.y, r, 0, 6.283); ctx.fill();
        });
        ctx.restore();
        blooms = blooms.filter(b => b.t < 1);
        raf = blooms.length ? requestAnimationFrame(tick) : 0;
    };
    const aplicar = (x, y) => tool === 'estampado' ? sello(x, y) : tool === 'tintura' ? tinta(x, y) : hoja(x, y);
    const paso = () => tool === 'estampado' ? 54 : tool === 'tintura' ? 38 : 46;
    // una muestra inicial para que la tela no parta vacía
    const semilla = () => {
        for (let i = 0; i < 5; i++) sello(W * (.12 + i * .08), H * (.25 + (i % 2) * .1));
        for (let i = 0; i < 4; i++) hoja(W * (.78 + rnd(-.08, .08)), H * (.6 + rnd(-.15, .15)));
    };
    const pos = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    cv.addEventListener('pointerdown', e => { down = true; cv.setPointerCapture(e.pointerId); [lx, ly] = pos(e); aplicar(lx, ly); sec.classList.add('is-usado'); });
    cv.addEventListener('pointermove', e => {
        if (!down) return; const [x, y] = pos(e); const d = Math.hypot(x - lx, y - ly);
        if (d >= paso()) { aplicar(x, y); lx = x; ly = y; }
    });
    const up = () => { down = false; };
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    btns.forEach(b => b.addEventListener('click', () => {
        if (b.dataset.tec === 'limpiar') { blooms = []; fondo(); return; }
        tool = b.dataset.tec;
        btns.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
        desc.textContent = b.dataset.desc;
        sec.dataset.tool = tool;
    }));
    size();
    let rw = W;
    window.addEventListener('resize', () => { const r = cv.getBoundingClientRect(); if (Math.abs(r.width - rw) > 40) { rw = r.width; size(); } });
    return [];
}

/* Lookbook: fotos en grilla libre con parallax suave */
function setupLookbook(body) {
    const items = $$('[data-lookbook] .lb-item', body);
    if (!items.length || prefersReducedMotion) return [];
    const m = modal();
    return [() => {
        const vh = m.clientHeight;
        items.forEach(it => {
            const r = it.getBoundingClientRect();
            if (r.bottom < -100 || r.top > vh + 100) return;
            const c = (r.top + r.height / 2 - vh / 2) / vh;
            it.style.setProperty('--py', (c * -100 * (+it.dataset.v || .1)).toFixed(2) + 'px');
            it.style.setProperty('--e', clamp((vh - r.top) / (vh * .45)).toFixed(3));
        });
    }];
}

/* Looks: la costura del marco se cose al bajar */
function setupLooks(body) {
    const looks = $$('[data-looks] .lk-item', body);
    if (!looks.length) return [];
    const m = modal();
    return [() => {
        const vh = m.clientHeight;
        looks.forEach((l, i) => {
            const r = l.getBoundingClientRect();
            const e = prefersReducedMotion ? 1 : clamp((vh * .95 - r.top) / (vh * .7) - i * .08);
            l.style.setProperty('--e', e.toFixed(4));
        });
    }];
}

/* Figuras de la marca YUNUS (redibujadas como SVG) */
const YU_SHAPES = {
    ast: '<g><rect x="43" y="4" width="14" height="92" rx="2"/><rect x="43" y="4" width="14" height="92" rx="2" transform="rotate(60 50 50)"/><rect x="43" y="4" width="14" height="92" rx="2" transform="rotate(120 50 50)"/></g>',
    ring: '<path fill-rule="evenodd" d="M50 8a42 42 0 1 1 0 84a42 42 0 1 1 0-84zm0 24a18 18 0 1 0 0 36a18 18 0 1 0 0-36z"/>',
    duo: '<circle cx="36" cy="60" r="30"/><circle cx="64" cy="40" r="30"/>',
    ele: '<path d="M8 50h38V10h46v80H8z"/>',
    hex: '<path fill-rule="evenodd" d="M30 8h40l24 30-10 44-34 12-36-20L6 36zM38 38v24h24V38z"/>'
};
const yuSvg = k => `<svg viewBox="0 0 100 100" aria-hidden="true">${YU_SHAPES[k]}</svg>`;
function yunusHero(p) {
    const words = esc(p.titulo || p.nombre).split(' ').map((w, i) => `<span class="mh-w" style="--i:${i}"><span>${w}</span></span>`).join(' ');
    // [figura, x%, y%, tamaño, color, giro, profundidad]
    const figs = [
        ['ast', 6, 14, 7, 'lima', 10, 1.2], ['ring', 40, 8, 5, 'blanco', 0, .6], ['duo', 49, 62, 6, 'lima', -20, 1],
        ['ele', 20, 22, 4.4, 'tinta', 15, .7], ['hex', 30, 40, 4, 'blanco', 25, 1.4], ['ast', 56, 24, 3.4, 'tinta', 40, .5],
        ['ring', 95, 60, 5, 'lima', 0, 1.1], ['hex', 88, 10, 4.5, 'lima', -15, .8], ['duo', 8, 36, 3.6, 'blanco', 30, 1.3],
        ['ele', 70, 4, 3.4, 'lima', -35, .9]
    ];
    return `
        <section class="yu-hero" data-exit data-yuhero>
            <div class="yu-shapes" aria-hidden="true">
                ${figs.map(([k, x, y, t, c, r, d], i) => `<span class="yu-s yu-${c}" style="--x:${x}%;--y:${y}%;--t:${t}vw;--r:${r}deg;--d:${d};--k:${i}"><span class="yu-s-in">${yuSvg(k)}</span></span>`).join('')}
            </div>
            <figure class="yu-casa">
                <img src="${esc(p.portadaFoto)}" alt="Render del módulo de trabajo" draggable="false">
            </figure>
            <div class="yu-content">
                <p class="fh-kicker">${esc(p.cliente)}</p>
                <h1 class="fh-title">${words}</h1>
                ${p.manifiesto ? `<p class="fh-sub">${esc(p.manifiesto)}</p>` : ''}
            </div>
            <div class="mh-meta">
                <div><span>Año</span>${esc(p.year)}</div>
                <div><span>Servicios</span>${esc(p.servicios)}</div>
                <div><span>Categoría</span>${esc(p.categoria)}</div>
            </div>
        </section>`;
}
function setupYunusHero(body) {
    const h = $('[data-yuhero]', body);
    if (!h) return [];
    if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
        h.addEventListener('pointermove', e => {
            const r = h.getBoundingClientRect();
            h.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
            h.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
        });
    }
    return [() => {
        const r = h.getBoundingClientRect();
        h.style.setProperty('--q', prefersReducedMotion ? 0 : clamp(-r.top / (r.height * 0.9)).toFixed(3));
    }];
}

/* Del ruido a la calma: figuras que se agitan y luego se ordenan al bajar */
function setupCalma(body) {
    const sec = $('[data-calma]', body);
    if (!sec) return [];
    const m = modal();
    const stage = $('.yc-stage', sec), field = $('.yc-field', sec), figs = $$('.yc-f', sec);
    const steps = $$('.yc-step', sec), wave = $('.yc-wave path', sec), bar = $('.yc-meter em', sec);
    const rnd = (a, b) => a + Math.random() * (b - a);
    const cols = 6;
    const data = figs.map((f, i) => ({
        f, cx: rnd(4, 92), cy: rnd(6, 88), cr: rnd(-180, 180), cs: rnd(.55, 1.45),
        ox: 18 + (i % cols) * 13.5, oy: 24 + Math.floor(i / cols) * 17,
        ph: rnd(0, 6.28), fr: rnd(5, 11), sp: rnd(-120, 120)
    }));
    let calm = prefersReducedMotion ? 1 : 0, visible = false, raf = 0, t0 = performance.now();
    const ease = x => x * x * (3 - 2 * x);
    const mix = (a, b, k) => a.map((v, i) => Math.round(v + (b[i] - v) * k));
    const busy = [222, 240, 112], quiet = [238, 245, 239];
    const draw = now => {
        const t = (now - t0) / 1000, n = 1 - calm;
        data.forEach(d => {
            const jx = Math.sin(t * d.fr + d.ph) * 22 * n, jy = Math.cos(t * d.fr * 1.3 + d.ph) * 22 * n;
            const x = d.cx + (d.ox - d.cx) * calm, y = d.cy + (d.oy - d.cy) * calm;
            const r = (d.cr + d.sp * t) * n, s = d.cs + (1 - d.cs) * calm;
            d.f.style.transform = `translate(calc(${x.toFixed(2)}cqw - 50%), calc(${y.toFixed(2)}cqh - 50%)) translate(${jx.toFixed(1)}px, ${jy.toFixed(1)}px) rotate(${r.toFixed(1)}deg) scale(${s.toFixed(3)})`;
        });
        if (wave) {
            let dd = 'M0 50';
            for (let x = 0; x <= 1000; x += 10) {
                const y = 50 + Math.sin(x * .03 + t * 9) * 34 * n * Math.sin(x * .004 + t) + Math.sin(x * .011 - t * 2) * (3 + 10 * n);
                dd += ` L${x} ${y.toFixed(1)}`;
            }
            wave.setAttribute('d', dd);
        }
        stage.style.backgroundColor = `rgb(${mix(busy, quiet, calm).join(',')})`;
        if (bar) bar.style.width = `${(n * 100).toFixed(1)}%`;
        raf = visible && !prefersReducedMotion ? requestAnimationFrame(draw) : 0;
    };
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(es => es.forEach(e => {
            visible = e.isIntersecting;
            if (visible && !raf) raf = requestAnimationFrame(draw);
        }), { root: m }).observe(sec);
    }
    draw(performance.now());
    return [() => {
        const r = sec.getBoundingClientRect();
        const p = clamp(-r.top / Math.max(1, sec.offsetHeight - m.clientHeight));
        if (!prefersReducedMotion) calm = ease(clamp((p - 0.12) / 0.7));
        const i = Math.min(steps.length - 1, Math.floor(p * steps.length * 0.999));
        steps.forEach((s, k) => s.classList.toggle('is-on', k === i));
        sec.style.setProperty('--p', p.toFixed(3));
        if (prefersReducedMotion) draw(performance.now());
    }];
}

/* Mobiliario modular: la fila de módulos se revela de izquierda a derecha */
function setupFirma(body) {
    const sec = $('[data-firma]', body);
    if (!sec) return [];
    const m = modal();
    // al bajar, una casa verde (la forma de YUNUS) crece hasta llenar la pantalla y después caen los logos
    return [() => {
        if (prefersReducedMotion) { sec.style.setProperty('--g', 1); sec.classList.add('is-in'); return; }
        const r = sec.getBoundingClientRect(), vh = m.clientHeight;
        const g = clamp((vh - r.top) / (vh * 0.95));
        sec.style.setProperty('--g', g.toFixed(4));
        sec.classList.toggle('is-in', g > 0.72);
    }];
}

function setupSerie(body) {
    const sec = $('[data-serie]', body);
    if (!sec) return [];
    const m = modal(), fig = $('.ys-fig', sec);
    return [() => {
        const r = fig.getBoundingClientRect(), vh = m.clientHeight;
        const e = prefersReducedMotion ? 1 : clamp((vh * 0.92 - r.top) / (vh * 0.6));
        fig.style.setProperty('--e', e.toFixed(4));
    }];
}

/* Portada Hábitat: tres paneles (bosque, cordillera, mar); el que se señala se abre y muestra su pantufla */
function habitatHero(p) {
    const words = esc(p.titulo || p.nombre).split(' ').map((w, i) => `<span class="mh-w" style="--i:${i}"><span>${w}</span></span>`).join(' ');
    return `
        <section class="hab-hero" data-exit>
            <div class="hab-panels">
                ${p.habitats.map((h, i) => `
                <div class="hab-panel" style="--c:${esc(h.color)};--k:${i}" tabindex="0">
                    <img class="hab-foto" src="${esc(h.foto)}" alt="" draggable="false">
                    <span class="hab-tint" aria-hidden="true"></span>
                    <img class="hab-pantufla" src="${esc(h.pantufla)}" alt="Pantufla ${esc(h.nombre.toLowerCase())}" draggable="false">
                    <span class="hab-label"><b>${pad(i + 1)}</b>${esc(h.nombre)}</span>
                    ${h.credito ? `<small class="hab-credito">${esc(h.credito)}</small>` : ''}
                </div>`).join('')}
            </div>
            <div class="hab-content">
                <p class="fh-kicker">${esc(p.cliente)}</p>
                <h1 class="fh-title">${words}</h1>
                ${p.manifiesto ? `<p class="fh-sub">${esc(p.manifiesto)}</p>` : ''}
            </div>
            <div class="mh-meta">
                <div><span>Año</span>${esc(p.year)}</div>
                <div><span>Servicios</span>${esc(p.servicios)}</div>
                <div><span>Categoría</span>${esc(p.categoria)}</div>
            </div>
        </section>`;
}

function setupFotoHero(body) {
    const h = $('.foto-hero', body);
    if (!h) return [];
    return [() => {
        const r = h.getBoundingClientRect();
        h.style.setProperty('--q', prefersReducedMotion ? 0 : clamp(-r.top / r.height).toFixed(3));
    }];
}

function setupMidoHero(body) {
    const h = $('.mido-hero', body);
    if (!h) return [];
    const m = modal();
    if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
        h.addEventListener('pointermove', e => {
            const r = h.getBoundingClientRect();
            h.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
            h.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
        });
    }
    const bar = $('.kippa-top-bar', body);
    const muma = !!h.closest('.intro-muma');
    if (bar) h.style.setProperty('--bar-h', `${bar.offsetHeight + 3}px`);
    return [() => {
        const r = h.getBoundingClientRect();
        if (muma) {
            // La portada queda fija: primero aparece la frase, después se despide
            const stage = $('.mh-stage', h);
            const s = clamp(-r.top / Math.max(1, h.offsetHeight - stage.offsetHeight));
            h.classList.toggle('is-said', prefersReducedMotion || s > 0.03);
            h.style.setProperty('--q', prefersReducedMotion ? 0 : clamp((s - 0.6) / 0.4).toFixed(3));
            return;
        }
        h.style.setProperty('--q', prefersReducedMotion ? 0 : clamp(-r.top / (r.height * 0.9)).toFixed(3));
    }];
}

function midoStrip(n = 9) {
    const uses = Array.from({ length: n }, (_, i) => `<g transform="translate(0 ${i * 172})"><path d="${MIDO_ISO.a}"/><path d="${MIDO_ISO.b}"/><path d="${MIDO_ISO.dot}"/></g>`).join('');
    return `<svg class="scene-strip-svg" viewBox="-4 -4 172 ${n * 172}" preserveAspectRatio="xMidYMin meet" aria-hidden="true">${uses}</svg>`;
}

/* =========================================================
   2. UTILIDADES
   ========================================================= */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const pad = n => String(n).padStart(2, '0');
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

function debounce(fn, ms = 150) {
    let t;
    return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}

/* Si una imagen no existe se oculta (y avisa en la consola cuál falta) */
function setupImageFallback() {
    document.addEventListener('error', e => {
        const el = e.target;
        if (el.tagName !== 'IMG' || el.dataset.failed) return;
        el.dataset.failed = '1';
        el.classList.add('img-missing');
        console.warn('Imagen no encontrada:', el.getAttribute('src'));
    }, true);
}


/* =========================================================
   3. PORTADA
   ========================================================= */
function splitLetters() {
    $$('[data-letters]').forEach(el => {
        const text = el.textContent.trim();
        el.setAttribute('aria-label', text);
        let i = 0;
        el.innerHTML = text.split(' ').map(word =>
            `<span class="hn-word" aria-hidden="true">${[...word].map(ch =>
                `<span class="hn-mask"><span class="hn-char" style="--i:${i++}">${esc(ch)}</span></span>`
            ).join('')}</span>`
        ).join(' ');
    });
}

/* El nombre se ajusta para no salirse nunca de la pantalla */
function fitHeroName() {
    const el = $('#hero-name');
    if (!el) return;
    const fit = () => {
        el.style.fontSize = '';
        const max = document.documentElement.clientWidth * 0.94;
        const w = el.scrollWidth;
        if (w > max) {
            const size = parseFloat(getComputedStyle(el).fontSize);
            el.style.fontSize = `${Math.floor(size * max / w)}px`;
        }
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener('resize', debounce(fit));
}

function setupReel() {
    const box = $('#hero-reel');
    const label = $('#reel-label');
    const count = $('#reel-count');
    if (!box) { document.documentElement.classList.add('is-loaded'); return; }

    box.innerHTML = reel.map((r, i) =>
        `<img src="${esc(r.src)}" alt="" class="${i === 0 ? 'is-on' : ''}" ${i === 0 ? 'fetchpriority="high"' : 'loading="eager"'} decoding="async" draggable="false">`
    ).join('');
    const imgs = $$('img', box);
    let i = 0, timer = null, visible = true;

    function show(n) {
        imgs[i].classList.remove('is-on');
        i = (n + imgs.length) % imgs.length;
        imgs[i].classList.add('is-on');
        if (label) label.textContent = reel[i].label;
        if (count) count.textContent = pad(i + 1);
    }
    function play() {
        if (timer || prefersReducedMotion) return;
        timer = setInterval(() => { if (visible && !document.hidden) show(i + 1); }, 1000);
    }

    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(box);

    // La animación de entrada parte cuando la primera foto está lista (o a los 1,5 s)
    const first = imgs[0];
    let started = false;
    const start = () => {
        if (started) return;
        started = true;
        document.documentElement.classList.add('is-loaded');
        setTimeout(play, 2400);
    };
    if (first.complete) start();
    else { first.addEventListener('load', start, { once: true }); first.addEventListener('error', start, { once: true }); }
    setTimeout(start, 1500);
}

/* Portada clásica: al bajar, el nombre crece hasta dejar la pantalla en blanco */
function setupClassicHeroScroll(hero) {
    const center = $('.hc-center', hero);
    const words = $$('.hc-words li', hero);
    const bottom = $('.hc-bottom', hero);
    return function onScroll() {
        if (prefersReducedMotion) return;
        const total = hero.offsetHeight - window.innerHeight;
        const p = total > 0 ? clamp(-hero.getBoundingClientRect().top / total) : 0;
        const e = p * p * (3 - 2 * p);
        const fade = clamp((p - 0.38) / 0.42);
        center.style.transform = `scale(${1 + Math.pow(e, 2.2) * 9})`;
        center.style.opacity = String(1 - fade * fade * (3 - 2 * fade));
        words.forEach((w, i) => {
            const dx = (i % 2 ? 1 : -1) * p * 22, dy = (i < 2 ? -1 : 1) * p * 18;
            w.style.transform = `translate(${dx}vw, ${dy}vh)`;
            w.style.opacity = String(clamp(1 - p * 2.6));
        });
        if (bottom) bottom.style.opacity = String(clamp(1 - p * 3));
        // el dorado del fondo se va aclarando hasta quedar en blanco
        const bg = clamp((p - 0.28) / 0.5);
        hero.style.setProperty('--hc-a', (1 - bg * bg * (3 - 2 * bg)).toFixed(3));
        document.documentElement.classList.toggle('nav-on-gold', p < 0.45 && hero.getBoundingClientRect().bottom > 0);
    };
}

/* Al bajar: el nombre sube, las palabras se van y el marco crece hasta llenar la pantalla */
function setupHeroScroll() {
    const hero = $('#cover-page');
    const frame = $('#hero-frame');
    const name = $('.hero-name-wrap');
    const words = $('.hero-words');
    const fade = $$('.hero-sub, .hero-bottom');
    if (hero && !frame && hero.classList.contains('hero-classic')) return setupClassicHeroScroll(hero);
    if (!hero || !frame) return () => {};

    let S = 1;
    const measure = () => {
        const fw = frame.offsetWidth, fh = frame.offsetHeight;
        S = Math.max(window.innerWidth / fw, window.innerHeight / fh) * 1.02;
    };
    measure();
    window.addEventListener('resize', debounce(measure));

    return function onScroll() {
        if (prefersReducedMotion) return;
        const total = hero.offsetHeight - window.innerHeight;
        const p = total > 0 ? clamp(-hero.getBoundingClientRect().top / total) : 0;
        const e = p * p * (3 - 2 * p);                       // suavizado
        frame.style.transform = `translate(-50%, -50%) scale(${1 + (S - 1) * e})`;
        frame.style.setProperty('--tint', (e * e * e * 0.9).toFixed(3));
        frame.style.borderRadius = `${(1 - e) * 4}px`;
        if (name) {
            name.style.transform = `translate3d(0, ${-p * 38}vh, 0)`;
            name.style.opacity = String(clamp(1 - p * 1.8));
        }
        if (words) { words.style.opacity = String(clamp(1 - p * 2.4)); words.style.letterSpacing = `${p * 0.4}em`; }
        fade.forEach(f => { f.style.opacity = String(clamp(1 - p * 3)); });
    };
}


/* =========================================================
   4. PROYECTOS: TARJETAS APILADAS
   ========================================================= */
function renderStack() {
    const stack = $('#stack');
    if (!stack) return;
    const n = proyectos.length;

    stack.innerHTML = proyectos.map((p, i) => `
        <article class="stack-item" style="--i:${i}">
            <a href="#caso-${p.slug}" class="stack-card" data-cursor="Ver caso" aria-label="Ver caso de estudio: ${esc(p.nombre)}">
                <div class="stack-media">
                    <img src="${esc(p.portada)}" alt="" loading="${i < 2 ? 'eager' : 'lazy'}" decoding="async" draggable="false">
                </div>
                <div class="stack-info">
                    <div class="stack-top">
                        <span class="stack-index">${pad(i + 1)} / ${pad(n)}</span>
                        <span class="stack-year">(${esc(p.year)})</span>
                    </div>
                    <div class="stack-main">
                        <span class="stack-cat">${esc(p.categoria)}</span>
                        <h3 class="stack-title">${esc(p.nombre)}${p.subtitulo ? `<span class="stack-sub">${esc(p.subtitulo)}</span>` : ''}</h3>
                        <p class="stack-desc">${esc(p.resumen)}</p>
                    </div>
                    <ul class="stack-tags">${p.etiquetas.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
                    <span class="stack-cta">Ver caso de estudio <span aria-hidden="true">→</span></span>
                </div>
                <span class="stack-shade" aria-hidden="true"></span>
            </a>
        </article>
    `).join('');

    const total = $('#works-total');
    if (total) total.textContent = pad(n);
}

/* Cuando una tarjeta nueva sube, la anterior se achica y se oscurece */
function setupStackScroll() {
    const items = $$('.stack-item');
    if (!items.length) return () => {};
    const cards = items.map(it => $('.stack-card', it));
    const imgs = items.map(it => $('.stack-media img', it));

    return function onScroll() {
        if (prefersReducedMotion) return;
        const vh = window.innerHeight;
        const stickyTop = parseFloat(getComputedStyle(items[0]).top) || 0;
        items.forEach((it, i) => {
            const top = it.getBoundingClientRect().top;
            // entrada de esta tarjeta (0 → 1) para el zoom de la foto
            const enter = clamp((vh - top) / (vh - stickyTop));
            imgs[i].style.transform = `scale(${1.14 - 0.14 * enter})`;
            // tapado por la siguiente (0 → 1)
            const next = items[i + 1];
            let covered = 0;
            if (next) covered = clamp((vh - next.getBoundingClientRect().top) / (vh - stickyTop));
            cards[i].style.transform = `scale(${1 - covered * 0.05})`;
            cards[i].style.setProperty('--shade', (covered * 0.55).toFixed(3));
        });
    };
}


/* =========================================================
   5. SCROLL GLOBAL (navegación + portada + tarjetas)
   ========================================================= */
function setupScroll(handlers) {
    const nav = $('#site-nav');
    let lastY = window.scrollY, ticking = false;

    function frame() {
        ticking = false;
        const y = window.scrollY;
        const dy = y - lastY;
        lastY = y;
        if (nav) {
            nav.classList.toggle('is-solid', y > 40);
            if (Math.abs(dy) > 4) nav.classList.toggle('is-hidden', dy > 0 && y > 200);
        }
        handlers.forEach(h => h());
    }
    window.addEventListener('scroll', () => {
        if (!ticking) { ticking = true; requestAnimationFrame(frame); }
    }, { passive: true });
    window.addEventListener('resize', debounce(frame));
    frame();
}

function setupActiveNav() {
    const links = $$('.nav-link');
    const byId = new Map(links.map(l => [l.getAttribute('href').slice(1), l]));
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            links.forEach(l => l.removeAttribute('aria-current'));
            byId.get(e.target.id)?.setAttribute('aria-current', 'true');
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    byId.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}


/* =========================================================
   6. ANIMACIONES DE ENTRADA (reveal, texto partido, contadores)
   ========================================================= */
function splitText(scope = document) {
    $$('[data-split]', scope).forEach(el => {
        if (el.dataset.splitDone) return;
        const text = el.textContent.trim().replace(/\s+/g, ' ');
        el.setAttribute('aria-label', text);
        el.innerHTML = text.split(' ').map((w, i) =>
            `<span class="split-word" aria-hidden="true"><span style="--i:${i}">${esc(w)}</span></span>`
        ).join(' ');
        el.dataset.splitDone = '1';
    });
}

function countUp(el) {
    const m = (el.dataset.count || '').match(/^(\D*)([\d.,]+)(.*)$/);
    if (!m) return;
    const [, prefix, digits, suffix] = m;
    const target = parseInt(digits.replace(/[.,]/g, ''), 10);
    if (!target) return;
    const t0 = performance.now(), dur = 1600;
    (function step(t) {
        const k = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = prefix + Math.round(target * eased).toLocaleString('es-CL') + suffix;
        if (k < 1) requestAnimationFrame(step);
    })(t0);
}

function observeReveals(scope = document, root = null) {
    const els = $$('[data-reveal], [data-split]', scope);
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('is-revealed'));
        return null;
    }
    const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (!en.isIntersecting) return;
            const el = en.target;
            el.classList.add('is-revealed');
            (el.matches('[data-count]') ? [el] : $$('[data-count]', el)).forEach(countUp);
            io.unobserve(el);
        });
    }, { root, threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(el => io.observe(el));
    return io;
}


/* =========================================================
   7. CURSOR + BOTONES MAGNÉTICOS
   ========================================================= */
function setupCursor() {
    if (!finePointer || prefersReducedMotion) return;
    const cur = $('.cursor');
    const dot = $('.cursor-dot');
    const ring = $('.cursor-ring');
    const label = $('.cursor-label');
    if (!cur) return;

    document.documentElement.classList.add('has-cursor');
    let mx = -100, my = -100, rx = mx, ry = my;

    window.addEventListener('pointermove', e => {
        mx = e.clientX; my = e.clientY;
        cur.classList.add('is-active');
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => cur.classList.remove('is-active'));
    window.addEventListener('pointerdown', () => cur.classList.add('is-down'));
    window.addEventListener('pointerup', () => cur.classList.remove('is-down'));

    document.addEventListener('pointerover', e => {
        const t = e.target.closest('[data-cursor], a, button');
        // sin textos en el cursor: solo crece el anillo sobre lo que se puede tocar
        if (t) {
            cur.classList.add('is-link');
            cur.classList.remove('has-label');
        } else {
            cur.classList.remove('has-label', 'is-link');
        }
    });

    (function loop() {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
        requestAnimationFrame(loop);
    })();
}

function setupMagnetic(scope = document, signal) {
    if (!finePointer || prefersReducedMotion) return;
    $$('[data-magnetic]', scope).forEach(el => {
        const strength = parseFloat(el.dataset.magnetic) || 0.3;
        el.addEventListener('pointermove', e => {
            const r = el.getBoundingClientRect();
            const dx = e.clientX - (r.left + r.width / 2);
            const dy = e.clientY - (r.top + r.height / 2);
            el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
        }, { signal });
        el.addEventListener('pointerleave', () => { el.style.transform = ''; }, { signal });
    });
}


/* =========================================================
   8. CINTA (MARQUEE) QUE REACCIONA AL SCROLL
   ========================================================= */
function setupMarquee() {
    const el = $('.marquee');
    const track = $('.marquee-track');
    if (!el || !track || prefersReducedMotion) return;

    let x = 0, dir = -1, boost = 0, w = 0, visible = false, running = false, lastY = window.scrollY;
    const measure = () => { w = track.firstElementChild.offsetWidth; };
    measure();
    window.addEventListener('resize', debounce(measure));
    document.fonts?.ready.then(measure);
    track.querySelectorAll('img').forEach(i => { i.loading = 'eager'; i.addEventListener('load', measure); });

    window.addEventListener('scroll', () => {
        const dy = window.scrollY - lastY;
        lastY = window.scrollY;
        if (dy) dir = dy > 0 ? -1 : 1;
        boost = Math.min(5, Math.abs(dy) * 0.18);
    }, { passive: true });

    function loop() {
        if (!visible) { running = false; return; }
        x += dir * (0.45 + boost);
        boost *= 0.92;
        if (x <= -w) x += w;
        if (x > 0) x -= w;
        track.style.transform = `translate3d(${x}px, 0, 0)`;
        requestAnimationFrame(loop);
    }

    new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible && !running) { running = true; loop(); }
    }).observe(el);
}


/* =========================================================
   9. CASO DE ESTUDIO
   ========================================================= */
const modal = () => $('#case-study-modal');
const isModalOpen = () => modal()?.classList.contains('is-open');
let modalAbort = null;
let modalObserver = null;
let lastFocus = null;
let navigatedInside = false;

function img(src, alt, { cls = '', lightbox = true, cursor = '' } = {}) {
    return `<img src="${esc(src)}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''} loading="lazy" decoding="async" draggable="false"${lightbox ? ' data-lightbox' : ''}${cursor ? ` data-cursor="${cursor}"` : ''}>`;
}

function blockHead(b) {
    if (!b.titulo) return '';
    return `
        <div class="block-head" data-reveal>
            <h3 class="kippa-h3">${esc(b.titulo)}</h3>
            ${b.subtitulo ? `<p class="block-sub">${esc(b.subtitulo)}</p>` : ''}
            ${b.texto ? `<p class="kippa-p block-text">${esc(b.texto)}</p>` : ''}
        </div>`;
}

const renderBloque = {
    cita: b => b.escena ? `
        <section class="case-block scene scene-cita" data-scene data-steps="${b.logo ? 3 : 2}" data-scrub data-words>
            <div class="scene-stage">
                <div class="sc-text">
                    <blockquote class="sc-quote">${esc(b.texto).split(' ').map(w => `<span>${w}</span>`).join(' ')}</blockquote>
                    ${b.autor ? `<span class="sc-author">— ${esc(b.autor)}</span>` : ''}
                </div>
                ${typeof b.logo === 'string' ? `
                <div class="sc-logo sc-logo-img" aria-hidden="true">
                    <img class="sc-equipo" src="${esc(b.logo)}" alt="" draggable="false">
                    ${b.logoTexto ? `<span class="sc-equipo-txt">${esc(b.logoTexto)}</span>` : ''}
                </div>` : b.logo ? `
                <div class="sc-logo" aria-hidden="true">
                    <div class="sc-sello">
                        <img class="sc-anillo" src="${esc(I('muma-iso-anillo.png'))}" alt="" draggable="false">
                        <img class="sc-corazon" src="${esc(I('muma-iso-corazon.png'))}" alt="" draggable="false">
                    </div>
                    <img class="sc-logotipo" src="${esc(I('muma-logotipo-blanco.png'))}" alt="" draggable="false">
                </div>` : ''}
            </div>
        </section>` : `
        <section class="case-block kippa-testimonial-section${b.tono === 'acento' ? ' is-accent' : ''}" data-reveal>
            <blockquote class="kippa-testimonial-quote">“${esc(b.texto)}”</blockquote>
            ${b.autor ? `<span class="kippa-testimonial-author">— ${esc(b.autor)}</span>` : ''}
        </section>`,

    galeria: (b, p) => `
        <section class="case-block${b.efecto ? ` efecto-${b.efecto}` : ''}${b.junto ? ' is-junto' : ''}">
            ${blockHead(b)}
            ${b.efecto === 'agua' ? AGUA_SVG : ''}
            <div class="kippa-duo-gallery cols-${b.columnas || 2}${b.formato === 'ancho' ? ' is-wide' : ''}${b.formato === 'destacado' ? ' is-featured' : ''}${b.mosaico ? ` mos-${esc(b.mosaico)}` : ''}"${b.aspecto ? ` style="--ga:${esc(b.aspecto)}"` : ''}>
                ${b.imagenes.map((s, i) => `
                    <figure class="kippa-duo-frame" data-reveal style="--d:${(i % (b.columnas || 2)) * 0.1}s">
                        ${img(s, `${p.nombre} — imagen ${i + 1}`, { cursor: 'Ampliar' })}
                    </figure>`).join('')}
            </div>
        </section>`,

    mesa: (b, p) => `
        <section class="case-block cq-blk cq-mesa" data-mesa>
            <header class="cq-head" data-cq>
                <span class="cq-num">${esc(b.numero)}</span>
                <h2 class="cq-h2">${esc(b.titulo)}</h2>
                <p class="cq-p">${esc(b.texto)}</p>
                <p class="cq-nota">${esc(b.nota)} <span aria-hidden="true">↓</span></p>
            </header>
            <div class="cq-mesa-zona" data-arrastre>
                ${b.piezas.map((f, i) => `<img class="cq-pieza cq-drag" src="${esc(f.src)}" alt="Ilustración ${i + 1}" draggable="false" style="--x:${f.x}%;--y:${f.y}%;--w:${f.w}%;--r:${f.r}deg;--k:${i}">`).join('')}
                <button type="button" class="cq-btn" data-ordenar>ordenar la mesa</button>
            </div>
            <div class="cq-laminas">
                ${b.laminas.map((l, i) => `<figure data-cq style="--i:${i}">${img(l, `${p.nombre} — lámina ${i + 1}`, { cursor: 'Ampliar' })}</figure>`).join('')}
            </div>
        </section>`,

    acuarelas: (b, p) => `
        <section class="case-block cq-blk cq-acua">
            <svg width="0" height="0" class="cq-defs" aria-hidden="true" focusable="false"><filter id="cq-agua" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves="2" seed="7"><animate attributeName="baseFrequency" dur="9s" values="0.012 0.03;0.016 0.04;0.012 0.03" repeatCount="indefinite"/></feTurbulence><feDisplacementMap in="SourceGraphic" scale="14" xChannelSelector="R" yChannelSelector="G"/></filter></svg>
            <header class="cq-head" data-cq>
                <span class="cq-num">${esc(b.numero)}</span>
                <h2 class="cq-h2">${esc(b.titulo)}</h2>
                <p class="cq-p">${esc(b.texto)}</p>
                <p class="cq-nota">${esc(b.nota)}</p>
            </header>
            <div class="cq-acua-row">
                ${b.obras.map((o, i) => `<figure class="cq-obra" data-cq style="--i:${i};--r:${o.r}deg;--ar:${esc(o.ar)}"><div class="cq-obra-in">${img(o.src, `${p.nombre} — acuarela ${i + 1}`, { cursor: 'Ampliar' })}</div><span class="cq-cinta" aria-hidden="true"></span></figure>`).join('')}
            </div>
        </section>`,

    regalos: b => `
        <section class="case-block cq-blk cq-regalos" data-mazo>
            <header class="cq-head" data-cq>
                <span class="cq-num">${esc(b.numero)}</span>
                <h2 class="cq-h2">${esc(b.titulo)}</h2>
                <p class="cq-p">${esc(b.texto)}</p>
                <p class="cq-nota">${esc(b.nota)}</p>
            </header>
            <div class="cq-mazo">
                <div class="cq-mazo-cartas" role="button" tabindex="0" aria-label="Ver la siguiente pieza">
                    ${b.cartas.map((c, i) => `<figure class="cq-carta" data-nombre="${esc(c.nombre)}" style="--r:${[-3, 2.5, -1.5, 3.5, -2.5][i % 5]}deg"><img src="${esc(c.src)}" alt="${esc(c.nombre)}" loading="lazy" draggable="false"></figure>`).join('')}
                </div>
                <div class="cq-mazo-ui">
                    <span class="cq-mazo-nombre"></span>
                    <span class="cq-mazo-n"><b>01</b> / ${pad(b.cartas.length)}</span>
                    <button type="button" class="cq-btn" data-sig>siguiente →</button>
                </div>
            </div>
        </section>`,

    vtSeccion: b => `
        <section class="case-block vt-sec${b.oscuro ? ' is-dark' : ''}${b.tono ? ` is-${esc(b.tono)}` : ''}" id="vt-${esc(b.numero)}">
            <div class="vt-sec-head" data-vt>
                <p class="vt-mono">${esc(b.numero)} — Sección</p>
                <h2 class="vt-h2">${esc(b.titulo)}</h2>
                <p class="vt-mono vt-mono-lg">${esc(b.texto)}</p>
            </div>
            ${b.tecnicas ? `<div class="vt-tec">${b.tecnicas.map((t, i) => `<div data-vt style="--i:${i}"><p class="vt-mono">${pad(i + 1)}</p><h3>${esc(t.titulo)}</h3><p>${esc(t.texto)}</p></div>`).join('')}</div>` : ''}
        </section>`,

    vtFila: (b, p) => `
        <section class="case-block vt-fila${b.tono ? ` is-${esc(b.tono)}` : ''}" style="--n:${b.fotos.length}">
            ${b.fotos.map((f, i) => `<figure data-vt style="--i:${i}">${img(f, `${p.nombre} — foto ${i + 1}`, { cursor: 'Ampliar' })}</figure>`).join('')}
        </section>`,

    vtAncho: (b, p) => `
        <section class="case-block vt-ancho${b.oscuro ? ' is-dark' : ''}${b.bn ? ' is-bn' : ''}">
            <figure data-vt style="--ar:${esc(b.ar)}">${img(b.foto, `${p.nombre} — vista completa`, { cursor: 'Ampliar' })}</figure>
        </section>`,

    vtLado: (b, p) => `
        <section class="case-block vt-lado">
            <figure class="vt-lado-g" data-vt style="--ar:${esc(b.grande.ar)}">${img(b.grande.src, `${p.nombre} — retrato`, { cursor: 'Ampliar' })}</figure>
            <div class="vt-lado-col">${b.fotos.map((f, i) => `<figure data-vt style="--i:${i + 1}">${img(f, `${p.nombre} — foto ${i + 1}`, { cursor: 'Ampliar' })}</figure>`).join('')}</div>
        </section>`,

    ilani: (b, p) => `
        <section class="case-block il2" data-ilani>
            <div class="il2-side">
                <div class="il2-head" data-reveal>
                    <p class="il2-kicker">Marca propia</p>
                    <h3 class="il2-title">${esc(b.titulo)}</h3>
                    ${b.texto ? `<p class="il2-sub">${esc(b.texto)}</p>` : ''}
                </div>
                <figure class="il2-tag" data-reveal>${img(b.logo, 'Ilani — logo de la marca', { cursor: 'Ampliar' })}</figure>
                <div class="il2-telas" role="tablist" aria-label="Telas de los estuches Ilani">
                    <p class="il2-hint">Elige una tela</p>
                    ${b.fotos.map((f, i) => `<button type="button" role="tab" aria-selected="${i === 0}" data-i="${i}" class="il2-tela${i === 0 ? ' is-on' : ''}" style="--k:${i}"><span class="il2-chip"><img src="${esc(f.tela)}" alt="" draggable="false"></span><span class="il2-nom">${esc(f.nombre)}</span></button>`).join('')}
                </div>
            </div>
            <div class="il2-mazo" data-cursor="Barajar">
                ${b.fotos.map((f, i) => `<figure class="il2-carta" style="--r:${f.r || 0}deg;--pos:${i}" aria-hidden="${i !== 0}"><img src="${esc(f.src)}" alt="Ilani — estuche ${esc(f.nombre)}" loading="lazy" decoding="async" draggable="false"><figcaption>Toile de jouy · <em>${esc(f.nombre)}</em></figcaption></figure>`).join('')}
            </div>
        </section>`,

    vtPar: (b, p) => `
        <section class="case-block vt-par${b.tono ? ` is-${esc(b.tono)}` : ''}">
            ${b.fotos.map((f, i) => `<figure data-vt style="--i:${i};--ar:${esc(f.ar)}">${img(f.src, `${p.nombre} — detalle ${i + 1}`, { cursor: 'Ampliar' })}</figure>`).join('')}
        </section>`,

    vtMasonry: (b, p) => `
        <section class="case-block vt-mas${b.oscuro ? ' is-dark' : ''}">
            ${b.cols.map((col, c) => `<div class="vt-col">${col.map((f, i) => `<figure data-vt style="--i:${i + c};--ar:${esc(f.ar)}">${img(f.src, `${p.nombre} — look ${c * col.length + i + 1}`, { cursor: 'Ampliar' })}</figure>`).join('')}</div>`).join('')}
        </section>`,

    seccion: b => `
        <section class="case-block rv-seccion" data-rv>
            <span class="rv-sec-num" aria-hidden="true">${esc(b.numero)}</span>
            <div class="rv-sec-text">
                <p class="rv-kicker">Sección ${esc(b.numero)}</p>
                <h2 class="rv-sec-h">${esc(b.titulo)}</h2>
                ${b.texto ? `<p class="rv-sub">${esc(b.texto)}</p>` : ''}
            </div>
        </section>`,

    spread: (b, p) => `
        <section class="case-block rv-spread${b.lado === 'der' ? ' is-der' : ''}${b.cierre ? ' is-cierre' : ''}${b.bn ? ' is-bn' : ''}" data-rv>
            <figure class="rv-main"><div class="rv-media rv-par" style="--ar:${esc(b.ar)}">${img(b.foto, `${p.nombre} — ${b.titulo}`, { cursor: 'Ampliar' })}</div></figure>
            <div class="rv-text">
                <p class="rv-kicker">${esc(b.kicker)}</p>
                <h2 class="rv-h">${esc(b.titulo)}</h2>
                ${b.texto ? `<p class="rv-p">${esc(b.texto)}</p>` : ''}
                ${b.indice ? `<ol class="rv-list">${b.indice.map((t, i) => `<li style="--i:${i}"><span class="rv-n">${pad(i + 1)}</span><div><strong>${esc(t.titulo)}</strong><p>${esc(t.texto)}</p></div></li>`).join('')}</ol>` : ''}
                ${b.foto2 ? `<figure class="rv-second"><div class="rv-media" style="--ar:${esc(b.ar2)}">${img(b.foto2, `${p.nombre} — ${b.titulo}, otra vista`, { cursor: 'Ampliar' })}</div></figure>` : ''}
                ${b.cierre ? `<p class="rv-fin">Fin</p>` : ''}
            </div>
            <span class="rv-pag" aria-hidden="true">— ${esc(b.pagina)}</span>
        </section>`,

    triptico: (b, p) => `
        <section class="case-block rv-trip${b.bn ? ' is-bn' : ''}" data-rv style="--n:${b.fotos.length}">
            <div class="rv-trip-grid">
                ${b.fotos.map((f, i) => `<figure style="--i:${i}"><div class="rv-media" style="--ar:${esc(b.ars[i])}">${img(f, `${p.nombre} — ${b.pie} ${i + 1}`, { cursor: 'Ampliar' })}</div><figcaption>Fig. ${pad(i + 1)}</figcaption></figure>`).join('')}
            </div>
            <p class="rv-pie"><em>${esc(b.pie)}</em><span>— ${esc(b.pagina)}</span></p>
        </section>`,

    plana: (b, p) => `
        <section class="case-block rv-plana${b.bn ? ' is-bn' : ''}" data-rv>
            <div class="rv-plana-media rv-par">${img(b.foto, `${p.nombre} — ${b.pie}`, { cursor: 'Ampliar' })}</div>
            <p class="rv-pie"><em>${esc(b.pie)}</em><span>— ${esc(b.pagina)}</span></p>
        </section>`,

    taller: b => `
        <section class="case-block tt-taller" data-taller data-tool="${esc(b.tecnicas[0].id)}">
            ${blockHead(b)}
            <div class="tt-tools" role="group" aria-label="Técnicas">
                ${b.tecnicas.map((t, i) => `<button type="button" class="tt-btn tt-${esc(t.id)}" data-tec="${esc(t.id)}" data-desc="${esc(t.texto)}" aria-pressed="${i === 0}"><i aria-hidden="true"></i>${esc(t.nombre)}</button>`).join('')}
                <button type="button" class="tt-btn tt-limpiar" data-tec="limpiar">Limpiar tela</button>
            </div>
            <div class="tt-tela"><canvas aria-label="Tela para probar las técnicas"></canvas><span class="tt-pista" aria-hidden="true">Haz clic o arrastra</span></div>
            <p class="tt-desc">${esc(b.tecnicas[0].texto)}</p>
        </section>`,

    lookbook: (b, p) => `
        <section class="case-block lb${b.bn ? ' lb-bn' : ''}" data-lookbook>
            ${b.titulo ? blockHead(b) : ''}
            <div class="lb-grid">
                ${b.fotos.map((f, i) => `
                <figure class="lb-item" data-v="${f.v || .1}" style="--c:${f.c};--w:${f.w};--off:${f.off || 0};--ar:${esc(f.ar)};--k:${i}">
                    <div class="lb-media">${img(f.src, `${p.nombre} — foto ${i + 1}`, { cursor: 'Ampliar' })}</div>
                </figure>`).join('')}
            </div>
        </section>`,

    looks: (b, p) => `
        <section class="case-block lk" data-looks>
            ${blockHead(b)}
            <div class="lk-grid">
                ${b.items.map((it, i) => `
                <figure class="lk-item" tabindex="0" style="--k:${i}">
                    <div class="lk-media">
                        ${it.fotos.map((f, j) => `<img class="lk-img${j ? ' lk-alt' : ''}" src="${esc(f)}" alt="${esc(it.nombre)} — vista ${j + 1}" loading="lazy" draggable="false">`).join('')}
                        <span class="lk-seam" aria-hidden="true"></span>
                        <span class="lk-aguja" aria-hidden="true"></span>
                    </div>
                    <figcaption><span class="lk-n">${pad(i + 1)}</span><strong>${esc(it.nombre)}</strong><span class="lk-vistas">${it.fotos.length} vistas</span></figcaption>
                </figure>`).join('')}
            </div>
        </section>`,

    firma: b => `
        <section class="case-block yu-firma" data-firma>
            <span class="yf-casa" aria-hidden="true"></span>
            <p class="yf-txt">${esc(b.texto)}</p>
            <ul class="yf-logos">
                ${b.logos.map((l, i) => `<li style="--k:${i}"><img src="${esc(l.src)}" alt="${esc(l.nombre)}" style="height:${l.alto}px"${l.blanco ? ' class="is-blanco"' : ''} draggable="false"></li>`).join('<li class="yf-x" aria-hidden="true">×</li>')}
            </ul>
        </section>`,

    calma: b => `
        <section class="case-block yu-calma" data-calma style="--n:${b.pasos.length}">
            <div class="yc-stage">
                <div class="yc-field" aria-hidden="true">
                    ${Array.from({ length: 18 }, (_, i) => {
                        const k = ['ast', 'ring', 'duo', 'ele', 'hex'][i % 5];
                        const c = ['lima', 'verde', 'tinta'][i % 3];
                        return `<span class="yc-f yu-${c}">${yuSvg(k)}</span>`;
                    }).join('')}
                </div>
                <svg class="yc-wave" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 50 L1000 50"/></svg>
                <div class="yc-text">
                    <h3 class="kippa-h3">${esc(b.titulo)}</h3>
                    <div class="yc-steps">
                        ${b.pasos.map((st, i) => `
                        <div class="yc-step${i === 0 ? ' is-on' : ''}">
                            <span class="yc-n">${pad(i + 1)} / ${pad(b.pasos.length)}</span>
                            <p class="yc-t">${esc(st.titulo)}</p>
                            <p class="yc-d">${esc(st.texto)}</p>
                        </div>`).join('')}
                    </div>
                    <div class="yc-meter" aria-hidden="true"><span>Estímulos</span><i><em></em></i></div>
                </div>
            </div>
        </section>`,

    serie: (b, p) => `
        <section class="case-block yu-serie" data-serie>
            ${blockHead(b)}
            <figure class="ys-fig">
                ${img(b.src, `${p.nombre} — ${b.titulo}`, { cursor: 'Ampliar' })}
                <span class="ys-line" aria-hidden="true"></span>
            </figure>
        </section>`,

    coleccion: (b, p) => `
        <section class="case-block case-col" data-coleccion>
            ${blockHead(b)}
            <div class="col-stage">
                ${b.items.map((it, i) => `
                    <figure class="col-item" style="--i:${i};--c:${esc(it.color)}" tabindex="0">
                        <div class="col-move">
                            <div class="col-lift">
                                <span class="col-halo" aria-hidden="true"></span>
                                <img class="col-img" src="${esc(it.src)}" alt="${esc(it.modelo)}" loading="eager" draggable="false">
                            </div>
                            <span class="col-shadow" aria-hidden="true"></span>
                        </div>
                        <figcaption><span class="col-n">${String(i + 1).padStart(2, '0')}</span><span class="col-name">${esc(it.nombre)}</span><span class="col-mod">${esc(it.modelo)}</span></figcaption>
                    </figure>`).join('')}
            </div>
        </section>`,

    imagen: (b, p) => b.efecto === 'grabado' ? `
        <section class="case-block case-grabado">
            ${blockHead(b)}
            <figure class="grabado" data-grabado data-reveal>
                ${img(b.src, `${p.nombre} — ${b.titulo || 'imagen'}`, { lightbox: false })}
                <span class="gr-lupa" aria-hidden="true" style="background-image:url('${esc(b.src)}')"></span>
            </figure>
        </section>` : `
        <section class="case-block${b.junto ? ' is-junto' : ''}">
            ${blockHead(b)}
            ${b.agua ? AGUA_SVG : ''}
            <figure class="case-wide${b.fondo ? ' is-contained' : ''}${b.natural ? ' is-natural' : ''}${b.agua ? ' is-agua' : ''}" data-reveal="image"${b.max ? ` style="max-width:${esc(b.max)};margin-left:auto;margin-right:auto"` : ''}>
                ${img(b.src, `${p.nombre} — ${b.titulo || 'imagen'}`, { cursor: 'Ampliar' })}
            </figure>
        </section>`,

    ruta: b => `
        <section class="case-block hscroll ruta" data-hscroll data-ruta>
            <div class="hs-stage">
                <div class="ruta-topo" aria-hidden="true"></div>
                <div class="hs-head">
                    <div>
                        <h3 class="kippa-h3">${esc(b.titulo)}</h3>
                        ${b.texto ? `<p class="kippa-p block-text">${esc(b.texto)}</p>` : ''}
                    </div>
                    <div class="ruta-gps" aria-hidden="true">
                        <span class="ruta-lat">18,2° S</span>
                        <span class="hs-count"><b>01</b> / ${pad(b.lugares.length)}</span>
                    </div>
                </div>
                <div class="hs-track">
                    ${b.lugares.map((l, i) => `
                    <figure class="hs-item ruta-card" style="--k:${i}">
                        <div class="ruta-media">${img(l.src, `${l.nombre}, región de ${l.region}`, { cursor: 'Ampliar' }).replace('loading="lazy"', 'loading="eager"')}</div>
                        <figcaption>
                            <span class="ruta-n">${pad(i + 1)}</span>
                            <span class="ruta-region">${esc(l.region)}</span>
                            <strong class="ruta-name">${esc(l.nombre)}</strong>
                            <span class="ruta-coord">${esc(l.lat)}</span>
                            <small class="ruta-credit">Foto: ${esc(l.credito)}</small>
                        </figcaption>
                    </figure>`).join('')}
                </div>
                <div class="hs-bar" aria-hidden="true"><i></i></div>
            </div>
        </section>`,

    sticker: b => `
        <section class="case-block case-sticker">
            <div class="block-head" data-reveal>
                <h3 class="kippa-h3">${esc(b.titulo)}</h3>
                <p class="kippa-p block-text">${esc(b.texto)}</p>
            </div>
            <figure class="sp-sticker" data-reveal>${img(b.src, 'Stickers coleccionables', { cursor: 'Ampliar' })}</figure>
        </section>`,

    stickersPack: b => `
        <section class="case-block case-sp">
            <div class="block-head" data-reveal>
                <h3 class="kippa-h3">${esc(b.titulo)}</h3>
                <p class="kippa-p block-text">${esc(b.texto)}</p>
            </div>
            <div class="sp-grid">
                <figure class="sp-sticker" data-reveal>${img(b.stickers, 'Stickers coleccionables', { cursor: 'Ampliar' })}<figcaption>Stickers coleccionables · uno por destino</figcaption></figure>
                <figure class="sp-pack">
                    <div class="pack-frame" data-scrub data-cursor="Ampliar">${img(b.packaging, 'Troquel del packaging', { cls: 'pack-img' })}</div>
                    <figcaption>${esc(b.textoPack)}</figcaption>
                </figure>
            </div>
        </section>`,

    packaging: b => `
        <section class="case-block case-pack">
            <div class="block-head" data-reveal>
                <h3 class="kippa-h3">${esc(b.titulo)}${b.subtitulo ? ` <span class="kippa-h3-sub">${esc(b.subtitulo)}</span>` : ''}</h3>
                ${b.texto ? `<p class="kippa-p block-text">${esc(b.texto)}</p>` : ''}
            </div>
            <div class="pack-frame" data-scrub data-cursor="Ampliar">
                ${img(b.src, b.titulo, { cls: 'pack-img' })}
            </div>
        </section>`,

    lista: b => `
        <section class="case-block case-list">
            <div class="block-head" data-reveal>
                <h3 class="kippa-h3">${esc(b.titulo)}</h3>
                ${b.intro ? `<p class="kippa-p block-text">${esc(b.intro)}</p>` : ''}
            </div>
            <ol class="case-list-items cols-${b.columnas || 2}${b.formato ? ` is-${b.formato}` : ''}"${b.formato === 'linea' ? ' data-scrub' : ''}>
                ${b.items.map((it, i) => `
                    <li data-reveal style="--d:${(i % (b.columnas || 2)) * 0.1}s">
                        <span class="cl-num">${pad(i + 1)}</span>
                        <h4 class="cl-title">${esc(it.titulo)}</h4>
                        <p class="kippa-p">${esc(it.texto)}</p>
                    </li>`).join('')}
            </ol>
        </section>`,

    escena: b => `
        <section class="case-block scene scene-${b.visual || 'patron'}" data-scene data-steps="${b.pasos.length}" style="--steps:${b.pasos.length}">
            <div class="scene-stage">
                <span class="scene-label">${esc(b.titulo)}</span>
                ${b.visual === 'construccion' ? midoBuild() : `<div class="scene-strip">${midoStrip()}</div>`}
                ${b.pasos.map((p, i) => `
                    <div class="scene-text is-${p.lado}" data-i="${i}" data-final="${p.final ? 1 : 0}">
                        ${p.textos.map((t, j) => `<p class="${j === 0 ? 'scene-lead' : 'scene-body'}">${esc(t)}</p>`).join('')}
                    </div>`).join('')}
                <div class="scene-dots" aria-hidden="true">${b.pasos.map((_, i) => `<i data-i="${i}"></i>`).join('')}</div>
            </div>
        </section>`,

    nodos: b => `
        <section class="case-block nodes-block" data-reveal-group>
            <div class="nodes-head"><h3 class="kippa-h3">${esc(b.titulo)}</h3></div>
            <ol class="nodes">
                ${b.items.map((t, i) => `<li class="node" style="--k:${i}"><span>${esc(t)}</span></li>`).join('')}
            </ol>
        </section>`,

    panel: b => `
        <section class="case-block brand-panel" data-reveal-group>
            <div class="panel-mark"><img src="${esc(b.marca)}" alt="mido" draggable="false"></div>
            <div class="panel-list">
                <span class="panel-label">${esc(b.titulo)}</span>
                <ul>${b.items.map((t, i) => `<li style="--k:${i}">${esc(t)}</li>`).join('')}</ul>
            </div>
        </section>`,

    nombre: b => {
        const [wa, wb] = b.proporcion, t = wa + wb;
        return `
        <section class="case-block scene scene-nombre" data-scene data-steps="2" data-scrub>
            <div class="scene-stage">
                <div class="nm" style="--fa:${(wa / t).toFixed(4)};--fb:${(wb / t).toFixed(4)}" role="img" aria-label="midomótica, que se reduce a mido">
                    <span class="nm-a"><img src="${esc(b.partes[0])}" alt="" draggable="false"></span><span class="nm-b"><img src="${esc(b.partes[1])}" alt="" draggable="false"></span>
                </div>
                <div class="scene-dots" aria-hidden="true"><i data-i="0"></i><i data-i="1"></i></div>
            </div>
        </section>`;
    },

    recurso: b => `
        <section class="case-block bleed-shape" data-scrub>
            <img src="${esc(b.src)}" alt="" loading="eager" decoding="async" draggable="false">
        </section>`,

    carrusel: (b, p) => `
        <section class="case-block hscroll${b.slides ? ' hs-slides' : ''}" data-hscroll>
            <div class="hs-stage">
                <div class="hs-head">
                    <div>
                        <h3 class="kippa-h3">${esc(b.titulo)}</h3>
                        ${b.texto ? `<p class="kippa-p block-text">${esc(b.texto)}</p>` : ''}
                    </div>
                    <span class="hs-count"><b>01</b> / ${pad(b.imagenes.length)}</span>
                </div>
                <div class="hs-track">
                    ${b.imagenes.map((src, i) => `<figure class="hs-item" style="--k:${i}">${img(src, `${p.nombre} — ${b.slides ? 'lámina' : 'interfaz'} ${i + 1}`, { cursor: 'Ampliar' }).replace('loading="lazy"', 'loading="eager"')}</figure>`).join('')}
                </div>
                <div class="hs-bar" aria-hidden="true"><i></i></div>
            </div>
        </section>`,

    especies: b => b.separado ? `
        <section class="case-block case-habitats">
            ${blockHead(b)}
        </section>
        <section class="case-block hab-scroll" data-habscroll style="--n:${b.items.length};--hc:${esc(b.items[0].color)}">
            <div class="hab-stage">
                ${b.items.map((it, i) => `<span class="hab-print${i ? '' : ' is-on'}" data-i="${i}" aria-hidden="true" style="background-image:url('${esc(it.print || '')}')"></span>`).join('')}
                <div class="hab-progress" aria-hidden="true">${b.items.map((it, i) => `<span data-i="${i}"><b>${pad(i + 1)}</b> ${esc(it.nombre)}<i><em></em></i></span>`).join('')}</div>
                ${b.items.map((it, i) => `
                <div class="hab-layer${i ? '' : ' is-on'}" data-i="${i}" data-color="${esc(it.color)}" style="--lc:${esc(it.color)}">
                    <div class="hab-col">
                        <span class="esp-num">${pad(i + 1)} / ${pad(b.items.length)}</span>
                        <h3 class="esp-nombre">${esc(it.nombre)}</h3>
                        <span class="esp-modelo"><b>Hábitat</b> ${esc(it.modelo)}</span>
                        <ol class="hab-leyenda">${it.especies.map((e, k) => `<li data-k="${k}"><span class="hl-n">${k + 1}</span><div><strong>${esc(e.nombre)}</strong><span>${esc(e.texto)}</span></div></li>`).join('')}</ol>
                    </div>
                    <div class="hab-fig">
                        <div class="esp-fig">
                            <img src="${esc(it.src)}" alt="Pantufla ${esc(it.modelo)}" loading="eager" draggable="false">
                            ${it.especies.map((e, k) => `<span class="hab-pt" data-k="${k}" style="--x:${e.x}%;--y:${e.y}%">${k + 1}</span>`).join('')}
                        </div>
                    </div>
                </div>`).join('')}
            </div>
        </section>` : `
        <section class="case-block case-especies" data-especies style="--hc:${esc(b.items[0].color)}">
            ${blockHead(b)}
            <div class="esp-tabs" role="tablist">
                ${b.items.map((it, i) => `<button type="button" role="tab" class="esp-tab${i ? '' : ' is-on'}" data-i="${i}" style="--c:${esc(it.color)}" aria-selected="${i ? 'false' : 'true'}">${esc(it.nombre)}</button>`).join('')}
            </div>
            <div class="esp-stage">
                ${b.items.map((it, i) => `
                <div class="esp-panel${i ? '' : ' is-on'}" data-i="${i}" data-color="${esc(it.color)}">
                    <span class="esp-modelo"><b>Hábitat</b> ${esc(it.modelo)}</span>
                    <div class="esp-fig">
                        <img src="${esc(it.src)}" alt="Pantufla ${esc(it.modelo)}" loading="lazy" draggable="false">
                        ${it.especies.map((e, k) => `
                        <div class="esp-pt${e.x > 60 ? ' is-der' : ''}${e.y < 40 ? ' is-arriba' : ''}" style="--x:${e.x}%;--y:${e.y}%;--k:${k}">
                            <i></i>
                            <div class="esp-txt"><strong>${esc(e.nombre)}</strong><span>${esc(e.texto)}</span></div>
                        </div>`).join('')}
                    </div>
                    <ol class="esp-list">${it.especies.map(e => `<li><strong>${esc(e.nombre)}</strong><span>${esc(e.texto)}</span></li>`).join('')}</ol>
                </div>`).join('')}
            </div>
        </section>`,

    prints: (b, p) => `
        <section class="case-block case-prints">
            ${blockHead(b)}
            <div class="prints-grid">
                ${b.items.map((it, i) => `
                <figure class="print-item" data-reveal style="--d:${i * .12}s">
                    <div class="grabado" data-grabado>
                        ${img(it.src, `${p.nombre} — ${it.nombre}`, { lightbox: false })}
                        <span class="gr-lupa" aria-hidden="true" style="background-image:url('${esc(it.src)}')"></span>
                    </div>
                    <figcaption>${esc(it.nombre)}</figcaption>
                </figure>`).join('')}
            </div>
        </section>`,

    bitacora: (b, p) => `
        <section class="case-block bitacora" data-bitacora>
            <svg class="bt-road" aria-hidden="true"><path class="bt-asfalto"/><path class="bt-linea"/></svg>
            <div class="bt-grid">
                ${b.fotos.map((f, i) => `
                <figure class="bt-foto${f.nota ? ' has-nota' : ''}${f.full ? ' is-full' : ''}" style="--c:${f.c};--w:${f.w};--r:${f.r};--h:${f.h};--rot:${f.rot}deg;--ar:${f.ar}" data-v="${f.v}" data-reveal>
                    <div class="bt-img">${img(f.src, `${p.nombre} — foto ${i + 1}`, { cursor: 'Ampliar' })}</div>
                    ${f.lugar ? `<figcaption class="bt-cap"><span class="bt-n">${pad(i + 1)}</span><span class="bt-txt"><strong>${esc(f.lugar)}</strong><span class="bt-zona">${esc(f.zona || '')}</span>${f.info ? `<span class="bt-info">${esc(f.info)}</span>` : ''}</span></figcaption>` : f.nota ? `<figcaption class="bt-nota">${esc(f.nota)}</figcaption>` : ''}
                </figure>`).join('')}
            </div>
            ${b.cierre ? `<p class="bt-cierre" data-reveal>${esc(b.cierre)}</p>` : ''}
        </section>`,

    colabora: b => `
        <section class="case-block case-colabora">
            <div class="block-head" data-reveal>
                <h3 class="kippa-h3">${esc(b.titulo)}</h3>
                ${b.texto ? `<p class="kippa-p block-text">${esc(b.texto)}</p>` : ''}
            </div>
            <ul class="colab-row" data-reveal-group>
                ${b.partes.map((x, i) => `<li style="--k:${i}">${x.logo ? `<div class="colab-logo"><img src="${esc(x.logo)}" alt="${esc(x.nombre)}" style="height:${x.alto || 60}px" loading="lazy" draggable="false"></div><span>${esc(x.nombre)}</span>` : `<strong>${esc(x.nombre)}</strong><span>${esc(x.detalle || '')}</span>`}</li>`).join('<li class="colab-x" aria-hidden="true">×</li>')}
            </ul>
        </section>`,

    planta: (b, p) => `
        <section class="case-block case-planta">
            ${blockHead(b)}
            <div class="planta" data-planta data-reveal>
                <figure class="planta-img">${img(b.src, `${p.nombre} — planta del recinto`, { lightbox: false })}</figure>
                ${b.puntos.map((pt, i) => `
                    <button type="button" class="pl-dot" style="--x:${pt.x}%;--y:${pt.y}%;--k:${i}" data-i="${i}" aria-label="${esc(pt.titulo)}" aria-expanded="false">
                        <span>${i + 1}</span>
                    </button>`).join('')}
                <div class="pl-card" role="status" aria-live="polite"><span class="pl-num"></span><strong class="pl-title"></strong><p class="pl-text"></p></div>
            </div>
            <ol class="pl-list">
                ${b.puntos.map((pt, i) => `<li data-i="${i}"><span>${pad(i + 1)}</span><b>${esc(pt.titulo)}</b><small class="pl-desc">${esc(pt.texto)}</small></li>`).join('')}
            </ol>
            <script type="application/json" class="pl-data">${JSON.stringify(b.puntos.map(pt => ({ t: pt.titulo, d: pt.texto }))).replace(/</g, '\\u003c')}</script>
        </section>`,

    recorrido: (b, p) => `
        <section class="case-block hscroll recorrido" data-hscroll>
            <div class="hs-stage">
                <div class="hs-head">
                    <div>
                        <h3 class="kippa-h3">${esc(b.titulo)}</h3>
                        ${b.texto ? `<p class="kippa-p block-text">${esc(b.texto)}</p>` : ''}
                    </div>
                    <span class="hs-count"><b>01</b> / ${pad(b.items.length)}</span>
                </div>
                <div class="hs-track">
                    ${b.items.map((it, i) => `
                    <figure class="hs-item rc-card" style="--k:${i}">
                        <div class="rc-media">${img(it.src, `${p.nombre} — ${it.titulo}`, { cursor: 'Ampliar' }).replace('loading="lazy"', 'loading="eager"')}</div>
                        <figcaption><span class="rc-n">${pad(i + 1)}</span><strong>${esc(it.titulo)}</strong><span class="rc-t">${esc(it.texto)}</span></figcaption>
                    </figure>`).join('')}
                </div>
                <div class="hs-bar" aria-hidden="true"><i></i></div>
            </div>
        </section>`,

    paleta: b => {
        const luz = hex => { const n = parseInt(hex.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) > 160; };
        return `
        <section class="case-block palette" data-reveal-group>
            <div class="block-head"><h3 class="kippa-h3">${esc(b.titulo)}</h3><p class="block-sub">Haz clic en un color para copiar su código.</p></div>
            ${b.grupos.map((g, gi) => `
                <div class="pal-group">
                    <span class="pal-name">${esc(g.nombre)}</span>
                    <div class="pal-row${gi === 0 ? ' is-main' : ''}">
                        ${g.colores.map((c, i) => `
                            <button type="button" class="swatch${luz(c.hex) ? ' is-light' : ''}" data-hex="${esc(c.hex)}" style="--c:${esc(c.hex)};--k:${gi * 3 + i}" data-cursor="Copiar">
                                ${c.nombre ? `<span class="sw-name">${esc(c.nombre)}</span>` : ''}
                                <span class="sw-hex">${esc(c.hex)}</span>
                                <span class="sw-rgb">RGB ${esc(c.rgb)}</span>
                            </button>`).join('')}
                    </div>
                </div>`).join('')}
        </section>`;
    },

    tipos: b => `
        <section class="case-block scene scene-tipos" data-scene data-steps="2">
            <div class="scene-stage">
                <span class="scene-label">${esc(b.titulo)}</span>
                <figure class="ty-a"><img src="${esc(b.principal)}" alt="Osborn, tipografía principal" draggable="false"></figure>
                <figure class="ty-b"><img src="${esc(b.secundaria)}" alt="Helvetica Neue, tipografía secundaria" draggable="false"></figure>
                <div class="ty-c">
                    <p class="ty-title">${esc(b.nombreSecundaria)}</p>
                    <div class="ty-groups">${b.pesos.map((src, i) => `<img src="${esc(src)}" alt="" style="--k:${i}" draggable="false">`).join('')}</div>
                </div>
                <div class="scene-dots" aria-hidden="true"><i data-i="0"></i><i data-i="1"></i></div>
            </div>
        </section>`,

    cifras: b => `
        <section class="case-block case-figures">
            <div class="block-head" data-reveal>
                <h3 class="kippa-h3">${esc(b.titulo)}</h3>
                ${b.intro ? `<p class="kippa-p block-text">${esc(b.intro)}</p>` : ''}
            </div>
            <div class="figures-row">
                ${b.items.map((it, i) => `
                    <div class="figure${it.destacado ? ' is-key' : ''}" data-reveal style="--d:${i * 0.12}s">
                        <span class="figure-num" data-count="${esc(it.numero)}">${esc(it.numero)}</span>
                        <span class="figure-text">${esc(it.texto)}</span>
                    </div>`).join('')}
            </div>
        </section>`,

    pasos: (b, p) => `
        <section class="case-block case-steps">
            ${blockHead(b)}
            <ol class="steps">
                ${b.items.map((it, i) => `
                    <li class="step" data-reveal style="--d:${i * 0.12}s">
                        <div class="step-media">${img(it.img, `${p.nombre} — ${it.titulo}`, { cursor: 'Ampliar' })}</div>
                        <div class="step-body">
                            <span class="step-num">${i + 1}</span>
                            <h4 class="step-title">${esc(it.titulo)}</h4>
                            <p class="step-text">${esc(it.texto)}</p>
                        </div>
                    </li>`).join('')}
            </ol>
        </section>`,

    voces: b => `
        <section class="case-block case-voices">
            <div class="block-head" data-reveal>
                <h3 class="kippa-h3">${esc(b.titulo)}</h3>
                ${b.intro ? `<p class="kippa-p block-text">${esc(b.intro)}</p>` : ''}
            </div>
            <div class="voices-grid" data-voices>
                ${b.items.map((it, i) => `
                    <figure class="voice" style="--i:${i}">
                        <blockquote>“${esc(it.texto)}”</blockquote>
                        <figcaption>${esc(it.autor)}</figcaption>
                    </figure>`).join('')}
            </div>
        </section>`,

    dato: b => `
        <section class="case-block muma-research-section">
            <div class="muma-research-header" data-reveal>
                <h3 class="kippa-h3">${esc(b.titulo)}</h3>
                ${b.intro ? `<p class="kippa-p">${esc(b.intro)}</p>` : ''}
            </div>
            <div class="muma-research-vertical-flow">
                <div class="muma-stat-item" data-reveal>
                    <span class="muma-big-number" data-count-scroll="${esc(b.numero)}">${esc(b.numero)}</span>
                    <span class="muma-stat-desc">${esc(b.descripcion)}</span>
                </div>
                ${b.texto ? `<div class="muma-research-desc-item" data-reveal><p class="kippa-p">${esc(b.texto)}</p></div>` : ''}
            </div>
        </section>`,

    tira: (b, p) => {
        const app = b.estilo === 'app';
        return `
        <section class="case-block">
            ${blockHead(b)}
            <div class="${app ? 'app-ui-horizontal-strip' : 'app-horizontal-strip'}" data-drag data-cursor="Arrastra" data-reveal>
                ${b.imagenes.map((s, i) => img(s, `${p.nombre} — ${b.titulo || ''} ${i + 1}`, { cls: app ? 'app-ui-raw-image' : 'app-raw-image' })).join('')}
            </div>
        </section>`;
    },

    marca: b => `
        <section class="case-block brand-section">
            <div class="block-head block-head-center" data-reveal>
                <h3 class="kippa-h3">${esc(b.titulo)}</h3>
                ${b.texto ? `<p class="kippa-p">${esc(b.texto)}</p>` : ''}
            </div>
            <div class="brand-grid" style="--n:${b.piezas.length}">
                ${b.piezas.map((x, i) => `
                    <div class="brand-piece" data-reveal style="--d:${i * 0.1}s">
                        <span class="kippa-meta-label">${esc(x.label)}</span>
                        <img src="${esc(x.src)}" alt="${esc(x.label)}" style="width:${esc(x.ancho || '120px')}" loading="lazy" draggable="false">
                    </div>`).join('')}
            </div>
        </section>`
};

function buildCaseStudy(p) {
    const idx = proyectos.indexOf(p);
    const nextIdx = (idx + 1) % proyectos.length;
    const next = proyectos[nextIdx];

    const fotoIntro = p.intro === 'foto' || p.intro === 'pausa' || p.intro === 'ruta';
    const midoIntro = p.intro === 'mido' || p.intro === 'muma' || p.intro === 'habitat' || p.intro === 'yunus' || p.intro === 'tela' || p.intro === 'sastre' || p.intro === 'revista' || p.intro === 'vt' || p.intro === 'cuaderno' || p.intro === 'collage' || fotoIntro;
    const header = p.intro === 'habitat' ? habitatHero(p) : p.intro === 'yunus' ? yunusHero(p) : p.intro === 'collage' ? collageHero(p) : p.intro === 'cuaderno' ? cuadernoHero(p) : p.intro === 'vt' ? vtHero(p) : p.intro === 'revista' ? revistaHero(p) : p.intro === 'tela' ? telaHero(p) : p.intro === 'sastre' ? sastreHero(p) : fotoIntro ? fotoHero(p) : midoIntro ? midoHero(p) : p.logos ? `
        <div class="kippa-project-main-logo-wrap" data-reveal>
            ${p.logos.isotipo ? `<img src="${esc(p.logos.isotipo)}" alt="" class="kippa-project-isotipo"${p.logos.isotipoAncho ? ` style="width:${esc(p.logos.isotipoAncho)};height:auto"` : ''}>` : ''}
            ${p.logos.logotipo ? `<img src="${esc(p.logos.logotipo)}" alt="" class="kippa-project-main-logo"${p.logos.logotipoAncho ? ` style="width:${esc(p.logos.logotipoAncho)}"` : ''}>` : ''}
            <h1 class="visually-hidden">${esc(p.nombre)}</h1>
        </div>`
        : `<h1 class="kippa-project-title" data-split>${esc(p.nombre)}</h1>${p.subtitulo ? `<p class="kippa-project-sub" data-reveal>${esc(p.subtitulo)}</p>` : ''}`;

    return `
        <div class="kippa-case-container${p.intro ? ` intro-${esc(p.intro)}` : ''}"${p.color ? ` style="--case-accent:${esc(p.color.acento)};--case-medio:${esc(p.color.medio)};--case-suave:${esc(p.color.suave)};--case-tinta:${esc(p.color.tinta)}"` : ''}>
            <div class="kippa-top-bar">
                <span class="kippa-location">${esc(p.categoria)}</span>
                <span class="kippa-logo">JC / ARCHIVO — ${pad(idx + 1)}/${pad(proyectos.length)}</span>
                <button type="button" class="kippa-close-btn" data-close>CERRAR ✕</button>
            </div>

            ${header}

            ${midoIntro ? '' : `<div class="kippa-meta-bar" data-reveal>
                <div class="kippa-meta-col">
                    <span class="kippa-meta-label">Año</span>
                    <span class="kippa-meta-val">${esc(p.year)}</span>
                </div>
                <div class="kippa-meta-col">
                    <span class="kippa-meta-label">Servicios</span>
                    <span class="kippa-meta-val">${esc(p.servicios)}</span>
                </div>
                <div class="kippa-meta-col">
                    <span class="kippa-meta-label">Cliente / Contexto</span>
                    <span class="kippa-meta-val">${esc(p.cliente)}</span>
                </div>
            </div>`}

            ${p.manifiesto && !midoIntro ? `<h2 class="case-manifesto" data-split>${esc(p.manifiesto)}</h2>` : ''}

            ${p.hero ? `<div class="kippa-hero-banner"${midoIntro ? ' data-scrub' : ' data-reveal="image"'}>
                ${img(p.hero, p.nombre, { cursor: 'Ampliar' })}
            </div>` : ''}

            ${p.libre ? `<div class="ruta-intro"><p class="kippa-lead-text" data-reveal>${esc(p.tagline)}</p></div>` : `<div class="kippa-content-grid">
                <div class="kippa-intro-col">
                    <p class="kippa-lead-text" data-reveal>${esc(p.tagline)}</p>
                    ${p.tagline2 ? `<p class="kippa-lead-sub" data-reveal>${esc(p.tagline2)}</p>` : ''}
                </div>
                <div class="kippa-details-col">
                    <div class="kippa-detail-block" data-reveal>
                        <h3 class="kippa-h3">Objetivo del Proyecto</h3>
                        <p class="kippa-p">${esc(p.objetivo)}</p>
                    </div>
                    <div class="kippa-detail-block" data-reveal>
                        <h3 class="kippa-h3">Mi Rol en el Proyecto</h3>
                        <p class="kippa-p">${esc(p.rol)}</p>
                    </div>
                    <div class="kippa-detail-block" data-reveal>
                        <h3 class="kippa-h3">Resultados Obtenidos</h3>
                        <p class="kippa-p">${esc(p.resultados)}</p>
                    </div>
                </div>
            </div>`}

            ${(p.bloques || []).map(b => { const h = renderBloque[b.tipo] ? renderBloque[b.tipo](b, p) : ''; let o = typeof b.fondo === 'string' ? h.replace('<section ', `<section data-bg="${esc(b.fondo)}" `) : h; if (b.claro) o = o.replace('class="case-block', 'class="case-block is-claro'); return o; }).join('')}

            <div class="kippa-footer-cta" data-reveal>
                <p class="kippa-footer-label">¿CONVERSAMOS SOBRE TU PROYECTO?</p>
                <a href="#contact-section" class="kippa-footer-btn" data-close data-magnetic="0.25">ESCRÍBEME</a>
            </div>

            <a href="#caso-${next.slug}" class="next-project" data-replace data-cursor="Abrir">
                <div class="next-text">
                    <span class="next-label">Siguiente proyecto — ${pad(nextIdx + 1)}</span>
                    <span class="next-title">${esc(next.nombre)}</span>
                    <span class="next-cat">${esc(next.categoria)} · ${esc(next.year)}</span>
                </div>
                <div class="next-media">${img(next.portada, '', { lightbox: false })}</div>
            </a>
        </div>`;
}


/* Escenas con scroll: la sección queda fija y cambia de "lámina" según el avance,
   como el smart animate de Figma. */
let sceneUpdaters = [];
function setupScenes(body) {
    const m = modal();
    sceneUpdaters = $$('[data-scene]', body).map(sc => {
        const n = parseInt(sc.dataset.steps, 10) || 1;
        sc.style.height = `${(n + 0.6) * 100}vh`;
        return () => {
            const r = sc.getBoundingClientRect();
            const total = sc.offsetHeight - m.clientHeight;
            const p = total > 0 ? clamp(-r.top / total) : 0;
            const step = Math.min(n - 1, Math.floor(p * n));
            if (r.top < m.clientHeight * 0.5) sc.classList.add('is-active');
            if (sc.dataset.step === String(step)) return;
            sc.dataset.step = String(step);
            const texts = $$('.scene-text', sc);
            texts.forEach((t, i) => t.classList.toggle('is-on', i === step));
            $$('.scene-dots i', sc).forEach((d, i) => d.classList.toggle('is-on', i === step));
            const cur = texts[step];
            sc.classList.toggle('is-final', cur?.dataset.final === '1');
            sc.style.setProperty('--x', cur?.classList.contains('is-izquierda') ? 'var(--x-der)' : 'var(--x-izq)');
        };
    });
    sceneUpdaters.forEach(u => u());
}

/* Elementos cuyo avance sigue al scroll (entrada del recurso gráfico) */
function setupScrubs(body) {
    const m = modal();
    return $$('[data-scrub]', body).map(el => () => {
        const vh = m.clientHeight;
        const p = prefersReducedMotion ? 1 : clamp((vh - el.getBoundingClientRect().top) / (vh * 0.85));
        el.style.setProperty('--p', p.toFixed(3));
    });
}

/* Galería horizontal: en escritorio se fija y el scroll vertical la mueve hacia el lado */
function setupHScroll(body) {
    const m = modal();
    const wide = window.matchMedia('(min-width: 901px)');
    return $$('[data-hscroll]', body).map(sec => {
        const track = $('.hs-track', sec);
        const bar = $('.hs-bar i', sec);
        const count = $('.hs-count b', sec);
        const items = $$('.hs-item', sec);
        let max = 0;
        const update = () => {
            const r = sec.getBoundingClientRect();
            if (r.top < m.clientHeight * 0.65) sec.classList.add('is-active');
            if (!max) return;
            const p = clamp(-r.top / (sec.offsetHeight - m.clientHeight));
            track.style.transform = `translate3d(${(-p * max).toFixed(1)}px, 0, 0)`;
            bar.style.transform = `scaleX(${p.toFixed(3)})`;
            count.textContent = pad(Math.min(items.length, Math.round(p * (items.length - 1)) + 1));
        };
        const measure = () => {
            if (!wide.matches || prefersReducedMotion) { sec.style.height = ''; track.style.transform = ''; max = 0; return; }
            max = Math.max(0, track.scrollWidth - m.clientWidth);
            sec.style.height = `${max + m.clientHeight}px`;
            update();
        };
        $$('img', track).forEach(im => { if (!im.complete) im.addEventListener('load', measure, { once: true }); });
        measure();
        return update;
    });
}

/* Grupos que se revelan con elementos escalonados (nodos, panel) */
function setupRevealGroups(body, root) {
    const groups = $$('[data-reveal-group]', body);
    if (prefersReducedMotion || !('IntersectionObserver' in window)) { groups.forEach(g => g.classList.add('is-in')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }), { root, threshold: 0.35 });
    groups.forEach(g => io.observe(g));
}

function setupDragScroll(el, signal) {
    let down = false, startX = 0, startLeft = 0, moved = false;
    el.addEventListener('pointerdown', e => {
        if (e.pointerType !== 'mouse' || e.button !== 0) return;
        down = true; moved = false;
        startX = e.clientX; startLeft = el.scrollLeft;
    }, { signal });
    window.addEventListener('pointermove', e => {
        if (!down) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 5) { moved = true; el.classList.add('is-dragging'); }
        el.scrollLeft = startLeft - dx;
    }, { signal });
    window.addEventListener('pointerup', () => {
        if (!down) return;
        down = false;
        el.classList.remove('is-dragging');
    }, { signal });
    el.addEventListener('click', e => {
        if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
    }, { capture: true, signal });
}

function openCaseStudy(p) {
    const m = modal();
    const body = $('#case-study-content');
    if (!m || !body) return;

    if (!isModalOpen()) lastFocus = document.activeElement;

    modalAbort?.abort();
    modalAbort = new AbortController();
    modalObserver?.disconnect();

    body.innerHTML = buildCaseStudy(p);
    m.scrollTop = 0;
    m.classList.add('is-open');
    m.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('modal-open');
    document.title = `${p.nombre} — Josefina Castro`;

    splitText(body);
    modalObserver = observeReveals(body, m);
    $$('[data-drag]', body).forEach(el => setupDragScroll(el, modalAbort.signal));
    setupMagnetic(body, modalAbort.signal);
    setupScenes(body);
    sceneUpdaters.push(...setupScrubs(body), ...setupHScroll(body), ...setupMidoHero(body), ...setupBgShift(body), ...setupWords(body), ...setupCountScroll(body), ...setupVoices(body), ...setupFotoHero(body), ...setupRuta(body), ...setupTesorosBg(body), ...setupGrabado(body), ...setupPlanta(body), ...setupBitacora(body), ...setupEspecies(body), ...setupHabScroll(body), ...setupColeccion(body), ...setupYunusHero(body), ...setupCalma(body), ...setupSerie(body), ...setupFirma(body), ...setupTextilHeroes(body), ...setupTaller(body), ...setupLookbook(body), ...setupLooks(body), ...setupRevista(body), ...setupVt(body), ...setupCuaderno(body), ...setupTilt(body), ...setupCollage(body), ...setupIlani(body));
    sceneUpdaters.forEach(u => u());
    setupRevealGroups(body, m);
    updateModalProgress();

    requestAnimationFrame(() => $('[data-close]', body)?.focus({ preventScroll: true }));
}

function closeModalUI() {
    const m = modal();
    if (!m || !isModalOpen()) return;
    m.classList.remove('is-open');
    m.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('modal-open');
    document.title = SITE_TITLE;
    modalAbort?.abort();
    modalObserver?.disconnect();
    lastFocus?.focus?.({ preventScroll: true });
}

/* Cada proyecto tiene su link: tusitio.com/#caso-muma
   El botón "atrás" del navegador cierra el caso. */
function handleRoute() {
    const m = location.hash.match(/^#caso-([\w-]+)/);
    const p = m && proyectos.find(x => x.slug === m[1]);
    if (p) openCaseStudy(p);
    else closeModalUI();
}

function requestClose() {
    if (navigatedInside) {
        navigatedInside = false;
        history.back();
    } else {
        history.replaceState(null, '', location.pathname + location.search);
        closeModalUI();
    }
}

function updateModalProgress() {
    const m = modal();
    const bar = $('#modal-progress-bar');
    if (!m || !bar) return;
    const max = m.scrollHeight - m.clientHeight;
    bar.style.transform = `scaleX(${max > 0 ? m.scrollTop / max : 0})`;
}


/* =========================================================
   10. LIGHTBOX
   ========================================================= */
const lb = { list: [], i: 0 };
const lbEl = () => $('#lightbox');
const isLightboxOpen = () => lbEl()?.classList.contains('is-open');

function showLightbox() {
    const im = lb.list[lb.i];
    if (!im) return;
    const target = $('#lightbox-img');
    target.src = im.currentSrc || im.src;
    target.alt = im.alt;
    $('#lightbox-caption').textContent = `${pad(lb.i + 1)} / ${pad(lb.list.length)}`;
    $$('.lightbox-nav').forEach(b => { b.hidden = lb.list.length < 2; });
}

function openLightbox(list, i) {
    lb.list = list; lb.i = Math.max(0, i);
    showLightbox();
    lbEl().classList.add('is-open');
    lbEl().setAttribute('aria-hidden', 'false');
    $('.lightbox-close').focus({ preventScroll: true });
}

function closeLightbox() {
    lbEl().classList.remove('is-open');
    lbEl().setAttribute('aria-hidden', 'true');
    $('#case-study-content [data-close]')?.focus({ preventScroll: true });
}

function stepLightbox(d) {
    const n = lb.list.length;
    lb.i = (lb.i + d + n) % n;
    showLightbox();
}

function trapFocus(e, container) {
    const f = $$('a[href], button:not([disabled]):not([hidden]), [tabindex]:not([tabindex="-1"])', container)
        .filter(el => el.getClientRects().length);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}


/* =========================================================
   11. EVENTOS GLOBALES
   ========================================================= */
function setupGlobalEvents() {
    document.addEventListener('click', e => {
        if (e.target.closest('a[href^="#caso-"]:not([data-replace])')) navigatedInside = true;
    });

    // "Siguiente proyecto" reemplaza la URL (así "atrás" vuelve a la portada)
    document.addEventListener('click', e => {
        const a = e.target.closest('a[data-replace]');
        if (!a) return;
        e.preventDefault();
        const slug = a.getAttribute('href').replace('#caso-', '');
        const p = proyectos.find(x => x.slug === slug);
        if (!p) return;
        history.replaceState(null, '', `#caso-${slug}`);
        openCaseStudy(p);
    });

    document.addEventListener('click', e => {
        const c = e.target.closest('[data-close]');
        if (!c) return;
        if (c.tagName === 'A') {
            // "Escríbeme": cierra el caso y baja al contacto
            e.preventDefault();
            history.replaceState(null, '', location.pathname + location.search);
            navigatedInside = false;
            closeModalUI();
            setTimeout(() => $('#contact-section')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' }), 400);
        } else {
            requestClose();
        }
    });

    document.addEventListener('click', async e => {
        const sw = e.target.closest('.swatch');
        if (!sw) return;
        try { await navigator.clipboard.writeText(sw.dataset.hex); } catch { /* sin portapapeles */ }
        sw.classList.add('is-copied');
        setTimeout(() => sw.classList.remove('is-copied'), 1400);
    });

    document.addEventListener('click', e => {
        const im = e.target.closest('#case-study-content img[data-lightbox]');
        if (!im || im.classList.contains('img-missing')) return;
        const list = $$('#case-study-content img[data-lightbox]').filter(x => !x.classList.contains('img-missing'));
        openLightbox(list, list.indexOf(im));
    });

    const lbox = lbEl();
    lbox?.addEventListener('click', e => {
        if (e.target === lbox || e.target.classList.contains('lightbox-figure')) closeLightbox();
    });
    $('.lightbox-close')?.addEventListener('click', closeLightbox);
    $('.lightbox-prev')?.addEventListener('click', () => stepLightbox(-1));
    $('.lightbox-next')?.addEventListener('click', () => stepLightbox(1));

    window.addEventListener('keydown', e => {
        if (isLightboxOpen()) {
            if (e.key === 'Escape') closeLightbox();
            else if (e.key === 'ArrowRight') stepLightbox(1);
            else if (e.key === 'ArrowLeft') stepLightbox(-1);
            else if (e.key === 'Tab') trapFocus(e, lbox);
            return;
        }
        if (isModalOpen()) {
            if (e.key === 'Escape') requestClose();
            else if (e.key === 'Tab') trapFocus(e, modal());
        }
    });

    modal()?.addEventListener('scroll', () => { updateModalProgress(); sceneUpdaters.forEach(u => u()); }, { passive: true });
    window.addEventListener('hashchange', handleRoute);
}


/* =========================================================
   12. DETALLES
   ========================================================= */
function initLiveClock() {
    const el = $('#hero-live-clock');
    if (!el) return;
    const update = () => {
        const t = new Date().toLocaleTimeString('es-CL', {
            hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Santiago'
        });
        el.textContent = `Santiago, CL ${t}`;
    };
    update();
    setInterval(update, 15000);
}

function setupChickInteraction() {
    const chick = $('#chick-character');
    if (!chick) return;
    if (chick.querySelector('.pc')) return setupChickLife(chick);
    chick.addEventListener('click', () => {
        chick.style.animationPlayState = 'paused';
        chick.style.transition = 'transform 0.65s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        chick.style.transform = 'translateY(-45px) rotate(360deg) scale(1.3)';
        setTimeout(() => {
            chick.style.transition = '';
            chick.style.transform = '';
            chick.style.animationPlayState = 'running';
        }, 700);
    });
}

/* Pollito con vida: camina, picotea, salta y vuela sobre el nombre */
function setupChickLife(chick) {
    const stage = chick.parentElement;
    const pc = $('.pc', chick);
    if (prefersReducedMotion) { chick.classList.add('is-idle'); return; }

    let x = 0, y = -420, dir = 1, interrupt = null;
    const states = ['is-walk', 'is-idle', 'is-peck', 'is-hop', 'is-fly'];
    const setState = s => { states.forEach(c => chick.classList.toggle(c, c === s)); };
    const place = (tilt = 0) => {
        chick.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        pc.style.transform = `scaleX(${dir}) rotate(${tilt}deg)`;
    };
    const maxX = () => Math.max(0, stage.clientWidth - chick.offsetWidth);
    const rand = (a, b) => a + Math.random() * (b - a);
    const wait = ms => new Promise(r => { const t = setTimeout(r, ms); const iv = setInterval(() => { if (interrupt) { clearTimeout(t); clearInterval(iv); r(); } }, 50); setTimeout(() => clearInterval(iv), ms + 60); });

    // mueve el pollito de (x,y) a (tx,ty) con un arco opcional
    function move(tx, ty, ms, arc = 0, ease = t => t, tilt = () => 0) {
        const x0 = x, y0 = y;
        return new Promise(res => {
            const t0 = performance.now();
            (function step(now) {
                const k = Math.min(1, (now - t0) / ms), e = ease(k);
                x = x0 + (tx - x0) * e;
                y = y0 + (ty - y0) * e - arc * 4 * k * (1 - k);
                place(tilt(k));
                if (k < 1 && !interrupt) requestAnimationFrame(step); else res();
            })(t0);
        });
    }
    const inOut = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const face = tx => { if (Math.abs(tx - x) > 4) dir = tx > x ? 1 : -1; };

    async function walk() {
        const M = maxX();
        let tx = rand(0, M);
        if (Math.abs(tx - x) < M * .2) tx = x < M / 2 ? rand(M * .55, M) : rand(0, M * .45);
        face(tx); setState('is-walk');
        await move(tx, 0, Math.abs(tx - x) / 85 * 1000);
    }
    async function idle() {
        setState('is-idle'); await wait(rand(700, 1500));
        if (Math.random() < .6) { setState('is-peck'); await wait(1050); }
        if (Math.random() < .5) { dir *= -1; place(); setState('is-idle'); await wait(rand(500, 1100)); }
    }
    async function hops() {
        const M = maxX(), n = 2 + Math.floor(Math.random() * 3);
        if ((dir > 0 && x > M - 100) || (dir < 0 && x < 100)) dir *= -1;
        for (let i = 0; i < n && !interrupt; i++) {
            const tx = Math.min(M, Math.max(0, x + dir * rand(55, 95)));
            setState('is-hop');
            await move(tx, 0, 420, rand(26, 40), t => t, k => -10 * Math.sin(k * Math.PI));
            setState('is-idle'); await wait(120);
        }
    }
    async function fly(big = false) {
        const M = maxX();
        const tx = big ? x : (x < M / 2 ? rand(M * .65, M) : rand(0, M * .35));
        face(tx === x ? x + dir : tx);
        setState('is-fly');
        await move(tx, 0, big ? 1500 : rand(1500, 2100), big ? 240 : rand(150, 260), inOut, k => -14 * Math.sin(k * Math.PI));
        setState('is-hop'); await wait(160);
    }
    // paseo aéreo: despega, revolotea sobre el nombre y vuelve a aterrizar
    async function flyTour() {
        const M = maxX(), n = 3 + Math.floor(Math.random() * 3);
        setState('is-fly');
        for (let i = 0; i < n && !interrupt; i++) {
            const tx = rand(0, M), ty = -rand(70, 230);
            face(tx);
            await move(tx, ty, rand(700, 1100), rand(10, 40), inOut, k => -10 * Math.sin(k * Math.PI));
            // flota un momento en el aire
            const y0 = y;
            await move(x + dir * rand(6, 18), y0 - rand(8, 16), rand(350, 600), 0, inOut);
        }
        const land = Math.min(M, Math.max(0, x + dir * rand(40, 120)));
        face(land);
        await move(land, 0, rand(800, 1100), 0, inOut, k => 8 * k);
        setState('is-hop'); await wait(180);
    }

    async function life() {
        // entrada: llega volando desde arriba
        await new Promise(r => setTimeout(r, 900));
        setState('is-fly'); place();
        await move(0, 0, 1300, 0, t => 1 - Math.pow(1 - t, 3));
        setState('is-hop'); await wait(200);
        for (;;) {
            if (interrupt) { const f = interrupt; interrupt = null; await f(); continue; }
            const r = Math.random();
            if (r < .26) await walk();
            else if (r < .40) await idle();
            else if (r < .54) await hops();
            else if (r < .76) await fly();
            else await flyTour();
        }
    }
    place(); life();

    // al pasar el mouse da un saltito; al hacer clic vuela
    chick.addEventListener('pointerenter', () => {
        if (chick.classList.contains('is-fly') || interrupt) return;
        interrupt = async () => { setState('is-hop'); await move(x, 0, 380, 34); setState('is-idle'); await wait(250); };
    });
    chick.addEventListener('click', () => { interrupt = () => (Math.random() < .5 ? fly(true) : flyTour()); });
    window.addEventListener('resize', debounce(() => { x = Math.min(x, maxX()); place(); }));
}

function setupContact() {
    const greet = $('#contact-greeting');
    if (greet) {
        const h = Number(new Intl.DateTimeFormat('es-CL', {
            hour: 'numeric', hourCycle: 'h23', timeZone: 'America/Santiago'
        }).format(new Date()));
        const saludo = h < 12 ? 'Buenos días' : h < 20 ? 'Buenas tardes' : 'Buenas noches';
        greet.textContent = 'Let’s talk';
    }

    setupContactIntro();

    const btn = $('#copy-email');
    if (!btn) return;
    btn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(btn.dataset.email || EMAIL);
            btn.textContent = '¡Copiado! ✓';
            btn.classList.add('is-copied');
        } catch {
            const r = document.createRange();
            r.selectNodeContents($('.contact-email-link'));
            const s = getSelection(); s.removeAllRanges(); s.addRange(r);
            btn.textContent = 'Email seleccionado';
        }
        setTimeout(() => { btn.textContent = 'Copiar email'; btn.classList.remove('is-copied'); }, 2200);
    });
}

/* Contacto: el bloque negro crece al entrar y el mail aparece letra por letra */
function setupContactIntro() {
    const sec = $('#contact-section');
    if (!sec) return;
    const mail = $('.contact-email-link', sec);
    if (mail && !mail.querySelector('.ce-ch')) {
        const t = mail.textContent.trim();
        mail.setAttribute('aria-label', t);
        mail.innerHTML = `<span class="ce-line" aria-hidden="true">${[...t].map((c, i) => `<span class="ce-ch" style="--i:${i}">${c}</span>`).join('')}</span>`;
        mail.removeAttribute('data-reveal');
        mail.classList.add('is-split');
    }
    $$('[data-reveal]', sec).forEach(el => el.setAttribute('data-ct', ''));
    if (prefersReducedMotion) { sec.classList.add('ct-in'); return; }
    sec.classList.add('ct-anim');
    new IntersectionObserver(([e], o) => {
        if (e.isIntersecting) { sec.classList.add('ct-in'); o.disconnect(); }
    }, { threshold: .28 }).observe(sec);
}
function setupContactScroll() {
    const sec = $('#contact-section');
    if (!sec || prefersReducedMotion) return () => {};
    return () => {
        const r = sec.getBoundingClientRect(), vh = window.innerHeight;
        const p = clamp((vh - r.top) / (vh * .75));
        sec.style.setProperty('--cp', p.toFixed(3));
    };
}


/* =========================================================
   13. INICIO
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    setupImageFallback();
    splitLetters();
    fitHeroName();
    renderStack();
    splitText();
    observeReveals();
    setupReel();
    initLiveClock();
    setupChickInteraction();
    setupCursor();
    setupMagnetic();
    setupMarquee();
    setupActiveNav();
    setupContact();
    setupGlobalEvents();

    setupScroll([setupHeroScroll(), setupStackScroll(), setupContactScroll()]);

    handleRoute(); // abre el caso si se entró con un link directo (#caso-muma)
});

/* =========================================================
   PERFIL — diagrama: la línea une las palabras y se dibuja con el scroll
   ========================================================= */
(function setupAboutDiagram() {
    const box = document.getElementById('about-diagram');
    if (!box) return;
    const svg = box.querySelector('.ad-svg');
    const path = box.querySelector('.ad-path');
    const words = [...box.querySelectorAll('.ad-w')];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const marks = [0, .3, .64, .96];   // en qué punto del trazo aparece cada palabra

    function build() {
        const b = box.getBoundingClientRect();
        const W = b.width, H = b.height;
        if (!W) return;
        svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
        const r = words.map(w => {
            const q = w.getBoundingClientRect();
            return { l: q.left - b.left, r: q.right - b.left, y: q.top - b.top + q.height * .56 };
        });
        const g = W * .025;                 // aire entre palabra y línea
        const R = W * 1.02, L = -W * .02;   // hasta dónde se abre cada curva
        const d = [
            `M ${r[0].r + g} ${r[0].y}`,
            `C ${R} ${r[0].y - H * .03}, ${R} ${r[1].y + H * .01}, ${r[1].r + g} ${r[1].y}`,
            `M ${r[1].l - g} ${r[1].y}`,
            `C ${L} ${r[1].y - H * .01}, ${L} ${r[2].y + H * .01}, ${r[2].l - g} ${r[2].y}`,
            `M ${r[2].r + g} ${r[2].y}`,
            `C ${R} ${r[2].y - H * .01}, ${R} ${r[3].y + H * .02}, ${r[3].r + g} ${r[3].y}`
        ].join(' ');
        path.setAttribute('d', d);
        box.classList.add('is-ready');
        update();
    }

    function update() {
        if (reduce) { box.style.setProperty('--draw', 0); return; }
        const b = box.getBoundingClientRect(), vh = window.innerHeight;
        // empieza cuando el diagrama entra por abajo y termina cuando su centro pasa el 40% de la pantalla
        const p = Math.min(1, Math.max(0, (vh * .95 - b.top) / (vh * .55 + b.height * .5)));
        box.style.setProperty('--draw', (1 - p).toFixed(4));
        words.forEach((w, i) => w.classList.toggle('is-off', p < marks[i] + (i ? 0 : .02)));
    }

    let raf = 0;
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); }); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', build);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(build);
    build();
})();
