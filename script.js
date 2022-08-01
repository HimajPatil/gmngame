"use strict";
alert('Hidden Number can be from 1 to 50\n'+'Good Luck👍');
let guess;
let snum = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let txtbox = document.querySelector("#txtbox");
let scoreTxt = document.querySelector("#score");
let msgSign = document.querySelector(".material-symbols-rounded");
let msgTxt = document.querySelector("#gameMsg > span:nth-child(2)");
let checker = document.querySelector("#afwMsg");
let checkerqm = document.querySelector(".qm");
let checked;
let highscoreTxt = document.querySelector("#highscore");
let highscore = 0;
// Developed by Himaj Patil
document.querySelector("#check").addEventListener("click", () => {
  guess = Number(txtbox.value);

  if (!guess) {
    msgSign.textContent = " quiz ";
    msgTxt.textContent = "Enter a number";
    scoreTxt.textContent = score;
  } else if (guess === snum) {
    checker.style.display = "flex";
    checkerqm.style.display = "none";
    msgSign.textContent = " check ";
    msgTxt.textContent = "Correct";
    scoreTxt.textContent = score;
    checker.textContent = snum;
    checked = true;
  } else if (guess > snum) {
    if (score > 1) {
      msgSign.textContent = " arrow_upward ";
      msgTxt.textContent = "Num is little less!";
      score--;
      scoreTxt.textContent = score;
    } else {
      msgSign.textContent = " dangerous ";
      msgTxt.textContent = "You Lost";
      score--;
      scoreTxt.textContent = score;
      checkerDisp.textContent = snum;
    }
  } else if (guess < snum) {
    if (score > 1) {
      msgSign.textContent = " arrow_downward ";
      msgTxt.textContent = "Num is little high!!";
      score--;
      scoreTxt.textContent = score;
    } else {
      msgSign.textContent = " dangerous ";
      msgTxt.textContent = "You Lost";
      score--;
      scoreTxt.textContent = score;
      checkerDisp.textContent = snum;
    }
  }
  if (checked) {
    if (highscore < score) {
      highscore = score;
      highscoreTxt.textContent = highscore;
    }
  }
});

document.querySelector("#reset").addEventListener("click", () => {
  checker.textContent = null;
  checkerqm.style.display = "flex";
  snum = Math.trunc(Math.random() * 20) + 1;
  scoreTxt.textContent = undefined;
  checked = false;
  guess = undefined;
  score = 20;
  console.log("Fuckoff");
  msgSign.textContent = " quiz ";
  msgTxt.textContent = "Start";
  txtbox.value = '';
});
