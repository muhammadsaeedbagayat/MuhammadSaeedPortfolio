// Mobile Navigation

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks")
        .classList.remove("active");

    });

});


// Typing Animation

const words = [
    "Software Developer",
    "Computer Science Student",
    "Java Programmer",
    "Tech Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const element = document.getElementById("typing");

    const currentWord = words[wordIndex];

    if (deleting) {

        element.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

    } else {

        element.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;

    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {

        deleting = true;
        speed = 1200;

    }

    else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

document.addEventListener("DOMContentLoaded", typeEffect);