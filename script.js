document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay (e.g., 2 seconds) to show the splash screen
    setTimeout(function () {
        // Hide the splash screen
        document.getElementById("splash-screen").style.display = "none";
    }, 7000); // Adjust the duration as needed

    //code for changing color of the navbar
    var navbar = document.querySelector('.main-header');

    window.addEventListener('scroll', function () {
        // Check the scroll position
        if (window.scrollY > 1000) { // Adjust the scroll position as needed
            navbar.style.backgroundColor = '#000'; // Change to the desired color
        } else {
            navbar.style.backgroundColor = 'transparent'; // Reset to the initial color
        }
    });
});
