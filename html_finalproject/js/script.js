document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("recommendationForm");
    const nameInput = document.getElementById("nameForm");
    const messageInput = document.getElementById("messageForm");
    const recommendationsContainer = document.getElementById("recommendationsList");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita recarga de página
  
      const name = nameInput.value.trim();
      const message = messageInput.value.trim();
  
      if (message === "") {
        alert("Por favor, escribe una recomendación.");
        return;
      }
  
      const col = document.createElement("div");
      col.className = "col-md-3";
  
      const card = document.createElement("div");
      card.className = "card h-100 shadow-sm text-center p-3";
  
      const paragraph = document.createElement("p");
      paragraph.className = "fst-italic";
      paragraph.innerHTML = message + (name ? `<br><small class="text-muted">- ${name}</small>` : "");
  
      card.appendChild(paragraph);
      col.appendChild(card);
      recommendationsContainer.appendChild(col);
  
      // Limpiar campos
      nameInput.value = "";
      messageInput.value = "";
    });
  });

  // Botón Scroll
  document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("btnScrollTop");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });
  
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  
  
  