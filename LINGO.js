function limpiarFormulario() {
	document.getElementById("miForm").reset();
	
	 }

	var P = function (n1, n2, n3, n4){ 

	var numero1 = parseInt(document.getElementById("X1").value);
	
	var numero2 = parseInt(document.getElementById("Y1").value);

	var numero3 = parseInt(document.getElementById("X2").value);
	
	var numero4 = parseInt(document.getElementById("Y2").value);

	var OnE	= numero4 - numero2;

	var tWo = numero3 - numero1

	var resultado = OnE / tWo;

	return resultado;
	 }
	
	 function limpiarFormulario() {
	document.getElementById("miForm").reset();
	
	 }

	var DIST = function (n1, n2){ 

	var numero1 = parseInt(document.getElementById("Velocidad m/s").value);
	var numero2 = parseInt(document.getElementById("tiempo en segundos").value);


	var resultado = numero1 * numero2;

	return resultado;

	}