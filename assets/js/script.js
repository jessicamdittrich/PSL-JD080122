// BLINKING SCROLL
var blinkingScroll = setInterval(function () {
  var scrollElement = document.getElementById("scroll");
  scrollElement.style.visibility =
    scrollElement.style.visibility == "hidden" ? "" : "hidden";
}, 1000);

// BACKGROUND IMAGE MOVEMENT
/*const el = document.querySelector("#background");

el.addEventListener("mousemove", (move) => {
  el.style.setProperty("--x", -move.offsetX + "px");
  el.style.setProperty("--y", -move.offsetY + "px");
});*/

// MOBILE MAIN TOGGLE
const menuBtn = document.getElementById("menu-button");
const exitBtn = document.getElementById("exit-button");
const mainNav = document.getElementById("mobile-main-nav");

const mobileMenuMain = () => {
  mainNav.style.display = "block";
};

const mobileMenuX = () => {
  mainNav.style.display = "none";
};

menuBtn.addEventListener("click", mobileMenuMain);
exitBtn.addEventListener("click", mobileMenuX);

// MOBILE SECONDARY TOGGLE - PORTFOLIO
const portfolioBtn = document.getElementById("portfolio-button");
const portfolioNav = document.getElementById("mobile-portfolio-nav");

function mobileMenuPortfolio() {
  if (portfolioNav.style.display === "block") {
    portfolioNav.style.display = "none";
  } else {
    portfolioNav.style.display = "block";
  }
}

portfolioBtn.addEventListener("click", mobileMenuPortfolio);

// MOBILE SECONDARY TOGGLE - SOCIAL
const socialBtn = document.getElementById("social-button");
const socialNav = document.getElementById("mobile-social-nav");

function mobileMenuSocial() {
  if (socialNav.style.display === "block") {
    socialNav.style.display = "none";
  } else {
    socialNav.style.display = "block";
  }
}

socialBtn.addEventListener("click", mobileMenuSocial);