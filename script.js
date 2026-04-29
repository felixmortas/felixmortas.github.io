// ===== SCRIPT.JS =====

// CHANGE LANGUAGE FUNCTIONNALITY

async function changeLanguage(lang) {
  // 1. Load language file
  
  const response = await fetch(`assets/lang/${lang}.json`);
  console.log(response);
  const translations = await response.json();

  // 2. Go throught all the elements having the `data-key` attribute
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[key]) {
      element.innerHTML = translations[key];
    }
  });

  // Optional : Save the language in the browser
  localStorage.setItem('preferredLang', lang);

  // BUTTONS MANAGEMENT
    // First display all the buttons
    document.querySelectorAll('.other-language-button button').forEach(btn => {
        btn.style.display = 'inline-block'; 
    });

    // Hide the button corresponding to the actual language
    const currentBtn = document.getElementById(`btn-${lang}`);
    if (currentBtn) {
        currentBtn.style.display = 'none';
    }
}

// When the page is loading, load the saved or default language
window.onload = () => {
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  changeLanguage(savedLang);
};


// FORM SUBMISSION HANDLER (FRONT-END ONLY)
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
