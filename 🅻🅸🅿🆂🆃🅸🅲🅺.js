
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

document.addEventListener("DOMContentLoaded", function() {

    // For box1
    let box1 = document.querySelector('.box1');
    let modalBox1 = document.getElementById('modalBox1');

    box1.addEventListener('click', function() {
        modalBox1.style.display = "block";
    });

    let box2 = document.querySelector('.box2');
    let modalBox2 = document.getElementById('modalBox2');

    box2.addEventListener('click', function() {
        modalBox2.style.display = "block";
    });
    let box3 = document.querySelector('.box3');
    let modalBox3 = document.getElementById('modalBox3');

    box3.addEventListener('click', function() {
        modalBox3.style.display = "block";
    });
    let box4 = document.querySelector('.box4');
    let modalBox4 = document.getElementById('modalBox4');

    box4.addEventListener('click', function() {
        modalBox4.style.display = "block";
    });
    let box5 = document.querySelector('.box5');
    let modalBox5 = document.getElementById('modalBox5');

    box5.addEventListener('click', function() {
        modalBox5.style.display = "block";
    });

    let box6 = document.querySelector('.box6');
    let modalBox6 = document.getElementById('modalBox6');

    box6.addEventListener('click', function() {
        modalBox6.style.display = "block";
    });

    let box7 = document.querySelector('.box7');
    let modalBox7 = document.getElementById('modalBox7');

    box7.addEventListener('click', function() {
        modalBox7.style.display = "block";
    });
    let box8 = document.querySelector('.box8');
    let modalBox8 = document.getElementById('modalBox8');

    box8.addEventListener('click', function() {
        modalBox8.style.display = "block";
    });






    // Close modal when the x is clicked
    let closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            let modal = event.target.closest(".modal");
            modal.style.display = "none";
        });
    });
    
    // Close modals when anywhere outside the modal is clicked
    window.addEventListener('click', function(event) {
        if (event.target.className === 'modal') {
            event.target.style.display = "none";
        }
    });
    let saveButtons = document.querySelectorAll(".save-button");
    saveButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            let modalContent = event.target.closest(".modal-content");
            
            // Grab input values
            let dateValue = modalContent.querySelector("input[type='date']").value;
            let timeValue = modalContent.querySelector("input[type='time']").value;
            let eventValue = modalContent.querySelector("input[type='text']").value;

            // Log them (or do whatever you want with them)
            console.log("Date:", dateValue);
            console.log("Time:", timeValue);
            console.log("Event:", eventValue);

            // Close modal after saving (optional)
            let modal = event.target.closest(".modal");
            modal.style.display = "none";
        });
    });

});