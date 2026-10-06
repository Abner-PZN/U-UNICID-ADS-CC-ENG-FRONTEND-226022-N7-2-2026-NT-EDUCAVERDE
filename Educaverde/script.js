document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu a');

  const setActiveLink = () => {
    const sections = [...document.querySelectorAll('main section[id]')];
    if (!sections.length) return;

    const currentScroll = window.scrollY + 180;
    let currentId = sections[0].id;

    sections.forEach((section) => {
      if (section.offsetTop <= currentScroll) {
        currentId = section.id;
      }
    });

    menuLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });

  const form = document.querySelector('.contact-form');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const mensagem = document.getElementById('mensagem');

    const fields = [nome, email, telefone, mensagem];
    let isValid = true;

    fields.forEach((field) => {
      if (!field) return;

      if (!field.value.trim() || field.validity.patternMismatch || field.validity.typeMismatch || field.validity.tooShort) {
        field.setCustomValidity('Preencha este campo corretamente.');
        field.reportValidity();
        isValid = false;
      } else {
        field.setCustomValidity('');
      }
    });

    if (!isValid) {
      event.preventDefault();
      return;
    }

    alert('Mensagem enviada com sucesso!');
  });
});
