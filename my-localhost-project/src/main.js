document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar nombre
    if (!name.value.trim()) {
      name.classList.add('is-invalid');
      valid = false;
    } else {
      name.classList.remove('is-invalid');
    }

    // Validar email
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      email.classList.add('is-invalid');
      valid = false;
    } else {
      email.classList.remove('is-invalid');
    }

    // Validar mensaje
    if (!message.value.trim()) {
      message.classList.add('is-invalid');
      valid = false;
    } else {
      message.classList.remove('is-invalid');
    }

    if (valid) {
      contactForm.reset();
      formMsg.textContent = '';
      formMsg.className = '';

      // Mostrar modal de éxito usando Bootstrap 5
      const successModal = new bootstrap.Modal(document.getElementById('formSuccessModal'));
      successModal.show();

    } else {
      formMsg.textContent = 'Por favor corrige los errores antes de enviar.';
      formMsg.className = 'alert alert-danger mt-2';
    }
  });

  // Remover clase de error al escribir
  ['name', 'email', 'message'].forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
      formMsg.textContent = '';
      formMsg.className = '';
    });
  });
});
