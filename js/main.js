//=====MENU=====//

document.addEventListener("DOMContentLoaded", function () {
  const menuHamburger = document.querySelector(".menu");
  const navLinks = document.querySelector(".navbar");

  menuHamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mobilemenu");
  });

  const links = document.querySelectorAll('.navbar .nav-links a');

  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobilemenu');
    });
  });
});

//=====TYPE-WRITER=====//

var app = document.querySelector('.home-text h3');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 35,
});

typewriter
  .pauseFor(1000)
  .typeString('Apprenti développeur ')
  .pauseFor(0)
  .typeString('<span style="color: #FFFFFF;">JS</span> !')
  .pauseFor(300)
  .deleteChars(4)
  .typeString('<span style="color: #FFFFFF;">HTML</span> !')
  .pauseFor(300)
  .deleteChars(6)
  .typeString('<span style="color: #FFFFFF;">CSS</span> !')
  .pauseFor(300)
  .deleteChars(5)
  .typeString('<span style="color: #FFFFFF;">REACT</span> !')
  .pauseFor(300)
  .start();

function sendEmail() {
  let parms = {
    name: document.getElementById("ebook").value
  };

  emailjs.send("service_7cwu2gi", "template_ekgozyu", parms)
    .then(function (response) {
      console.log("Email envoyé avec succès : ", response);
      displayMessage("success", "Email envoyé avec succès");
    })
    .catch(function (error) {
      console.error("Erreur lors de l'envoi de l'email : ", error);
      // Afficher un message d'erreur à l'utilisateur
      displayMessage("error", "Échec de l'envoi de l'email");
    });
}

function displayMessage(type, message) {
  // Vous pouvez personnaliser cette fonction pour afficher le message à l'utilisateur
  // Par exemple, en modifiant le contenu d'un élément HTML ou en affichant une boîte de dialogue
  alert(message);
}