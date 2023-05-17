"use strict";

const profit = document.getElementById("profit");
const fees = document.getElementById("fees");
const description = document.getElementById("description");
const calculate = document.querySelector(".calculate");
const results = document.querySelector(".results");

calculate.addEventListener("click", function (e) {
  e.preventDefault();
  if (profit.value != "" && fees.value != "") {
    const myProfit = ((100 - fees.value) * 0.01) * profit.value;
    const myFee = profit.value - myProfit;
    createResults(myProfit, myFee);

    profit.value = "";
    fees.value = "";
    description.value = "";
  } else {
    alert("Fields Can't Be Empty");
  }
});

function createResults(prof, fee) {
  // Create Li
  const li = document.createElement("li");

  // Create H3 With Its Content
  const h3 = document.createElement("h3");
  const h3Text = document.createTextNode(`${description.value}`);
  // const h3Text = document.createTextNode(`${window.localStorage.length != 0 ? localStorage.getItem("description") : description.value}`);
  h3.appendChild(h3Text);

  // Create Main Div
  const moreDiv = document.createElement("div");
  moreDiv.className = "more";

  // First Paragraph
  const pOne = document.createElement("p");
  const pTextOne = document.createTextNode("Profit: ");
  const pOneSpan = document.createElement("span");
  const pOneSpanText = document.createTextNode(`+ ${prof}$`);
  pOneSpan.appendChild(pOneSpanText);
  pOne.append(pTextOne, pOneSpan);

  // Second Paragraph
  const pTwo = document.createElement("p");
  const pTextTwo = document.createTextNode("fees: ");
  const pTwoSpan = document.createElement("span");
  const pTwoSpanText = document.createTextNode(`- ${fee}$`);
  pTwoSpan.appendChild(pTwoSpanText);
  pTwo.append(pTextTwo, pTwoSpan);

  // Create Delete Button
  const del = document.createElement("button");
  const delText = document.createTextNode("Delete");
  del.appendChild(delText);
  del.className = "delete";
  del.setAttribute("onclick", "removeItems(this)");

  moreDiv.append(pOne, pTwo, del);
  li.append(h3, moreDiv);
  results.appendChild(li);
}

// Remove Any Calculation Chosen
function removeItems(item) {
  item.parentElement.parentElement.remove();
};
