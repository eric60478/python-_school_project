let myLeads = [];
const inputEL = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

//這個程式均在全域變數上執行所以我們可以在function部分多加指定去執行

localStorage.clear();
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

/////////////////////////////////////////////////////////////////////////////
//json prase 把string類型的變成json 形式
let myLeadss = `["wow"]`;
myLeadss = JSON.parse(myLeadss);
myLeadss.push("wow");

//JSON.stringify(myLeadss);
//把json形式變成String
//注意字串在js 只能用兩點quote
/////////////////////////////////////////////////////////////////////////////
//每當我們按重新載入時均會把之前的資料清光但local storage不會他會一直存著所以我們可以運用此特性去處理在此window 還存在時切記只能是string
//localStorage.setItem("myLeads", "eeeric");
//console.log(localStorage.getItem("myLeads"));
//localStorage.setItem(key,value);
//localStorage.getItem(key);
//localStorage.clear()
//PS:both key and value need to be string
/////////////////////////////////////////////////////////////////////////////

deleteBtn.addEventListener("dblclick", function () {
  console.log("doubles clicked");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEL.value);
  inputEL.value = "";
  //Save the myLeads array to local storage
  //PS:remember JSON Stringify
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
});
//我們可以直接用id 去呼叫事件發生時的function
//const cant adjust

function render(leads) {
  //send in array
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
            <a target='_blank' href=${leads[i]}>${leads[i]}</a>
        </li>
      `;
    //html 標誌 javascript寫法
    //如果要新增視窗
    //#為把後方的內容加入網址
    /////////////////////////////////////////////////////////////////////////////
    //可以拆成三步驟
    //create element
    //set text content
    //append to ul
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
  }
  ulEl.innerHTML = listItems; //簡單來說是字串相加html 渲染
  //可以用innerHTML去寫htmlcode而且clss id 均可以定義
  // append appendchild 均可以做到inner html同樣的效果
  //appencChild 為增加結點船Dom
}
//通常存img的均是array of relative path用inner html均可以解決
