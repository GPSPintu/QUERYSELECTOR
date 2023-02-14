//QUERYSELECTOR//
var header = document.querySelector('#main-header');
header.getElementsByClassName.borderBottom = 'solid 4px #ccc';
 
var input = document.querySelector('input');
input.value = "Hello World"

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND"
 
var item = document.querySelector('.list-group-iteam');
item.style.color = 'red';

var lastItem = document.querySelector
('.list-group-item:nth-child');
secondaryItem.style.color = 'coral';


//QUERYSELECTORALL//
var titles = document.querySelectorAll('.title');

console.log(titles);
title[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = 'accc';
}