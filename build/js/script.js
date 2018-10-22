'use strict';

var cards = document.querySelectorAll('.product__content');
var productsList = document.querySelector('.products__list');


var clickHandler = function(evt) {
    var target = evt.target;

    while (!target.classList.contains('product')) {
        if (target.classList.contains('product__content') && !target.classList.contains('product__content--disabled')) {
            target.classList.toggle('product__content--selected');
        }
        target = target.parentNode;
    }
};

// var mouseHandler = function(evt) {
//     evt.preventDefault();
//     var target = evt.target;
//
//     while (!target.classList.contains('product')) {
//         if (target.classList.contains('product__content') && !target.classList.contains('product__content--disabled')) {
//             target.classList.add('product__content--hover');
//         }
//         target = target.parentNode;
//     }
// };

productsList.addEventListener('click', clickHandler);
// productsList.addEventListener('mouseover', mouseHandler);