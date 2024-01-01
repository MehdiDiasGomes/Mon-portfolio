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