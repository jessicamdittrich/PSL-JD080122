

// BLINKING SCROLL
var blinkingScroll = setInterval(function () {
    var scrollElement = document.getElementById('scroll');
    scrollElement.style.visibility = (scrollElement.style.visibility == 'hidden' ? '' : 'hidden');
}, 750);

const el = document.querySelector("#background");