document.addEventListener("DOMContentLoaded", () => {
  const readBtn = document.querySelector(".app__btn");
  const contentBlock = document.querySelector(".app__content");

  readBtn.addEventListener("click", () => {
    readBtn.style.display = "none";
    contentBlock.classList.add("app__content--open");
  });
});
