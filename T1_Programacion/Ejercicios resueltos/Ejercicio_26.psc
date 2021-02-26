Algoritmo Ejercicio_26
	// Desarrollar un algoritmo que lea 10 numeros por teclado y
	// calcule el cubo de cada uno de ellos. En cada lectura, tiene que
	// indicar por pantalla el numero que esta pidiendo.
	// Ejemplo de salida por pantalla:
	// Introduce el numero 1º.
	// > 8
	// El cubo de 8 es 512. 
	// Introduce el numero 2º.
	
	Definir num, contador, cantidad_numeros Como Entero;
	cantidad_numeros = 10;
	
	// Bucle encargado de pedir 10 numeros
	Para contador = 1 hasta cantidad_numeros Hacer
		Escribir "Introduzca el numero ", contador, "º";
		Leer num;
		Escribir "El cubo de ", num, " es ", num^3;
	FinPara
	
	
FinAlgoritmo
