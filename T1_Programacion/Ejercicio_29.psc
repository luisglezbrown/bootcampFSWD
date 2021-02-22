Algoritmo Ejercicio_29
	
	Definir Numero_N, factorial, counter como entero;
	
	Escribir 'Introduce el número del que quiere saber el factorial';
	Leer Numero_N;
	
	factorial = 1;
	
	Para counter = Numero_N hasta 1 Hacer
		factorial = factorial * counter;
	FinPara
	
	Limpiar Pantalla;
	
	Escribir 'El factorial de ', Numero_N, ' es ', factorial;
	
FinAlgoritmo
