/**
 * AETHER DIGITAL - CONTACT FORM VALIDATION & INTERACTIVE HANDLER
 */

export function initContact() {
  const form = document.getElementById('projectContactForm');
  const messageInput = document.getElementById('contactMessage');
  const charCounter = document.getElementById('charCount');
  const newsletterForm = document.getElementById('footerNewsletterForm');

  // Real-time character counter
  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const length = messageInput.value.length;
      charCounter.textContent = `${length} / 500`;
    });
  }

  // Clear errors on input
  if (form) {
    form.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', () => {
        const group = input.closest('.form-group');
        if (group) {
          group.classList.remove('has-error');
        }
      });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const categoryInput = document.getElementById('contactCategory');
      const msgInput = document.getElementById('contactMessage');
      const submitBtn = form.querySelector('button[type="submit"]');

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showError(nameInput, 'Please enter your full name (at least 2 characters)');
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid work email address');
        isValid = false;
      }

      // Validate Category
      if (!categoryInput.value) {
        showError(categoryInput, 'Please select a project category');
        isValid = false;
      }

      // Validate Message
      if (!msgInput.value.trim() || msgInput.value.trim().length < 10) {
        showError(msgInput, 'Please describe your project (at least 10 characters)');
        isValid = false;
      }

      if (!isValid) {
        showToast('Please resolve highlighted errors in the form.', 'error');
        return;
      }

      // Trigger loading state
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="animation: spin 1s linear infinite; width: 18px; height: 18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span>Transmitting Inquiry...</span>
      `;

      // Realistic API round-trip simulation
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;

        const ticketId = 'AETH-' + Math.floor(1000 + Math.random() * 9000) + '-X';
        const clientName = nameInput.value.trim();

        showToast('Inquiry received! We guarantee a response within 4 hours.', 'success');
        showSuccessModal(clientName, ticketId);
        form.reset();
        if (charCounter) charCounter.textContent = '0 / 500';
      }, 1200);
    });
  }

  // Newsletter form submission
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      const btn = newsletterForm.querySelector('button');
      btn.textContent = 'Subscribed!';
      btn.disabled = true;
      showToast('Thank you for subscribing to Aether Insights.', 'success');
      emailInput.value = '';

      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.disabled = false;
      }, 3000);
    });
  }
}

function showError(inputEl, errorText) {
  const group = inputEl.closest('.form-group');
  if (group) {
    group.classList.add('has-error');
    const errSpan = group.querySelector('.form-error-text');
    if (errSpan) {
      errSpan.textContent = errorText;
    }
  }
}

export function showToast(message, type = 'success') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      ${type === 'success' 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'
      }
    </div>
    <div class="toast-content">
      <div class="toast-title">${type === 'success' ? 'Confirmed' : 'Attention Needed'}</div>
      <div class="toast-message">${message}</div>
    </div>
  `;

  toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function showSuccessModal(clientName, ticketId) {
  const modalBackdrop = document.getElementById('caseStudyModal');
  const modalContent = document.getElementById('modalContent');
  if (!modalBackdrop || !modalContent) return;

  modalContent.innerHTML = `
    <div style="padding: 3rem 2.5rem; text-align: center;">
      <div style="width: 72px; height: 72px; border-radius: 50%; background: rgba(16, 185, 129, 0.15); border: 2px solid var(--accent-emerald); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; color: var(--accent-emerald);">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>

      <span class="badge badge-emerald" style="margin-bottom: 1rem;">Ticket Reference: ${ticketId}</span>
      <h2 style="font-size: 2rem; margin-bottom: 1rem;">Inquiry Confirmed, ${clientName}!</h2>
      <p style="color: var(--text-secondary); max-width: 520px; margin: 0 auto 2rem auto; font-size: 1.05rem; line-height: 1.6;">
        Our founding engineering & design partners have received your project dossier. We are reviewing technical viability and will respond within 4 hours.
      </p>

      <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.5rem; max-width: 460px; margin: 0 auto 2rem auto; text-align: left;">
        <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">What Happens Next</h4>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.9rem; color: var(--text-secondary);">
          <div style="display: flex; gap: 0.6rem; align-items: flex-start;">
            <strong style="color: var(--primary-light);">1.</strong>
            <span>Initial NDA & scoping architecture review</span>
          </div>
          <div style="display: flex; gap: 0.6rem; align-items: flex-start;">
            <strong style="color: var(--primary-light);">2.</strong>
            <span>Direct 30-min architecture consultation with Partner</span>
          </div>
          <div style="display: flex; gap: 0.6rem; align-items: flex-start;">
            <strong style="color: var(--primary-light);">3.</strong>
            <span>Tailored statement of work & fixed delivery timeline</span>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-primary" id="successDismissBtn">Return to Aether</button>
    </div>
  `;

  document.getElementById('successDismissBtn')?.addEventListener('click', () => {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  });

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}
