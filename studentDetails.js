let images = document.querySelectorAll(".coverimg");
function dropDown(event) {
  event.target.nextElementSibling.style.display = "block"
}

function mouseLeave(event) {
  event.target.nextElementSibling.style.display = "none"
}

images.forEach((el) => {
  el.addEventListener("mouseenter", dropDown);
  el.addEventListener("mouseleave", mouseLeave);
});
