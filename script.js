document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close");
    const bamBtn = document.getElementById("bam-button");

    // Bouton BAM! interactif
    const sounds = ["BAM!", "POW!", "ZAP!", "WHAM!", "BOOM!"];
    bamBtn.addEventListener('click', () => {
        bamBtn.textContent = sounds[Math.floor(Math.random() * sounds.length)];
    });

    function openModal(card) {
        const type = card.getAttribute('data-type');
        const title = card.getAttribute('data-project');
        const info = card.getAttribute('data-info');
        
        const imgLow = card.getAttribute('data-img-low');
        const imgHigh = card.getAttribute('data-img-high');
        const imgSingle = card.getAttribute('data-img');

        modalTitle.textContent = title;

        if (type === 'web') {
            const link = card.getAttribute('data-link');
            let visualContent = '';

            // Gestion double images (Processus CDUI)
            if (imgLow && imgHigh) {
                visualContent = `
                    <div class="process-grid">
                        <div>
                            <p style="font-family:'Bangers';text-align:center;margin-bottom:5px;">AVANT (BASSE FI)</p>
                            <img src="${imgLow}" style="width:100%; border:3px solid black; box-shadow:5px 5px 0 black;">
                        </div>
                        <div>
                            <p style="font-family:'Bangers';text-align:center;margin-bottom:5px;">APRÈS (HAUTE FI)</p>
                            <img src="${imgHigh}" style="width:100%; border:3px solid black; box-shadow:5px 5px 0 black;">
                        </div>
                    </div>`;
            } 
            // Gestion image unique (Boxe Lavi)
            else if (imgSingle) {
                visualContent = `<img src="${imgSingle}" style="width:100%; border:4px solid black; margin-bottom:15px; box-shadow:8px 8px 0 black;">`;
            }

            modalBody.innerHTML = `
                ${visualContent}
                <p style="font-size: 1.1rem; margin-bottom: 25px; line-height:1.6;">${info}</p>
                ${link !== "#" ? `<a href="${link}" target="_blank" class="back-btn" style="display:block; text-align:center;">VISITER LE SITE LIVE</a>` : '<p style="text-align:center;color:#666;"><i>Prototype / Maquette uniquement</i></p>'}
            `;
        } else {
            // Arts Visuels
            const imgSrc = card.querySelector('img').src;
            modalBody.innerHTML = `
                <img src="${imgSrc}" style="width:100%; border:4px solid black; margin-bottom:15px; box-shadow:8px 8px 0 black;">
                <p style="text-align:center; font-weight: bold; font-size:1.1rem;">${info}</p>
            `;
        }
        modal.style.display = "block";
    }

    document.querySelectorAll('.project-card-green, .visual-card-white').forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
});