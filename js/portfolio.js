/**
 * AETHER DIGITAL - PORTFOLIO GALLERY & CASE STUDY MODAL CONTROLLER
 */

import { PROJECTS_DATA } from './data.js';

export function initPortfolio() {
  const gridContainer = document.getElementById('portfolioGrid');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const modalBackdrop = document.getElementById('caseStudyModal');
  const modalContainer = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (!gridContainer) return;

  // Render initial projects
  renderProjects(PROJECTS_DATA, gridContainer);

  // Filter tabs click handlers
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterCategory = tab.getAttribute('data-filter');
      const filtered = filterCategory === 'all' 
        ? PROJECTS_DATA 
        : PROJECTS_DATA.filter(p => p.category === filterCategory);

      // Smooth transition animation
      gridContainer.style.opacity = '0';
      gridContainer.style.transform = 'translateY(10px)';

      setTimeout(() => {
        renderProjects(filtered, gridContainer);
        gridContainer.style.opacity = '1';
        gridContainer.style.transform = 'translateY(0)';
      }, 200);
    });
  });

  // Modal close handlers
  if (modalBackdrop && modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeModal();
      }
    });
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function renderProjects(projects, container) {
  container.innerHTML = '';

  if (projects.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No projects found in this category.</div>`;
    return;
  }

  projects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View case study for ${project.title}`);

    card.innerHTML = `
      <div class="project-media-wrapper">
        <img src="${project.image}" alt="${project.title} Preview" class="project-img" loading="lazy">
        <span class="project-overlay-badge badge badge-indigo">${project.categoryLabel}</span>
        <div class="project-metric-pill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
          ${project.metric}
        </div>
      </div>
      <div class="project-content">
        <div class="project-meta-row">
          <span class="project-client">${project.client}</span>
          <span class="project-year">${project.year}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
        <div class="project-footer">
          <div class="project-tags">
            ${project.tags.slice(0, 3).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
          <span class="project-view-btn">
            Case Study
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </span>
        </div>
      </div>
    `;

    // Open modal on click or Enter key
    const openCaseStudy = () => openModal(project);
    card.addEventListener('click', openCaseStudy);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCaseStudy();
      }
    });

    container.appendChild(card);
  });
}

function openModal(project) {
  const modalBackdrop = document.getElementById('caseStudyModal');
  const modalContainer = document.getElementById('modalContent');
  if (!modalBackdrop || !modalContainer) return;

  modalContainer.innerHTML = `
    <div style="padding: 2.5rem;">
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
        <span class="badge badge-indigo">${project.categoryLabel}</span>
        <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">${project.client} • ${project.year}</span>
      </div>
      <h2 style="font-size: 2rem; margin-bottom: 1.5rem; line-height: 1.25;">${project.title}</h2>
      
      <div style="position: relative; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 2rem; max-height: 420px;">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2.5rem; margin-bottom: 2.5rem;" class="modal-body-grid">
        <div>
          <h3 style="font-size: 1.2rem; margin-bottom: 0.75rem; color: var(--text-primary);">The Challenge</h3>
          <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${project.challenge}</p>

          <h3 style="font-size: 1.2rem; margin-bottom: 0.75rem; color: var(--text-primary);">The Architecture & Solution</h3>
          <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${project.solution}</p>

          <h3 style="font-size: 1.2rem; margin-bottom: 0.75rem; color: var(--text-primary);">Key Milestones & Results</h3>
          <ul style="display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.5rem;">
            ${project.results.map(res => `
              <li style="display: flex; align-items: center; gap: 0.65rem; color: var(--text-secondary); font-size: 0.95rem;">
                <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-emerald);"></span>
                ${res}
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="background: var(--bg-tertiary); padding: 1.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); height: fit-content;">
          <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">Verified Metric</h4>
          <div style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; color: var(--accent-emerald); margin-bottom: 1.5rem;">
            ${project.metric}
          </div>

          <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">Technologies Used</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
            ${project.tags.map(t => `<span class="badge badge-cyan">${t}</span>`).join('')}
          </div>

          <div style="border-top: 1px solid var(--border-subtle); padding-top: 1.25rem;">
            <p style="font-style: italic; font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.75rem;">"${project.testimonial.quote}"</p>
            <strong style="display: block; font-size: 0.85rem; color: var(--text-primary);">${project.testimonial.author}</strong>
            <span style="font-size: 0.78rem; color: var(--text-muted);">${project.testimonial.role}</span>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
        <button class="btn btn-secondary btn-sm" id="modalDismissBtn">Close Overview</button>
        <a href="#contact" class="btn btn-primary btn-sm" id="modalInquireBtn">Start a Similar Project</a>
      </div>
    </div>
  `;

  document.getElementById('modalDismissBtn')?.addEventListener('click', () => {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  });

  document.getElementById('modalInquireBtn')?.addEventListener('click', () => {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  });

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}
