document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // DATOS INICIALES Y PERSISTENCIA (LOCALSTORAGE)
    // ----------------------------------------------------
    const defaultData = {
        name: "NICOLL.",
        desc: "Diseño gráfico, UI/UX, motion y experiencias digitales combinadas con tecnología, programación e inteligencia artificial.",
        about1: "Soy diseñadora gráfica y estudiante de Ingeniería de Software, con un perfil creativo y tecnológico que me permite abordar proyectos desde diferentes perspectivas.",
        github: "https://github.com",
        email: "nickyandrade4891@gmail.com",
        theme: "dark",
        projects: [
            {
                title: "Flores Amarillas Animadas",
                desc: "Animación romántica interactiva programada con CSS y JavaScript con efectos fluidos y visuales.",
                tech: "HTML, CSS, JS",
                link: "https://github.com/tu-usuario/flores-amarillas"
            }
        ]
    };

    let siteData = JSON.parse(localStorage.getItem('nicoll_portfolio_data')) || defaultData;

    // Elementos del DOM
    const navLogo = document.getElementById('nav-logo');
    const bannerName = document.getElementById('banner-name');
    const bannerInitial = document.getElementById('banner-initial');
    const photoLabelName = document.getElementById('photo-label-name');
    const mainTitle = document.getElementById('main-title');
    const profileDesc = document.getElementById('profile-desc');
    const aboutP1 = document.getElementById('about-p1');
    const emailTextTarget = document.getElementById('email-text-target');
    const emailLinkTarget = document.getElementById('email-link-target');
    const githubLinkTargets = document.querySelectorAll('.github-link-target');

    // Cargar datos en la interfaz
    function applyDataToDOM() {
        if (navLogo) navLogo.innerHTML = `${siteData.name}<span>.</span>`;
        if (bannerName) bannerName.textContent = siteData.name;
        if (bannerInitial) bannerInitial.textContent = siteData.name.charAt(0);
        if (photoLabelName) photoLabelName.textContent = siteData.name;
        if (profileDesc) profileDesc.textContent = siteData.desc;
        if (aboutP1) aboutP1.textContent = siteData.about1;
        if (emailTextTarget) emailTextTarget.textContent = siteData.email;
        if (emailLinkTarget) emailLinkTarget.href = `mailto:${siteData.email}`;
        
        githubLinkTargets.forEach(el => {
            el.href = siteData.github;
        });

        // Aplicar Tema
        if (siteData.theme === 'light') {
            document.body.setAttribute('data-theme', 'light');
            document.getElementById('btn-light-mode')?.classList.add('active');
            document.getElementById('btn-dark-mode')?.classList.remove('active');
        } else {
            document.body.removeAttribute('data-theme');
            document.getElementById('btn-dark-mode')?.classList.add('active');
            document.getElementById('btn-light-mode')?.classList.remove('active');
        }

        renderProjects();
        updateDeleteDropdown();
    }

    // ----------------------------------------------------
    // RENDERIZAR PROYECTOS CON DETALLES TÉCNICOS FUNCIONALES
    // ----------------------------------------------------
    function renderProjects() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.innerHTML = '';

        siteData.projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';

            const techList = project.tech.split(',').map(t => `<span>${t.trim()}</span>`).join('');

            card.innerHTML = `
                <div class="project-topline">
                    <span class="card-number">0${index + 1}</span>
                    <div class="project-status-badge">
                        <i>●</i> EN VIVO / AL AIRE
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                    <div class="project-tech-details">
                        <span><strong>Lenguaje principal:</strong> JavaScript / CSS / HTML</span>
                        <span><strong>Estado de compilación:</strong> Desplegado y verificado</span>
                    </div>
                    <div class="project-tags">${techList}</div>
                </div>
                <div class="project-footer-links">
                    ${project.link ? `<a href="${project.link}" target="_blank" class="project-link-btn"><i class="fa-brands fa-github"></i> Ver Repositorio</a>` : ''}
                </div>
            `;

            container.appendChild(card);
        });

        const countEl = document.getElementById('projects-count');
        if (countEl) countEl.textContent = siteData.projects.length;
    }

    // Actualizar select de proyectos en ajustes para poder eliminar
    function updateDeleteDropdown() {
        const select = document.getElementById('delete-proj-select');
        if (!select) return;

        select.innerHTML = '';
        if (siteData.projects.length === 0) {
            const opt = document.createElement('option');
            opt.textContent = 'No hay proyectos para eliminar';
            opt.disabled = true;
            select.appendChild(opt);
            return;
        }

        siteData.projects.forEach((proj, idx) => {
            const opt = document.createElement('option');
            opt.value = idx;
            opt.textContent = proj.title;
            select.appendChild(opt);
        });
    }

    applyDataToDOM();

    // ----------------------------------------------------
    // HEATMAP DE GITHUB GENERATOR
    // ----------------------------------------------------
    const heatmapGrid = document.getElementById('heatmap-grid');
    if (heatmapGrid) {
        heatmapGrid.innerHTML = '';
        for (let i = 0; i < 156; i++) {
            const cell = document.createElement('div');
            cell.className = 'heatmap-cell';
            const rand = Math.random();
            if (rand > 0.8) cell.classList.add('level-4');
            else if (rand > 0.6) cell.classList.add('level-3');
            else if (rand > 0.4) cell.classList.add('level-2');
            else if (rand > 0.25) cell.classList.add('level-1');
            heatmapGrid.appendChild(cell);
        }
    }

    // ----------------------------------------------------
    // MENÚ MÓVIL Y NAVEGACIÓN
    // ----------------------------------------------------
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.remove('active'));
        });
    }

    // ----------------------------------------------------
    // PANEL DE AJUSTES (MODAL)
    // ----------------------------------------------------
    const settingsOverlay = document.querySelector('.settings-overlay');
    const settingsToggles = document.querySelectorAll('.settings-toggle');
    const closeSettingsBtns = document.querySelectorAll('.close-settings');

    function toggleSettings(open) {
        if (open) settingsOverlay.classList.add('active');
        else settingsOverlay.classList.remove('active');
    }

    settingsToggles.forEach(btn => btn.addEventListener('click', () => toggleSettings(true)));
    closeSettingsBtns.forEach(btn => btn.addEventListener('click', () => toggleSettings(false)));

    if (settingsOverlay) {
        settingsOverlay.addEventListener('click', (e) => {
            if (e.target === settingsOverlay) toggleSettings(false);
        });
    }

    // Sincronizar inputs del panel con los datos actuales
    const settingName = document.getElementById('setting-name');
    const settingDesc = document.getElementById('setting-desc');
    const settingAbout1 = document.getElementById('setting-about1');
    const settingGithub = document.getElementById('setting-github');
    const settingEmail = document.getElementById('setting-email');

    function loadSettingsToForm() {
        if (settingName) settingName.value = siteData.name;
        if (settingDesc) settingDesc.value = siteData.desc;
        if (settingAbout1) settingAbout1.value = siteData.about1;
        if (settingGithub) settingGithub.value = siteData.github;
        if (settingEmail) settingEmail.value = siteData.email;
        updateDeleteDropdown();
    }

    document.querySelectorAll('.settings-toggle').forEach(btn => {
        btn.addEventListener('click', loadSettingsToForm);
    });

    // Cambiar Tema desde Ajustes
    document.getElementById('btn-dark-mode')?.addEventListener('click', () => {
        siteData.theme = 'dark';
        applyDataToDOM();
    });

    document.getElementById('btn-light-mode')?.addEventListener('click', () => {
        siteData.theme = 'light';
        applyDataToDOM();
    });

    // Guardar cambios generales
    document.getElementById('save-settings-btn')?.addEventListener('click', () => {
        if (settingName && settingName.value) siteData.name = settingName.value;
        if (settingDesc && settingDesc.value) siteData.desc = settingDesc.value;
        if (settingAbout1 && settingAbout1.value) siteData.about1 = settingAbout1.value;
        if (settingGithub && settingGithub.value) siteData.github = settingGithub.value;
        if (settingEmail && settingEmail.value) siteData.email = settingEmail.value;

        localStorage.setItem('nicoll_portfolio_data', JSON.stringify(siteData));
        applyDataToDOM();
        toggleSettings(false);
    });

    // ----------------------------------------------------
    // AÑADIR PROYECTO
    // ----------------------------------------------------
    document.getElementById('add-project-btn')?.addEventListener('click', () => {
        const titleInput = document.getElementById('new-proj-title');
        const descInput = document.getElementById('new-proj-desc');
        const techInput = document.getElementById('new-proj-tech');
        const linkInput = document.getElementById('new-proj-link');

        if (!titleInput || !titleInput.value) {
            alert('Por favor ingresa al menos el título del proyecto.');
            return;
        }

        const newProj = {
            title: titleInput.value,
            desc: descInput ? descInput.value : '',
            tech: techInput ? techInput.value : 'HTML, CSS, JS',
            link: linkInput ? linkInput.value : ''
        };

        siteData.projects.push(newProj);
        localStorage.setItem('nicoll_portfolio_data', JSON.stringify(siteData));
        applyDataToDOM();

        // Limpiar campos
        titleInput.value = '';
        if (descInput) descInput.value = '';
        if (techInput) techInput.value = '';
        if (linkInput) linkInput.value = '';

        alert('¡Proyecto añadido con éxito!');
    });

    // ----------------------------------------------------
    // ELIMINAR PROYECTO
    // ----------------------------------------------------
    document.getElementById('delete-project-btn')?.addEventListener('click', () => {
        const select = document.getElementById('delete-proj-select');
        if (!select || select.value === '') {
            alert('Selecciona un proyecto válido para eliminar.');
            return;
        }

        const indexToDelete = parseInt(select.value);
        if (isNaN(indexToDelete) || indexToDelete < 0 || indexToDelete >= siteData.projects.length) {
            alert('Error al seleccionar el proyecto.');
            return;
        }

        const removed = siteData.projects.splice(indexToDelete, 1);
        localStorage.setItem('nicoll_portfolio_data', JSON.stringify(siteData));
        applyDataToDOM();

        alert(`¡Proyecto "${removed[0].title}" eliminado con éxito!`);
    });

    // Restaurar Valores
    document.getElementById('reset-settings')?.addEventListener('click', () => {
        if (confirm('¿Estás segura de restaurar los valores iniciales?')) {
            localStorage.removeItem('nicoll_portfolio_data');
            siteData = JSON.parse(JSON.stringify(defaultData));
            applyDataToDOM();
            loadSettingsToForm();
            toggleSettings(false);
        }
    });
});