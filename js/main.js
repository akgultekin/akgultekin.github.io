console.log("Js Loaded")

const me = document.querySelector(".me");
const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

const meHover = document.querySelector(".me-hover");
const skillsHover = document.querySelector(".skills-hover");
const projectsHover = document.querySelector(".projects-hover");
const contactHover = document.querySelector(".contact-hover");

me.addEventListener("mouseover", meHoverAnimation);
me.addEventListener("mouseout", meDisableAnimation);

skills.addEventListener("mouseover", skillsHoverAnimation);
skills.addEventListener("mouseout", skillsDisableAnimation);

projects.addEventListener("mouseover", projectsHoverAnimation);
projects.addEventListener("mouseout", projectsDisableAnimation);

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