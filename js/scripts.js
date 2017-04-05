function validate() {
    var x, y, lengthtext, numtext;

    // Get the value of the input field with id="ninum"
    x = document.getElementById("ninum").value;
	
    // Get the value of the input field with id="taxcreditsnum"
    y = document.getElementById("taxcreditsnum").value;

    // If x is Not 9 digit long then display an error
    if (x.length != 9) {
        lengthtext = "Please add a 9 digit NI Number (e.g AA123456C)";
    } else {
		lengthtext = ""
	}
	
    // If y is empty the display an error
    if ( y.length < 1) {
        numtext = "Please add your tax credits renewal number";
    } else {
		numtext = ""
	}
    document.getElementById("lengtherror").innerHTML = lengthtext;
	document.getElementById("numerror").innerHTML = numtext;
}
