let errordParagraph = document.getElementById("error");

console.log(errordParagraph);

function purchase() {
  console.log("Purchasing");
  errordParagraph.textContent = "Something went wrong with your purchase";
}
