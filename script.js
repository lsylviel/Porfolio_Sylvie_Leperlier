document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const cards = document.querySelectorAll(".project-card");
    const closeBtn = document.querySelector(".close");

    // Ouvrir la modale au clic sur une carte
    cards.forEach(card => {
        card.addEventListener('click', () => {
            modalTitle.textContent = card.getAttribute('data-project');
            modal.style.display = "block";
        });
    });

    // Fermer la modale
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    };
});