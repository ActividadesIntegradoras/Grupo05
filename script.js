function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });
    document.getElementById(sectionId).classList.add('active-section');
}

function selectPerson(personId, videoSource, descriptionText) {
    const allCards = document.querySelectorAll('.person-card');
    allCards.forEach(card => {
        card.classList.add('fade-out');
    });

    const personCard = document.getElementById(personId);
    const imgElement = personCard.querySelector('img');
    const backButton = document.getElementById('backButton');

    imgElement.classList.add('centered');

    setTimeout(() => {
        const selectedImage = document.getElementById('selectedPersonImage');
        selectedImage.src = imgElement.src;

        imgElement.classList.remove('centered');
        imgElement.classList.add('fade-out');
        
        const videoElement = document.getElementById('personVideo');
        const descriptionElement = document.getElementById('personDescription');

        videoElement.src = videoSource;
        videoElement.classList.remove('hidden');
        descriptionElement.textContent = descriptionText;
        descriptionElement.classList.remove('hidden');

        backButton.style.display = 'inline-block';
        document.getElementById('presentationContainer').style.display = 'flex';
    }, 800);
}

function backToSelection() {
    const allCards = document.querySelectorAll('.person-card');
    allCards.forEach(card => {
        card.classList.remove('fade-out');
        card.classList.remove('hidden'); // Asegurarse de que las tarjetas sean visibles
    });

    const videoElement = document.getElementById('personVideo');
    videoElement.pause(); // Detener el video
    videoElement.currentTime = 0; // Reiniciar el video

    document.getElementById('presentationContainer').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
    document.getElementById('personVideo').classList.add('hidden');
    document.getElementById('personDescription').classList.add('hidden');

    // No borrar la imagen de la persona seleccionada
    const selectedImage = document.getElementById('selectedPersonImage');
    selectedImage.src = ''; // Esto puede ser removido si no deseas que la imagen cambie
}

function downloadPDF(pdfFile) {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = pdfFile;
    link.click();
}

window.onload = function () {
    setTimeout(() => {
        document.getElementById('introOverlay').classList.add('hide');
        document.getElementById('mainContent').classList.remove('blurred-content');
    }, 4000);
};