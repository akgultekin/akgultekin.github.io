console.log("Js Loaded")

const me = document.querySelector(".me");
const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

const meHover = document.querySelector(".me-text");
const skillsHover = document.querySelector(".skills-text");
const projectsHover = document.querySelector(".projects-text");
const contactHover = document.querySelector(".contact-text");

me.addEventListener("mouseover", meHoverAnimation);
me.addEventListener("mouseout", meDisableAnimation);

skills.addEventListener("mouseover", skillsHoverAnimation);
skills.addEventListener("mouseout", skillsDisableAnimation);

projects.addEventListener("mouseover", projectsHoverAnimation);
projects.addEventListener("mouseout", projectsDisableAnimation);

contact.addEventListener("mouseover", contactHoverAnimation);
contact.addEventListener("mouseout", contactDisableAnimation);

function meHoverAnimation() {
    meHover.classList.remove("me-text");
    meHover.classList.add("me-text-animation");
}

function meDisableAnimation() {
    meHover.classList.remove("me-text-animation")
    meHover.classList.add("me-text")
}

function skillsHoverAnimation() {
    skillsHover.classList.remove("skills-text");
    skillsHover.classList.add("skills-text-animation");
}

function skillsDisableAnimation() {
    skillsHover.classList.remove("skills-text-animation");
    skillsHover.classList.add("skills-text");
}

function projectsHoverAnimation() {
    projectsHover.classList.remove("projects-text");
    projectsHover.classList.add("projects-text-animation");
}

function projectsDisableAnimation() {
    projectsHover.classList.remove("projects-text-animation");
    projectsHover.classList.add("projects-text");
}

function contactHoverAnimation() {
    contactHover.classList.remove("contact-text");
    contactHover.classList.add("contact-text-animation");
}

function contactDisableAnimation() {
    contactHover.classList.remove("contact-text-animation");
    contactHover.classList.add("contact-text");
}