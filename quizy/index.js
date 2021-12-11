'use strict'

const true1 = document.getElementById('true1');

const truebox1 = document.getElementById('truebox1');

true1.onclick = () => {
  true1.style.backgroundColor = "blue";
  true1.style.color = "white";
  truebox1.style.display = "block";
};

console.log(true1);