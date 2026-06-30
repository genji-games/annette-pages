// Language toggle for the static site. Default French; choice persists across pages.
function setLang(l) {
  try { localStorage.setItem('omq-lang', l); } catch (e) {}
  document.querySelectorAll('[data-lang]').forEach((el) => {
    el.hidden = el.getAttribute('data-lang') !== l;
  });
  document.querySelectorAll('.langtoggle button').forEach((b) => {
    b.classList.toggle('active', b.getAttribute('data-set') === l);
  });
  document.documentElement.lang = l;
}
document.addEventListener('DOMContentLoaded', function () {
  var saved = 'fr';
  try { saved = localStorage.getItem('omq-lang') || 'fr'; } catch (e) {}
  setLang(saved);
});
