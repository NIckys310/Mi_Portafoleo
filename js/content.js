/*
 * CONTENIDO DEL PORTAFOLIO
 * ------------------------------------------------------------
 * Todo lo que ves en la página sale de aquí. Cada texto tiene
 * versión en español (es) y en inglés (en).
 *
 * - profile.whatsapp: número con indicativo, solo dígitos.
 * - profile.now: la línea "Ahora mismo estoy...".
 *
 * Para cambios desde la página: Panel de control > Exportar content.js
 */
window.PORTFOLIO_CONTENT = {
  "profile": {
    "name": "Nicoll Valentina",
    "brand": "Nicoll",
    "email": "nickyandrade4891@gmail.com",
    "whatsapp": "573138516777",
    "github": "NIckys310",
    "linkedin": "https://www.linkedin.com/in/nicoll-undefined-43a350445",
    "location": {
      "es": "Pasto, Colombia",
      "en": "Pasto, Colombia"
    },
    "photo": "assets/media/foto.jpg",
    "available": true,
    "headline": {
      "es": "Diseño interfaces que la gente entiende y el software que las sostiene.",
      "en": "I design interfaces people understand and the software behind them."
    },
    "subtitle": {
      "es": "Diseñadora gráfica y estudiante de Ingeniería de Software. Creo interfaces cuidadas y el código que las hace funcionar en web, móvil e IA.",
      "en": "Graphic designer and Software Engineering student. I craft thoughtful interfaces and the code that powers them across web, mobile and AI."
    },
    "about": [
      {
        "es": "Combino dos formas de pensar: la del diseño, que se pregunta cómo se siente usar algo, y la de la ingeniería, que se pregunta cómo hacerlo confiable. Esa mezcla es la que llevo a cada proyecto.",
        "en": "I combine two ways of thinking: design, which asks how something feels to use, and engineering, which asks how to make it reliable. That mix is what I bring to every project."
      },
      {
        "es": "He construido plataformas web con IA, apps Android, sistemas de escritorio en Python y asistentes de voz. Trabajo con arquitectura por capas, patrones de diseño y documentación clara para que el software sea fácil de mantener.",
        "en": "I have built AI web platforms, Android apps, Python desktop systems and voice assistants. I work with layered architecture, design patterns and clear documentation so software stays easy to maintain."
      }
    ],
    "now": {
      "es": "Mejorando CIVIA AI: lectura de planos con IA y modelado 3D en el navegador.",
      "en": "Improving CIVIA AI: AI blueprint reading and in-browser 3D modeling."
    },
    "cv": {
      "es": "assets/cv/Nicoll-Valentina-CV-ES.pdf",
      "en": "assets/cv/Nicoll-Valentina-CV-EN.pdf"
    },
    "university": "Universidad Cooperativa de Colombia"
  },
  "services": [
    {
      "icon": "ph-pen-nib",
      "title": {
        "es": "Diseño UI/UX",
        "en": "UI/UX design"
      },
      "text": {
        "es": "Interfaces claras, prototipos en Figma, sistemas de diseño con tokens y accesibilidad desde el inicio.",
        "en": "Clear interfaces, Figma prototypes, token-based design systems and accessibility from day one."
      },
      "tags": [
        "Figma",
        "Design systems",
        "Prototipado"
      ]
    },
    {
      "icon": "ph-browser",
      "title": {
        "es": "Desarrollo web",
        "en": "Web development"
      },
      "text": {
        "es": "Sitios y aplicaciones rápidas, responsive y listas para producción, desde landing pages hasta paneles con login.",
        "en": "Fast, responsive, production ready sites and apps, from landing pages to dashboards with authentication."
      },
      "tags": [
        "Next.js",
        "TypeScript",
        "React"
      ]
    },
    {
      "icon": "ph-device-mobile",
      "title": {
        "es": "Apps móviles",
        "en": "Mobile apps"
      },
      "text": {
        "es": "Apps Android nativas con Kotlin y Jetpack Compose, o multiplataforma con Expo, conectadas a la nube.",
        "en": "Native Android apps with Kotlin and Jetpack Compose, or cross platform with Expo, connected to the cloud."
      },
      "tags": [
        "Kotlin",
        "Compose",
        "Expo"
      ]
    },
    {
      "icon": "ph-sparkle",
      "title": {
        "es": "Integraciones con IA",
        "en": "AI integrations"
      },
      "text": {
        "es": "Asistentes, resúmenes automáticos, visión por computadora y búsqueda con fuentes citadas dentro de tu producto.",
        "en": "Assistants, automatic summaries, computer vision and cited search built into your product."
      },
      "tags": [
        "Claude API",
        "RAG",
        "ml5.js"
      ]
    }
  ],
  "process": [
    {
      "title": {
        "es": "Entender",
        "en": "Discover"
      },
      "text": {
        "es": "Requisitos, usuarios y casos de uso antes de dibujar una sola pantalla.",
        "en": "Requirements, users and use cases before drawing a single screen."
      }
    },
    {
      "title": {
        "es": "Diseñar",
        "en": "Design"
      },
      "text": {
        "es": "Wireframes, prototipo navegable y arquitectura del sistema (capas, módulos, datos).",
        "en": "Wireframes, a clickable prototype and the system architecture (layers, modules, data)."
      }
    },
    {
      "title": {
        "es": "Construir",
        "en": "Build"
      },
      "text": {
        "es": "Código tipado, pruebas y commits pequeños. Avances visibles cada semana.",
        "en": "Typed code, tests and small commits. Visible progress every week."
      }
    },
    {
      "title": {
        "es": "Entregar",
        "en": "Ship"
      },
      "text": {
        "es": "Despliegue, documentación y acompañamiento para que puedas crecer el producto.",
        "en": "Deployment, documentation and support so you can keep growing the product."
      }
    }
  ],
  "patterns": [
    "MVC",
    "Facade",
    "Decorator",
    "Adapter",
    "Bridge",
    "Factory Method",
    "Abstract Factory",
    "Singleton",
    "Prototype",
    "Builder",
    "Repository",
    "RBAC",
    "Clean Architecture"
  ],
  "projects": [
    {
      "id": "civia",
      "title": "CIVIA AI",
      "year": "2026",
      "featured": true,
      "category": {
        "es": "Plataforma web y móvil con IA",
        "en": "AI web and mobile platform"
      },
      "tagline": {
        "es": "El copiloto digital del ingeniero civil.",
        "en": "The civil engineer's digital copilot."
      },
      "summary": {
        "es": "Plataforma para arquitectura e ingeniería civil: proyectos, planos revisados por IA, modelado 3D, cámara de obra, biblioteca técnica y un copiloto experto. La IA interpreta y el profesional valida.",
        "en": "A platform for architecture and civil engineering: projects, AI-reviewed blueprints, 3D modeling, site camera, a technical library and an expert copilot. AI interprets and the professional validates."
      },
      "status": {
        "es": "En desarrollo: fundaciones completas",
        "en": "In development: foundations complete"
      },
      "role": {
        "es": "Diseño de producto, sistema visual, arquitectura y desarrollo en los tres repositorios.",
        "en": "Product design, visual system, architecture and development across all three repositories."
      },
      "problem": {
        "es": "Un arquitecto o ingeniero civil salta entre el visor de planos, modelos 3D, la norma en PDF, hojas de presupuesto y el chat. La información se dispersa y los errores se cuelan entre herramientas.",
        "en": "An architect or civil engineer jumps between blueprint viewers, 3D models, codes in PDF, budget spreadsheets and chat. Information gets scattered and mistakes slip in between tools."
      },
      "solution": {
        "es": "Un solo espacio de trabajo instalable en escritorio y móvil, donde la IA revisa planos y modelos, responde con fuentes citadas y nunca emite veredictos de seguridad: siempre valida el profesional.",
        "en": "A single installable workspace for desktop and mobile, where AI reviews blueprints and models, answers with cited sources and never issues safety verdicts: the professional always validates."
      },
      "highlights": [
        {
          "es": "Análisis de planos PDF, DWG, DXF e imágenes: escala, cotas, ejes, áreas y accesibilidad.",
          "en": "Blueprint analysis for PDF, DWG, DXF and images: scale, dimensions, axes, areas and accessibility."
        },
        {
          "es": "Visor 3D con Three.js: GLB, OBJ y STL, medición, corte de sección, estudio solar y volumetría con IA.",
          "en": "Three.js 3D viewer: GLB, OBJ and STL, measuring, section cuts, sun study and AI massing."
        },
        {
          "es": "CIVIA Copilot con respuestas en tiempo real, contexto del proyecto y fuentes citadas.",
          "en": "CIVIA Copilot with real-time answers, project context and cited sources."
        },
        {
          "es": "Biblioteca de ingeniería civil: 19 categorías, 144 artículos y 265 términos con búsqueda BM25.",
          "en": "Civil engineering library: 19 categories, 144 articles and 265 terms with BM25 search."
        },
        {
          "es": "CIVIA Auth propio: verificación en dos pasos, sesiones activas y defensa anti prompt injection.",
          "en": "In-house CIVIA Auth: two-step verification, active sessions and prompt injection defense."
        },
        {
          "es": "Proyectos con fases, kanban, presupuesto con AIU, versiones de archivos y bitácora.",
          "en": "Projects with phases, kanban, AIU budgets, file versioning and a site log."
        }
      ],
      "architecture": {
        "es": "Tres repositorios: Frontend (PWA en HTML/CSS/JS sin compilación, Three.js y un servidor Java 21), Backend (Java 21 + Spring Boot 3.5 con H2/PostgreSQL) e IA (librería Java con Claude opcional y motor local).",
        "en": "Three repositories: Frontend (build-free HTML/CSS/JS PWA, Three.js and a Java 21 server), Backend (Java 21 + Spring Boot 3.5 with H2/PostgreSQL) and AI (a Java library with optional Claude and a local engine)."
      },
      "tech": [
        "Java 21",
        "Spring Boot 3.5",
        "JavaScript",
        "Three.js",
        "PostgreSQL",
        "PWA",
        "Claude API"
      ],
      "platforms": [
        "Web",
        "PWA"
      ],
      "where": [
        {
          "icon": "ph-rocket-launch",
          "text": {
            "es": "En vivo en Vercel",
            "en": "Live on Vercel"
          }
        },
        {
          "icon": "ph-github-logo",
          "text": {
            "es": "Código en GitHub (3 repos)",
            "en": "Code on GitHub (3 repos)"
          }
        },
        {
          "icon": "ph-download-simple",
          "text": {
            "es": "Instalable como app (PWA)",
            "en": "Installable as an app (PWA)"
          }
        }
      ],
      "media": {
        "video": "assets/media/civia.webm",
        "poster": "assets/media/civia-poster.jpg"
      },
      "live": "https://civia-black.vercel.app",
      "repos": [
        {
          "label": "Frontend",
          "url": "https://github.com/NIckys310/CIVIA-FRONTEND"
        },
        {
          "label": "Backend",
          "url": "https://github.com/NIckys310/CIVIA-BACKEND"
        },
        {
          "label": "IA",
          "url": "https://github.com/NIckys310/CIVIA-IA"
        }
      ],
      "diagram": {
        "type": "layers",
        "title": {
          "es": "Arquitectura del sistema",
          "en": "System architecture"
        },
        "layers": [
          {
            "name": {
              "es": "Cliente",
              "en": "Client"
            },
            "nodes": [
              "PWA (HTML/CSS/JS)",
              "Three.js 3D",
              "Service worker"
            ]
          },
          {
            "name": {
              "es": "Servidor web",
              "en": "Web server"
            },
            "nodes": [
              "CiviaWeb.java",
              {
                "es": "Proxy de la API",
                "en": "API proxy"
              }
            ]
          },
          {
            "name": "API · Spring Boot",
            "nodes": [
              "CIVIA Auth",
              {
                "es": "Proyectos",
                "en": "Projects"
              },
              {
                "es": "Documentos",
                "en": "Documents"
              },
              "IA /ai"
            ]
          },
          {
            "name": "CIVIA-IA",
            "nodes": [
              "Copilot",
              "PlanAnalyzer",
              "ModelAnalyzer",
              "KnowledgeBase",
              "Safety"
            ]
          },
          {
            "name": {
              "es": "Datos y servicios",
              "en": "Data and services"
            },
            "nodes": [
              "H2 / PostgreSQL",
              {
                "es": "Archivos",
                "en": "Files"
              },
              {
                "es": "Claude (opcional)",
                "en": "Claude (optional)"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "wildlife",
      "title": "AI Wildlife Guardian",
      "year": "2026",
      "category": {
        "es": "Centro de monitoreo con visión artificial",
        "en": "Computer vision monitoring center"
      },
      "tagline": {
        "es": "Monitoreo de fauna y alertas contra la caza furtiva.",
        "en": "Wildlife monitoring and anti-poaching alerts."
      },
      "summary": {
        "es": "Un centro de control táctico que reconoce especies con la cámara, clasifica su comportamiento y alerta al guardabosques cuando detecta un intruso.",
        "en": "A tactical control center that recognizes species through the camera, classifies behavior and alerts rangers when it detects an intruder."
      },
      "status": {
        "es": "En vivo",
        "en": "Live"
      },
      "role": {
        "es": "Diseño de la interfaz, lógica de reconocimiento en el navegador y modelo de datos geoespacial.",
        "en": "Interface design, in-browser recognition logic and geospatial data model."
      },
      "problem": {
        "es": "Las reservas naturales tienen cámaras trampa, pero revisar horas de grabación a mano hace que las alertas de caza furtiva lleguen tarde.",
        "en": "Nature reserves have camera traps, but reviewing hours of footage by hand means poaching alerts arrive too late."
      },
      "solution": {
        "es": "Reconocimiento de imágenes en tiempo real con MobileNet (ml5.js) directamente en el navegador, con bitácora, mapa satelital por sectores y un módulo anti-furtivos que despacha al guardia.",
        "en": "Real-time image recognition with MobileNet (ml5.js) right in the browser, plus a log, sector based satellite map and an anti-poaching module that dispatches rangers."
      },
      "highlights": [
        {
          "es": "4 modos de visión: normal, nocturna, térmica y periférica 360°.",
          "en": "4 vision modes: normal, night, thermal and 360° peripheral."
        },
        {
          "es": "Caracterización de movimiento: especie, velocidad, color y conducta.",
          "en": "Motion profiling: species, speed, color and behavior."
        },
        {
          "es": "Estadísticas con Chart.js: población por especie y avistamientos por horario.",
          "en": "Chart.js statistics: population by species and sightings by hour."
        },
        {
          "es": "API REST en Express + TypeScript y base PostgreSQL con PostGIS.",
          "en": "Express + TypeScript REST API with a PostgreSQL + PostGIS database."
        }
      ],
      "architecture": {
        "es": "Frontend estático con Tailwind, Chart.js y ml5.js. Backend Express con controladores de cámaras, detecciones y alertas. Esquema SQL con coordenadas geográficas.",
        "en": "Static frontend with Tailwind, Chart.js and ml5.js. Express backend with camera, detection and alert controllers. SQL schema with geographic coordinates."
      },
      "tech": [
        "JavaScript",
        "ml5.js",
        "Tailwind",
        "Chart.js",
        "Express",
        "TypeScript",
        "PostGIS"
      ],
      "platforms": [
        "Web"
      ],
      "where": [
        {
          "icon": "ph-rocket-launch",
          "text": {
            "es": "En vivo en Vercel",
            "en": "Live on Vercel"
          }
        },
        {
          "icon": "ph-github-logo",
          "text": {
            "es": "Código abierto en GitHub",
            "en": "Open source on GitHub"
          }
        }
      ],
      "media": {
        "video": "assets/media/wildlife.webm",
        "poster": "assets/media/wildlife-poster.jpg"
      },
      "live": "https://ai-wildlife-guardian.vercel.app",
      "repos": [
        {
          "label": "GitHub",
          "url": "https://github.com/NIckys310/wildlife-guardian"
        }
      ],
      "diagram": {
        "type": "layers",
        "title": {
          "es": "Arquitectura del sistema",
          "en": "System architecture"
        },
        "layers": [
          {
            "name": {
              "es": "Navegador",
              "en": "Browser"
            },
            "nodes": [
              "UI Tailwind",
              "ml5.js · MobileNet",
              "Chart.js",
              {
                "es": "Cámara web",
                "en": "Webcam"
              }
            ]
          },
          {
            "name": "API · Express + TypeScript",
            "nodes": [
              "camera.controller",
              "detection.controller",
              "alert.controller"
            ]
          },
          {
            "name": "PostgreSQL + PostGIS",
            "nodes": [
              "cameras",
              "species",
              "detections",
              "security_alerts"
            ]
          }
        ]
      }
    },
    {
      "id": "timecapsule",
      "title": "Time Capsule",
      "year": "2026",
      "category": {
        "es": "App Android nativa",
        "en": "Native Android app"
      },
      "tagline": {
        "es": "Recuerdos que se abren en una fecha o en un lugar.",
        "en": "Memories that unlock on a date or at a place."
      },
      "summary": {
        "es": "Cápsulas del tiempo digitales con fotos, videos y cartas. Se comparten con familia y amigos, y la IA arma resúmenes, una línea de tiempo y un mapa de recuerdos.",
        "en": "Digital time capsules with photos, videos and letters. Share them with family and friends while AI builds summaries, a timeline and a memory map."
      },
      "status": {
        "es": "APK instalable (v2.6)",
        "en": "Installable APK (v2.6)"
      },
      "role": {
        "es": "Diseño de pantallas, desarrollo Android completo e integración con Supabase y la IA.",
        "en": "Screen design, full Android development and Supabase + AI integration."
      },
      "problem": {
        "es": "Las fotos importantes se pierden entre miles de imágenes del celular y no hay una forma emotiva de guardar un mensaje para el futuro.",
        "en": "Meaningful photos get lost among thousands of phone images, and there is no heartfelt way to save a message for the future."
      },
      "solution": {
        "es": "Una app donde cada cápsula tiene fecha de apertura, lugar opcional y clave. Se desbloquea sola con notificación o al volver al sitio gracias a la geolocalización.",
        "en": "An app where each capsule has an opening date, optional place and passcode. It unlocks on its own with a notification, or when you return to the spot thanks to geolocation."
      },
      "highlights": [
        {
          "es": "Apertura programada con WorkManager y notificaciones.",
          "en": "Scheduled opening with WorkManager and notifications."
        },
        {
          "es": "Recuerdos por ubicación con servicios de localización y mapa OpenStreetMap.",
          "en": "Location based memories with location services and an OpenStreetMap map."
        },
        {
          "es": "Resumen con IA mediante una Edge Function de Supabase conectada a Claude.",
          "en": "AI summaries through a Supabase Edge Function connected to Claude."
        },
        {
          "es": "Cuentas, base de datos y almacenamiento de archivos en Supabase.",
          "en": "Accounts, database and file storage on Supabase."
        }
      ],
      "architecture": {
        "es": "Kotlin + Jetpack Compose con navegación por pantallas y ViewModels. Supabase para Auth, Postgrest, Storage y Functions. Reproductor ExoPlayer para videos.",
        "en": "Kotlin + Jetpack Compose with screen navigation and ViewModels. Supabase for Auth, Postgrest, Storage and Functions. ExoPlayer for video playback."
      },
      "tech": [
        "Kotlin",
        "Jetpack Compose",
        "Supabase",
        "WorkManager",
        "osmdroid",
        "ExoPlayer",
        "Claude API"
      ],
      "platforms": [
        "Android"
      ],
      "where": [
        {
          "icon": "ph-android-logo",
          "text": {
            "es": "APK para Android 8 o superior",
            "en": "APK for Android 8 or newer"
          }
        },
        {
          "icon": "ph-github-logo",
          "text": {
            "es": "Código en GitHub",
            "en": "Code on GitHub"
          }
        },
        {
          "icon": "ph-cloud",
          "text": {
            "es": "Datos en la nube con Supabase",
            "en": "Cloud data with Supabase"
          }
        }
      ],
      "media": {
        "poster": "assets/media/tc-1-inicio.jpg",
        "phone": [
          {
            "src": "assets/media/tc-1-inicio.jpg",
            "label": {
              "es": "Mis cápsulas",
              "en": "My capsules"
            }
          },
          {
            "src": "assets/media/tc-2-crear.jpg",
            "label": {
              "es": "Nueva cápsula",
              "en": "New capsule"
            }
          },
          {
            "src": "assets/media/tc-3-detalle.jpg",
            "label": {
              "es": "Recuerdo abierto",
              "en": "Opened memory"
            }
          },
          {
            "src": "assets/media/tc-4-linea.jpg",
            "label": {
              "es": "Línea de tiempo con IA",
              "en": "AI timeline"
            }
          },
          {
            "src": "assets/media/tc-5-mapa.jpg",
            "label": {
              "es": "Mapa de recuerdos",
              "en": "Memory map"
            }
          },
          {
            "src": "assets/media/tc-6-perfil.jpg",
            "label": {
              "es": "Perfil",
              "en": "Profile"
            }
          }
        ]
      },
      "live": "",
      "repos": [
        {
          "label": "GitHub",
          "url": "https://github.com/NIckys310/timeCapsul"
        }
      ],
      "diagram": {
        "type": "layers",
        "title": {
          "es": "Arquitectura (MVVM)",
          "en": "Architecture (MVVM)"
        },
        "layers": [
          {
            "name": {
              "es": "Pantallas · Compose",
              "en": "Screens · Compose"
            },
            "nodes": [
              "Auth",
              "Home",
              "Create",
              "Detail",
              "Timeline",
              "Map",
              "Profile"
            ]
          },
          {
            "name": "ViewModel",
            "nodes": [
              "MainViewModel"
            ]
          },
          {
            "name": {
              "es": "Datos y servicios",
              "en": "Data and services"
            },
            "nodes": [
              "Repo",
              "Prefs",
              "GeofenceManager",
              "Workers",
              "Notifier"
            ]
          },
          {
            "name": "Supabase",
            "nodes": [
              "Auth",
              "Postgrest",
              "Storage",
              "Edge Function ai-memories"
            ]
          },
          {
            "name": {
              "es": "IA",
              "en": "AI"
            },
            "nodes": [
              "Claude API"
            ]
          }
        ]
      }
    },
    {
      "id": "chronoloop",
      "title": "ChronoLoop",
      "year": "2026",
      "category": {
        "es": "Aplicación de escritorio en Python",
        "en": "Python desktop application"
      },
      "tagline": {
        "es": "Un reloj que late con listas circulares.",
        "en": "A clock powered by circular linked lists."
      },
      "summary": {
        "es": "Reloj analógico interactivo con alarma donde la hora, el minuto y el segundo son nodos de tres listas circulares doblemente enlazadas hechas a mano. Un solo archivo de Python con un único import.",
        "en": "An interactive analog clock with an alarm where hour, minute and second are nodes of three hand-built circular doubly linked lists. One Python file with a single import."
      },
      "status": {
        "es": "Terminado",
        "en": "Completed"
      },
      "role": {
        "es": "Diseño visual, estructura de datos, arquitectura MVC y pruebas.",
        "en": "Visual design, data structure, MVC architecture and tests."
      },
      "problem": {
        "es": "Las estructuras de datos suelen enseñarse con ejemplos aislados que no muestran para qué sirven en una aplicación real.",
        "en": "Data structures are usually taught with isolated examples that never show what they are for in a real application."
      },
      "solution": {
        "es": "Un reloj donde cada segundo es literalmente avanzar al siguiente nodo. Los ciclos 59 a 00 salen de la circularidad y la interfaz dibuja la cadena de nodos en vivo.",
        "en": "A clock where every second literally moves to the next node. The 59 to 00 cycles come from circularity, and the UI draws the node chain live."
      },
      "highlights": [
        {
          "es": "Solo Python y tkinter: sin pip, sin math, sin datetime ni threading.",
          "en": "Only Python and tkinter: no pip, no math, no datetime or threading."
        },
        {
          "es": "Seno y coseno propios con la serie de Taylor para dibujar la esfera.",
          "en": "Custom sine and cosine with the Taylor series to draw the clock face."
        },
        {
          "es": "Alarma que suena a la hora exacta, con detener y posponer 5 minutos.",
          "en": "An alarm that rings on time, with dismiss and 5 minute snooze."
        },
        {
          "es": "Pruebas automáticas dentro del mismo archivo, visibles con el botón PRUEBAS.",
          "en": "Automated tests inside the same file, shown with the TESTS button."
        }
      ],
      "architecture": {
        "es": "Modelo (Node, CircularDoublyLinkedList, Clock, Alarm), Controlador (ClockController con un planificador) y Vista (paneles dibujados en Canvas). La vista solo lee el estado.",
        "en": "Model (Node, CircularDoublyLinkedList, Clock, Alarm), Controller (ClockController with a scheduler) and View (Canvas-drawn panels). The view only reads state."
      },
      "tech": [
        "Python",
        "tkinter",
        "MVC",
        "Canvas"
      ],
      "platforms": [
        "Desktop"
      ],
      "where": [
        {
          "icon": "ph-desktop",
          "text": {
            "es": "App de escritorio (Windows, macOS, Linux)",
            "en": "Desktop app (Windows, macOS, Linux)"
          }
        },
        {
          "icon": "ph-lock-simple",
          "text": {
            "es": "Repositorio privado",
            "en": "Private repository"
          }
        }
      ],
      "media": {
        "images": [
          "assets/media/chronoloop-segundos.png",
          "assets/media/chronoloop-alarma.png",
          "assets/media/chronoloop-pruebas.png"
        ],
        "poster": "assets/media/chronoloop-segundos.png"
      },
      "live": "",
      "repos": [],
      "diagram": {
        "type": "uml",
        "title": {
          "es": "Diagrama de clases (UML)",
          "en": "Class diagram (UML)"
        },
        "classes": [
          {
            "name": "Node",
            "attrs": [
              "- data",
              "- previous: Node",
              "- next: Node"
            ],
            "methods": []
          },
          {
            "name": "CircularDoublyLinkedList",
            "attrs": [
              "- head: Node",
              "- current: Node",
              "- size: int"
            ],
            "methods": [
              "+ insert(data)",
              "+ remove(data)",
              "+ move_forward()",
              "+ move_backward()",
              "+ get_current()"
            ]
          },
          {
            "name": "Clock",
            "attrs": [
              "- rings: dict"
            ],
            "methods": [
              "+ tick()",
              "+ advance()",
              "+ rewind()",
              "+ set_time(h, m, s)"
            ]
          },
          {
            "name": "Alarm",
            "attrs": [
              "- rings: dict"
            ],
            "methods": [
              "+ step()",
              "+ snooze()",
              "+ is_due(clock)"
            ]
          },
          {
            "name": "ClockController",
            "attrs": [
              "- clock: Clock",
              "- alarm: Alarm",
              "- scheduler"
            ],
            "methods": [
              "+ start()",
              "+ pause()",
              "+ next()",
              "+ previous()",
              "+ sync()",
              "+ snooze_alarm()"
            ]
          },
          {
            "name": "MainWindow",
            "attrs": [
              "- panels"
            ],
            "methods": [
              "+ refresh()",
              "+ show_tests()"
            ]
          }
        ],
        "relations": [
          [
            "CircularDoublyLinkedList",
            "Node",
            {
              "es": "contiene 1..*",
              "en": "contains 1..*"
            }
          ],
          [
            "Clock",
            "CircularDoublyLinkedList",
            {
              "es": "usa 3 anillos",
              "en": "uses 3 rings"
            }
          ],
          [
            "Alarm",
            "CircularDoublyLinkedList",
            {
              "es": "usa 2 anillos",
              "en": "uses 2 rings"
            }
          ],
          [
            "ClockController",
            "Clock",
            {
              "es": "controla",
              "en": "controls"
            }
          ],
          [
            "ClockController",
            "Alarm",
            {
              "es": "controla",
              "en": "controls"
            }
          ],
          [
            "MainWindow",
            "ClockController",
            {
              "es": "observa (MVC)",
              "en": "observes (MVC)"
            }
          ]
        ]
      }
    },
    {
      "id": "gideon",
      "title": "GIDEON",
      "year": "2026",
      "category": {
        "es": "Asistente de IA por voz",
        "en": "Voice AI assistant"
      },
      "tagline": {
        "es": "Una IA de ciencia ficción, hecha realidad.",
        "en": "A sci-fi AI, made real."
      },
      "summary": {
        "es": "Asistente inspirado en la IA de la nave Waverider. Tiene interfaz web de comando y una versión de escritorio que se activa por voz, responde hablando y recuerda conversaciones.",
        "en": "An assistant inspired by the Waverider ship AI. It has a web command interface and a desktop version that wakes by voice, talks back and remembers conversations."
      },
      "status": {
        "es": "Prototipo funcional",
        "en": "Working prototype"
      },
      "role": {
        "es": "Concepto, diseño de la interfaz holográfica y desarrollo en Python.",
        "en": "Concept, holographic interface design and Python development."
      },
      "problem": {
        "es": "Los asistentes de voz comerciales son genéricos y dependen por completo de internet.",
        "en": "Commercial voice assistants are generic and fully dependent on the internet."
      },
      "solution": {
        "es": "Un asistente con personalidad propia, reconocimiento de voz offline con respaldo en línea y memoria local, conectado a un modelo de lenguaje para conversar.",
        "en": "An assistant with its own personality, offline speech recognition with online fallback and local memory, connected to a language model for conversation."
      },
      "highlights": [
        {
          "es": "Palabra de activación con Porcupine.",
          "en": "Wake word detection with Porcupine."
        },
        {
          "es": "Voz a texto offline con Vosk y respaldo de Google.",
          "en": "Offline speech to text with Vosk and Google fallback."
        },
        {
          "es": "Interfaz holográfica animada en PyQt5.",
          "en": "Animated holographic interface in PyQt5."
        },
        {
          "es": "Memoria de conversaciones en SQLite y backend web con Flask.",
          "en": "Conversation memory in SQLite and a Flask web backend."
        }
      ],
      "architecture": {
        "es": "Orquestador central que coordina módulos de voz (STT, TTS, wake word), proveedores de IA intercambiables, memoria y UI.",
        "en": "A central orchestrator that coordinates voice modules (STT, TTS, wake word), swappable AI providers, memory and UI."
      },
      "tech": [
        "Python",
        "Flask",
        "Claude API",
        "PyQt5",
        "Vosk",
        "Porcupine",
        "SQLite"
      ],
      "platforms": [
        "Web",
        "Desktop"
      ],
      "where": [
        {
          "icon": "ph-windows-logo",
          "text": {
            "es": "Escritorio Windows con Python",
            "en": "Windows desktop with Python"
          }
        },
        {
          "icon": "ph-browser",
          "text": {
            "es": "Interfaz web local con Flask",
            "en": "Local web interface with Flask"
          }
        }
      ],
      "media": {
        "poster": "assets/media/gideon-poster.jpg",
        "images": [
          "assets/media/gideon-poster.jpg"
        ]
      },
      "live": "",
      "repos": [],
      "diagram": {
        "type": "layers",
        "title": {
          "es": "Arquitectura del sistema",
          "en": "System architecture"
        },
        "layers": [
          {
            "name": {
              "es": "Interfaz",
              "en": "Interface"
            },
            "nodes": [
              {
                "es": "Web (Flask + HTML)",
                "en": "Web (Flask + HTML)"
              },
              {
                "es": "Holograma PyQt5",
                "en": "PyQt5 hologram"
              }
            ]
          },
          {
            "name": "Core",
            "nodes": [
              "Orchestrator",
              "Config"
            ]
          },
          {
            "name": {
              "es": "Voz",
              "en": "Voice"
            },
            "nodes": [
              {
                "es": "Wake word · Porcupine",
                "en": "Wake word · Porcupine"
              },
              "STT · Vosk / Google",
              "TTS · pyttsx3"
            ]
          },
          {
            "name": {
              "es": "IA y memoria",
              "en": "AI and memory"
            },
            "nodes": [
              {
                "es": "Proveedores de IA",
                "en": "AI providers"
              },
              "SQLite"
            ]
          }
        ]
      }
    }
  ],
  "design": [
    {
      "src": "assets/media/design/civia-logo.png",
      "title": "CIVIA AI",
      "kind": {
        "es": "Logo e identidad visual",
        "en": "Logo and visual identity"
      },
      "size": "tall"
    },
    {
      "src": "assets/media/civia-poster.jpg",
      "title": "CIVIA AI",
      "kind": {
        "es": "Interfaz de acceso",
        "en": "Sign-in interface"
      },
      "size": "wide"
    },
    {
      "src": "assets/media/design/timecapsule-logo.png",
      "title": "Time Capsule",
      "kind": {
        "es": "Ícono de app",
        "en": "App icon"
      },
      "size": "square",
      "pad": true
    },
    {
      "src": "assets/media/tc-3-detalle.jpg",
      "title": "Time Capsule",
      "kind": {
        "es": "Diseño de pantallas móviles",
        "en": "Mobile screen design"
      },
      "size": "tall",
      "contain": true
    },
    {
      "src": "assets/media/gideon-poster.jpg",
      "title": "GIDEON",
      "kind": {
        "es": "Interfaz tipo HUD",
        "en": "HUD-style interface"
      },
      "size": "wide"
    },
    {
      "src": "assets/media/chronoloop-alarma.png",
      "title": "ChronoLoop",
      "kind": {
        "es": "Interfaz de escritorio",
        "en": "Desktop interface"
      },
      "size": "wide"
    }
  ]
};
