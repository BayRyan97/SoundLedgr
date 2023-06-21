function togglePopup(id) {
    var popup = document.getElementById(id);
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

let popup = document.getElementById('feature-popup');
popup.addEventListener('click', function(e) {
    // If the target of the click isn't the content nor a descendant of the content
    if (!e.target.closest('.popup-content')) {
        popup.style.display = "none";
    }
});
