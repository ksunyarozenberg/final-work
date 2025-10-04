function openLightBox(imageSrc) {
    document.getElementById('lightBoxImage').src = imageSrc;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightBox() {
    document.getElementById('lightbox').style.display = 'none';
}