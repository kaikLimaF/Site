// Ações dos botões do menu (Scroll e Redirecionamento)
document.querySelectorAll('.botao li button').forEach(button => {
  button.addEventListener('click', function () {
    const sectionId = this.getAttribute('data-section');
    const href = this.getAttribute('data-href');

    if (sectionId) {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href) {
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

