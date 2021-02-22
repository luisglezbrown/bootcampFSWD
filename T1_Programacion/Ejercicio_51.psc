Algoritmo Ejercicio_51
	
	Definir N, contador_divisores, i Como Entero;
	
	Escribir 'Introduce el n�mero que deseas saber si es primo';
	leer N;
	
	Mientras N < 1
		Escribir 'El n�mero debe ser mayor que 0. Vuelve a introducirlo';
		leer N;
	FinMientras
	
	
	contador_divisores = 0;
	Para i = 1 hasta N
		Si N mod i == 0
			contador_divisores = contador_divisores + 1;
		FinSi
	FinPara
	
	
	Si contador_divisores > 2
		Escribir 'El n�mero ', N, ' es compuesto.';
	SiNo
		Si contador_divisores == 2
			Escribir 'El n�mero ', N, ' es primo.';
		SiNo
			Escribir 'El n�mero 1 no es primo ni compuesto.';
		FinSi		
	FinSi
	
FinAlgoritmo

//	Comprobar si un n�mero N positivo es primo. Se dice que un n�mero entero positivo N es un
//	n�mero primo si los �nicos enteros positivos que lo dividen son exactamente 1 y N (�l mismo). 