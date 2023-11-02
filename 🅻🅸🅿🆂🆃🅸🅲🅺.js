
// Code for SVG4 toggling
document.querySelector('.svg4-1').addEventListener('click', function() {
    this.style.transform = 'translateX(-100%)';  // Move svg4-1 to the left
    document.querySelector('.svg4-2').style.transform = 'translateX(0)';  // Move svg4-2 into view
});

document.querySelector('.svg4-2').addEventListener('click', function() {
    this.style.transform = 'translateX(100%)';  // Move svg4-2 to the right
    document.querySelector('.svg4-1').style.transform = 'translateX(0)';  // Move svg4-1 into view from left
});

// Get the color picker elements
let backgroundColorPicker = document.getElementById('backgroundColorPicker');
let svgFillColorPicker = document.getElementById('svgFillColorPicker');

// Add event listeners to handle color changes
backgroundColorPicker.addEventListener('input', function(event) {
    let newColor = event.target.value;
    document.querySelector('.centered-rectangle-window').style.backgroundColor = newColor;
});

svgFillColorPicker.addEventListener('input', function(event) {
    let newColor = event.target.value;
    
    // Get all SVG elements with specific classes and change their fill color
    let svgElements = document.querySelectorAll('.st0, .st0_2, .st1_2, .st2_2, .st3_2, st4_1, .st4_2');
    
    svgElements.forEach(function(element) {
        element.style.fill = newColor;  // Change fill color for SVGs
    });
    
    // Get all box elements with class st0 and change their background color
    let boxElements = document.querySelectorAll('.st0');
    
    boxElements.forEach(function(element) {
        element.style.backgroundColor = newColor;  // Change background color for boxes
    });

    let strokeElements = document.querySelectorAll('.st4_1');
    
    strokeElements.forEach(function(element) {
        element.style.stroke = newColor;  // Change stroke color
    });
});

document.querySelector('.rectangle').addEventListener('click', function() {
    if (window.innerWidth <= 768) {
        document.querySelector('.svg3-1').style.display = 'block';
    }
});

document.getElementById('svg5-2').style.display = 'none';

