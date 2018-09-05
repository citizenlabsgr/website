
// Script to hide/show menu
window.addEventListener("load", function() {
    var span = document.querySelector('#about_chevron');
    var menu = document.querySelector('ul.sub-menu');
        span.addEventListener('click', function (event) {
            if (menu.classList.contains('dn')) {
                menu.classList.remove('dn');
            } else {
                menu.classList.add('dn');
            }
        }
    );
})