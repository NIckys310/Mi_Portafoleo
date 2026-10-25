/*
 * CONTENIDO DEL PORTAFOLIO
 * ------------------------------------------------------------
 * Este archivo es la "base de datos" del sitio. Todo lo que ves
 * en la página sale de aquí. Cada texto tiene versión en español
 * (es) y en inglés (en).
 *
 * Para cambios permanentes:
 *   1. Edita desde el Panel de control (icono de engranaje).
 *   2. Pulsa "Exportar content.js".
 *   3. Reemplaza este archivo por el descargado y vuelve a publicar.
 */
window.PORTFOLIO_CONTENT = {
  profile: {
    name: "Nicoll Valentina",
    brand: "Nicoll",
    email: "nickyandrade4891@gmail.com",
    // Número con indicativo de país, solo dígitos. Ej: 573001234567
    whatsapp: "573138516777",
    github: "NIckys310",
    // URL completa de tu perfil. Ej: https://www.linkedin.com/in/tu-usuario
    linkedin: "https://www.linkedin.com/in/nicoll-undefined-43a350445",
    location: { es: "Pasto, Colombia", en: "Pasto, Colombia" },
    photo: "assets/media/foto.jpg",
    available: true,
    headline: {
      es: "Diseño y desarrollo productos digitales.",
      en: "I design and build digital products."
    },
    subtitle: {
      es: "Diseñadora gráfica y estudiante de Ingeniería de Software. Creo interfaces cuidadas y el código que las hace funcionar en web, móvil e IA.",
      en: "Graphic designer and Software Engineering student. I craft thoughtful interfaces and the code that powers them across web, mobile and AI."
    },
    about: [
      {
        es: "Combino dos formas de pensar: la del diseño, que se pregunta cómo se siente usar algo, y la de la ingeniería, que se pregunta cómo hacerlo confiable. Esa mezcla es la que llevo a cada proyecto.",
        en: "I combine two ways of thinking: design, which asks how something feels to use, and engineering, which asks how to make it reliable. That mix is what I bring to every project."
      },
      {
        es: "He construido plataformas web con IA, apps Android, sistemas de escritorio en Java y asistentes de voz. Trabajo con arquitectura por capas, patrones de diseño y documentación clara para que el software sea fácil de mantener.",
        en: "I have built AI web platforms, Android apps, Java desktop systems and voice assistants. I work with layered architecture, design patterns and clear documentation so software stays easy to maintain."
      }
    ]
  },

  services: [
    {
      icon: "ph-pen-nib",
      title: { es: "Diseño UI/UX", en: "UI/UX design" },
      text: {
        es: "Interfaces claras, prototipos en Figma, sistemas de diseño con tokens y accesibilidad desde el inicio.",
        en: "Clear interfaces, Figma prototypes, token-based design systems and accessibility from day one."
      },
      tags: ["Figma", "Design systems", "Prototipado"]
    },
    {
      icon: "ph-browser",
      title: { es: "Desarrollo web", en: "Web development" },
      text: {
        es: "Sitios y aplicaciones rápidas, responsive y listas para producción, desde landing pages hasta paneles con login.",
        en: "Fast, responsive, production ready sites and apps, from landing pages to dashboards with authentication."
      },
      tags: ["Next.js", "TypeScript", "React"]
    },
    {
      icon: "ph-device-mobile",
      title: { es: "Apps móviles", en: "Mobile apps" },
      text: {
        es: "Apps Android nativas con Kotlin y Jetpack Compose, o multiplataforma con Expo, conectadas a la nube.",
        en: "Native Android apps with Kotlin and Jetpack Compose, or cross platform with Expo, connected to the cloud."
      },
      tags: ["Kotlin", "Compose", "Expo"]
    },
    {
      icon: "ph-sparkle",
      title: { es: "Integraciones con IA", en: "AI integrations" },
      text: {
        es: "Asistentes, resúmenes automáticos, visión por computadora y búsqueda con fuentes citadas dentro de tu producto.",
        en: "Assistants, automatic summaries, computer vision and cited search built into your product."
      },
      tags: ["Claude API", "RAG", "ml5.js"]
    }
  ],

  process: [
    {
      title: { es: "Entender", en: "Discover" },
      text: { es: "Requisitos, usuarios y casos de uso antes de dibujar una sola pantalla.", en: "Requirements, users and use cases before drawing a single screen." }
    },
    {
      title: { es: "Diseñar", en: "Design" },
      text: { es: "Wireframes, prototipo navegable y arquitectura del sistema (capas, módulos, datos).", en: "Wireframes, a clickable prototype and the system architecture (layers, modules, data)." }
    },
    {
      title: { es: "Construir", en: "Build" },
      text: { es: "Código tipado, pruebas y commits pequeños. Avances visibles cada semana.", en: "Typed code, tests and small commits. Visible progress every week." }
    },
    {
      title: { es: "Entregar", en: "Ship" },
      text: { es: "Despliegue, documentación y acompañamiento para que puedas crecer el producto.", en: "Deployment, documentation and support so you can keep growing the product." }
    }
  ],

  patterns: ["MVC", "Facade", "Decorator", "Adapter", "Bridge", "Factory Method", "Abstract Factory", "Singleton", "Prototype", "Builder", "Repository", "RBAC", "Clean Architecture"],

  projects: [
    {
      id: "civia",
      title: "CIVIA AI",
      year: "2026",
      featured: true,
      category: { es: "Plataforma web y móvil con IA", en: "AI web and mobile platform" },
      tagline: {
        es: "El copiloto digital del ingeniero civil.",
        en: "The civil engineer's digital copilot."
      },
      summary: {
        es: "Planos, normativa, cálculo, medición con el celular y reportes en una sola plataforma. La IA interpreta, el motor de ingeniería calcula y el profesional valida.",
        en: "Blueprints, building codes, calculations, phone based measurement and reports in one platform. AI interprets, the engineering engine calculates and the professional validates."
      },
      status: { es: "En desarrollo: fundaciones completas", en: "In development: foundations complete" },
      role: {
        es: "Diseño de producto, sistema visual, arquitectura y desarrollo en los tres repositorios.",
        en: "Product design, visual system, architecture and development across all three repositories."
      },
      problem: {
        es: "Un ingeniero civil salta entre el visor de planos, la norma en PDF, hojas de cálculo y el editor de informes. La información se dispersa y los errores se cuelan entre herramientas.",
        en: "A civil engineer jumps between a blueprint viewer, building codes in PDF, spreadsheets and a report editor. Information gets scattered and mistakes slip in between tools."
      },
      solution: {
        es: "Una plataforma multi-empresa donde la IA lee planos y responde siempre con citas a la norma, mientras un motor determinista (sin IA) hace los cálculos. Toda salida queda auditada y requiere aprobación humana.",
        en: "A multi-tenant platform where AI reads blueprints and always answers with citations to the code, while a deterministic engine (no AI) runs the calculations. Every output is audited and needs human approval."
      },
      highlights: [
        { es: "Login con Argon2id, tokens EdDSA de 10 minutos y verificación en dos pasos (TOTP).", en: "Login with Argon2id, 10 minute EdDSA tokens and two step verification (TOTP)." },
        { es: "Multi-empresa con Row-Level Security en PostgreSQL y 5 roles de acceso.", en: "Multi-tenant with PostgreSQL Row-Level Security and 5 access roles." },
        { es: "Auditoría inmutable encadenada con hashes SHA-256.", en: "Immutable audit log chained with SHA-256 hashes." },
        { es: "IA con citas obligatorias y defensa contra prompt injection en documentos.", en: "AI with mandatory citations and prompt injection defense for documents." },
        { es: "Web instalable (PWA) y app nativa Android/iOS desde un mismo monorepo.", en: "Installable web (PWA) and native Android/iOS app from a single monorepo." },
        { es: "Design tokens con prueba automática de contraste WCAG AA.", en: "Design tokens with automated WCAG AA contrast tests." }
      ],
      architecture: {
        es: "Tres repositorios: Frontend (Next.js 16 + Expo), Backend (FastAPI + PostgreSQL 16 con pgvector) e IA (visión, OCR y RAG). Contrato OpenAPI que genera los tipos de TypeScript.",
        en: "Three repositories: Frontend (Next.js 16 + Expo), Backend (FastAPI + PostgreSQL 16 with pgvector) and AI (vision, OCR and RAG). An OpenAPI contract generates the TypeScript types."
      },
      tech: ["Next.js 16", "TypeScript", "Expo", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Turborepo", "Claude API"],
      platforms: ["Web", "PWA", "Android", "iOS"],
      where: [
        { icon: "ph-rocket-launch", text: { es: "En vivo en Vercel", en: "Live on Vercel" } },
        { icon: "ph-github-logo", text: { es: "Código en GitHub (3 repos)", en: "Code on GitHub (3 repos)" } },
        { icon: "ph-download-simple", text: { es: "Instalable como app (PWA)", en: "Installable as an app (PWA)" } }
      ],
      media: { video: "assets/media/civia.webm", poster: "assets/media/civia-poster.jpg" },
      live: "https://civia-black.vercel.app",
      repos: [
        { label: "Frontend", url: "https://github.com/NIckys310/CIVIA-FRONTEND" },
        { label: "Backend", url: "https://github.com/NIckys310/CIVIA-BACKEND" },
        { label: "IA", url: "https://github.com/NIckys310/CIVIA-IA" }
      ]
    },
    {
      id: "wildlife",
      title: "AI Wildlife Guardian",
      year: "2026",
      category: { es: "Centro de monitoreo con visión artificial", en: "Computer vision monitoring center" },
      tagline: {
        es: "Monitoreo de fauna y alertas contra la caza furtiva.",
        en: "Wildlife monitoring and anti-poaching alerts."
      },
      summary: {
        es: "Un centro de control táctico que reconoce especies con la cámara, clasifica su comportamiento y alerta al guardabosques cuando detecta un intruso.",
        en: "A tactical control center that recognizes species through the camera, classifies behavior and alerts rangers when it detects an intruder."
      },
      status: { es: "Demo funcional", en: "Working demo" },
      role: {
        es: "Diseño de la interfaz, lógica de reconocimiento en el navegador y modelo de datos geoespacial.",
        en: "Interface design, in-browser recognition logic and geospatial data model."
      },
      problem: {
        es: "Las reservas naturales tienen cámaras trampa, pero revisar horas de grabación a mano hace que las alertas de caza furtiva lleguen tarde.",
        en: "Nature reserves have camera traps, but reviewing hours of footage by hand means poaching alerts arrive too late."
      },
      solution: {
        es: "Reconocimiento de imágenes en tiempo real con MobileNet (ml5.js) directamente en el navegador, con bitácora, mapa satelital por sectores y un módulo anti-furtivos que despacha al guardia.",
        en: "Real-time image recognition with MobileNet (ml5.js) right in the browser, plus a log, sector based satellite map and an anti-poaching module that dispatches rangers."
      },
      highlights: [
        { es: "4 modos de visión: normal, nocturna, térmica y periférica 360°.", en: "4 vision modes: normal, night, thermal and 360° peripheral." },
        { es: "Caracterización de movimiento: especie, velocidad, color y conducta.", en: "Motion profiling: species, speed, color and behavior." },
        { es: "Estadísticas con Chart.js: población por especie y avistamientos por horario.", en: "Chart.js statistics: population by species and sightings by hour." },
        { es: "API REST en Express + TypeScript y base PostgreSQL con PostGIS.", en: "Express + TypeScript REST API with a PostgreSQL + PostGIS database." }
      ],
      architecture: {
        es: "Frontend estático con Tailwind, Chart.js y ml5.js. Backend Express con controladores de cámaras, detecciones y alertas. Esquema SQL con coordenadas geográficas.",
        en: "Static frontend with Tailwind, Chart.js and ml5.js. Express backend with camera, detection and alert controllers. SQL schema with geographic coordinates."
      },
      tech: ["JavaScript", "ml5.js", "Tailwind", "Chart.js", "Express", "TypeScript", "PostGIS"],
      platforms: ["Web"],
      where: [
        { icon: "ph-github-logo", text: { es: "Código abierto en GitHub", en: "Open source on GitHub" } },
        { icon: "ph-browser", text: { es: "Corre en cualquier navegador", en: "Runs in any browser" } }
      ],
      media: { video: "assets/media/wildlife.webm", poster: "assets/media/wildlife-poster.jpg" },
      live: "",
      repos: [{ label: "GitHub", url: "https://github.com/NIckys310/wildlife-guardian" }]
    },
    {
      id: "timecapsule",
      title: "Time Capsule",
      year: "2026",
      category: { es: "App Android nativa", en: "Native Android app" },
      tagline: {
        es: "Recuerdos que se abren en una fecha o en un lugar.",
        en: "Memories that unlock on a date or at a place."
      },
      summary: {
        es: "Cápsulas del tiempo digitales con fotos, videos y cartas. Se comparten con familia y amigos, y la IA arma resúmenes, una línea de tiempo y un mapa de recuerdos.",
        en: "Digital time capsules with photos, videos and letters. Share them with family and friends while AI builds summaries, a timeline and a memory map."
      },
      status: { es: "APK instalable (v2.6)", en: "Installable APK (v2.6)" },
      role: {
        es: "Diseño de pantallas, desarrollo Android completo e integración con Supabase y la IA.",
        en: "Screen design, full Android development and Supabase + AI integration."
      },
      problem: {
        es: "Las fotos importantes se pierden entre miles de imágenes del celular y no hay una forma emotiva de guardar un mensaje para el futuro.",
        en: "Meaningful photos get lost among thousands of phone images, and there is no heartfelt way to save a message for the future."
      },
      solution: {
        es: "Una app donde cada cápsula tiene fecha de apertura, lugar opcional y clave. Se desbloquea sola con notificación o al volver al sitio gracias a la geolocalización.",
        en: "An app where each capsule has an opening date, optional place and passcode. It unlocks on its own with a notification, or when you return to the spot thanks to geolocation."
      },
      highlights: [
        { es: "Apertura programada con WorkManager y notificaciones.", en: "Scheduled opening with WorkManager and notifications." },
        { es: "Recuerdos por ubicación con servicios de localización y mapa OpenStreetMap.", en: "Location based memories with location services and an OpenStreetMap map." },
        { es: "Resumen con IA mediante una Edge Function de Supabase conectada a Claude.", en: "AI summaries through a Supabase Edge Function connected to Claude." },
        { es: "Cuentas, base de datos y almacenamiento de archivos en Supabase.", en: "Accounts, database and file storage on Supabase." }
      ],
      architecture: {
        es: "Kotlin + Jetpack Compose con navegación por pantallas y ViewModels. Supabase para Auth, Postgrest, Storage y Functions. Reproductor ExoPlayer para videos.",
        en: "Kotlin + Jetpack Compose with screen navigation and ViewModels. Supabase for Auth, Postgrest, Storage and Functions. ExoPlayer for video playback."
      },
      tech: ["Kotlin", "Jetpack Compose", "Supabase", "WorkManager", "osmdroid", "ExoPlayer", "Claude API"],
      platforms: ["Android"],
      where: [
        { icon: "ph-android-logo", text: { es: "APK para Android 8 o superior", en: "APK for Android 8 or newer" } },
        { icon: "ph-github-logo", text: { es: "Código en GitHub", en: "Code on GitHub" } },
        { icon: "ph-cloud", text: { es: "Datos en la nube con Supabase", en: "Cloud data with Supabase" } }
      ],
      // Capturas reales de la app en un Pixel 6 (se muestran dentro de un celular)
      media: {
        poster: "assets/media/tc-1-inicio.jpg",
        phone: [
          { src: "assets/media/tc-1-inicio.jpg", label: { es: "Mis cápsulas", en: "My capsules" } },
          { src: "assets/media/tc-2-crear.jpg", label: { es: "Nueva cápsula", en: "New capsule" } },
          { src: "assets/media/tc-3-detalle.jpg", label: { es: "Recuerdo abierto", en: "Opened memory" } },
          { src: "assets/media/tc-4-linea.jpg", label: { es: "Línea de tiempo con IA", en: "AI timeline" } },
          { src: "assets/media/tc-5-mapa.jpg", label: { es: "Mapa de recuerdos", en: "Memory map" } },
          { src: "assets/media/tc-6-perfil.jpg", label: { es: "Perfil", en: "Profile" } }
        ]
      },
      live: "",
      repos: [{ label: "GitHub", url: "https://github.com/NIckys310/timeCapsul" }]
    },
    {
      id: "chronoloop",
      title: "ChronoLoop",
      year: "2026",
      category: { es: "Aplicación de escritorio en Java", en: "Java desktop application" },
      tagline: {
        es: "Un reloj que late con listas circulares.",
        en: "A clock powered by circular linked lists."
      },
      summary: {
        es: "Reloj analógico interactivo donde la hora, el minuto y el segundo son nodos de tres listas circulares doblemente enlazadas implementadas a mano.",
        en: "An interactive analog clock where hour, minute and second are nodes of three hand-built circular doubly linked lists."
      },
      status: { es: "Terminado", en: "Completed" },
      role: {
        es: "Diseño visual, implementación de la estructura de datos y arquitectura MVC.",
        en: "Visual design, data structure implementation and MVC architecture."
      },
      problem: {
        es: "Las estructuras de datos suelen enseñarse con ejemplos aislados que no muestran para qué sirven en una aplicación real.",
        en: "Data structures are usually taught with isolated examples that never show what they are for in a real application."
      },
      solution: {
        es: "Un reloj donde cada segundo es literalmente avanzar al siguiente nodo. Los ciclos 59 a 00 salen de la circularidad y la interfaz dibuja la cadena de nodos en vivo.",
        en: "A clock where every second literally moves to the next node. The 59 to 00 cycles come from circularity, and the UI draws the node chain live."
      },
      highlights: [
        { es: "Esfera, manecillas y anillos de nodos dibujados con Graphics2D y antialiasing.", en: "Clock face, hands and node rings drawn with Graphics2D and antialiasing." },
        { es: "Controles para avanzar, retroceder y reiniciar, con atajos de teclado.", en: "Controls to step forward, rewind and reset, with keyboard shortcuts." },
        { es: "Arquitectura MVC sin dependencias externas, solo el JDK.", en: "MVC architecture with zero external dependencies, only the JDK." },
        { es: "Pruebas y documentación de arquitectura y estructura de datos.", en: "Tests plus architecture and data structure documentation." }
      ],
      architecture: {
        es: "Modelo (Node, CircularDoublyLinkedList x3, Clock), Controlador (javax.swing.Timer) y Vista (paneles Swing). La vista solo lee el estado.",
        en: "Model (Node, CircularDoublyLinkedList x3, Clock), Controller (javax.swing.Timer) and View (Swing panels). The view only reads state."
      },
      tech: ["Java 21", "Swing", "Java2D", "MVC"],
      platforms: ["Desktop"],
      where: [
        { icon: "ph-desktop", text: { es: "App de escritorio (Windows, macOS, Linux)", en: "Desktop app (Windows, macOS, Linux)" } },
        { icon: "ph-lock-simple", text: { es: "Repositorio privado", en: "Private repository" } }
      ],
      media: { images: ["assets/media/chronoloop-segundos.png", "assets/media/chronoloop-horas.png"], poster: "assets/media/chronoloop-segundos.png" },
      live: "",
      repos: []
    },
    {
      id: "gideon",
      title: "GIDEON",
      year: "2026",
      category: { es: "Asistente de IA por voz", en: "Voice AI assistant" },
      tagline: {
        es: "Una IA de ciencia ficción, hecha realidad.",
        en: "A sci-fi AI, made real."
      },
      summary: {
        es: "Asistente inspirado en la IA de la nave Waverider. Tiene interfaz web de comando y una versión de escritorio que se activa por voz, responde hablando y recuerda conversaciones.",
        en: "An assistant inspired by the Waverider ship AI. It has a web command interface and a desktop version that wakes by voice, talks back and remembers conversations."
      },
      status: { es: "Prototipo funcional", en: "Working prototype" },
      role: {
        es: "Concepto, diseño de la interfaz holográfica y desarrollo en Python.",
        en: "Concept, holographic interface design and Python development."
      },
      problem: {
        es: "Los asistentes de voz comerciales son genéricos y dependen por completo de internet.",
        en: "Commercial voice assistants are generic and fully dependent on the internet."
      },
      solution: {
        es: "Un asistente con personalidad propia, reconocimiento de voz offline con respaldo en línea y memoria local, conectado a un modelo de lenguaje para conversar.",
        en: "An assistant with its own personality, offline speech recognition with online fallback and local memory, connected to a language model for conversation."
      },
      highlights: [
        { es: "Palabra de activación con Porcupine.", en: "Wake word detection with Porcupine." },
        { es: "Voz a texto offline con Vosk y respaldo de Google.", en: "Offline speech to text with Vosk and Google fallback." },
        { es: "Interfaz holográfica animada en PyQt5.", en: "Animated holographic interface in PyQt5." },
        { es: "Memoria de conversaciones en SQLite y backend web con Flask.", en: "Conversation memory in SQLite and a Flask web backend." }
      ],
      architecture: {
        es: "Orquestador central que coordina módulos de voz (STT, TTS, wake word), proveedores de IA intercambiables, memoria y UI.",
        en: "A central orchestrator that coordinates voice modules (STT, TTS, wake word), swappable AI providers, memory and UI."
      },
      tech: ["Python", "Flask", "Claude API", "PyQt5", "Vosk", "Porcupine", "SQLite"],
      platforms: ["Web", "Desktop"],
      where: [
        { icon: "ph-windows-logo", text: { es: "Escritorio Windows con Python", en: "Windows desktop with Python" } },
        { icon: "ph-browser", text: { es: "Interfaz web local con Flask", en: "Local web interface with Flask" } }
      ],
      media: { poster: "assets/media/gideon-poster.jpg", images: ["assets/media/gideon-poster.jpg"] },
      live: "",
      repos: []
    }
  ]
};
