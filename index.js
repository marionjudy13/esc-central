var toggle = document.querySelector(".toggle");
var menu = document.querySelector(".menu");
var menuLinks = document.querySelectorAll(".menu li a");

// Function to toggle menu and button image
function toggleMenu() {
  console.log("toggle clicked");
  menu.classList.toggle("active");
  // Toggle button image source based on menu state
  if (menu.classList.contains("active")) {
    toggle.src = "images/menu-close.svg"; // Change to the path of your close menu image
  } else {
    toggle.src = "images/menu.svg"; // Change to the path of your menu image
  }
}

// Listen for click event on toggle variable
toggle.addEventListener("click", toggleMenu);

// Add click event listeners to all menu links
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log("nav link clicked");
    menu.classList.remove("active");
    toggle.src = "images/menu.svg"; // Change to the path of your menu image
  });
});

// Add event listener to close the menu when clicking outside of it
document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !toggle.contains(event.target)) {
    // If the clicked element is not inside the menu and not the toggle button, close the menu
    menu.classList.remove("active");
    toggle.src = "images/menu.svg"; // Change to the path of your menu image
  }
});
