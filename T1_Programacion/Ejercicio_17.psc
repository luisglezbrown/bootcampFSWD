Algoritmo Ejercicio_17
	Definir N, index, acumulado como entero;
	
	Escribir 'Introduce el n�mero de repeticiones deseadas';
	Repetir
		leer N;
		Si N <=0 Entonces
			escribir 'El n�mero debe ser mayor que 0, introduce un n�mero positivo';
		FinSi
	Hasta Que N > 0
	
	index = 0;
	acumulado = index;
	
	Mientras index <= N Hacer
		Escribir 'El acumulado hasta ', index, ' es ', acumulado;
		acumulado = acumulado + index;
		index = index + 1;
	FinMientras
	
	Escribir 'La suma total es: ', acumulado;
	
FinAlgoritmo
