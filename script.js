// Scroll suave para seções
document.querySelectorAll('.botao li button').forEach(button => {
  button.addEventListener('click', function () {
    const sectionId = this.getAttribute('data-section');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// (Opcional) Voltar ao topo
const backToTopButton = document.createElement('button');
backToTopButton.textContent = "↑";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px";
backToTopButton.style.display = "none";
backToTopButton.style.zIndex = "1000";
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
// Redirecionamento por botão
document.querySelectorAll('.botao li button').forEach(button => {
  button.addEventListener('click', function () {
    const href = this.getAttribute('data-href');
    if (href) {
      window.location.href = href;
    }
  });
});


// Menu hamburguer responsivo
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  // Fecha o menu ao clicar em um item
  menu.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
}

