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

  // Form Recommendation
  
  function showPopup() {
    const modal = new bootstrap.Modal(document.getElementById("recommendationModal"));
    modal.show();
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("recommendationForm");
    const nameInput = document.getElementById("nameForm");
    const messageInput = document.getElementById("messageForm");
    const recommendationsContainer = document.getElementById("recommendationsList");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = nameInput.value.trim();
      const message = messageInput.value.trim();
  
      if (!message) {
        alert("Please write a recommendation.");
        return;
      }
  
      const col = document.createElement("div");
      col.className = "col-md-3";
  
      const card = document.createElement("div");
      card.className = "card h-100 shadow-sm text-center p-3";
  
      const p = document.createElement("p");
      p.className = "fst-italic";
      p.innerHTML = `${message}<br><small class="text-muted">${name ? `- ${name}` : ''}</small>`;
  
      card.appendChild(p);
      col.appendChild(card);
      recommendationsContainer.appendChild(col);
  
      form.reset();
      showPopup(); 
    });
  });
  
  
  