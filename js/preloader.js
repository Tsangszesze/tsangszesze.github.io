var preLoderBlock;
var preLoder;


function loadNow(opacity) {
    if (opacity <= 0) {
        display()
    } else {
        preloader.style.opacity = opacity;
        window.setTimeout(function () {
            loadNow(opacity - 0.05)
        }, 50)
    }
}
function display() {
    preLoder.style.visibility = 'hidden';
    preLoderBlock.style.visibility = 'hidden';
}
document.addEventListener('DOMContentLoaded', function(){
    preLoderBlock = document.getElementById('preloader-block');
    preLoder = document.getElementById('preloader');
    loadNow(5);
})