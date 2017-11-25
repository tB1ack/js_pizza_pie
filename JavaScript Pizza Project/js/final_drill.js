function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
		}
	} if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	text1 = text1+"&nbsp;$"+sizeTotal+".00 "+selectedSize+"<br>";
	runningTotal = sizeTotal;
	getCrust(runningTotal,text1);
}

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var c = 0; c < crustArray.length; c++) {
		if (crustArray[c].checked) {
			var selectedCrust = crustArray[c].value;
		}
	} if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else {
		crustTotal = 0;
	} 
	if (crustTotal == 3) {
		text1 = text1+"+$3.00 "+selectedCrust+"<br>";
	} else {
		text1 = text1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+selectedCrust+" <br>"
	}
	runningTotal = runningTotal + crustTotal;
	getMeat(runningTotal,text1);
}

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	for (var m = 0; m < selectedMeat.length; m++) {
		if (m < 1) {
			text1 = text1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+selectedMeat[m]+" <br>";	
		} else {
			text1 = text1+"+$1.00 "+selectedMeat[m]+"<br>";
		}
	}
	runningTotal = (runningTotal + meatTotal);
	getVeggie(runningTotal,text1);
}

function getVeggie(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var k = 0; k < veggieArray.length; k++) {
		if (veggieArray[k].checked) {
			selectedVeggie.push(veggieArray[k].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	for (var v = 0; v < selectedVeggie.length; v++) {
		if (v < 1) {
			text1 = text1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+selectedVeggie[v]+" <br>";	
		} else {
			text1 = text1+"+$1.00 "+selectedVeggie[v]+"<br>";
		}
	}
	runningTotal = (runningTotal + veggieTotal);
	getCheese(runningTotal,text1);
}

function getCheese (runningTotal,text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var e = 0; e < cheeseArray.length; e++) {
		if (cheeseArray[e].checked) {
			var selectedCheese = cheeseArray[e].value;
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else {
		cheeseTotal = 0;
	}
	if (cheeseTotal == 3) {
		text1 = text1+"+$3.00 "+selectedCheese+" <br>";
	} else {
		text1 = text1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+selectedCheese+" <br>";
	}
	runningTotal = runningTotal + cheeseTotal;
	getSauce(runningTotal,text1)
}

function getSauce (runningTotal,text1) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var s = 0; s < sauceArray.length; s++) {
		if (sauceArray[s].checked) {
			var selectedSauce = sauceArray[s].value;
		}
	}
	text1 = text1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+selectedSauce+" <br>";
	runningTotal = runningTotal;
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}
