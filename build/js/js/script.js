'use strict';

var productsList = document.querySelectorAll('.product__content');
var linksList = document.querySelectorAll('.product__link');


var productClickHandler = function() {
    if (!this.classList.contains('product__content--disabled')) {
        if(event.type === 'keydown' && event.code === 'Enter') {
            if (this.classList.contains('product__content--selected')) {
                this.classList.remove('product__content--selected');
                this.classList.remove('product__content--hover');
            } else {
                this.classList.add('product__content--selected');
                this.classList.add('product__content--hover');
                this.blur();
            }
        } else if (event.type === 'click') {
            if (this.classList.contains('product__content--selected')) {
                this.classList.remove('product__content--selected');
                this.classList.remove('product__content--hover');
                this.removeEventListener('mouseleave', productMouseLeaveHandler);
            } else {
                this.classList.add('product__content--selected');
                this.addEventListener('mouseleave', productMouseLeaveHandler);
                this.blur();
            }
        }
    }
};

var productMouseLeaveHandler = function() {
    this.classList.add('product__content--hover');
};

var linkClickHandler = function () {
    if((event.type === 'keydown' && event.code === 'Enter') || event.type === 'click') {
        this.offsetParent.children[0].classList.add('product__content--hover');
        this.offsetParent.children[0].classList.add('product__content--selected');
    }
};


productsList.forEach(function (product) {
   product.addEventListener('click', productClickHandler);
   product.addEventListener('keydown', productClickHandler);
});

linksList.forEach(function (link) {
    link.addEventListener('click', linkClickHandler);
    link.addEventListener('keydown', linkClickHandler);
});