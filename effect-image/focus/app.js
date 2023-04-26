let inner = document.querySelector('.inner');
inner.addEventListener('mousemove', (event) => {
  document.documentElement.style.setProperty('--left-focus', event.x + 'px');
  document.documentElement.style.setProperty('--top-focus', event.y + 'px');
});
