// Scroll Animation

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const sectionTop =
        section.getBoundingClientRect().top;

        const triggerPoint =
        window.innerHeight - 100;

        if(sectionTop < triggerPoint) {

            section.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


// Active Navigation

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){
            link.classList.add("active");
        }

    });

});


// Contact Form Message

const form =
document.querySelector("form");

form.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        alert(
            "Thank you for contacting me! I will get back to you soon."
        );

        form.reset();

    }
);