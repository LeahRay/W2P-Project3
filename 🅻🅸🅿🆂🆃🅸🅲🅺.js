
// Code for SVG4 toggling
document.querySelector('.svg4-1').addEventListener('click', function() {
    this.style.transform = 'translateX(-100%)';  // Move svg4-1 to the left
    document.querySelector('.svg4-2').style.transform = 'translateX(0)';  // Move svg4-2 into view
});

document.querySelector('.svg4-2').addEventListener('click', function() {
    this.style.transform = 'translateX(100%)';  // Move svg4-2 to the right
    document.querySelector('.svg4-1').style.transform = 'translateX(0)';  // Move svg4-1 into view from left
});
