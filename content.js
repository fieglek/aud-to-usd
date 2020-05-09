var priceContainer = document.querySelector(".property-price.property-info__price");
var priceText = priceContainer.innerHTML;
if (priceText.includes("$")){
  console.log("YES");
  appendUsdPrice();
} else{
  console.log("NO Price");
}

function appendUsdPrice(){
  //priceNum array returns all numbers from the string. We should be good with
  //just the first one.
  var priceNumAry = priceText.match(/\d{1,3}(,\d{3})*(\.\d+)?/);
  //if comma, remove
  if (priceNumAry[0].includes(",")){
    var numPieces = priceNumAry[0].split(",");
    if (numPieces.length > 2){
      var combinedNum = numPieces[0].concat(numPieces[1]);
      combinedNum = combinedNum.concat(numPieces[2]);
    }else {
      var combinedNum = numPieces[0].concat(numPieces[1]);
    }
    priceNumAry[0] = combinedNum;
  }
  var priceTrueNum = parseInt(priceNumAry[0]);
  console.log(priceTrueNum);
  //UPDATE HERE
  var conversionRate = 0.65;

  var node = document.createElement("p");
  node.style.fontSize = "16px";
  node.style.color = "#65696b";
  var titleText = "Conversion rate set at 1AUD = " + conversionRate + "USD";
  node.setAttribute("title", titleText);
  var textnode = document.createTextNode("$" + priceTrueNum*conversionRate + " USD");
  node.appendChild(textnode);
  priceContainer.appendChild(node);
}
