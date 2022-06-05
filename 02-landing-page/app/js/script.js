const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("click");
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("no-scroll");
    fadeElems.forEach(function (elem) {
        elem.classList.remove("fade-in");
        elem.classList.add("fade-out");
      });

  } else {
      body.classList.add("no-scroll");
    header.classList.add("open");
    fadeElems.forEach(function (elem) {
      elem.classList.remove("fade-out");
      elem.classList.add("fade-in");
    });
  }
});
