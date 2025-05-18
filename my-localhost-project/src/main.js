// Validación de formulario de contacto
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    // Validación de nombre
    const name = document.getElementById('name');
    if (!name.value.trim()) {
      name.classList.add('is-invalid');
      valid = false;
    } else {
      name.classList.remove('is-invalid');
    }

    // Validación de email
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      email.classList.add('is-invalid');
      valid = false;
    } else {
      email.classList.remove('is-invalid');
    }

    // Validación de mensaje
    const message = document.getElementById('message');
    if (!message.value.trim()) {
      message.classList.add('is-invalid');
      valid = false;
    } else {
      message.classList.remove('is-invalid');
    }

    if (valid) {
      formMsg.textContent = '¡Mensaje enviado correctamente!';
      formMsg.className = 'alert alert-success';
      contactForm.reset();
    } else {
      formMsg.textContent = 'Por favor corrige los errores antes de enviar.';
      formMsg.className = 'alert alert-danger';
    }
  });

  // Validación en tiempo real
  ['name', 'email', 'message'].forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
      formMsg.textContent = '';
      formMsg.className = '';
    });
  });
}