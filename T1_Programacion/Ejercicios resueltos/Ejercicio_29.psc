Algoritmo Ejercicio_29
	// Desarrollar una calculadora de factoriales para numeros introducidos por teclado.
	// El factorial de un numero N es la multiplicacion de todos los numeros desde
	// 1 hasta N. Es decir, para N = 5, el factorial de 5 seria: 5! = 5*4*3*2*1 = 120

	Definir num, contador, factorial Como Entero;
	
	Escribir "Introduzca un numero para calcular su factorial.";
	Leer num;
	factorial = 1;
	
	// Bucle encargado de hacer la cuenta atras con paso -1
	// e ir acumulando la multiplicacion elemento a elemento
	Para contador = num hasta 1 Con Paso -1 Hacer
		factorial = factorial * contador;
	FinPara
	
	Escribir "El factorial de ", num, " es ", factorial;
	
FinAlgoritmo
