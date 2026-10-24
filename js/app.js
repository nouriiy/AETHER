/**
 * AETHER DIGITAL - APPLICATION ROOT BOOTSTRAP
 */

import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initPortfolio } from './portfolio.js';
import { initEstimator } from './estimator.js';
import { initTestimonials } from './testimonials.js';
import { initContact } from './contact.js';
import { FAQ_DATA, SERVICES_DATA } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize sub-modules
  initTheme();
  initNavigation();
  initPortfolio();
  initEstimator();
  initTestimonials();
  initContact();

  // Populate dynamic sections
  renderServices();
  renderFAQ();
  initWorldClocks();
  initStatsCounter();
  initShowreelModal();
});

/* --------------------------------------------------------------------------
   SERVICES RENDERER
   -------------------------------------------------------------------------- */
function renderServices() {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  container.innerHTML = SERVICES_DATA.map(service => `
    <div class="glass-card service-card">
      <div class="service-card-top">
        <div class="service-header">
          <div class="service-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <span class="service-number">${service.number}</span>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.description}</p>
        <div class="service-deliverables">
          ${service.deliverables.map(deliv => `
            <div class="deliverable-item">
              <span class="deliverable-bullet"></span>
              <span>${deliv}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="service-card-bottom">
        <div class="service-tech-tags">
          ${service.tech.map(t => `<span class="service-tech-badge">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   FAQ ACCORDION RENDERER
   -------------------------------------------------------------------------- */
function renderFAQ() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  container.innerHTML = FAQ_DATA.map((item, index) => `
    <div class="accordion-item ${index === 0 ? 'active' : ''}">
      <button class="accordion-header" id="faq-header-${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="faq-content-${index}">
        <span>${item.question}</span>
        <div class="accordion-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </button>
      <div class="accordion-content" id="faq-content-${index}" role="region" aria-labelledby="faq-header-${index}" style="${index === 0 ? 'max-height: 250px;' : ''}">
        <div class="accordion-body">
          ${item.answer}
        </div>
      </div>
    </div>
  `).join('');

  // Accordion click handlers
  container.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isOpen = item.classList.contains('active');

      // Close other accordion items
      container.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherHeader = otherItem.querySelector('.accordion-header');
          const otherContent = otherItem.querySelector('.accordion-content');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = '0px';
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = '0px';
      } else {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   WORLD CLOCKS (SAN FRANCISCO, LONDON, TOKYO)
   -------------------------------------------------------------------------- */
function initWorldClocks() {
  function updateClocks() {
    const timeSf = document.getElementById('timeSF');
    const timeLdn = document.getElementById('timeLDN');
    const timeTyo = document.getElementById('timeTYO');

    const now = new Date();

    if (timeSf) {
      timeSf.textContent = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
    }

    if (timeLdn) {
      timeLdn.textContent = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
    }

    if (timeTyo) {
      timeTyo.textContent = now.toLocaleTimeString('ja-JP', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
    }
  }

  updateClocks();
  setInterval(updateClocks, 1000);
}

/* --------------------------------------------------------------------------
   ANIMATED STATS NUMBERS ON SCROLL
   -------------------------------------------------------------------------- */
function initStatsCounter() {
  const statsStrip = document.querySelector('.hero-stats-strip');
  if (!statsStrip) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasAnimated) {
      hasAnimated = true;
      document.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        const duration = 2000;
        const startTime = performance.now();

        function step(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = easeProgress * target;

          stat.textContent = isDecimal 
            ? currentVal.toFixed(1) 
            : Math.floor(currentVal).toString();

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            stat.textContent = target.toString();
          }
        }

        requestAnimationFrame(step);
      });
    }
  }, { threshold: 0.2 });

  observer.observe(statsStrip);
}

/* --------------------------------------------------------------------------
   SHOWREEL VIDEO MODAL
   -------------------------------------------------------------------------- */
function initShowreelModal() {
  const reelBtn = document.getElementById('heroShowreelBtn');
  const modalBackdrop = document.getElementById('caseStudyModal');
  const modalContent = document.getElementById('modalContent');

  if (!reelBtn || !modalBackdrop || !modalContent) return;

  reelBtn.addEventListener('click', () => {
    modalContent.innerHTML = `
      <div style="padding: 2.5rem; text-align: center;">
        <span class="badge badge-purple" style="margin-bottom: 1rem;">2026 Studio Reel</span>
        <h2 style="font-size: 2rem; margin-bottom: 1rem;">Engineering the Edge of Digital Reality</h2>
        <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto 2rem auto; font-size: 1.05rem;">
          A cinematic showcase of client platforms launched across San Francisco, London, Geneva, and Tokyo.
        </p>

        <div style="position: relative; width: 100%; height: 380px; border-radius: var(--radius-md); overflow: hidden; background: #000; box-shadow: var(--shadow-lg); display: flex; align-items: center; justify-content: center; margin-bottom: 2rem;">
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80" alt="Showreel Poster" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.65;">
          <div style="position: relative; z-index: 2; width: 76px; height: 76px; border-radius: 50%; background: var(--gradient-brand); display: flex; align-items: center; justify-content: center; color: #fff; box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); cursor: pointer;" id="playInnerReelBtn">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
        </div>

        <div style="display: flex; justify-content: center; gap: 1rem;">
          <button class="btn btn-secondary btn-sm" id="closeReelBtn">Close Reel</button>
          <a href="#work" class="btn btn-primary btn-sm" id="viewReelWorkBtn">Explore Projects In Detail</a>
        </div>
      </div>
    `;

    document.getElementById('closeReelBtn')?.addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    });

    document.getElementById('viewReelWorkBtn')?.addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    });

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}
