Algoritmo Ejercicio_27
	// Desarrollar un algoritmo que imprima la tabla de multiplicacion
	// del numero N introducido por teclado. Para N = 13, el output seria:
	// 13 X 1 = 13
	// 13 X 2 = 26
	// ...
	// 13 X 10 = 130

	Definir num, contador, cantidad_numeros Como Entero;
	
	Escribir "Introduzca un numero para calcular su tabla de multiplicacion hasta el 10";
	Leer num;
	
	// Bucle encargado de dibujar la tabla hasta el 10
	Para contador = 1 hasta 10 Hacer
		Escribir num, " X ", contador, " = ", contador * num;
	FinPara	
	
FinAlgoritmo
