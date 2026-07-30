(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  const topButton = document.querySelector('.scroll-top');
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
  window.addEventListener('load', () => root.classList.add('is-loaded'), { once: true });
  toggle?.addEventListener('click', () => { const open = root.classList.toggle('menu-open'); toggle.setAttribute('aria-expanded', String(open)); });
  menu?.addEventListener('click', event => { if (event.target.closest('a')) { root.classList.remove('menu-open'); toggle?.setAttribute('aria-expanded', 'false'); } });
  const setTopVisibility = () => topButton?.classList.toggle('is-visible', window.scrollY > 480);
  window.addEventListener('scroll', setTopVisibility, { passive: true }); setTopVisibility();
  topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const form = document.querySelector('[data-contact-form]');
  form?.addEventListener('submit', event => { event.preventDefault(); const status = form.querySelector('.form-status'); if (!form.checkValidity()) { form.reportValidity(); return; } status.textContent = 'Thanks — this form is currently a presentation demo and does not send messages yet.'; form.reset(); });
})();