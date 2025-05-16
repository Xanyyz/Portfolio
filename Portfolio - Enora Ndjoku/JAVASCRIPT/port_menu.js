document.addEventListener("DOMContentLoaded", function () {
    const portfolioTitle = document.getElementById("portfolioTitle");
    const menu = document.getElementById("menu");

    // Toggle du menu au clic sur "PORTFOLIO"
    portfolioTitle.addEventListener("click", function () {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex"; // Utiliser "flex" pour conserver l'affichage en colonnes
        }
    });

    // Fermer le menu si on clique ailleurs
    document.addEventListener("click", function (event) {
        if (!portfolioTitle.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = "none";
        }
    });
});


