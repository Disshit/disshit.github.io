window.gradientAngle = 0;

function updateAngle(angle) {
    let gradCSS = document.getElementById("gradientAnimation");
    gradCSS.innerHTML = `:root{--gradient-angle:${angle.toString()}deg;}`;
}

function graDelay(seconds) {
    return seconds*1000/360;
}

const animateGradient = setInterval(function() {
    updateAngle(window.gradientAngle);
    window.gradientAngle++;
    if (window.gradientAngle >= 360) {window.gradientAngle = 0;}
}, graDelay(3));