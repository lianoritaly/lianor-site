const header = document.querySelector('.masthead');
const progress = document.querySelector('.scroll-progress');
const navigation = document.querySelector('.primary-nav');
const menuButton = document.querySelector('.menu-toggle');

function closeNavigation() {
  navigation?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (window.matchMedia('(max-width: 980px)').matches) {
    navigation?.setAttribute('inert', '');
  }
}
function updateHeader() {
  const y = window.scrollY;
  header?.classList.toggle('is-scrolled', y > 12);
  if (progress) {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${scrollable > 0 ? Math.min(y / scrollable, 1) * 100 : 0}%`;
  }
}
function updateMenuAccess() {
  closeNavigation();
  if (window.matchMedia('(min-width: 981px)').matches) navigation?.removeAttribute('inert');
}
updateHeader();
updateMenuAccess();
window.addEventListener('scroll', updateHeader, { passive: true });
window.matchMedia('(min-width: 981px)').addEventListener('change', updateMenuAccess);
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation?.classList.toggle('is-open', open);
  if (open) navigation?.removeAttribute('inert');
  else closeNavigation();
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));
const dropdowns = document.querySelectorAll('.nav-dropdown');
dropdowns.forEach(dropdown => dropdown.addEventListener('toggle', () => {
  if (dropdown.open) dropdowns.forEach(other => {
    if (other !== dropdown) other.removeAttribute('open');
  });
}));
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-dropdown')) dropdowns.forEach(item => item.removeAttribute('open'));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeNavigation();
    dropdowns.forEach(item => item.removeAttribute('open'));
  }
});
document.querySelectorAll('.language-link').forEach(link => link.addEventListener('click', () => {
  if (window.location.hash) {
    const target = new URL(link.href);
    target.hash = window.location.hash;
    link.href = target.href;
  }
}));
