const btnDemo = document.querySelector(".btn--demo");
const btnCode = document.querySelector(".btn--code");
const projectItem = document.querySelectorAll(".project__item");

// ---------------- Smooth scroll

document.querySelector(".nav__links").addEventListener("click", function (e) {
  if (e.target.classList.contains("nav__link")) {
    e.preventDefault();

    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// ---------------- Header

const nav = document.querySelector(".nav__header");
const header = document.querySelector(".header");

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

const Typewriter = function (textElement, words, wait = 3000) {
  this.textElement = textElement;
  this.words = words;
  this.text = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
Typewriter.prototype.type = function () {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // console.log(current);

  // Get full text of current word
  const fullText = this.words[current];
  // console.log(fullText);

  // Check if deleting
  if (this.isDeleting) {
    // Remove a character
    this.text = fullText.substring(0, this.text.length - 1);
  }

  // Add a character
  else {
    this.text = fullText.substring(0, this.text.length + 1);
  }

  // Insert text into element
  this.textElement.innerHTML = `<span class="text">${this.text}</span> `;

  // Initial Type Speed
  let typeSpeed = 300;

  //to make it faster when deleting
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If words is complete
  if (!this.isDeleting && this.text === fullText) {
    // Make pause at
    typeSpeed = this.wait;

    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.text === "") {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Puase before start typing
    typeSpeed = 500;
  }
  setTimeout(() => this.type(), typeSpeed);
};

// Init on Dom Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const textElement = document.querySelector(".text-type");
  // Need to parse it to convert it to something that can be used is JS
  const words = JSON.parse(textElement.getAttribute("data-words"));
  const wait = textElement.getAttribute("data-wait");

  // Init typerwiter
  new Typewriter(textElement, words, wait);
}
//

// ---------------- Revealing section by Scroll

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
});

// ------

const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".nav__links");

hamburger.addEventListener("click", function () {
  links.classList.toggle("hidden");
});
