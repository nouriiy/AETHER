/**
 * AETHER DIGITAL - TESTIMONIALS SLIDER CONTROLLER
 */

import { TESTIMONIALS_DATA } from './data.js';

export function initTestimonials() {
  const container = document.getElementById('testimonialsSlider');
  if (!container) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  renderSlider(container);

  const track = container.querySelector('.testimonial-track');
  const slides = container.querySelectorAll('.testimonial-slide');
  const prevBtn = container.querySelector('#prevTestimonialBtn');
  const nextBtn = container.querySelector('#nextTestimonialBtn');
  const dotsContainer = container.querySelector('#testimonialDots');
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.slider-dot') : [];

  function updateSlider() {
    if (track) {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
      dot.setAttribute('aria-current', idx === currentIndex ? 'true' : 'false');
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.getAttribute('data-index'), 10);
      updateSlider();
      resetAutoplay();
    });
  });

  // Autoplay functionality with pause on hover
  function startAutoplay() {
    autoplayTimer = setInterval(nextSlide, 6500);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  container.addEventListener('mouseenter', stopAutoplay);
  container.addEventListener('mouseleave', startAutoplay);
  container.addEventListener('focusin', stopAutoplay);
  container.addEventListener('focusout', startAutoplay);

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      nextSlide();
      resetAutoplay();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
      resetAutoplay();
    }
  }, { passive: true });

  startAutoplay();

  function renderSlider(root) {
    root.innerHTML = `
      <div class="testimonial-slider-container">
        <div class="testimonial-track">
          ${TESTIMONIALS_DATA.map(t => `
            <div class="testimonial-slide">
              <div class="testimonial-card">
                <div class="testimonial-rating">
                  ${Array(t.rating).fill('★').join('')}
                </div>
                <blockquote class="testimonial-quote">
                  "${t.quote}"
                </blockquote>
                <div class="testimonial-author-row">
                  <div class="testimonial-author-profile">
                    <img src="${t.avatar}" alt="${t.author}" class="testimonial-avatar" loading="lazy">
                    <div>
                      <div class="author-name">${t.author}</div>
                      <div class="author-role">${t.role}</div>
                    </div>
                  </div>
                  <div class="testimonial-company-badge">${t.company}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="slider-controls">
        <button class="slider-nav-btn" id="prevTestimonialBtn" aria-label="Previous Testimonial">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div class="slider-dots" id="testimonialDots">
          ${TESTIMONIALS_DATA.map((_, i) => `
            <button class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to testimonial slide ${i + 1}"></button>
          `).join('')}
        </div>
        <button class="slider-nav-btn" id="nextTestimonialBtn" aria-label="Next Testimonial">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    `;
  }
}
