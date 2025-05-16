document.addEventListener("DOMContentLoaded", function () {
    // Animation du texte d'accueil
    const animatedText = document.getElementById("animated-text");
    animatedText.style.opacity = "1";

    // Animation des sections au défilement
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });
});
