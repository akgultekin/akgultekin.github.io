console.log("Js Loaded")

const me = document.querySelector(".me");
const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

const meHover = document.querySelector(".me-text");
const skillsHover = document.querySelector(".skills-text");
const projectsHover = document.querySelector(".projects-text");
const contactHover = document.querySelector(".contact-text");

const meSection = document.querySelector("#me");
const skillsSection = document.querySelector("#skills");
const projectsSection = document.querySelector("#projects");
const contactSection = document.querySelector("#contact");

me.addEventListener("mouseover", meHoverAnimation);
me.addEventListener("mouseout", meDisableAnimation);
me.addEventListener("click", scrollToMe);

skills.addEventListener("mouseover", skillsHoverAnimation);
skills.addEventListener("mouseout", skillsDisableAnimation);
skills.addEventListener("click", scrollToSkills);

projects.addEventListener("mouseover", projectsHoverAnimation);
projects.addEventListener("mouseout", projectsDisableAnimation);
projects.addEventListener("click", scrollToProjects);

contact.addEventListener("mouseover", contactHoverAnimation);
contact.addEventListener("mouseout", contactDisableAnimation);
contact.addEventListener("click", scrollToContact);

function meHoverAnimation() {
    meHover.classList.remove("me-text");
    meHover.classList.add("me-text-animation");
}

function meDisableAnimation() {
    meHover.classList.remove("me-text-animation")
    meHover.classList.add("me-text")
}

function scrollToMe() {
    meSection.scrollIntoView({behavior: "smooth"});
}

function viewMe() {
    console.log("it works!");
}

function skillsHoverAnimation() {
    skillsHover.classList.remove("skills-text");
    skillsHover.classList.add("skills-text-animation");
}

function skillsDisableAnimation() {
    skillsHover.classList.remove("skills-text-animation");
    skillsHover.classList.add("skills-text");
}

function scrollToSkills() {
    skillsSection.scrollIntoView({behavior: "smooth"});
}

function projectsHoverAnimation() {
    projectsHover.classList.remove("projects-text");
    projectsHover.classList.add("projects-text-animation");
}

function projectsDisableAnimation() {
    projectsHover.classList.remove("projects-text-animation");
    projectsHover.classList.add("projects-text");
}

function scrollToProjects() {
    projectsSection.scrollIntoView({behavior: "smooth"});
}

function contactHoverAnimation() {
    contactHover.classList.remove("contact-text");
    contactHover.classList.add("contact-text-animation");
}

function contactDisableAnimation() {
    contactHover.classList.remove("contact-text-animation");
    contactHover.classList.add("contact-text");
}

function scrollToContact() {
    contactSection.scrollIntoView({behavior: "smooth"});
}