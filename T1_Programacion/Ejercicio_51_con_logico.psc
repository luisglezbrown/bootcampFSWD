Algoritmo Ejercicio_51
	
	Definir N, i Como Entero;
	Definir es_primo Como Logico;
	
	Escribir 'Introduce el número que deseas saber si es primo';
	leer N;
	
	Mientras N < 1
		Escribir 'El número debe ser mayor que 0. Vuelve a introducirlo';
		leer N;
	FinMientras
	
	es_primo = verdadero;
	Para i = 2 hasta N - 1
		Si N mod i == 0
			es_primo = falso;
		FinSi
	FinPara
	
	Si es_primo
		Escribir 'El número ', N, ' es primo.';
	SiNo
		Escribir 'El número ', N, ' es compuesto.';
	FinSi
	
FinAlgoritmo

//	Comprobar si un número N positivo es primo. Se dice que un número entero positivo N es un
//	número primo si los únicos enteros positivos que lo dividen son exactamente 1 y N (él mismo). 