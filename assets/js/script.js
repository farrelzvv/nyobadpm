'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

navToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const subNavbar = document.querySelector('.sub-navbar');

  dropdownBtn.addEventListener('click', function() {
    subNavbar.classList.toggle('active');
  });
});

function toggleJobdesk() {
  var overlay = document.getElementById('overlay');
  var jobdeskBanner = document.getElementById('jobdeskBanner');
  
  // Toggle kelas 'active' untuk overlay dan jobdesk banner
  overlay.classList.toggle('active');
  jobdeskBanner.classList.toggle('active');
}








