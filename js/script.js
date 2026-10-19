(() => {
    'use strict';

    // ----------------------------------------------------
    // ESTADO
    // ----------------------------------------------------
    const CONTENT_KEY = 'nicoll_content_v2';
    const PREFS_KEY = 'nicoll_prefs';
    const DEFAULT_CONTENT = clone(window.PORTFOLIO_CONTENT);

    let content = loadJSON(CONTENT_KEY) || clone(DEFAULT_CONTENT);
    let prefs = Object.assign({ theme: 'dark', lang: 'es', motion: true }, loadJSON(PREFS_KEY));
    let github = null;

    const root = document.documentElement;
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = () => !prefs.motion || matchMedia('(prefers-reduced-motion: reduce)').matches;

    function clone(o) { return JSON.parse(JSON.stringify(o)); }
    function loadJSON(key) { try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; } }
    function saveJSON(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
    function esc(str) {
        return String(str ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }
    function safeUrl(url) { return /^(https?:|mailto:|assets\/|\.\/|\/)/i.test(url || '') ? url : ''; }

    // ----------------------------------------------------
    // TEXTOS DE INTERFAZ (ES / EN)
    // ----------------------------------------------------
    const UI = {
        es: {
            'nav.work': 'Proyectos', 'nav.services': 'Servicios', 'nav.about': 'Sobre mí', 'nav.activity': 'Actividad',
            'cta.contact': 'Hablemos', 'cta.work': 'Ver proyectos',
            'hero.available': 'Disponible para proyectos freelance', 'hero.liveDemo': 'Demo en vivo',
            'stats.contrib': 'contribuciones en GitHub el último año', 'stats.repos': 'repositorios públicos',
            'stats.projects': 'proyectos destacados', 'stats.platforms': 'plataformas: web, móvil, escritorio e IA',
            'work.title': 'Proyectos seleccionados',
            'work.lead': 'Productos reales, de la idea al código. Abre cada uno para ver el problema, la solución y cómo está construido.',
            'work.platform': 'Hecho para', 'work.where': 'Dónde está',
            'plat.web': 'Web', 'plat.mobile': 'Móvil', 'plat.desktop': 'Escritorio',
            'case.where': 'Dónde encontrarlo', 'panel.pPlatform': 'Hecho para', 'panel.pWhere': 'Dónde está (separado por coma)',
            'work.open': 'Ver caso de estudio', 'work.live': 'En vivo', 'work.empty': 'Aún no hay proyectos. Añade uno desde el panel de control.',
            'services.title': 'Cómo puedo ayudarte',
            'services.lead': 'Desde el primer boceto hasta el despliegue. Puedes contratarme para una parte o para todo el producto.',
            'process.title': 'Mi forma de trabajar',
            'about.eyebrow': 'Sobre mí', 'about.title': 'Creatividad con criterio de ingeniería.',
            'about.study': 'Ingeniería de Software, Universidad Cooperativa de Colombia', 'about.design': 'Diseño gráfico', 'about.langs': 'Español nativo, inglés',
            'activity.title': 'Código, todos los días.', 'activity.profile': 'Ver perfil', 'activity.less': 'Menos', 'activity.more': 'Más',
            'activity.lead': n => `${n.toLocaleString('es-CO')} contribuciones en los últimos 12 meses.`,
            'activity.live': 'Datos en vivo desde GitHub', 'activity.snapshot': d => `Datos de GitHub al ${d}`,
            'activity.loading': 'Cargando actividad...',
            'contact.title': '¿Tienes un proyecto en mente?', 'contact.lead': 'Cuéntame qué necesitas. Respondo en menos de 24 horas.',
            'contact.copy': 'Copiar correo', 'contact.copied': 'Correo copiado',
            'footer.made': 'Diseñado y programado por mí, sin plantillas.',
            'case.problem': 'El problema', 'case.solution': 'La solución', 'case.highlights': 'Lo más destacado',
            'case.architecture': 'Arquitectura', 'case.role': 'Mi rol', 'case.year': 'Año', 'case.platforms': 'Plataformas',
            'case.status': 'Estado', 'case.stack': 'Tecnologías', 'case.live': 'Abrir demo en vivo', 'case.repo': 'Código',
            'case.private': 'Código privado. Disponible a petición.',
            'panel.title': 'Panel de control',
            'panel.note': 'Personaliza el sitio. Los cambios se guardan en este navegador; exporta para hacerlos permanentes.',
            'panel.tabLook': 'Apariencia', 'panel.tabProfile': 'Perfil', 'panel.tabProjects': 'Proyectos', 'panel.tabData': 'Datos',
            'panel.theme': 'Tema', 'panel.dark': 'Oscuro', 'panel.light': 'Claro', 'panel.lang': 'Idioma',
            'panel.motion': 'Animaciones', 'panel.motionHint': 'Desactívalas si prefieres una página quieta.',
            'panel.availability': 'Disponible para proyectos', 'panel.availabilityHint': 'Muestra el aviso verde en la portada.',
            'panel.name': 'Nombre', 'panel.email': 'Correo', 'panel.waHint': 'Con indicativo de país, solo números.',
            'panel.github': 'Usuario de GitHub', 'panel.headlineEs': 'Titular (español)', 'panel.headlineEn': 'Titular (inglés)',
            'panel.photo': 'Foto (ruta o URL)', 'panel.save': 'Guardar perfil', 'panel.saved': 'Cambios guardados',
            'panel.newProject': 'Nuevo proyecto', 'panel.editProject': 'Editar proyecto', 'panel.pTitle': 'Título',
            'panel.pCategory': 'Categoría', 'panel.pSummary': 'Descripción', 'panel.pTech': 'Tecnologías (separadas por coma)',
            'panel.pLive': 'Link en vivo', 'panel.pRepo': 'Repositorio', 'panel.pMedia': 'Imagen o video (ruta o URL)',
            'panel.saveProject': 'Guardar proyecto', 'panel.cancel': 'Cancelar',
            'panel.projectSaved': 'Proyecto guardado', 'panel.projectDeleted': p => `"${p}" eliminado`,
            'panel.confirmDelete': p => `¿Eliminar "${p}"?`,
            'panel.dataText': 'Exporta tu contenido para guardarlo en el proyecto, o restaura los valores originales.',
            'panel.export': 'Exportar content.js', 'panel.import': 'Importar JSON', 'panel.reset': 'Restaurar original',
            'panel.confirmReset': '¿Restaurar todo el contenido original? Se perderán los cambios hechos en este navegador.',
            'panel.restored': 'Contenido restaurado', 'panel.imported': 'Contenido importado', 'panel.importError': 'El archivo no es válido',
            'panel.moveUp': 'Subir', 'panel.edit': 'Editar', 'panel.delete': 'Eliminar'
        },
        en: {
            'nav.work': 'Work', 'nav.services': 'Services', 'nav.about': 'About', 'nav.activity': 'Activity',
            'cta.contact': "Let's talk", 'cta.work': 'View work',
            'hero.available': 'Available for freelance projects', 'hero.liveDemo': 'Live demo',
            'stats.contrib': 'GitHub contributions in the last year', 'stats.repos': 'public repositories',
            'stats.projects': 'featured projects', 'stats.platforms': 'platforms: web, mobile, desktop and AI',
            'work.title': 'Selected work',
            'work.lead': 'Real products, from idea to code. Open each one to see the problem, the solution and how it is built.',
            'work.platform': 'Built for', 'work.where': 'Where it lives',
            'plat.web': 'Web', 'plat.mobile': 'Mobile', 'plat.desktop': 'Desktop',
            'case.where': 'Where to find it', 'panel.pPlatform': 'Built for', 'panel.pWhere': 'Where it lives (comma separated)',
            'work.open': 'View case study', 'work.live': 'Live', 'work.empty': 'No projects yet. Add one from the control panel.',
            'services.title': 'How I can help',
            'services.lead': 'From the first sketch to deployment. Hire me for one piece or for the whole product.',
            'process.title': 'How I work',
            'about.eyebrow': 'About', 'about.title': 'Creativity with an engineering mindset.',
            'about.study': 'Software Engineering, Universidad Cooperativa de Colombia', 'about.design': 'Graphic design', 'about.langs': 'Native Spanish, English',
            'activity.title': 'Shipping code every day.', 'activity.profile': 'View profile', 'activity.less': 'Less', 'activity.more': 'More',
            'activity.lead': n => `${n.toLocaleString('en-US')} contributions in the last 12 months.`,
            'activity.live': 'Live data from GitHub', 'activity.snapshot': d => `GitHub data as of ${d}`,
            'activity.loading': 'Loading activity...',
            'contact.title': 'Have a project in mind?', 'contact.lead': 'Tell me what you need. I reply within 24 hours.',
            'contact.copy': 'Copy email', 'contact.copied': 'Email copied',
            'footer.made': 'Designed and coded by me, no templates.',
            'case.problem': 'The problem', 'case.solution': 'The solution', 'case.highlights': 'Highlights',
            'case.architecture': 'Architecture', 'case.role': 'My role', 'case.year': 'Year', 'case.platforms': 'Platforms',
            'case.status': 'Status', 'case.stack': 'Tech stack', 'case.live': 'Open live demo', 'case.repo': 'Code',
            'case.private': 'Private code. Available on request.',
            'panel.title': 'Control panel',
            'panel.note': 'Customize the site. Changes are saved in this browser; export them to make them permanent.',
            'panel.tabLook': 'Appearance', 'panel.tabProfile': 'Profile', 'panel.tabProjects': 'Projects', 'panel.tabData': 'Data',
            'panel.theme': 'Theme', 'panel.dark': 'Dark', 'panel.light': 'Light', 'panel.lang': 'Language',
            'panel.motion': 'Animations', 'panel.motionHint': 'Turn them off if you prefer a still page.',
            'panel.availability': 'Available for projects', 'panel.availabilityHint': 'Shows the green notice on the hero.',
            'panel.name': 'Name', 'panel.email': 'Email', 'panel.waHint': 'Country code included, numbers only.',
            'panel.github': 'GitHub username', 'panel.headlineEs': 'Headline (Spanish)', 'panel.headlineEn': 'Headline (English)',
            'panel.photo': 'Photo (path or URL)', 'panel.save': 'Save profile', 'panel.saved': 'Changes saved',
            'panel.newProject': 'New project', 'panel.editProject': 'Edit project', 'panel.pTitle': 'Title',
            'panel.pCategory': 'Category', 'panel.pSummary': 'Description', 'panel.pTech': 'Technologies (comma separated)',
            'panel.pLive': 'Live link', 'panel.pRepo': 'Repository', 'panel.pMedia': 'Image or video (path or URL)',
            'panel.saveProject': 'Save project', 'panel.cancel': 'Cancel',
            'panel.projectSaved': 'Project saved', 'panel.projectDeleted': p => `"${p}" deleted`,
            'panel.confirmDelete': p => `Delete "${p}"?`,
            'panel.dataText': 'Export your content to store it in the project, or restore the original values.',
            'panel.export': 'Export content.js', 'panel.import': 'Import JSON', 'panel.reset': 'Restore original',
            'panel.confirmReset': 'Restore all original content? Changes made in this browser will be lost.',
            'panel.restored': 'Content restored', 'panel.imported': 'Content imported', 'panel.importError': 'Invalid file',
            'panel.moveUp': 'Move up', 'panel.edit': 'Edit', 'panel.delete': 'Delete'
        }
    };

    const i18n = (key, arg) => {
        const v = UI[prefs.lang][key] ?? UI.es[key] ?? key;
        return typeof v === 'function' ? v(arg) : v;
    };
    // Texto de contenido: puede ser string o { es, en }
    const tr = v => (v && typeof v === 'object') ? (v[prefs.lang] || v.es || '') : (v || '');

    // ----------------------------------------------------
    // RENDER
    // ----------------------------------------------------
    function renderAll() {
        root.setAttribute('lang', prefs.lang);
        root.setAttribute('data-theme', prefs.theme);
        root.classList.toggle('no-motion', !prefs.motion);
        document.title = prefs.lang === 'en'
            ? `${content.profile.name} | UI/UX design and software development`
            : `${content.profile.name} | Diseño UI/UX y desarrollo de software`;

        $$('[data-i18n]').forEach(el => { el.textContent = i18n(el.dataset.i18n); });
        renderProfile();
        renderProjects();
        renderMarquee();
        renderServices();
        renderProcess();
        renderActivityText();
        syncPanelControls();
        observeReveals();
    }

    function renderProfile() {
        const p = content.profile;
        const binds = {
            brand: p.brand || p.name.split(' ')[0],
            name: p.name,
            initial: (p.brand || p.name).charAt(0),
            subtitle: tr(p.subtitle),
            location: tr(p.location),
            email: p.email
        };
        $$('[data-bind]').forEach(el => {
            const key = el.dataset.bind;
            if (key in binds) el.textContent = binds[key];
        });

        // Titular dividido en palabras para la animación de máscara
        const title = $('#hero-title');
        const words = tr(p.headline).split(/\s+/).filter(Boolean);
        title.innerHTML = words.map((w, i) =>
            `<span class="w"><span class="${i === words.length - 1 ? 'accent' : ''}" style="--i:${i}">${esc(w)}</span></span>`
        ).join(' ');
        title.setAttribute('aria-label', tr(p.headline));

        $('.hero-status').hidden = !p.available;

        $('#about-text').innerHTML = (p.about || []).map((par, i) =>
            `<p data-anim="up" style="--d:${0.08 * i}s">${esc(tr(par))}</p>`).join('');

        const img = $('#about-photo-img');
        const photo = safeUrl(p.photo);
        if (photo && img.dataset.src !== photo) {
            img.dataset.src = photo;
            img.hidden = true;
            img.onload = () => { img.hidden = false; };
            img.onerror = () => { img.hidden = true; };
            img.src = photo;
        } else if (!photo) { img.hidden = true; }
        img.alt = p.name;

        const mail = $('#contact-email');
        mail.href = `mailto:${p.email}`;
        const wa = $('#contact-whatsapp');
        const waNum = String(p.whatsapp || '').replace(/\D/g, '');
        wa.hidden = !waNum;
        if (waNum) {
            const msg = prefs.lang === 'en' ? 'Hi Nicoll, I saw your portfolio and I have a project.' : 'Hola Nicoll, vi tu portafolio y tengo un proyecto.';
            wa.href = `https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`;
        }
        const gh = `https://github.com/${encodeURIComponent(p.github || '')}`;
        $('#contact-github').href = gh;
        const li = $('#contact-linkedin'), liUrl = safeUrl(p.linkedin);
        li.hidden = !/^https?:/.test(liUrl);
        if (!li.hidden) li.href = liUrl;
        $('#github-profile').href = gh;
        $('#year').textContent = new Date().getFullYear();
    }

    // Agrupa plataformas en Web / Móvil / Escritorio con su detalle
    const PLATFORM_GROUPS = {
        web: { icon: 'ph-globe', match: ['Web', 'PWA'] },
        mobile: { icon: 'ph-device-mobile', match: ['Android', 'iOS'] },
        desktop: { icon: 'ph-desktop', match: ['Desktop'] }
    };
    function platformGroups(p) {
        const list = p.platforms || [];
        return Object.entries(PLATFORM_GROUPS)
            .map(([key, g]) => {
                const hits = list.filter(x => g.match.includes(x));
                if (!hits.length) return null;
                const detail = key === 'mobile' ? hits.join(' / ') : (key === 'web' && hits.includes('PWA') ? 'PWA' : '');
                return { key, icon: g.icon, label: i18n('plat.' + key) + (detail ? ` (${detail})` : '') };
            })
            .filter(Boolean);
    }
    function mainPlatform(p) {
        const list = p.platforms || [];
        return list.find(x => ['Web', 'Android', 'Desktop'].includes(x)) || (list.includes('iOS') ? 'Android' : 'Web');
    }
    function whereItems(p) {
        return (p.where || []).map(w => typeof w === 'string' ? { icon: 'ph-map-pin', text: w } : w);
    }
    function chip(icon, text, cls = '') {
        return `<span class="chip ${cls}"><i class="ph ${esc(icon)}"></i>${esc(text)}</span>`;
    }

    function mediaKind(src) { return /\.(webm|mp4|mov)(\?|$)/i.test(src || '') ? 'video' : 'image'; }

    function normalizeMedia(project) {
        const m = project.media || {};
        if (typeof m === 'string') return mediaKind(m) === 'video' ? { video: m } : { poster: m, images: [m] };
        return m;
    }

    function coverHTML(project, m) {
        return `<div class="cover"><i class="ph ph-fill ${esc(m.icon || 'ph-cube')}"></i><span class="cover-label">${esc(project.title)}</span></div>`;
    }

    function cardMediaHTML(project) {
        const m = normalizeMedia(project);
        let inner = '';
        if (m.poster) inner += `<img src="${esc(safeUrl(m.poster))}" alt="${esc(project.title)}" loading="lazy">`;
        else if (!m.video) inner += coverHTML(project, m);
        if (m.video) inner += `<video data-src="${esc(safeUrl(m.video))}" muted loop playsinline preload="none" aria-hidden="true"></video>`;
        if (m.video && !m.poster) inner = `<div class="cover"></div>` + inner;
        const live = project.live ? `<span class="badge live"><span class="pulse"></span>${i18n('work.live')}</span>` : '';
        const play = m.video ? `<span class="play-hint" aria-hidden="true"><i class="ph ph-fill ph-play"></i></span>` : '';
        return `<div class="work-media${m.video ? ' has-video' : ''}">${inner}${live}${play}</div>`;
    }

    function specsHTML(p) {
        const plats = platformGroups(p).map(g => chip(g.icon, g.label, 'chip-plat')).join('');
        const where = whereItems(p).slice(0, p.featured ? 3 : 2).map(w => chip(w.icon, tr(w.text), 'chip-where')).join('');
        if (!plats && !where) return '';
        return `<dl class="work-specs">
            ${plats ? `<div><dt>${esc(i18n('work.platform'))}</dt><dd>${plats}</dd></div>` : ''}
            ${where ? `<div><dt>${esc(i18n('work.where'))}</dt><dd>${where}</dd></div>` : ''}
        </dl>`;
    }

    function renderProjects() {
        const grid = $('#work-grid');
        const list = content.projects || [];
        if (!list.length) {
            grid.innerHTML = `<p class="work-empty">${esc(i18n('work.empty'))}</p>`;
            return;
        }
        grid.innerHTML = list.map((p, i) => {
            const tech = (p.tech || []).slice(0, 4).map(t => `<span>${esc(t)}</span>`).join('');
            return `
            <button class="work-card${p.featured ? ' featured' : ''}" data-id="${esc(p.id)}" style="--d:${(i % 2) * 0.1}s">
                ${cardMediaHTML(p)}
                <div class="work-info">
                    <div class="work-meta"><span>${esc(tr(p.category))}</span><span>${esc(p.year || '')}</span></div>
                    <h3 class="work-title">${esc(p.title)}</h3>
                    <p class="work-tagline">${esc(tr(p.tagline) || tr(p.summary))}</p>
                    ${p.featured ? `<p class="work-summary">${esc(tr(p.summary))}</p>` : ''}
                    ${specsHTML(p)}
                    <div class="tags">${tech}</div>
                    <span class="work-open">${esc(i18n('work.open'))}<i class="ph ph-arrow-right"></i></span>
                </div>
            </button>`;
        }).join('');
        bindCards();
    }

    function renderMarquee() {
        const items = content.patterns || [];
        const row = items.map(x => `<span>${esc(x)}</span>`).join('');
        $('#marquee').innerHTML = row + row;
    }

    function renderServices() {
        $('#services').innerHTML = (content.services || []).map((s, i) => `
            <article class="service" data-anim="up" style="--d:${(i % 2) * 0.08}s">
                <div class="service-icon"><i class="ph ${esc(s.icon)}"></i></div>
                <div>
                    <h3>${esc(tr(s.title))}</h3>
                    <p>${esc(tr(s.text))}</p>
                    <div class="tags">${(s.tags || []).map(t => `<span>${esc(t)}</span>`).join('')}</div>
                </div>
            </article>`).join('');
    }

    function renderProcess() {
        $('#process').innerHTML = (content.process || []).map((s, i) => `
            <li class="step" style="--i:${i}" data-anim="up">
                <h3>${esc(tr(s.title))}</h3>
                <p>${esc(tr(s.text))}</p>
            </li>`).join('');
    }

    // ----------------------------------------------------
    // ANIMACIONES
    // ----------------------------------------------------
    const revealObserver = 'IntersectionObserver' in window
        ? new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                e.target.classList.add('in');
                revealObserver.unobserve(e.target);
                if (e.target.matches('.stats')) runCounters();
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
        : null;

    function observeReveals() {
        const targets = $$('[data-anim]:not(.in), .work-card:not(.in), .hero-title:not(.in), #process:not(.in), .heatmap:not(.in), .stats');
        if (!revealObserver) { targets.forEach(t => t.classList.add('in')); runCounters(); return; }
        targets.forEach(t => revealObserver.observe(t));
    }

    let countersDone = false;
    function counterValues() {
        const platforms = new Set();
        const group = { Web: 'web', PWA: 'web', Android: 'mobile', iOS: 'mobile', Desktop: 'desktop' };
        (content.projects || []).forEach(p => (p.platforms || []).forEach(x => platforms.add(group[x] || x)));
        const hasAI = (content.projects || []).some(p => (p.tech || []).some(t => /claude|ml5|ia|ai|rag/i.test(t)));
        return {
            'github.total': github ? github.total : 0,
            'github.repos': github ? github.repos : 0,
            projects: (content.projects || []).length,
            platforms: Math.min(platforms.size + (hasAI ? 1 : 0), 9) || 4
        };
    }
    function runCounters(force) {
        if (countersDone && !force) return;
        const vals = counterValues();
        if (!github) return; // espera a tener datos reales
        countersDone = true;
        $$('[data-count]').forEach(el => {
            const target = vals[el.dataset.count] || 0;
            if (reducedMotion()) { el.textContent = target.toLocaleString(prefs.lang); return; }
            const start = performance.now(), dur = 1600;
            const step = now => {
                const k = Math.min(1, (now - start) / dur);
                const eased = 1 - Math.pow(1 - k, 4);
                el.textContent = Math.round(target * eased).toLocaleString(prefs.lang);
                if (k < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        });
    }

    function bindPointerFX() {
        if (!finePointer) return;
        // Botones magnéticos
        $$('.magnetic').forEach(btn => {
            btn.addEventListener('pointermove', e => {
                if (reducedMotion()) return;
                const r = btn.getBoundingClientRect();
                const x = (e.clientX - r.left - r.width / 2) * 0.25;
                const y = (e.clientY - r.top - r.height / 2) * 0.35;
                btn.style.transform = `translate(${x}px, ${y}px)`;
            });
            btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
        });
        // Inclinación 3D de la portada
        const visual = $('.hero-visual'), stack = $('.hero-stack');
        visual.addEventListener('pointermove', e => {
            if (reducedMotion()) return;
            const r = visual.getBoundingClientRect();
            const rx = ((e.clientY - r.top) / r.height - 0.5) * -8;
            const ry = ((e.clientX - r.left) / r.width - 0.5) * 10;
            stack.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
        });
        visual.addEventListener('pointerleave', () => { stack.style.transform = ''; });
    }

    // Video: se reproduce al pasar el mouse (escritorio) o al verse en pantalla (móvil)
    function playVideo(media, on) {
        const v = $('video', media);
        if (!v) return;
        if (on) {
            if (!v.src) v.src = v.dataset.src;
            const p = v.play();
            if (p && p.then) p.then(() => media.classList.add('playing')).catch(() => {});
        } else {
            v.pause();
            media.classList.remove('playing');
        }
    }
    const videoObserver = !finePointer && 'IntersectionObserver' in window
        ? new IntersectionObserver(entries => entries.forEach(e => playVideo(e.target, e.isIntersecting && !reducedMotion())), { threshold: 0.6 })
        : null;

    function bindCards() {
        $$('.work-card').forEach(card => {
            card.addEventListener('click', () => openProject(card.dataset.id, card));
            const media = $('.work-media.has-video', card);
            if (finePointer) {
                card.addEventListener('pointermove', e => {
                    const r = card.getBoundingClientRect();
                    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
                    card.style.setProperty('--my', `${e.clientY - r.top}px`);
                });
                if (media) {
                    card.addEventListener('pointerenter', () => playVideo(media, true));
                    card.addEventListener('pointerleave', () => playVideo(media, false));
                }
            } else if (media && videoObserver) {
                videoObserver.observe(media);
            }
        });
    }

    // Enlace activo en la navegación
    function bindActiveNav() {
        if (!('IntersectionObserver' in window)) return;
        const links = $$('.nav-links a');
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        ['proyectos', 'servicios', 'sobre-mi', 'actividad'].forEach(id => { const s = document.getElementById(id); if (s) obs.observe(s); });
    }

    // ----------------------------------------------------
    // MODAL DE CASO DE ESTUDIO
    // ----------------------------------------------------
    const modal = $('#project-modal');
    let lastFocus = null;

    function openProject(id, origin) {
        const p = (content.projects || []).find(x => x.id === id);
        if (!p) return;
        lastFocus = origin || document.activeElement;
        const m = normalizeMedia(p);
        const images = (m.images || []).filter(Boolean);

        let media;
        if (m.video) media = `<video src="${esc(safeUrl(m.video))}" ${m.poster ? `poster="${esc(safeUrl(m.poster))}"` : ''} controls autoplay muted loop playsinline></video>`;
        else if (images.length) media = `<img id="case-main-img" src="${esc(safeUrl(images[0]))}" alt="${esc(p.title)}">`;
        else if (m.poster) media = `<img src="${esc(safeUrl(m.poster))}" alt="${esc(p.title)}">`;
        else media = coverHTML(p, m);

        const gallery = !m.video && images.length > 1
            ? `<div class="case-gallery">${images.map((src, i) => `<button class="${i === 0 ? 'active' : ''}" data-img="${esc(safeUrl(src))}" aria-label="Imagen ${i + 1}"><img src="${esc(safeUrl(src))}" alt=""></button>`).join('')}</div>`
            : '';

        const links = [];
        if (p.live) links.push(`<a class="btn btn-primary" href="${esc(safeUrl(p.live))}" target="_blank" rel="noopener"><i class="ph ph-arrow-up-right"></i>${esc(i18n('case.live'))}</a>`);
        (p.repos || []).forEach(r => links.push(`<a class="btn btn-ghost" href="${esc(safeUrl(r.url))}" target="_blank" rel="noopener"><i class="ph ph-github-logo"></i>${esc(r.label || i18n('case.repo'))}</a>`));
        const linksHTML = links.length ? links.join('') : `<span class="section-lead"><i class="ph ph-lock-simple"></i> ${esc(i18n('case.private'))}</span>`;

        const facts = [
            ['case.year', p.year],
            ['case.platforms', platformGroups(p).map(g => g.label).join(', ')],
            ['case.status', tr(p.status)],
            ['case.stack', (p.tech || []).slice(0, 3).join(', ')]
        ].filter(f => f[1]);

        const blocks = [
            ['case.problem', 'ph-warning-circle', tr(p.problem)],
            ['case.solution', 'ph-lightbulb', tr(p.solution)],
            ['case.architecture', 'ph-tree-structure', tr(p.architecture)],
            ['case.role', 'ph-user-circle', tr(p.role)]
        ].filter(b => b[2]);

        const highlights = (p.highlights || []).map(h => `<li><i class="ph ph-check-circle"></i><span>${esc(tr(h))}</span></li>`).join('');

        $('#modal-body').innerHTML = `
            <div class="case-media">${media}</div>
            ${gallery}
            <div class="case-body">
                <div class="case-top">
                    <p class="eyebrow">${esc(tr(p.category))}</p>
                    <h2 id="modal-title">${esc(p.title)}</h2>
                    <p class="lead">${esc(tr(p.summary))}</p>
                    <div class="case-links">${linksHTML}</div>
                </div>
                ${facts.length ? `<dl class="case-facts">${facts.map(f => `<div><dt>${esc(i18n(f[0]))}</dt><dd>${esc(f[1])}</dd></div>`).join('')}</dl>` : ''}
                ${blocks.length ? `<div class="case-cols">${blocks.map(b => `<div class="case-block"><h3><i class="ph ${b[1]}"></i>${esc(i18n(b[0]))}</h3><p>${esc(b[2])}</p></div>`).join('')}</div>` : ''}
                ${whereItems(p).length ? `<div class="case-block"><h3><i class="ph ph-map-pin-area"></i>${esc(i18n('case.where'))}</h3><div class="chips">${whereItems(p).map(w => chip(w.icon, tr(w.text), 'chip-where')).join('')}</div></div>` : ''}
                ${highlights ? `<div class="case-block"><h3><i class="ph ph-star"></i>${esc(i18n('case.highlights'))}</h3><ul class="case-list">${highlights}</ul></div>` : ''}
                ${(p.tech || []).length ? `<div class="case-block"><h3><i class="ph ph-stack"></i>${esc(i18n('case.stack'))}</h3><div class="tags">${p.tech.map(t => `<span>${esc(t)}</span>`).join('')}</div></div>` : ''}
            </div>`;

        $$('.case-gallery button', modal).forEach(b => b.addEventListener('click', () => {
            $('#case-main-img').src = b.dataset.img;
            $$('.case-gallery button', modal).forEach(x => x.classList.toggle('active', x === b));
        }));

        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        $('#modal-body').scrollTop = 0;
        requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('open')));
        $('.modal-close', modal).focus({ preventScroll: true });
    }

    function closeProject() {
        if (modal.hidden) return;
        modal.classList.remove('open');
        const v = $('video', modal); if (v) v.pause();
        setTimeout(() => {
            modal.hidden = true;
            $('#modal-body').innerHTML = '';
            document.body.style.overflow = '';
            if (lastFocus) lastFocus.focus({ preventScroll: true });
        }, reducedMotion() ? 0 : 400);
    }
    modal.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeProject(); });

    // ----------------------------------------------------
    // GITHUB (en vivo con respaldo)
    // ----------------------------------------------------
    async function loadGithub() {
        const user = content.profile.github;
        const snap = window.GITHUB_SNAPSHOT;
        const fallback = snap && /^nickys310$/i.test(user || '')
            ? { total: snap.total, repos: snap.publicRepos, days: snap.days, source: 'snapshot', date: snap.generated }
            : null;
        try {
            const ctl = new AbortController();
            const timer = setTimeout(() => ctl.abort(), 6000);
            const [cRes, uRes] = await Promise.all([
                fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(user)}?y=last`, { signal: ctl.signal }),
                fetch(`https://api.github.com/users/${encodeURIComponent(user)}`, { signal: ctl.signal })
            ]);
            clearTimeout(timer);
            if (!cRes.ok) throw new Error('contrib');
            const c = await cRes.json();
            const u = uRes.ok ? await uRes.json() : null;
            github = {
                total: c.total ? (c.total.lastYear ?? Object.values(c.total)[0]) : 0,
                repos: u ? u.public_repos : (fallback ? fallback.repos : 0),
                days: (c.contributions || []).map(d => [d.date, d.count]),
                source: 'live'
            };
        } catch (e) {
            github = fallback || { total: 0, repos: 0, days: [], source: 'none' };
        }
        renderHeatmap();
        renderActivityText();
        countersDone = false;
        const stats = $('.stats');
        if (stats.classList.contains('in') || !revealObserver) runCounters(true);
    }

    function renderActivityText() {
        const lead = $('#activity-lead'), src = $('#heatmap-source');
        if (!github) { lead.textContent = i18n('activity.loading'); src.textContent = ''; return; }
        lead.textContent = i18n('activity.lead', github.total || 0);
        src.textContent = github.source === 'live' ? i18n('activity.live')
            : github.source === 'snapshot' ? i18n('activity.snapshot', github.date) : '';
    }

    function renderHeatmap() {
        const el = $('#heatmap');
        const days = (github && github.days) || [];
        if (!days.length) { el.innerHTML = ''; return; }
        const max = Math.max(1, ...days.map(d => d[1]));
        const level = n => n === 0 ? 0 : n <= max * 0.15 ? 1 : n <= max * 0.35 ? 2 : n <= max * 0.6 ? 3 : 4;
        const firstDow = new Date(days[0][0] + 'T00:00:00').getDay();
        let html = '';
        for (let i = 0; i < firstDow; i++) html += '<i style="visibility:hidden"></i>';
        days.forEach((d, i) => {
            const col = Math.floor((i + firstDow) / 7);
            html += `<i class="l${level(d[1])}" style="--c:${col}" title="${d[0]}: ${d[1]}"></i>`;
        });
        el.innerHTML = html;
        if (revealObserver) { el.classList.remove('in'); revealObserver.observe(el); } else el.classList.add('in');
    }

    // ----------------------------------------------------
    // CONTROLES GLOBALES
    // ----------------------------------------------------
    function setPref(key, value) {
        prefs[key] = value;
        saveJSON(PREFS_KEY, prefs);
        renderAll();
        if (key === 'lang') { renderActivityText(); countersDone = false; runCounters(true); }
    }

    $('#lang-toggle').addEventListener('click', () => setPref('lang', prefs.lang === 'es' ? 'en' : 'es'));
    $('#theme-toggle').addEventListener('click', () => setPref('theme', prefs.theme === 'dark' ? 'light' : 'dark'));

    const menuBtn = $('#menu-btn'), menu = $('#mobile-menu');
    const setMenu = open => { menu.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', String(open)); };
    menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
    $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));

    $('#copy-email').addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(content.profile.email); }
        catch (e) {
            const t = document.createElement('textarea'); t.value = content.profile.email; document.body.appendChild(t);
            t.select(); document.execCommand('copy'); t.remove();
        }
        toast(i18n('contact.copied'));
    });

    let toastTimer;
    function toast(msg) {
        const el = $('#toast');
        el.textContent = msg;
        el.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
    }

    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        if (!modal.hidden) closeProject();
        else if (!panel.hidden) closePanel();
        else setMenu(false);
    });

    // ----------------------------------------------------
    // PANEL DE CONTROL
    // ----------------------------------------------------
    const panel = $('#panel');
    function openPanel() {
        panel.hidden = false;
        document.body.style.overflow = 'hidden';
        fillProfileForm();
        renderProjectList();
        requestAnimationFrame(() => requestAnimationFrame(() => panel.classList.add('open')));
    }
    function closePanel() {
        panel.classList.remove('open');
        setTimeout(() => { panel.hidden = true; document.body.style.overflow = ''; }, reducedMotion() ? 0 : 450);
    }
    $('#panel-open').addEventListener('click', openPanel);
    panel.addEventListener('click', e => { if (e.target.closest('[data-panel-close]')) closePanel(); });

    $$('.panel-tabs button').forEach(tab => tab.addEventListener('click', () => {
        $$('.panel-tabs button').forEach(t => t.classList.toggle('active', t === tab));
        $$('.tab-pane').forEach(p => p.classList.toggle('active', p.dataset.pane === tab.dataset.tab));
    }));

    function syncPanelControls() {
        $$('#seg-theme button').forEach(b => b.classList.toggle('active', b.dataset.value === prefs.theme));
        $$('#seg-lang button').forEach(b => b.classList.toggle('active', b.dataset.value === prefs.lang));
        $('#motion-toggle').checked = prefs.motion;
        $('#available-toggle').checked = !!content.profile.available;
    }
    $$('#seg-theme button').forEach(b => b.addEventListener('click', () => setPref('theme', b.dataset.value)));
    $$('#seg-lang button').forEach(b => b.addEventListener('click', () => setPref('lang', b.dataset.value)));
    $('#motion-toggle').addEventListener('change', e => setPref('motion', e.target.checked));
    $('#available-toggle').addEventListener('change', e => { content.profile.available = e.target.checked; persist(); });

    function persist() { saveJSON(CONTENT_KEY, content); renderAll(); }

    // Perfil
    const profileForm = $('#profile-form');
    function fillProfileForm() {
        const p = content.profile, f = profileForm.elements;
        f.name.value = p.name || '';
        f.email.value = p.email || '';
        f.whatsapp.value = p.whatsapp || '';
        f.github.value = p.github || '';
        f.linkedin.value = p.linkedin || '';
        f.headline_es.value = (p.headline && p.headline.es) || '';
        f.headline_en.value = (p.headline && p.headline.en) || '';
        f.photo.value = p.photo || '';
    }
    profileForm.addEventListener('submit', e => {
        e.preventDefault();
        const f = profileForm.elements, p = content.profile;
        const githubChanged = f.github.value.trim() !== p.github;
        p.name = f.name.value.trim() || p.name;
        p.brand = p.name.split(' ')[0];
        p.email = f.email.value.trim() || p.email;
        p.whatsapp = f.whatsapp.value.replace(/\D/g, '');
        p.github = f.github.value.trim() || p.github;
        p.linkedin = f.linkedin.value.trim();
        p.headline = { es: f.headline_es.value.trim() || p.headline.es, en: f.headline_en.value.trim() || p.headline.en };
        p.photo = f.photo.value.trim();
        persist();
        if (githubChanged) loadGithub();
        toast(i18n('panel.saved'));
    });

    // Proyectos
    const projectForm = $('#project-form');
    function renderProjectList() {
        $('#proj-list').innerHTML = (content.projects || []).map((p, i) => `
            <li>
                <span>${esc(p.title)}</span>
                <button class="icon-btn" data-act="up" data-i="${i}" aria-label="${esc(i18n('panel.moveUp'))}" ${i === 0 ? 'disabled' : ''}><i class="ph ph-arrow-up"></i></button>
                <button class="icon-btn" data-act="edit" data-i="${i}" aria-label="${esc(i18n('panel.edit'))}"><i class="ph ph-pencil-simple"></i></button>
                <button class="icon-btn danger" data-act="del" data-i="${i}" aria-label="${esc(i18n('panel.delete'))}"><i class="ph ph-trash"></i></button>
            </li>`).join('');
    }
    $('#proj-list').addEventListener('click', e => {
        const btn = e.target.closest('button[data-act]');
        if (!btn) return;
        const i = Number(btn.dataset.i), list = content.projects, p = list[i];
        if (btn.dataset.act === 'up' && i > 0) {
            [list[i - 1], list[i]] = [list[i], list[i - 1]];
            list.forEach((x, k) => { x.featured = k === 0 && !!(list[0].featured || x.featured); });
            persist(); renderProjectList();
        } else if (btn.dataset.act === 'del') {
            if (!confirm(i18n('panel.confirmDelete', p.title))) return;
            list.splice(i, 1);
            persist(); renderProjectList();
            toast(i18n('panel.projectDeleted', p.title));
        } else if (btn.dataset.act === 'edit') {
            const f = projectForm.elements, m = normalizeMedia(p);
            f.id.value = p.id;
            f.title.value = p.title;
            f.category.value = tr(p.category);
            f.summary.value = tr(p.summary);
            f.tech.value = (p.tech || []).join(', ');
            f.live.value = p.live || '';
            f.repo.value = (p.repos && p.repos[0] && p.repos[0].url) || '';
            f.media.value = m.video || m.poster || '';
            f.platform.value = mainPlatform(p);
            f.where.value = whereItems(p).map(w => tr(w.text)).join(', ');
            $('#project-form-title').textContent = i18n('panel.editProject');
            f.title.focus();
        }
    });

    // Al editar, el texto escrito reemplaza solo el idioma activo
    const setLocalized = (old, val) => {
        if (old && typeof old === 'object') return Object.assign({}, old, { [prefs.lang]: val });
        return val;
    };

    projectForm.addEventListener('submit', e => {
        e.preventDefault();
        const f = projectForm.elements;
        const tech = f.tech.value.split(',').map(s => s.trim()).filter(Boolean);
        const mediaSrc = f.media.value.trim();
        const whereList = f.where.value.split(',').map(x => x.trim()).filter(Boolean);
        const toWhere = txt => {
            const icon = /vercel|vivo|live|netlify/i.test(txt) ? 'ph-rocket-launch' : /github|código|code/i.test(txt) ? 'ph-github-logo'
                : /apk|android|play/i.test(txt) ? 'ph-android-logo' : /escritorio|desktop|windows/i.test(txt) ? 'ph-desktop' : 'ph-map-pin';
            return { icon, text: txt };
        };
        const existing = content.projects.find(p => p.id === f.id.value);
        if (existing) {
            existing.title = f.title.value.trim();
            existing.category = setLocalized(existing.category, f.category.value.trim());
            existing.summary = setLocalized(existing.summary, f.summary.value.trim());
            existing.tech = tech;
            if (f.platform.value !== mainPlatform(existing)) existing.platforms = [f.platform.value];
            const oldWhere = whereItems(existing);
            existing.where = whereList.map((txt, k) => oldWhere[k] && tr(oldWhere[k].text) === txt ? oldWhere[k] : toWhere(txt));
            existing.live = f.live.value.trim();
            const repo = f.repo.value.trim();
            existing.repos = repo ? [{ label: 'GitHub', url: repo }].concat((existing.repos || []).slice(1)) : (existing.repos || []).slice(1);
            const m = normalizeMedia(existing);
            const current = m.video || m.poster || '';
            if (mediaSrc !== current) existing.media = mediaSrc ? (mediaKind(mediaSrc) === 'video' ? { video: mediaSrc } : { poster: mediaSrc, images: [mediaSrc] }) : { icon: 'ph-cube' };
        } else {
            content.projects.push({
                id: 'p' + Date.now().toString(36),
                title: f.title.value.trim(),
                year: String(new Date().getFullYear()),
                category: f.category.value.trim(),
                summary: f.summary.value.trim(),
                tech,
                live: f.live.value.trim(),
                repos: f.repo.value.trim() ? [{ label: 'GitHub', url: f.repo.value.trim() }] : [],
                media: mediaSrc ? (mediaKind(mediaSrc) === 'video' ? { video: mediaSrc } : { poster: mediaSrc, images: [mediaSrc] }) : { icon: 'ph-cube' },
                platforms: [f.platform.value],
                where: whereList.map(toWhere)
            });
        }
        persist();
        projectForm.reset();
        f.id.value = '';
        $('#project-form-title').textContent = i18n('panel.newProject');
        renderProjectList();
        toast(i18n('panel.projectSaved'));
    });
    projectForm.addEventListener('reset', () => {
        projectForm.elements.id.value = '';
        $('#project-form-title').textContent = i18n('panel.newProject');
    });

    // Datos
    $('#export-btn').addEventListener('click', () => {
        const header = '/*\n * CONTENIDO DEL PORTAFOLIO (exportado desde el Panel de control)\n * Reemplaza js/content.js por este archivo y vuelve a publicar.\n */\n';
        const blob = new Blob([header + 'window.PORTFOLIO_CONTENT = ' + JSON.stringify(content, null, 2) + ';\n'], { type: 'text/javascript' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'content.js';
        a.click();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
    $('#import-input').addEventListener('change', async e => {
        const file = e.target.files[0];
        if (!file) return;
        try {
            let text = await file.text();
            text = text.replace(/^[\s\S]*?window\.PORTFOLIO_CONTENT\s*=\s*/, '').replace(/;\s*$/, '');
            const data = JSON.parse(text);
            if (!data.profile || !Array.isArray(data.projects)) throw new Error('shape');
            content = data;
            persist(); fillProfileForm(); renderProjectList(); loadGithub();
            toast(i18n('panel.imported'));
        } catch (err) { toast(i18n('panel.importError')); }
        e.target.value = '';
    });
    $('#reset-btn').addEventListener('click', () => {
        if (!confirm(i18n('panel.confirmReset'))) return;
        try { localStorage.removeItem(CONTENT_KEY); } catch (e) {}
        content = clone(DEFAULT_CONTENT);
        persist(); fillProfileForm(); renderProjectList(); loadGithub();
        toast(i18n('panel.restored'));
    });

    // ----------------------------------------------------
    // INICIO
    // ----------------------------------------------------
    renderAll();
    bindPointerFX();
    bindActiveNav();
    renderActivityText();
    loadGithub();
})();
