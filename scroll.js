const buttondown = document.querySelector("#godown");
buttondown.addEventListener("click", scrollDown);

const buttonup = document.querySelector("#goup");
buttonup.addEventListener("click", scrollUp);

function scrollDown(event) {
  scrollTo(0, scrollY + window.innerHeight);
}

function scrollUp(event) {
  scrollTo(0, scrollY - window.innerHeight);
}
