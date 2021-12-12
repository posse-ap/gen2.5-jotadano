'use strict'

const true1 = document.getElementById('true1');
const false1 = document.getElementById('false1');
const false2 = document.getElementById('false2');

const truebox1 = document.getElementById('truebox1');
const falsebox1 = document.getElementById('falsebox1');

true1.onclick = () => {
  true1.style.backgroundColor = "#287dff";
  true1.style.color = "white";
  truebox1.style.display = "block";
  true1.disabled = true;
  false1.disabled = true;
  false2.disabled = true;
};

false1.onclick = () => {
  false1.style.backgroundColor = "#ff5128";
  false1.style.color = "white";
  falsebox1.style.display = "block";
  true1.style.backgroundColor = "#287dff";
  true1.style.color = "white";
};

false2.onclick = () => {
  false2.style.backgroundColor = "#ff5128";
  false2.style.color = "white";
  falsebox1.style.display = "block";
  true1.style.backgroundColor = "#287dff";
  true1.style.color = "white";
};

// document.getElementById("true1").disabled = true;
// console.log(true1);
