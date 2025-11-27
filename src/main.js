document.addEventListener("DOMContentLoaded", () => {
  const readBtn = document.querySelector(".app__btn");
  const contentBlock = document.querySelector(".app__content");
  const navBtns = document.querySelectorAll(".nav__btn");
  const footerBtns = document.querySelectorAll(".footer__btn");

  readBtn.addEventListener("click", () => {
    readBtn.style.display = "none";
    contentBlock.classList.add("app__content--open");
  });

  function changeActive(buttons, activeClass) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((el) => el.classList.remove(activeClass));
        btn.classList.add(activeClass);
      });
    });
  }

  changeActive(navBtns, "nav__btn--active");
  changeActive(footerBtns, "footer__btn--active");
});
