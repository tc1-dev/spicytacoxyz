// Copy content from script.js
document.addEventListener('DOMContentLoaded', function() {
    const chili = document.querySelector('.chili');
    const taco = document.querySelector('.taco');

    function addHoverEffect(element) {
        element.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
        });

        element.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }

    if (chili) addHoverEffect(chili);
    if (taco) addHoverEffect(taco);
});
