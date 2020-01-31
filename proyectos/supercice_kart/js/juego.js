console.log ("Jugando...");

var posPlayer1 = 0;
var posPlayer2 = 0;
var ganador;
var jugando = true;
const SPEED = 10;
const DISTANCIA = 710;

function inicializar() {
	var logo = document.getElementById("logo");
	//Alternativa BIND1
	logo.onmouseover = function() {
		console.log("Entrando...");
	}
	//Alternativa BIND2
	logo.addEventListener ("mouseleave", function() {
		console.log("Saliendo...");
	});
}

function zoom(idCoche) {
	var coche = document.getElementById("player"+idCoche);
	coche.style.width = "600px";
}

function antizoom(idCoche) {
	var coche = document.getElementById("player"+idCoche);
	coche.style.width = "300px";
}

function capturaPulsacion(tecla) {
	//a minuscula -> player1
	//l minuscula -> player2
	console.log(tecla.key);

	if (jugando == true)
		if (tecla.key == "a") {
			posPlayer1 = posPlayer1+SPEED;
			document.getElementById("player1").style.paddingLeft=posPlayer1+"px";
		if (posPlayer1 >= DISTANCIA) {
			document.getElementById("campeon").innerHTML="HA GANADO PLAYER 1";
			document.getElementById("aplauso").play();
			jugando = false;
		}
	}		
		if (tecla.key == "l") {
			posPlayer1 = posPlayer1+SPEED;
			document.getElementById("player2").style.paddingLeft=posPlayer1+"px";
		if (posPlayer1 >= DISTANCIA) {
			document.getElementById("campeon").innerHTML="HA GANADO PLAYER 2";
			document.getElementById("aplauso").play();
			jugando = false;
		}	
	}
}

