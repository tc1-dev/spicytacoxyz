// Add any interactive features here if needed
document.addEventListener('DOMContentLoaded', () => {
    const emojis = document.querySelectorAll('.emoji');
    
    emojis.forEach(emoji => {
        emoji.addEventListener('click', () => {
            emoji.style.transform = 'scale(1.2)';
            setTimeout(() => {
                emoji.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
