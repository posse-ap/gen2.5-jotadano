'use strict'

// const true1 = document.getElementById('true1');
// const false1 = document.getElementById('false1');
// const false2 = document.getElementById('false2');

// const truebox = document.getElementById('truebox');
// const falsebox = document.getElementById('falsebox');

// true1.onclick = () => {
//   true1.style.backgroundColor = "#287dff";
//   true1.style.color = "white";
//   truebox.style.display = "block";
//   true1.style.pointerEvents = "none";
//   false1.style.pointerEvents = "none";
//   false2.style.pointerEvents = "none";
// };

// false1.onclick = () => {
//   false1.style.backgroundColor = "#ff5128";
//   false1.style.color = "white";
//   falsebox.style.display = "block";
//   true1.style.backgroundColor = "#287dff";
//   true1.style.color = "white";
//   true1.style.pointerEvents = "none";
//   false1.style.pointerEvents = "none";
//   false2.style.pointerEvents = "none";
// };

// false2.onclick = () => {
//   false2.style.backgroundColor = "#ff5128";
//   false2.style.color = "white";
//   falsebox.style.display = "block";
//   true1.style.backgroundColor = "#287dff";
//   true1.style.color = "white";
//   true1.style.pointerEvents = "none";
//   false1.style.pointerEvents = "none";
//   false2.style.pointerEvents = "none";
// };

// document.getElementById("true1").disabled = true;
// console.log(true1);

// let number = ['1','2','3']
let picture = ['高輪','亀戸','麹町','御成門','等々力','石神井','雑色','御徒町','鹿骨','小榑'] //写真
let choice = [['たかなわ','たかわ','こうわ'],['かめいど','かめど','かめと'],['こうじまち','かゆまち','おかとまち'],['おなりもん','おかどもん','ごせいもん'],['とどろき','たたりき','たたら'],['しゃくじい','いじい','せきこうい'],['ぞうしき','ざっしき','ざっしょく'],['おかちまち','ごしろちょう','みとちょう'],['ししぼね','ろっこつ','しこね'],['こぐれ','こしゃく','こばく']]; //選択肢

function shuffle(arr) {
  for (let k = arr.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [arr[j], arr[k]] = [arr[k], arr[j]];
  }
  return arr;
}



// const shuffledChoices = shuffle(...choice);
// const choices = document.getElementById('choices');

//   shuffledChoices.forEach(choice => {
//     const li = document.createElement('choice');
//     li.textContent = choice;
//     choices.appendChild(li);
//   });

let main = ''
let loop = document.getElementById('loop');

for(let i = 0; i<10; i++){
  let choices = ['<li class="choice" id="true1'+[i]+'">'+choice[i][0]+'</li>'
  ,'<li class="choice" id="false1'+[i]+1+'">'+choice[i][1]+'</li>'
  ,'<li class="choice" id="false2'+[i]+2+'">'+choice[i][2]+'</li>']
  const shuffled = shuffle(choices);
  
  main += '<h2 class="title">'+[i+1]+'.この地名はなんて読む？</h2>'+'<img src="img/'+picture[i]+'.png" alt="地名">'

  +'<ul class="choices" id="choices">'
  +shuffled[0]
  +shuffled[1]
  +shuffled[2]
  +'</ul>'

  +'<div class="resultbox" class="truebox" id="truebox'+[i]+'">'
  +'<p class="truebox_text">正解！</p>'
  +'<p class="resultbox_answer">正解は「'+choice[i][0]+'」です！</p>'
  +'</div>'

  +'<div class="resultbox" class="falsebox" id="falsebox'+[i]+'">'
  +'<p class="falsebox_text">不正解！</p>'
  +'<p class="resultbox_answer">正解は「'+choice[i][0]+'」です！</p>'
  +'</div>';
  loop.innerHTML = main;
};

for(let i = 0; i<10; i++){
  const true1 = document.getElementById('true1'+[i]+'');
  const false1 = document.getElementById('false1'+[i]+1+'');
  const false2 = document.getElementById('false2'+[i]+2+'');

  true1.addEventListener('click',() => {
    const truebox = document.getElementById('truebox'+[i]+'');
    true1.classList.add('button1');
    truebox.classList.add('truebox');
    false1.classList.add('unClick');
    false2.classList.add('unClick');
  } , false);

  false1.addEventListener('click',() => {
    const falsebox = document.getElementById('falsebox'+[i]+'');
    true1.classList.add('button1','unClick');
    false1.classList.add('button2');
    false2.classList.add('unClick');
    falsebox.classList.add('truebox');
  } , false);

  false2.addEventListener('click',() => {
    const falsebox = document.getElementById('falsebox'+[i]+'');
    true1.classList.add('button1','unClick');
    false1.classList.add('unClick');
    false2.classList.add('button2');
    falsebox.classList.add('truebox');
  } , false);

  // true1.addEventListener('click',() => {
  //   const truebox = document.getElementById('truebox'+[i]+'');
  //   true1.classList.add('button1');
  //   truebox.classList.add('truebox');
  //   false1.classList.add('unClick');
  //   false2.classList.add('unClick');
  // } , false);

  // false1.addEventListener('click',() => {
  //   const falsebox = document.getElementById('falsebox'+[i]+'');
  //   true1.classList.add('button1','unClick');
  //   false1.classList.add('button2');
  //   false2.classList.add('unClick');
  //   falsebox.classList.add('truebox');
  // } , false);

  // false2.addEventListener('click',() => {
  //   const falsebox = document.getElementById('falsebox'+[i]+'');
  //   true1.classList.add('button1','unClick');
  //   false1.classList.add('unClick');
  //   false2.classList.add('button2');
  //   falsebox.classList.add('truebox');
  // } , false);
}

