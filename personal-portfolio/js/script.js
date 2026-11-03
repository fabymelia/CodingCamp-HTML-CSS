/**
 * Personal Portfolio – script.js
 * Author  : Faby Melia Shanni
 * Version : 2.0.0
 *
 * Features:
 *  1. Navbar scroll behaviour & active link tracking
 *  2. Mobile navigation toggle
 *  3. Smooth scroll for anchor links
 *  4. Scroll-reveal entrance animations
 *  5. Contact form validation & success message
 *  6. Dynamic copyright year
 *  7. Back-to-top button
 */

'use strict';

/* ─────────────────────────────────────
   HELPERS
───────────────────────────────────── */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];


/* ─────────────────────────────────────
   1. NAVBAR – scroll state & active link
───────────────────────────────────── */
(function initNavbar() {
  const navbar   = $('#navbar');
  const navLinks = $$('.nav-link');
  if (!navbar) return;

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    highlightActiveLink();
  }

  function highlightActiveLink() {
    const scrollY = window.scrollY + 100;
    $$('section[id]').forEach(section => {
      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute('id');
      const link   = $(`.nav-link[data-section="${id}"]`);
      if (link) {
        link.classList.toggle('active', scrollY >= top && scrollY < bottom);
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ─────────────────────────────────────
   2. MOBILE NAV TOGGLE
───────────────────────────────────── */
(function initMobileNav() {
  const toggle   = $('#nav-toggle');
  const menu     = $('#nav-menu');
  const navLinks = $$('.nav-link');
  if (!toggle || !menu) return;

  const open  = () => { menu.classList.add('open');    toggle.setAttribute('aria-expanded', 'true');  document.body.style.overflow = 'hidden'; };
  const close = () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; };

  toggle.addEventListener('click', () => menu.classList.contains('open') ? close() : open());
  navLinks.forEach(l => l.addEventListener('click', close));
  document.addEventListener('click', e => { if (!menu.contains(e.target) && !toggle.contains(e.target)) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();


/* ─────────────────────────────────────
   3. SMOOTH SCROLL
───────────────────────────────────── */
(function initSmoothScroll() {
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();

      const navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10
      ) || 72;

      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navHeight,
        behavior: 'smooth'
      });
    });
  });
})();


/* ─────────────────────────────────────
   4. SCROLL REVEAL
───────────────────────────────────── */
(function initReveal() {
  const elements = $$('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // Stagger siblings within the same parent
      const siblings = $$('.reveal', entry.target.parentElement);
      const idx      = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 75);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
})();


/* ─────────────────────────────────────
   5. CONTACT FORM VALIDATION
───────────────────────────────────── */
(function initContactForm() {
  const form       = $('#contact-form');
  const submitBtn  = $('#submit-btn');
  const successMsg = $('#form-success');
  if (!form) return;

  const rules = {
    'contact-name': {
      validate: v => v.trim().length >= 2,
      message:  'Please enter your full name (at least 2 characters).',
      errorId:  'name-error',
    },
    'contact-email': {
      validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      message:  'Please enter a valid email address.',
      errorId:  'email-error',
    },
    'contact-message': {
      validate: v => v.trim().length >= 10,
      message:  'Message must be at least 10 characters.',
      errorId:  'message-error',
    },
  };

  function setError(fieldId, msg) {
    const f = $(`#${fieldId}`);
    const e = $(`#${rules[fieldId].errorId}`);
    if (f) f.classList.add('error');
    if (e) e.textContent = msg;
  }

  function clearError(fieldId) {
    const f = $(`#${fieldId}`);
    const e = $(`#${rules[fieldId].errorId}`);
    if (f) f.classList.remove('error');
    if (e) e.textContent = '';
  }

  function validateField(fieldId) {
    const field = $(`#${fieldId}`);
    const rule  = rules[fieldId];
    if (!field || !rule) return true;
    if (!rule.validate(field.value)) { setError(fieldId, rule.message); return false; }
    clearError(fieldId);
    return true;
  }

  // Live validation
  Object.keys(rules).forEach(id => {
    const field = $(`#${id}`);
    if (field) {
      field.addEventListener('blur',  () => validateField(id));
      field.addEventListener('input', () => { if (field.classList.contains('error')) validateField(id); });
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const valid = Object.keys(rules).reduce((acc, id) => validateField(id) && acc, true);
    if (!valid) return;

    // Simulate submission (no backend)
    submitBtn.disabled = true;
    const span = submitBtn.querySelector('span');
    const icon = submitBtn.querySelector('i');
    const origText = span ? span.textContent : 'Send Message';

    if (span) span.textContent = 'Sending…';
    if (icon) { icon.classList.replace('fa-paper-plane', 'fa-spinner'); icon.classList.add('fa-spin'); }

    setTimeout(() => {
      submitBtn.disabled = false;
      if (span) span.textContent = origText;
      if (icon) { icon.classList.remove('fa-spinner', 'fa-spin'); icon.classList.add('fa-paper-plane'); }
      if (successMsg) successMsg.classList.add('visible');
      form.reset();
      setTimeout(() => { if (successMsg) successMsg.classList.remove('visible'); }, 8000);
    }, 1500);
  });
})();


/* ─────────────────────────────────────
   6. DYNAMIC COPYRIGHT YEAR
───────────────────────────────────── */
(function initYear() {
  const el = $('#footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();


/* ─────────────────────────────────────
   7. BACK TO TOP
───────────────────────────────────── */
(function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();
