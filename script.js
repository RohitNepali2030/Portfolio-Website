document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Hamburger Navigation Controller
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinksContainer = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".nav-link");

    mobileMenu.addEventListener("click", () => {
        navLinksContainer.classList.toggle("active");
        // Dynamically toggle icons between bars and close X sign
        const icon = mobileMenu.querySelector("i");
        if(navLinksContainer.classList.contains("active")) {
            icon.className = "fas fa-times";
        } else {
            icon.className = "fas fa-bars";
        }
    });

    // Close menu when clicking any section item link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinksContainer.classList.remove("active");
            mobileMenu.querySelector("i").className = "fas fa-bars";
        });
    });

    // 2. High Performance Scroll-Spy Highlight System
    const sections = document.querySelectorAll("section");
    
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Evaluates current active section line based on viewport position
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
});
