function revealSections() {

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(section => {

const windowHeight = window.innerHeight;

const revealTop = section.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){
section.classList.add("active");
}

});

}

window.addEventListener("scroll", revealSections);

revealSections();