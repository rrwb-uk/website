// Replace with the studio's Fresha booking page link.
var BOOKING_URL = "https://www.fresha.com/";

document.addEventListener("DOMContentLoaded", function () {
  // Point every "Book" button at the booking page
  document.querySelectorAll("[data-book]").forEach(function (link) {
    link.href = BOOKING_URL;
    link.target = "_blank";
    link.rel = "noopener";
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
});
