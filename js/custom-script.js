// Chiffre défillement
document.addEventListener("DOMContentLoaded", function() {
  animateValue("chiffre1", 20);
  animateValue("chiffre2", 3);
  animateValue("chiffre3", 21);
  animateValue("chiffre4", 3);
  animateValue("chiffre5", 184);

  function animateValue(id, target) {
    const element = document.getElementById(id);
    let current = 0;
    const delay = Math.ceil(1500 / target); // calculer le délai entre chaque incrémentation
    const interval = setInterval(function() {
      current++;
      element.innerText = current;
      if (current >= target) {
        clearInterval(interval);
      }
    }, delay); // utiliser le délai calculé
  }
});


// Menu hamburger
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.open-responsive-menu');
    var responsiveMenu = document.querySelector('.responsive-menu');
    var icon = document.querySelector('.open-responsive-menu i');

    if (menuToggle && responsiveMenu && icon) {
        menuToggle.addEventListener('click', function() {
            responsiveMenu.classList.toggle('active');

            if (responsiveMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

// Accordéon card programme
window.addEventListener('DOMContentLoaded', (event) => {
    const accordeonButtons = document.querySelectorAll('.accordeon-button-open');
  
    accordeonButtons.forEach(button => {
      button.addEventListener('click', () => {
        const accordeon = button.parentElement;
        const accordeons = document.querySelectorAll('.accordeon');
  
        accordeons.forEach(item => {
          if (item !== accordeon) {
            item.classList.remove('active');
          }
        });
  
        accordeon.classList.toggle('active');
      });
    });
  
    const closeButtons = document.querySelectorAll('.accordeon-button-close');
  
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const accordeon = button.parentElement.parentElement;
        accordeon.classList.remove('active');
      });
    });
  });
  