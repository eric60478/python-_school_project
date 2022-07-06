let cards = [0, 0]; //array ordered list of items
var len;
let sum = 0;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
//如果適用queryselector 就是用class去標記也可以用id只是前面要加的為#跟.不同而已可以知道id只選眾一個但class可以選眾很多個
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");
function startGame() {
  renderGame();
}
//可以呼叫同一個使功能重複使用
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//math random 範圍是在0到1之間
function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card? \u{1F914}";
  } else if (sum === 21) {
    message = " You win black jack \u{1F60A}";
    hasBlackjack = true;
  } else {
    message = " You lose black jack \u{1F62D}";
    isAlive = false;
  }
  // only render first card and secound card
  messageEl.textContent = message;
  len = cards.length;
  sumEl.textContent = "Sum:" + sum;
  cardsEl.textContent = "Cards:  ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + "  ";
  }
  //render out all the card we have
}
function newCard() {
  console.log("Drawing new card");
  let card = getRandomInt(11);
  sum += card;
  cards.push(card);
  console.log(cards);
  console.log(len);
  renderGame();
}
//we can use push to like python append

////////////////////////////////////////////////////////////////
// if (sum < 21) {
//   console.log("Do you want to draw a new card? \u{1F914}");
// } else if (sum === "21") {
//   console.log(" You win black jack \u{1F60A}");
// } else {
//   console.log(" You lose black jack \u{1F62D}");
// }
////////////////////////////////////////////////////////////////
// if (sum < 21) {
//   console.log("Do you want to draw a new card? \u{1F914}");
// } else if (sum === '21') {
//   console.log(" You win black jack \u{1F60A}");
// } else {
//   console.log(" You lose black jack \u{1F62D}");
// }
//小心字串比較數字在===會出錯因為===特別強調了類型的重要性
