// **********Toggle icon navar**********

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

const texts = ["Frontend Developer", "Coder", "Web Desginer" , "Learning System Desgin"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0; // Reset to loop through the texts
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.dynamic-text').textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(() => type(), 2000); // Pause between complete words
  } else {
    setTimeout(type, 100); // Speed of typing
  }
})();


// *************scroll

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};