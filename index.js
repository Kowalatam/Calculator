var TheMathCalculation = "";
var previousTarget = "<h1><h1>"; // assigned a random tag to it to avoid it being null

$(".theNumbers").on("click", function() {
	if ($("#theCalculation").html().length <= 25) {
		var i = $(this).text();
		if (previousTarget.innerHTML === ("sin" || "cos" || "tan")) {
			TheMathCalculation += i + ")";
			$("#theCalculation").html($("#theCalculation").html() + "(" + i + ")");		
		} else {
			TheMathCalculation += i;
			$("#theCalculation").html($("#theCalculation").html() + i);
		}
		previousTarget=this;
	}
})

$(".theXters").on("click", function() {
	var i = $(this).text();
	if ($("#theCalculation").html().length <= 25) {
		$("#theCalculation").html($("#theCalculation").html() + i);
		switch(i){
			case "π": 
				TheMathCalculation += "Math.PI";
				break;
			case "sin": 
				TheMathCalculation += "Math.sin(";
				break;
			case "cos":
				TheMathCalculation += "Math.cos(";
				break;
			case "tan":
				TheMathCalculation += "Math.tan(";
				break;
			default:
				TheMathCalculation += i;
		}
		previousTarget = this;
	}
})

var theAboveToString = "";
var indexes = [];

$("#exe").on("click", function() {
	var theMathResult = "";
	indexes = [];
	try {
		if (TheMathCalculation === "Math.PI") {
			theMathResult = eval(TheMathCalculation);
			$("#theResult").html(theMathResult);
		} else {
			//console.log(TheMathCalculation)
			theMathResult = eval(TheMathCalculation);
			$("#theResult").html(theMathResult.toPrecision(2));
			//the below code i used to deal with the decimals but it doesn't work so well
			//theAboveToString = theMathResult.toString().split("");
			//if (theAboveToString.indexOf(".") !== -1) {
			//	var idx = theAboveToString.indexOf("0");
			//	while (idx !== -1) {
  			//		indexes.push(idx);
  			//		idx = theAboveToString.indexOf("0", idx + 1);
  			//		if (true) {}
  			//		var newResult = theAboveToString.slice(0, indexes[1]).join("")
  			//		$("#theResult").html(newResult);
			//	}
			//} //else {
			//	$("#theResult").html(theMathResult);
			} 
			//console.log(theAboveToString)
		}
	catch(err) {
    $("#theResult").html("Syntax ERROR");
	}

})

$("#del").on("click", function(){
	$("#theResult").empty();

	var theSpec = $("#theCalculation").html().length-1;
	var theCalHtml = $("#theCalculation").html();
	var theResultemov = "";

	if (theCalHtml[theSpec] == "^") {
		TheMathCalculation = TheMathCalculation.slice(0, -2);
		$("#theCalculation").html(theResultemov);
	} else if (theCalHtml[theSpec] === ("n" || "s")) {
		TheMathCalculation = TheMathCalculation.slice(0, -8);
		theResultemov = theCalHtml.slice(0, -3);
		$("#theCalculation").html(theResultemov);
	} else if (theCalHtml[theSpec] === "π") {
		TheMathCalculation = TheMathCalculation.slice(0, -7);
		theResultemov = theCalHtml.slice(0, -1);
		$("#theCalculation").html(theResultemov);
	} else {
		TheMathCalculation = TheMathCalculation.slice(0, -1);
		theResultemov = theCalHtml.slice(0, -1);
		$("#theCalculation").html(theResultemov);
	}	
})

$("#AC").on("click", function(){
	$("#theCalculation").empty();
	$("#theResult").empty();
  TheMathCalculation = "";
})

$("#exp").on("click", function(){
	if ($("#theCalculation").html().length <= 25) {
		TheMathCalculation += "**";
		$("#theCalculation").html($("#theCalculation").html() + "^")
	}
})

// dealing with xx returning ** 
$("#theDif").on("click", function() {
	if ($("#theCalculation").html().length <= 25) {
		$("#theCalculation").html($("#theCalculation").html() + "x")
		if (previousTarget === this ) {
	 		TheMathCalculation += "x"
		} else {
			TheMathCalculation += "*";
		}
		previousTarget = this;	
	}
})

