/*
 * EXTRAS DEL PORTAFOLIO
 * Galería de diseño, planes, testimonios, "Ahora mismo", CV, formulario
 * de contacto, diagramas de arquitectura, paleta de comandos (Ctrl+K)
 * y terminal interactiva. Usa window.PortfolioAPI de script.js.
 */
(() => {
    'use strict';
    const api = window.PortfolioAPI;
    if (!api) return;
    const { i18n, tr, esc, safeUrl } = api;
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    api.addStrings({
        es: {
            'nav.plans': 'Precios', 'cta.cv': 'Descargar CV', 'about.now': 'Ahora mismo',
            'design.title': 'Diseño visual', 'design.lead': 'Identidad, íconos e interfaces que diseñé para mis propios productos.',
            'plans.title': 'Planes y precios', 'plans.lead': 'Precios de referencia en dólares. Cada proyecto se cotiza según su alcance, sin compromiso.',
            'plans.cta': 'Cotizar este plan', 'plans.popular': 'Más pedido', 'plans.time': 'Entrega',
            'testimonials.title': 'Lo que dicen de mi trabajo',
            'form.title': 'Cuéntame de tu proyecto', 'form.name': 'Tu nombre', 'form.type': 'Tipo de proyecto',
            'form.choose': 'Elige una opción', 'form.tLanding': 'Landing page', 'form.tWeb': 'Web app', 'form.tMobile': 'App móvil',
            'form.tDesign': 'Diseño UI/UX', 'form.tAI': 'Integración con IA', 'form.tOther': 'Otro',
            'form.budget': 'Presupuesto aproximado', 'form.bMore': 'Más de US$3.000', 'form.bUnknown': 'Aún no lo sé',
            'form.when': '¿Para cuándo?', 'form.whenPh': 'Ej. en un mes', 'form.message': 'Mensaje', 'form.messagePh': '¿Qué quieres construir?',
            'form.sendWa': 'Enviar por WhatsApp', 'form.sendMail': 'Enviar por correo',
            'form.note': 'Se abre tu WhatsApp o tu correo con el mensaje listo. No se guarda nada en este sitio.',
            'form.missing': 'Completa tu nombre, el tipo de proyecto y el mensaje.', 'form.noWa': 'WhatsApp no está configurado; usa el correo.',
            'form.greeting': 'Hola Nicoll, vi tu portafolio.', 'form.lName': 'Nombre', 'form.lType': 'Proyecto', 'form.lBudget': 'Presupuesto', 'form.lWhen': 'Para cuándo',
            'form.subject': 'Nuevo proyecto',
            'case.diagram': 'Diagrama', 'case.relations': 'Relaciones',
            'palette.ph': 'Busca una sección, proyecto o acción...', 'palette.move': 'moverse', 'palette.open': 'abrir', 'palette.terminal': 'terminal',
            'palette.sections': 'Secciones', 'palette.projects': 'Proyectos', 'palette.actions': 'Acciones', 'palette.empty': 'Sin resultados',
            'act.theme': 'Cambiar tema claro/oscuro', 'act.lang': 'Switch to English', 'act.cv': 'Descargar CV', 'act.email': 'Copiar correo',
            'act.wa': 'Escribir por WhatsApp', 'act.github': 'Abrir GitHub', 'act.terminal': 'Abrir terminal', 'act.top': 'Ir al inicio',
            'sec.about': 'Sobre mí', 'sec.work': 'Proyectos', 'sec.design': 'Diseño visual', 'sec.services': 'Servicios',
            'sec.plans': 'Planes y precios', 'sec.activity': 'Actividad en GitHub', 'sec.contact': 'Contacto',
            'panel.nowEs': 'Ahora mismo (español)', 'panel.nowEn': 'Ahora mismo (inglés)',
            'term.welcome': 'Bienvenido a la terminal de Nicoll. Escribe help para ver los comandos.'
        },
        en: {
            'nav.plans': 'Pricing', 'cta.cv': 'Download CV', 'about.now': 'Right now',
            'design.title': 'Visual design', 'design.lead': 'Identity, icons and interfaces I designed for my own products.',
            'plans.title': 'Plans and pricing', 'plans.lead': 'Reference prices in US dollars. Every project is quoted by scope, no strings attached.',
            'plans.cta': 'Get a quote', 'plans.popular': 'Most requested', 'plans.time': 'Delivery',
            'testimonials.title': 'What people say about my work',
            'form.title': 'Tell me about your project', 'form.name': 'Your name', 'form.type': 'Project type',
            'form.choose': 'Choose an option', 'form.tLanding': 'Landing page', 'form.tWeb': 'Web app', 'form.tMobile': 'Mobile app',
            'form.tDesign': 'UI/UX design', 'form.tAI': 'AI integration', 'form.tOther': 'Other',
            'form.budget': 'Approximate budget', 'form.bMore': 'More than US$3,000', 'form.bUnknown': 'Not sure yet',
            'form.when': 'When do you need it?', 'form.whenPh': 'e.g. in a month', 'form.message': 'Message', 'form.messagePh': 'What do you want to build?',
            'form.sendWa': 'Send via WhatsApp', 'form.sendMail': 'Send via email',
            'form.note': 'Your WhatsApp or email opens with the message ready. Nothing is stored on this site.',
            'form.missing': 'Please fill in your name, project type and message.', 'form.noWa': 'WhatsApp is not set up; please use email.',
            'form.greeting': 'Hi Nicoll, I saw your portfolio.', 'form.lName': 'Name', 'form.lType': 'Project', 'form.lBudget': 'Budget', 'form.lWhen': 'Timeline',
            'form.subject': 'New project',
            'case.diagram': 'Diagram', 'case.relations': 'Relationships',
            'palette.ph': 'Search a section, project or action...', 'palette.move': 'move', 'palette.open': 'open', 'palette.terminal': 'terminal',
            'palette.sections': 'Sections', 'palette.projects': 'Projects', 'palette.actions': 'Actions', 'palette.empty': 'No results',
            'act.theme': 'Toggle light/dark theme', 'act.lang': 'Cambiar a español', 'act.cv': 'Download CV', 'act.email': 'Copy email',
            'act.wa': 'Message on WhatsApp', 'act.github': 'Open GitHub', 'act.terminal': 'Open terminal', 'act.top': 'Back to top',
            'sec.about': 'About', 'sec.work': 'Work', 'sec.design': 'Visual design', 'sec.services': 'Services',
            'sec.plans': 'Plans and pricing', 'sec.activity': 'GitHub activity', 'sec.contact': 'Contact',
            'panel.nowEs': 'Right now (Spanish)', 'panel.nowEn': 'Right now (English)',
            'term.welcome': "Welcome to Nicoll's terminal. Type help to see the commands."
        }
    });

    const content = () => api.content;
    const lang = () => api.prefs.lang;
    const waNumber = () => String(content().profile.whatsapp || '').replace(/\D/g, '');
    const cvUrl = () => { const cv = content().profile.cv || {}; return cv[lang()] || cv.es || ''; };

    // ----------------------------------------------------
    // RENDER DE SECCIONES NUEVAS
    // ----------------------------------------------------
    function render() {
        const p = content().profile;

        // Placeholders traducidos
        $$('[data-i18n-ph]').forEach(el => { el.placeholder = i18n(el.dataset.i18nPh); });

        // Ahora mismo
        const nowText = tr(p.now);
        const nowLine = $('#now-line');
        if (nowLine) { nowLine.hidden = !nowText; $('[data-bind="now"]', nowLine).textContent = nowText; }

        // CV
        $$('.cv-link').forEach(a => {
            const url = safeUrl(cvUrl());
            a.hidden = !url;
            if (url) { a.href = url; a.setAttribute('download', url.split('/').pop()); }
        });

        // Galería de diseño
        const grid = $('#design-grid');
        if (grid) {
            const items = content().design || [];
            $('#diseno').hidden = !items.length;
            grid.innerHTML = items.map((d, i) => `
                <figure class="design-item size-${esc(d.size || 'square')}${d.pad ? ' pad' : ''}${d.contain ? ' contain' : ''}" data-anim="up" style="--d:${(i % 3) * 0.08}s">
                    <div class="design-img"><img src="${esc(safeUrl(d.src))}" alt="${esc(d.title)}: ${esc(tr(d.kind))}" loading="lazy"></div>
                    <figcaption><strong>${esc(d.title)}</strong><span>${esc(tr(d.kind))}</span></figcaption>
                </figure>`).join('');
        }

        // Planes
        const plans = $('#plans');
        if (plans) {
            const list = content().plans || [];
            $('#planes').hidden = !list.length;
            plans.innerHTML = list.map((pl, i) => `
                <article class="plan${pl.featured ? ' featured' : ''}" data-anim="up" style="--d:${i * 0.08}s">
                    ${pl.featured ? `<span class="plan-badge">${esc(i18n('plans.popular'))}</span>` : ''}
                    <h3>${esc(tr(pl.name))}</h3>
                    <p class="plan-price">${esc(tr(pl.price))}</p>
                    <p class="plan-desc">${esc(tr(pl.desc))}</p>
                    <ul>${(pl.features || []).map(ft => `<li><i class="ph ph-check"></i>${esc(tr(ft))}</li>`).join('')}</ul>
                    <p class="plan-time"><i class="ph ph-clock"></i>${esc(i18n('plans.time'))}: ${esc(tr(pl.time))}</p>
                    <a href="#contacto" class="btn ${pl.featured ? 'btn-primary' : 'btn-ghost'} btn-block" data-plan="${esc(tr(pl.name))}">${esc(i18n('plans.cta'))}</a>
                </article>`).join('');
        }

        // Testimonios (solo si hay citas reales)
        const tList = content().testimonials || [];
        const tSec = $('#testimonios');
        if (tSec) {
            tSec.hidden = !tList.length;
            $('#testimonials').innerHTML = tList.map((t, i) => `
                <figure class="testimonial" data-anim="up" style="--d:${i * 0.08}s">
                    <i class="ph ph-fill ph-quotes"></i>
                    <blockquote>${esc(tr(t.quote))}</blockquote>
                    <figcaption><strong>${esc(t.name)}</strong><span>${esc(tr(t.role))}</span></figcaption>
                </figure>`).join('');
        }
    }
    document.addEventListener('portfolio:render', render);

    // "Cotizar este plan" rellena el formulario
    document.addEventListener('click', e => {
        const a = e.target.closest('[data-plan]');
        if (!a) return;
        const sel = $('#contact-form select[name="type"]');
        const name = a.dataset.plan.toLowerCase();
        const opt = [...sel.options].find(o => o.textContent.toLowerCase() === name || name.includes(o.textContent.toLowerCase()));
        if (opt) sel.value = opt.value || opt.textContent;
    });

    // ----------------------------------------------------
    // FORMULARIO DE CONTACTO (abre WhatsApp o correo con el mensaje)
    // ----------------------------------------------------
    const form = $('#contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const channel = (e.submitter && e.submitter.dataset.channel) || 'email';
            const f = form.elements, err = $('#form-error');
            const name = f.name.value.trim(), type = f.type.value.trim(), msg = f.message.value.trim();
            if (!name || !type || !msg) { err.textContent = i18n('form.missing'); err.hidden = false; return; }
            err.hidden = true;
            const lines = [
                i18n('form.greeting'), '',
                `${i18n('form.lName')}: ${name}`,
                `${i18n('form.lType')}: ${type}`,
                f.budget.value ? `${i18n('form.lBudget')}: ${f.budget.value}` : '',
                f.when.value.trim() ? `${i18n('form.lWhen')}: ${f.when.value.trim()}` : '',
                '', msg
            ].filter((l, i, arr) => l !== '' || (arr[i - 1] !== '' && i > 0));
            const text = lines.join('\n');
            if (channel === 'whatsapp') {
                if (!waNumber()) { err.textContent = i18n('form.noWa'); err.hidden = false; return; }
                window.open(`https://wa.me/${waNumber()}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
            } else {
                location.href = `mailto:${content().profile.email}?subject=${encodeURIComponent(`${i18n('form.subject')}: ${type}`)}&body=${encodeURIComponent(text)}`;
            }
        });
    }

    // ----------------------------------------------------
    // DIAGRAMAS EN EL CASO DE ESTUDIO
    // ----------------------------------------------------
    function diagramHTML(d) {
        if (d.type === 'uml') {
            const box = c => `<div class="uml-class">
                <div class="uml-name">${esc(c.name)}</div>
                <ul class="uml-attrs">${(c.attrs || []).map(a => `<li>${esc(a)}</li>`).join('') || '<li>&nbsp;</li>'}</ul>
                <ul class="uml-methods">${(c.methods || []).map(m => `<li>${esc(m)}</li>`).join('') || '<li>&nbsp;</li>'}</ul>
            </div>`;
            const rel = (d.relations || []).map(r => `<li><code>${esc(r[0])}</code><span class="uml-arrow" aria-hidden="true"></span><code>${esc(r[1])}</code><em>${esc(tr(r[2]))}</em></li>`).join('');
            return `<div class="diagram uml">
                <div class="uml-grid">${(d.classes || []).map(box).join('')}</div>
                ${rel ? `<h4>${esc(i18n('case.relations'))}</h4><ul class="uml-rels">${rel}</ul>` : ''}
            </div>`;
        }
        const layers = (d.layers || []).map((l, i) => `
            <div class="layer" style="--i:${i}">
                <span class="layer-name">${esc(tr(l.name))}</span>
                <div class="layer-nodes">${(l.nodes || []).map(n => `<span class="node">${esc(tr(n))}</span>`).join('')}</div>
            </div>`).join('<div class="layer-link" aria-hidden="true"><i class="ph ph-arrows-down-up"></i></div>');
        return `<div class="diagram layers">${layers}</div>`;
    }
    document.addEventListener('portfolio:project-open', e => {
        const p = e.detail;
        if (!p || !p.diagram) return;
        const body = $('#modal-body .case-body');
        const cols = $('.case-cols', body);
        const block = document.createElement('div');
        block.className = 'case-block case-diagram';
        block.innerHTML = `<h3><i class="ph ph-graph"></i>${esc(tr(p.diagram.title) || i18n('case.diagram'))}</h3>${diagramHTML(p.diagram)}`;
        if (cols) cols.after(block); else body.appendChild(block);
    });

    // ----------------------------------------------------
    // ACCIONES COMPARTIDAS (paleta y terminal)
    // ----------------------------------------------------
    const go = id => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: api.reducedMotion() ? 'auto' : 'smooth' }); };
    const copyEmail = async () => {
        try { await navigator.clipboard.writeText(content().profile.email); } catch (e) {}
        api.toast(i18n('contact.copied'));
    };
    const actions = {
        theme: () => api.setPref('theme', api.prefs.theme === 'dark' ? 'light' : 'dark'),
        lang: () => api.setPref('lang', lang() === 'es' ? 'en' : 'es'),
        cv: () => { const u = safeUrl(cvUrl()); if (u) { const a = document.createElement('a'); a.href = u; a.download = u.split('/').pop(); a.click(); } },
        email: copyEmail,
        wa: () => { if (waNumber()) window.open(`https://wa.me/${waNumber()}`, '_blank', 'noopener'); },
        github: () => window.open(`https://github.com/${encodeURIComponent(content().profile.github)}`, '_blank', 'noopener'),
        terminal: () => openTerminal(),
        top: () => scrollTo({ top: 0, behavior: api.reducedMotion() ? 'auto' : 'smooth' })
    };

    // ----------------------------------------------------
    // PALETA DE COMANDOS (Ctrl+K / Cmd+K)
    // ----------------------------------------------------
    const palette = $('#palette'), pInput = $('#palette-input'), pList = $('#palette-list');
    let pItems = [], pIndex = 0;

    function paletteEntries() {
        const sections = [
            ['sobre-mi', 'sec.about', 'ph-user'], ['proyectos', 'sec.work', 'ph-squares-four'], ['diseno', 'sec.design', 'ph-pen-nib'],
            ['servicios', 'sec.services', 'ph-briefcase'], ['planes', 'sec.plans', 'ph-tag'], ['actividad', 'sec.activity', 'ph-git-branch'], ['contacto', 'sec.contact', 'ph-envelope-simple']
        ].filter(s => { const el = document.getElementById(s[0]); return el && !el.hidden; })
         .map(([id, key, icon]) => ({ group: 'palette.sections', icon, label: i18n(key), run: () => go(id) }));
        const projects = (content().projects || []).map(p => ({ group: 'palette.projects', icon: 'ph-folder-open', label: p.title, hint: tr(p.category), run: () => api.openProject(p.id) }));
        const acts = [
            ['theme', 'ph-circle-half'], ['lang', 'ph-translate'], ['cv', 'ph-file-arrow-down'], ['email', 'ph-copy'],
            ['wa', 'ph-whatsapp-logo'], ['github', 'ph-github-logo'], ['terminal', 'ph-terminal-window'], ['top', 'ph-arrow-up']
        ].filter(([k]) => (k !== 'wa' || waNumber()) && (k !== 'cv' || cvUrl()))
         .map(([k, icon]) => ({ group: 'palette.actions', icon, label: i18n('act.' + k), run: actions[k] }));
        return sections.concat(projects, acts);
    }

    const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    function renderPalette() {
        const q = norm(pInput.value.trim());
        pItems = paletteEntries().filter(it => !q || norm(it.label + ' ' + (it.hint || '')).includes(q));
        pIndex = Math.min(pIndex, Math.max(0, pItems.length - 1));
        if (!pItems.length) { pList.innerHTML = `<li class="palette-empty">${esc(i18n('palette.empty'))}</li>`; return; }
        let html = '', last = '';
        pItems.forEach((it, i) => {
            if (it.group !== last) { html += `<li class="palette-group">${esc(i18n(it.group))}</li>`; last = it.group; }
            html += `<li role="option" class="palette-item${i === pIndex ? ' active' : ''}" data-i="${i}" aria-selected="${i === pIndex}">
                <i class="ph ${it.icon}"></i><span>${esc(it.label)}</span>${it.hint ? `<small>${esc(it.hint)}</small>` : ''}</li>`;
        });
        pList.innerHTML = html;
        const act = $('.palette-item.active', pList);
        if (act) act.scrollIntoView({ block: 'nearest' });
    }
    function openPalette() {
        closeTerminal();
        palette.hidden = false;
        pInput.value = ''; pIndex = 0;
        renderPalette();
        requestAnimationFrame(() => { palette.classList.add('open'); pInput.focus(); });
    }
    function closePalette() {
        if (palette.hidden) return;
        palette.classList.remove('open');
        setTimeout(() => { palette.hidden = true; }, api.reducedMotion() ? 0 : 200);
    }
    function runPalette(i) {
        const it = pItems[i];
        if (!it) return;
        closePalette();
        setTimeout(it.run, 60);
    }
    pInput.addEventListener('input', () => { pIndex = 0; renderPalette(); });
    pInput.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown') { e.preventDefault(); pIndex = (pIndex + 1) % Math.max(1, pItems.length); renderPalette(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); pIndex = (pIndex - 1 + pItems.length) % Math.max(1, pItems.length); renderPalette(); }
        else if (e.key === 'Enter') { e.preventDefault(); runPalette(pIndex); }
    });
    pList.addEventListener('click', e => { const li = e.target.closest('.palette-item'); if (li) runPalette(Number(li.dataset.i)); });
    pList.addEventListener('mousemove', e => {
        const li = e.target.closest('.palette-item');
        if (li && Number(li.dataset.i) !== pIndex) { pIndex = Number(li.dataset.i); $$('.palette-item', pList).forEach(x => x.classList.toggle('active', x === li)); }
    });
    palette.addEventListener('click', e => { if (e.target.closest('[data-palette-close]')) closePalette(); });
    $('#palette-open').addEventListener('click', openPalette);

    // ----------------------------------------------------
    // TERMINAL INTERACTIVA
    // ----------------------------------------------------
    const term = $('#terminal'), tOut = $('#terminal-out'), tInput = $('#terminal-input');
    const history = []; let hIndex = 0;
    const print = (html, cls = '') => { const div = document.createElement('div'); div.className = 'tl ' + cls; div.innerHTML = html; tOut.appendChild(div); tOut.scrollTop = tOut.scrollHeight; };
    const T = (es, en) => lang() === 'en' ? en : es;

    const commands = {
        help: () => print([
            ['about', T('quién soy', 'who I am')], ['now', T('en qué estoy trabajando', 'what I am working on')],
            ['projects', T('lista de proyectos', 'list of projects')], ['open &lt;id&gt;', T('abre un caso de estudio', 'opens a case study')],
            ['skills', T('tecnologías', 'tech stack')], ['plans', T('planes y precios', 'plans and pricing')],
            ['contact', T('cómo contactarme', 'how to reach me')], ['cv', T('descarga mi CV', 'downloads my CV')],
            ['github', T('abre mi GitHub', 'opens my GitHub')], ['theme', T('cambia el tema', 'toggles the theme')],
            ['lang', T('cambia el idioma', 'switches language')], ['clear', T('limpia la pantalla', 'clears the screen')], ['exit', T('cierra la terminal', 'closes the terminal')]
        ].map(([c, d]) => `<span class="t-cmd">${c}</span><span class="t-dim">${d}</span>`).join('<br>')),
        about: () => {
            const p = content().profile;
            print(`<span class="t-hl">${esc(p.name)}</span> · ${esc(tr(p.location))}<br>${esc(tr(p.subtitle))}<br><span class="t-dim">${esc(T('Ingeniería de Software', 'Software Engineering'))} · ${esc(p.university || '')}</span>`);
        },
        now: () => print(esc(tr(content().profile.now) || '-')),
        projects: () => print((content().projects || []).map(p => `<span class="t-cmd">${esc(p.id)}</span>${esc(p.title)} <span class="t-dim">· ${esc(tr(p.category))}</span>`).join('<br>') + `<br><span class="t-dim">${T('Escribe open civia para abrir uno.', 'Type open civia to open one.')}</span>`),
        open: arg => {
            const p = (content().projects || []).find(x => x.id === arg || x.title.toLowerCase() === String(arg).toLowerCase());
            if (!p) return print(T(`No encontré "${esc(arg || '')}". Escribe projects.`, `Could not find "${esc(arg || '')}". Type projects.`), 't-err');
            print(T(`Abriendo ${esc(p.title)}...`, `Opening ${esc(p.title)}...`), 't-ok');
            setTimeout(() => { closeTerminal(); api.openProject(p.id); }, 350);
        },
        skills: () => {
            const all = [...new Set((content().projects || []).flatMap(p => p.tech || []))];
            print(all.map(t => `<span class="t-tag">${esc(t)}</span>`).join(' '));
        },
        plans: () => print((content().plans || []).map(pl => `<span class="t-hl">${esc(tr(pl.name))}</span> ${esc(tr(pl.price))} <span class="t-dim">· ${esc(tr(pl.time))}</span>`).join('<br>')),
        contact: () => {
            const p = content().profile;
            print([`email     ${esc(p.email)}`, waNumber() ? `whatsapp  +${esc(waNumber())}` : '', `github    github.com/${esc(p.github)}`, p.linkedin ? `linkedin  ${esc(p.linkedin.replace(/^https?:\/\/(www\.)?/, ''))}` : '']
                .filter(Boolean).map(l => l.replace(/ /g, '&nbsp;')).join('<br>'));
        },
        cv: () => { actions.cv(); print(T('Descargando CV...', 'Downloading CV...'), 't-ok'); },
        github: () => { actions.github(); print('github.com/' + esc(content().profile.github), 't-ok'); },
        theme: () => { actions.theme(); print(T('Tema cambiado.', 'Theme switched.'), 't-ok'); },
        lang: () => { actions.lang(); print(T('Idioma: español.', 'Language: English.'), 't-ok'); },
        clear: () => { tOut.innerHTML = ''; },
        exit: () => closeTerminal(),
        sudo: () => print(T('Buen intento. Para contratarme no hace falta sudo: escribe contact.', 'Nice try. No sudo needed to hire me: type contact.'), 't-err')
    };

    function runCommand(raw) {
        const line = raw.trim();
        print(`<span class="prompt">nicoll@portfolio:~$</span> ${esc(line)}`, 't-echo');
        if (!line) return;
        history.push(line); hIndex = history.length;
        const [cmd, ...rest] = line.split(/\s+/);
        const fn = commands[cmd.toLowerCase()];
        if (fn) fn(rest.join(' '));
        else print(T(`Comando no encontrado: ${esc(cmd)}. Escribe help.`, `Command not found: ${esc(cmd)}. Type help.`), 't-err');
    }
    $('#terminal-form').addEventListener('submit', e => { e.preventDefault(); runCommand(tInput.value); tInput.value = ''; });
    tInput.addEventListener('keydown', e => {
        if (e.key === 'ArrowUp' && history.length) { e.preventDefault(); hIndex = Math.max(0, hIndex - 1); tInput.value = history[hIndex]; }
        else if (e.key === 'ArrowDown' && history.length) { e.preventDefault(); hIndex = Math.min(history.length, hIndex + 1); tInput.value = history[hIndex] || ''; }
        else if (e.key === 'Tab') {
            e.preventDefault();
            const hit = Object.keys(commands).find(c => c.startsWith(tInput.value.trim().toLowerCase()));
            if (hit) tInput.value = hit + ' ';
        }
    });
    function openTerminal() {
        closePalette();
        term.hidden = false;
        if (!tOut.childElementCount) print(`${esc(i18n('term.welcome'))}`, 't-dim');
        requestAnimationFrame(() => { term.classList.add('open'); tInput.focus(); });
    }
    function closeTerminal() {
        if (term.hidden) return;
        term.classList.remove('open');
        setTimeout(() => { term.hidden = true; }, api.reducedMotion() ? 0 : 200);
    }
    term.addEventListener('click', e => { if (e.target.closest('[data-terminal-close]')) closeTerminal(); else if (!e.target.closest('a')) tInput.focus(); });

    // Atajos globales
    document.addEventListener('keydown', e => {
        const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); palette.hidden ? openPalette() : closePalette(); }
        else if (e.key === 'Escape') { closePalette(); closeTerminal(); }
        else if (e.key === '`' && (!typing || e.target === pInput)) { e.preventDefault(); term.hidden ? openTerminal() : closeTerminal(); }
    });

    api.renderAll();
})();
