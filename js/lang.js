let currentLang = 'zh';

const langBtn = document.getElementById('langBtn');

langBtn.addEventListener('click', function () {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  document.documentElement.lang = currentLang === 'zh' ? 'zh' : 'en';
  langBtn.textContent = currentLang === 'zh' ? 'EN' : '中文';

  document.querySelectorAll('[data-zh]').forEach(function (el) {
    el.textContent = el.getAttribute('data-' + currentLang);
  });
});