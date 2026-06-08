/**
 * Renders dynamic sections from SITE_CONFIG.
 */
(function renderSite() {
  const { links, projects, stats, education } = SITE_CONFIG;

  // Nav & footer social links
  document.querySelectorAll('[data-link="github"]').forEach((el) => {
    el.href = links.github;
  });
  document.querySelectorAll('[data-link="linkedin"]').forEach((el) => {
    el.href = links.linkedin;
  });
  document.querySelectorAll('[data-link="email"]').forEach((el) => {
    el.href = `mailto:${links.email}`;
    if (el.dataset.showEmail === 'true') {
      el.textContent = `${links.email} →`;
    }
  });
  document.querySelectorAll('[data-link="cv"]').forEach((el) => {
    el.href = links.cv;
  });

  // Stats
  const statsContainer = document.getElementById('statsGrid');
  if (statsContainer) {
    statsContainer.innerHTML = stats
      .map(
        (stat) => {
          let val = stat.value;
          if (stat.label.includes('projects shipped')) {
            val = projects.length;
          }
          return `
          <div>
            <div class="stat-num">${val}</div>
            <div class="stat-label">${stat.label}</div>
          </div>`;
        }
      )
      .join('');
  }

  // Projects
  const projectsContainer = document.getElementById('projects');
  if (projectsContainer) {
    projectsContainer.innerHTML = projects
      .map((project) => {
        const stackTags = project.stack
          .map((tag) => `<span class="stack-tag">${tag}</span>`)
          .join('');

        const links = project.liveUrl
          ? `<a href="${project.liveUrl}" class="btn btn-primary" style="font-size:10px" target="_blank" rel="noopener noreferrer">live demo →</a>
             <a href="${project.githubUrl}" class="btn btn-ghost" style="font-size:10px" target="_blank" rel="noopener noreferrer">github</a>`
          : `<a href="${project.githubUrl}" class="btn btn-primary" style="font-size:10px" target="_blank" rel="noopener noreferrer">github →</a>`;

        const cardClass = project.label === 'featured project' ? 'card project-card featured-project' : 'card project-card';

        return `
        <div class="${cardClass}">
          <div class="card-label"><span>${project.label}</span></div>
          <span class="project-tag">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4"/></svg>
            ${project.tag}
          </span>
          <div class="project-title">${project.title}</div>
          <p class="project-desc">${project.description}</p>
          <div class="project-stack">${stackTags}</div>
          <div class="project-links">${links}</div>
        </div>`;
      })
      .join('');
  }

  // Skills (categorized tags, no percentages)
  const skillsContainer = document.getElementById('skillsList');
  if (skillsContainer && SITE_CONFIG.skillCategories) {
    skillsContainer.innerHTML = SITE_CONFIG.skillCategories
      .map(
        (category) => `
        <div class="skill-category">
          <div class="skill-category-label">${category.label}</div>
          <div class="skill-tags">
            ${category.items.map((item) => `<span class="stack-tag">${item}</span>`).join('')}
          </div>
        </div>`
      )
      .join('');
  }

  // Education coursework
  const courseworkContainer = document.getElementById('courseworkTags');
  if (courseworkContainer && education) {
    courseworkContainer.innerHTML = education.coursework
      .map((course) => `<span class="stack-tag">${course}</span>`)
      .join('');
  }

  // Tools grid
  const toolsContainer = document.getElementById('toolsGrid');
  if (toolsContainer && typeof TOOL_ICONS !== 'undefined') {
    toolsContainer.innerHTML = SITE_CONFIG.tools
      .map(
        (tool) => `
        <div class="tool-item">
          <div class="tool-icon">${TOOL_ICONS[tool] || ''}</div>
          <span class="tool-name">${tool}</span>
        </div>`
      )
      .join('');
  }

  // Footer year
  const footerYear = document.getElementById('footerYear');
  if (footerYear) {
    footerYear.textContent = `© ${SITE_CONFIG.copyrightYear}`;
  }

  document.dispatchEvent(new Event('siteRendered'));
})();
