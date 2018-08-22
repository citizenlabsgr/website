//console.log('DropdownJS')

// var $newBtn = document.querySelector('#new')
// var $main = document.querySelector('main')
// 
// $newBtn.addEventListener('click', toggleMenu)
// $main.addEventListener('click', toggleMenu)
// function toggleMenu (event) {
//   event.stopPropagation()
//   var $menu = this.closest('main').querySelector('ul')
//   if($menu.classList.contains('dn')) {
//     $menu.classList.remove('dn')
//   } else {
//     $menu.classList.add('dn')
//   }
// }


// Script to hide/show menu
var span = document.querySelector('span#about_chevron');
var menu = document.querySelector('ul.sub-menu');
    span.addEventListener('click', function (event) {
        if (menu.classList.contains('dn')) {
            //menu.style.display = "none";
            //span.innerHTML = "Show Menu";
            menu.classList.remove('dn');
        } else {
            // menu.style.display = "";
            // span.innerHTML = "Hide Menu";
            menu.classList.add('dn');
        }
    }
);