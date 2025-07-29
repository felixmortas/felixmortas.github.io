// ===== SCRIPT.JS =====

// Form submission handler (front-end only)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      alert('Merci de remplir tous les champs.');
      return;
    }

    // Simuler l'envoi de mail (à remplacer par un backend ou Formspree si besoin)
    alert("Merci pour votre message, " + name + " ! Je vous répondrai au plus vite.");
    form.reset();
  });
});
