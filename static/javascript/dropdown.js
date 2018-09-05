
// Script to hide/show menu
window.addEventListener("load", function() {
    var button = document.querySelector('#about_chevron');
    var menu = document.querySelector('ul.sub-menu');
        button.addEventListener('click', function (event) {
            if (menu.classList.contains('dn')) {
                menu.classList.remove('dn');
                button.setAttribute("aria-expanded", "true");
            } else {
                menu.classList.add('dn');
                button.setAttribute("aria-expanded", "false");
            }
        }
    );
})