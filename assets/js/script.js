// BLINKING SCROLL
var blinkingScroll = setInterval(function () {
  var scrollElement = document.getElementById("scroll");
  scrollElement.style.visibility =
    scrollElement.style.visibility == "hidden" ? "" : "hidden";
}, 750);

// BACKGROUND IMAGE MOVEMENT
const el = document.querySelector("#background");

el.addEventListener("mousemove", (e) => {
  el.style.setProperty("--x", -e.offsetX + "px");
  el.style.setProperty("--y", -e.offsetY + "px");
});

// MOBILE TOGGLE
const menuBtn = document.getElementById("menu-button");
const exitBtn = document.getElementById("exit-button");
const portfolioBtn = document.getElementById("portfolio-button");
const socialBtn = document.getElementById("social-button");
const mainNav = document.getElementById("mobile-main-nav");
const portfolioNav = document.getElementById("mobile-portfolio-nav");
const socialNav = document.getElementById("mobile-social-nav");
const displaySettingPortfolio = portfolioNav.style.display;
const displaySettingSocial = socialNav.style.display;

const mobileMenuMain = () => {
  mainNav.style.display = "block";
};

const mobileMenuX = () => {
  mainNav.style.display = "none";
};

const mobileMenuPortfolio = (e) => {
    e.preventDefault();
  if (displaySettingPortfolio == "block") {
    portfolioNav.style.display = "none";
  } else {
    portfolioNav.style.display = "block";
  }
};

const mobileMenuSocial = (e) => {
    e.preventDefault();
  if (displaySettingSocial == "block") {
    socialNav.style.display = "none";
  } else {
    socialNav.style.display = "block";
  }
};

menuBtn.addEventListener("click", mobileMenuMain);
exitBtn.addEventListener("click", mobileMenuX);
portfolioBtn.addEventListener("click", mobileMenuPortfolio);
socialBtn.addEventListener("click", mobileMenuSocial);
