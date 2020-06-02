const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");
  const NavLinks = document.querySelectorAll(".navlinks li");
  burger.addEventListener("click", () => {
    //toggle Nav
    nav.classList.toggle("nav-active");

    //animate links
    NavLinks.forEach((link, index) => {
      if (link.getElementsByClassName.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 2
        }s`;
      }
    });
    //Burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();

// const app = () => {
//   navSlide();
//   navSlide();
//   navSlide();
//   navSlide();
// };
