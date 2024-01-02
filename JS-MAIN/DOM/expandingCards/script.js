const panels = document.querySelectorAll(".panel");

panels.forEach((elem) => {
  elem.addEventListener("click", () => {
    removePanel();
    elem.classList.add("active");
  });
});

const removePanel = () => {
  panels.forEach((elem) => {
    elem.classList.remove("active");
  });
};
