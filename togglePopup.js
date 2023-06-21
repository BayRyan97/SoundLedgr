let popup = document.getElementById('feature-popup');
popup.addEventListener('click', function(e) {
  // If the target of the click isn't the content nor a descendant of the content
  if (!e.target.closest('.popup-content')) {
    popup.style.display = "none";
  }
});
