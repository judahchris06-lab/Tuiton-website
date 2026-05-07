// ===== Mobile Menu Toggle =====
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ===== Smooth Scrolling =====
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===== Contact Form Validation =====
const form = document.querySelector("#contact-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email!");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });
}

// ===== Email Validation Function =====
function validateEmail(email) {
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return regex.test(email);
}

// ===== Scroll Animation =====
const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);

// ===== Simple Testimonial Slider =====
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 4 seconds
if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, 4000);
}