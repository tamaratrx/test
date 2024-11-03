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
    const burgerImage = burger.querySelector("img");

    // Initial burger icon
    const burgerIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDEwLjVDNyA5LjY3MTU3IDcuNjcxNTcgOSA4LjUgOUgzMS41QzMyLjMyODQgOSAzMyA5LjY3MTU3IDMzIDEwLjVDMzMgMTEuMzI4NCAzMi4zMjg0IDEyIDMxLjUgMTJIOC41QzcuNjcxNTcgMTIgNyAxMS4zMjg0IDcgMTAuNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNyAxOS41QzcgMTguNjcxNiA3LjY3MTU3IDE4IDguNSAxOEgzMS41QzMyLjMyODQgMTggMzMgMTguNjcxNiAzMyAxOS41QzMzIDIwLjMyODQgMzIuMzI4NCAyMSAzMS41IDIxSDguNUM3LjY3MTU3IDIxIDcgMjAuMzI4NCA3IDE5LjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMjguNUM3IDI3LjY3MTYgNy42NzE1NyAyNyA4LjUgMjdIMzEuNUMzMi4zMjg0IDI3IDMzIDI3LjY3MTYgMzMgMjguNUMzMyAyOS4zMjg0IDMyLjMyODQgMzAgMzEuNSAzMEg4LjVDNy42NzE1NyAzMCA3IDI5LjMyODQgNyAyOC41WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";

    // X icon when nav is open
    const closeIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4IDI4TDEyIDEyTTI4IDEyTDEyIDI4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K";

    burger.addEventListener("click", () => {
        mobileNav.classList.toggle("show"); // Toggle class to show/hide

        // Change icon based on the visibility of mobile nav
        if (mobileNav.classList.contains("show")) {
            burgerImage.src = closeIcon; // Switch to "X" icon
        } else {
            burgerImage.src = burgerIcon; // Switch back to burger icon
        }
    });

    // Function to close mobile nav if screen width is greater than 1025px
    const closeMobileNav = () => {
        if (window.innerWidth > 1025) {
            mobileNav.classList.remove("show"); // Remove the show class
            burgerImage.src = burgerIcon; // Reset to burger icon
        }
    };

    // Add event listener for window resize to close mobile nav
    window.addEventListener("resize", closeMobileNav);

  
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

