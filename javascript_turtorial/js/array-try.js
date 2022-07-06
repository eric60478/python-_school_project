//Array -order list of items
// let cards = [7, 3, 5, 6, 7, 8, 9, 10, 11, 12];
// let array = document.getElementById("array");

// for (let count = 0; count < cards.length; count++) {
//   array.textContent += cards[count];
//   //每次均把要用的東西取出來並把它放入字串裡
// }
//for 迴圈 跟c++的很像所後面為間距

//let block scope  like for like while
//var function scope it is vaild in function scope
//如果是全域變數的話不要用var 因為可能會跟別的module起衝突
////////////////////////////////////////////////////////////////////////////////////////////////
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largeCountries.pop();
//後面丟掉
largeCountries.push("Pakistan");
//後面新增
largeCountries.shift();
//左移丟掉
largeCountries.unshift("China");
//左邊新增
console.log(largeCountries);
