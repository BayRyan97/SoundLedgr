document.addEventListener('DOMContentLoaded', (event) => {
    let featureText = [
        "Create and sell NFTs of your music with the goal of building something big with your fans and not encouraging a big flip in the secondary market.",
        "Help establish copyright of your music and have ownership over content.",
        "Build a relationship with your community like never before.",
        "Gain insights into your sales with detailed analytics to see how your music is performing in the market."
    ];

    document.querySelectorAll('.feature-item').forEach((item, i) => {
        item.addEventListener('click', function() {
            let popup = document.getElementById('feature-popup');
            let popupText = popup.querySelector('.popup-text');
            let popupHeader = popup.querySelector('.popup-header');
            popupText.textContent = featureText[i];
            popupHeader.textContent = this.querySelector('p').textContent;
            popup.style.display = 'block';
        });
    });

    let popup = document.getElementById('feature-popup');
    popup.addEventListener('click', function(e) {
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });
});
