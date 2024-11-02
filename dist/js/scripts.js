/*!
* Start Bootstrap - WD Test v6.0.7 (#)
* Copyright 2013-2024 T
* Licensed under MIT (https://github.com/StartBootstrap/Web Developer Test/blob/master/LICENSE)
*/
//
// Scripts
// 

//Main nav dropdown element

document.addEventListener('DOMContentLoaded', function () {
    const dropdownButtons = document.querySelectorAll('.header-wrapper__header__menu__nav__links__dropdown__dropbtn');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent click from bubbling up
            const dropdownContent = this.parentElement.querySelector('.header-wrapper__header__menu__nav__links__dropdown__who-is-it-for');
            
            // Toggle visibility of the dropdown
            if (dropdownContent) {
                dropdownContent.classList.toggle('show');
            }
        });
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', function () {
        document.querySelectorAll('.header-wrapper__header__menu__nav__links__dropdown__who-is-it-for.show').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    });
});

//Mobile nav dropdown element
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header-wrapper__header__menu__nav__burger");
    const mobileNav = document.querySelector(".header-wrapper__header__expanded");

    burger.addEventListener("click", () => {
        mobileNav.classList.toggle("show"); // Toggle class to show/hide
    });
});



//Banner Closing


    document.addEventListener("DOMContentLoaded", function() {
        // Get the close button element
        const closeButton = document.querySelector('.close-button');

        // Add a click event listener to the close button
        closeButton.addEventListener('click', function(event) {
            // Prevent the default anchor behavior
            event.preventDefault();
            // Get the parent banner element
            const banner = document.querySelector('.banner-content').parentElement;
            // Hide the banner
            banner.style.display = 'none';
        });
    });


	
	
// Placeholder image with video

function embedVideo() {
        const imagePlaceholder = document.getElementById('imagePlaceholder');
        const videoWrapper = document.getElementById('videoWrapper');
        
        // Hide placeholder image and show video
        imagePlaceholder.style.display = 'none';
        videoWrapper.style.display = 'block';
    }

	
//Countdown	

// Set the date we're counting down to
const countdownDate = new Date("December 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    // If the countdown is finished, display some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

