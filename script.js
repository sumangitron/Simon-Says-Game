let gameSeq = [];
let userSeq = [];

let color = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let heighest = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    levelUp();
    started = true;
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 3);
  let randomColor = color[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);

  gameSeq.push(randomColor);

  btnFlash(randomBtn);
}

function checkAns() {
  let idx = userSeq.length - 1;

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (level > heighest) {
      heighest = level;
    }

    h2.innerHTML = `Game Over! Your Score : ${level} <br/> Heighest Score : ${heighest} <br/> Press any key to start`;

    let body = document.querySelector("body");
    body.classList.add("over");

    setTimeout(function () {
      body.classList.remove("over");
    }, 250);

    reset();
  }
}

function btnPress() {
  let btn = this;
  btnFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns();
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameSeq = [];
  userSeq = [];
  level = 0;
  started = false;
}
