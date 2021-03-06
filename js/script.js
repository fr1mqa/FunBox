'use strict';

var productsList = document.querySelectorAll('.product__content');
var linksList = document.querySelectorAll('.product__link');

var productClickHandler = function(evt) {
    if (!this.classList.contains('product__content--disabled')) {
        if(evt.type === 'keydown' && (evt.code === 'Enter' || evt.keyCode === 13)) {
            if (this.classList.contains('product__content--selected')) {
                this.classList.remove('product__content--selected');
                this.classList.remove('product__content--hover');
            } else {
                this.classList.add('product__content--selected');
                this.classList.add('product__content--hover');
                this.blur();
            }
        } else if (evt.type === 'click') {
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

var linkClickHandler = function (evt) {
    if((evt.type === 'keydown' && (evt.code === 'Enter' || evt.keyCode === 13) || evt.type === 'click')) {
        this.offsetParent.children[0].classList.add('product__content--hover');
        this.offsetParent.children[0].classList.add('product__content--selected');
        this.blur();
    }
};

for (var i = 0; i < productsList.length; i++) {
    productsList[i].addEventListener('click', productClickHandler);
    productsList[i].addEventListener('keydown', productClickHandler);
    linksList[i].addEventListener('click', linkClickHandler);
    linksList[i].addEventListener('keydown', linkClickHandler);
}