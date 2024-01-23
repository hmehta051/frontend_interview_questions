const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  let viewportHeight = (window.innerHeight / 5) * 4; // Viewport height in pixels
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < viewportHeight) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
