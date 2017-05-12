function mostrarInfo(){
	//Buscar esa Id e ingresar esa variable
	//.value: toma el valor que se esta ingresando en el input
	var email = document.getElementById('inputEmail').value;
	var pass = document.getElementById('inputPassword').value;

	//Con variable
	/*	var contenedorMail = document.getElementById('correo');
		contenedorMail.innerHTML = '<h3>Tus datos son: </h3>' + email;*/

	//Sin variable
	document.getElementById('correo').innerHTML = '<h3>El correo ingresado es: </h3>' + email;

	//El resultado es exactamente lo mismo realizado de distinta manera

	document.getElementById('pass').innerHTML = '<h3>La contraseña ingresada es: </h3>' + pass;
}