/**
 * AETHER DIGITAL - INTERACTIVE PROJECT SCOPE & COST ESTIMATOR
 */

import { ESTIMATOR_CONFIG } from './data.js';

export function initEstimator() {
  const container = document.getElementById('projectEstimator');
  if (!container) return;

  let state = {
    selectedType: ESTIMATOR_CONFIG.types[0].id,
    selectedScope: ESTIMATOR_CONFIG.scopes[1].id,
    selectedFeatures: ['ai-integration', 'design-system']
  };

  renderEstimator(state, container);

  function recalculate() {
    const typeObj = ESTIMATOR_CONFIG.types.find(t => t.id === state.selectedType);
    const scopeObj = ESTIMATOR_CONFIG.scopes.find(s => s.id === state.selectedScope);
    
    let basePrice = typeObj.basePrice * scopeObj.multiplier;
    let baseWeeks = typeObj.baseWeeks + scopeObj.weeksAdd;

    state.selectedFeatures.forEach(featId => {
      const featObj = ESTIMATOR_CONFIG.features.find(f => f.id === featId);
      if (featObj) {
        basePrice += featObj.price;
        baseWeeks += featObj.weeks;
      }
    });

    const minPrice = Math.round(basePrice * 0.95 / 1000) * 1000;
    const maxPrice = Math.round(basePrice * 1.15 / 1000) * 1000;
    const minWeeks = Math.max(3, Math.floor(baseWeeks));
    const maxWeeks = minWeeks + 2;

    const priceDisplay = document.getElementById('estimatorPriceDisplay');
    const weeksDisplay = document.getElementById('estimatorWeeksDisplay');
    const featuresList = document.getElementById('estimatorFeaturesList');

    if (priceDisplay) {
      priceDisplay.textContent = `$${minPrice.toLocaleString()} – $${maxPrice.toLocaleString()}`;
    }

    if (weeksDisplay) {
      weeksDisplay.textContent = `${minWeeks} – ${maxWeeks} Weeks`;
    }

    if (featuresList) {
      featuresList.innerHTML = `
        <div class="summary-feature-line">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          ${typeObj.name} (${scopeObj.name})
        </div>
        ${state.selectedFeatures.map(fId => {
          const fObj = ESTIMATOR_CONFIG.features.find(f => f.id === fId);
          return `
            <div class="summary-feature-line">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              ${fObj.name}
            </div>
          `;
        }).join('')}
      `;
    }
  }

  function renderEstimator(currentState, root) {
    root.innerHTML = `
      <div class="estimator-layout">
        <!-- Configuration Controls -->
        <div class="estimator-controls">
          <!-- Step 1: Project Archetype -->
          <div class="estimator-step">
            <div class="estimator-step-label">
              <span class="step-badge">1</span>
              <span>Select Core Product Archetype</span>
            </div>
            <div class="estimator-options-grid" id="typeOptionsGroup">
              ${ESTIMATOR_CONFIG.types.map(t => `
                <button type="button" class="estimator-opt-btn ${t.id === currentState.selectedType ? 'active' : ''}" data-type="${t.id}">
                  <span class="estimator-opt-title">${t.name}</span>
                  <span class="estimator-opt-subtitle">${t.desc}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Step 2: Complexity Scope -->
          <div class="estimator-step">
            <div class="estimator-step-label">
              <span class="step-badge">2</span>
              <span>Project Scale & Depth</span>
            </div>
            <div class="estimator-options-grid" id="scopeOptionsGroup">
              ${ESTIMATOR_CONFIG.scopes.map(s => `
                <button type="button" class="estimator-opt-btn ${s.id === currentState.selectedScope ? 'active' : ''}" data-scope="${s.id}">
                  <span class="estimator-opt-title">${s.name}</span>
                  <span class="estimator-opt-subtitle">${s.desc}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Step 3: Architecture & Capabilities -->
          <div class="estimator-step">
            <div class="estimator-step-label">
              <span class="step-badge">3</span>
              <span>Key Capabilities & Add-Ons</span>
            </div>
            <div class="features-checklist" id="featuresChecklistGroup">
              ${ESTIMATOR_CONFIG.features.map(f => {
                const isChecked = currentState.selectedFeatures.includes(f.id);
                return `
                  <div class="feature-check-item ${isChecked ? 'active' : ''}" data-feature="${f.id}" tabindex="0" role="checkbox" aria-checked="${isChecked}">
                    <div class="feature-check-box">
                      ${isChecked ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
                    </div>
                    <span class="feature-check-name">${f.name}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Sticky Live Estimation Summary -->
        <div class="estimator-summary-panel">
          <h3 class="summary-heading">Estimated Investment & Velocity</h3>
          
          <div class="summary-price-box">
            <div class="summary-price-label">Project Budget Range</div>
            <div class="summary-price-range" id="estimatorPriceDisplay">$38,000 – $46,000</div>
          </div>

          <div class="summary-delivery-box">
            <div class="delivery-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div class="delivery-text-group">
              <h4 id="estimatorWeeksDisplay">7 – 9 Weeks</h4>
              <p>Sprint-driven, bi-weekly testable builds</p>
            </div>
          </div>

          <div class="summary-features-list" id="estimatorFeaturesList"></div>

          <button type="button" class="btn btn-primary" id="applyScopeBtn" style="width: 100%;">
            <span>Apply Scope to Inquiry</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    `;

    // Attach step 1 listeners
    root.querySelectorAll('#typeOptionsGroup button').forEach(btn => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('#typeOptionsGroup button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedType = btn.getAttribute('data-type');
        recalculate();
      });
    });

    // Attach step 2 listeners
    root.querySelectorAll('#scopeOptionsGroup button').forEach(btn => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('#scopeOptionsGroup button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedScope = btn.getAttribute('data-scope');
        recalculate();
      });
    });

    // Attach step 3 listeners
    root.querySelectorAll('.feature-check-item').forEach(item => {
      const toggle = () => {
        const featId = item.getAttribute('data-feature');
        const box = item.querySelector('.feature-check-box');
        if (state.selectedFeatures.includes(featId)) {
          state.selectedFeatures = state.selectedFeatures.filter(id => id !== featId);
          item.classList.remove('active');
          item.setAttribute('aria-checked', 'false');
          box.innerHTML = '';
        } else {
          state.selectedFeatures.push(featId);
          item.classList.add('active');
          item.setAttribute('aria-checked', 'true');
          box.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        }
        recalculate();
      };

      item.addEventListener('click', toggle);
      item.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggle();
        }
      });
    });

    // Apply Scope to Contact Form
    const applyBtn = root.querySelector('#applyScopeBtn');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        const typeObj = ESTIMATOR_CONFIG.types.find(t => t.id === state.selectedType);
        const scopeObj = ESTIMATOR_CONFIG.scopes.find(s => s.id === state.selectedScope);
        const featNames = state.selectedFeatures.map(fId => {
          return ESTIMATOR_CONFIG.features.find(f => f.id === fId)?.name;
        }).filter(Boolean).join(', ');

        const messageInput = document.getElementById('contactMessage');
        const budgetRadio = document.querySelector('input[name="budget"][value="50k-100k"]');
        const categorySelect = document.getElementById('contactCategory');

        if (messageInput) {
          messageInput.value = `I generated an estimate on your website for a ${typeObj.name} (${scopeObj.name}). Included capabilities: ${featNames}. Let's schedule a deep dive.`;
        }

        if (budgetRadio) {
          budgetRadio.checked = true;
        }

        if (categorySelect) {
          categorySelect.value = state.selectedType;
        }

        // Scroll to contact form smoothly
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          // Highlight message input
          if (messageInput) {
            setTimeout(() => messageInput.focus(), 800);
          }
        }
      });
    }

    recalculate();
  }
}
