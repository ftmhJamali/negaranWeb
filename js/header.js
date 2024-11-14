const header = document.querySelector("header"),
  barsBtn = document.querySelector("header .mobile-navbar"),
  navBar = document.querySelector("nav"),
  navCloser = document.querySelector("nav .nav-closer");

barsBtn.addEventListener("click", () => {
  navBar.classList.add("open");
});
navCloser.addEventListener("click", () => {
  navBar.classList.remove("open");
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
});
