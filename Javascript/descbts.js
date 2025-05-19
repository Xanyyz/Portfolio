document.addEventListener("DOMContentLoaded", function () {
  const text = "Le BTS SIO (Services Informatiques aux Organisations) est un diplôme d'État en informatique. Il forme des spécialistes capables de développer, maintenir et sécuriser des solutions informatiques adaptées aux besoins des entreprises. Il propose deux spécialités : SISR et SLAM.";
  const typingElement = document.getElementById("typing-text");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 30); // Vitesse de frappe
    }
  }

  typeWriter();
});
