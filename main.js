const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');

const shippingField = document.getElementById('shipping');
const total = document.getElementById('total');

function isContain(elem) {
    //is class present
    return elem.classList.contains('selected');
}

free.addEventListener('click', function () {
    if (!isContain(free)) {
        free.classList.add('selected');
        express.classList.remove('selected');
    }
    shippingField.innerText = 5;
    updateTotal();
})
express.addEventListener('click', function () {
    if (!isContain(express)) {
        free.classList.remove('selected');
        express.classList.add('selected');
    }
    shippingField.innerText = 30;
    updateTotal();
})

function updateTotal() {
    total.innerText = parseInt(shippingField.innerText) + Number(price.innerText);
}

div1.addEventListener('click', function () {
    if (!isContain(div1)) {
        div1.classList.add('selected');
        div2.classList.remove('selected');
        div3.classList.remove('selected');
    }
    img.src = 'images/1.jpg';
    desc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsa iusto illum error nisi! Deserunt facilis ratione nobis!'
    price.innerText = 650;
    updateTotal();
})
div2.addEventListener('click', function () {
    if (!isContain(div2)) {
        div1.classList.remove('selected');
        div2.classList.add('selected');
        div3.classList.remove('selected');
    }
    img.src = 'images/2.jpg';
    desc.innerText = 'Second Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsa iusto illum error nisi! Deserunt facilis ratione nobis!'
    price.innerText = 550;
    updateTotal();
})
div3.addEventListener('click', function () {
    if (!isContain(div1)) {
        div1.classList.remove('selected');
        div2.classList.remove('selected');
        div3.classList.add('selected');
    }
    img.src = 'images/3.jpg';
    desc.innerText = 'Third Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsa iusto illum error nisi! Deserunt facilis ratione nobis!'
    price.innerText = 330;
    updateTotal();
})