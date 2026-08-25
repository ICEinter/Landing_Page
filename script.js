document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  document.querySelector('.footer-bottom b').textContent = 'เวอร์ชัน 1.1.0';

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    lucide.createIcons();
  });

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<i data-lucide="menu"></i>';
      lucide.createIcons();
    });
  });

  const sections = document.querySelectorAll('main section, header');
  const links = document.querySelectorAll('.nav-links a:not(.nav-cta)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => observer.observe(section));
});
