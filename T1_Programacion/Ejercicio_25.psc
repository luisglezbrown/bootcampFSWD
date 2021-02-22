Algoritmo sin_titulo
	Definir columnas, filas, longitud_lado Como Entero;
	
	Escribir 'Introduce tamaño del cuadrado';
	Leer longitud_lado;
	
	Para filas = 1 hasta longitud_lado Hacer
		//Encargado de dibujar filas
		
		Para columnas = 1 hasta longitud_lado Hacer
			//Encargado de dibujar columas
			Si  filas == 1 o columnas == 1 o filas == longitud_lado o columnas == longitud_lado Entonces
				escribir '* ' sin saltar;
			sino 
				Escribir '  ' Sin Saltar;
			FinSi
			
		FinPara
		
		Escribir ' ';
		
	FinPara
	
FinAlgoritmo

// Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese
// tamaño. Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
// Ejemplo, para lado = 4 escribiría:
// ****
// * *
// * * 
// ****