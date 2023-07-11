function openModal() {
    const modal = document.getElementById("myModal");
    const overlay = document.getElementById("overlay");
    modal.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  
  function closeModal() {
    const modal = document.getElementById("myModal");
    const overlay = document.getElementById("overlay");
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
  
  window.addEventListener("click", function(event) {
    const modal = document.getElementById("myModal");
    const overlay = document.getElementById("overlay");
    if (event.target === modal) {
      modal.style.display = "none";
      overlay.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
  