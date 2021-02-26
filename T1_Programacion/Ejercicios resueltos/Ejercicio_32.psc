Algoritmo Ejercicio_32
	// El siguiente es el menu de un restaurante de bocadillos. Diseñar un algoritmo
	// capaz de leer el numero de unidades consumidas de cada alimento ordenado y
	// calcular la cuenta total. Vamos a suponer que estos precios son fijos,
	// es decir, que son constantes (recuerda que en PSeInt no se usa comas para
	// separar la parte decimal de la parte entera).
	// Bocadillo de jamon: 1,5e
	// Refresco: 1,05e
	// Cerveza: 0,75e
	// Pan: 2e
	
	Definir bocadillos, refrescos, cervezas, pan Como Entero;
	Definir precio_bocadillos, precio_refrescos, precio_cervezas, precio_pan Como Real;
	
	precio_bocadillos = 1.5;
	precio_refrescos = 1.05;
	precio_cervezas = 0.75;
	precio_pan = 2;
	
	Escribir "Introduzca el numero de bocadillos de jamon";
	Leer bocadillos;
	
	Escribir "Introduzca el numero de refrescos";
	Leer refrescos;
	
	Escribir "Introduzca el numero de cervezas";
	Leer cervezas;
	
	Escribir "Introduzca el numero de pan";
	Leer pan;
	
	Escribir "El precio final es ", bocadillos * precio_bocadillos + refrescos * precio_refrescos + cervezas * precio_cervezas + pan * precio_pan;
	
FinAlgoritmo
