Algoritmo Ejercicio_51
	
	Definir N, contador_divisores, i Como Entero;
	
	Escribir 'Introduce el número que deseas saber si es primo';
	leer N;
	
	Mientras N < 1
		Escribir 'El número debe ser mayor que 0. Vuelve a introducirlo';
		leer N;
	FinMientras
	
	
	contador_divisores = 0;
	Para i = 1 hasta N
		Si N mod i == 0
			contador_divisores = contador_divisores + 1;
		FinSi
	FinPara
	
	
	Si contador_divisores > 2
		Escribir 'El número ', N, ' es compuesto.';
	SiNo
		Si contador_divisores == 2
			Escribir 'El número ', N, ' es primo.';
		SiNo
			Escribir 'El número 1 no es primo ni compuesto.';
		FinSi		
	FinSi
	
FinAlgoritmo

//	Comprobar si un número N positivo es primo. Se dice que un número entero positivo N es un
//	número primo si los únicos enteros positivos que lo dividen son exactamente 1 y N (él mismo). 