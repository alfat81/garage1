// Параллакс-эффект при движении мыши
document.addEventListener('DOMContentLoaded', () => {
  const parallaxBg = document.getElementById('parallaxBg');
  
  if (!parallaxBg) return;

  document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    parallaxBg.style.transform = `translate(${xAxis}px, ${yAxis}px) scale(1.1)`;
  });
});

// Обработка формы (оставляем на будущее)
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  this.reset();
});
