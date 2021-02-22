Algoritmo Ejercicio_17
	Definir N, index, acumulado como entero;
	
	Escribir 'Introduce el número de repeticiones deseadas';
	Repetir
		leer N;
		Si N <=0 Entonces
			escribir 'El número debe ser mayor que 0, introduce un número positivo';
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
