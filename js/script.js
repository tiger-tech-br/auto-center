// ======================
// MENU MOBILE
// ======================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}

// ======================
// FECHAR MENU AO CLICAR
// ======================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

// ======================
// HEADER SCROLL
// ======================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 4px 15px rgba(0,0,0,.4)";

    } else {

        header.style.boxShadow =
            "none";

    }

});

// ======================
// ANIMAÇÃO DAS SEÇÕES
// ======================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },

    {
        threshold: 0.2
    }

);

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ======================
// SCROLL SUAVE
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ======================
// EFEITOS NOS CARDS
// ======================

const cards = document.querySelectorAll(
    ".service-card, .advantage-card, .review-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0)";

    });

});

// ======================
// BOTÃO WHATSAPP
// ======================

const whatsappBtn =
    document.querySelector(".whatsapp");

if (whatsappBtn) {

    whatsappBtn.addEventListener("mouseenter", () => {

        whatsappBtn.style.transform =
            "scale(1.1)";

    });

    whatsappBtn.addEventListener("mouseleave", () => {

        whatsappBtn.style.transform =
            "scale(1)";

    });

}