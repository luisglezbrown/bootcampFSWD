Algoritmo Ejercicio_51
	
	Definir N, i Como Entero;
	Definir es_primo Como Logico;
	
	Escribir 'Introduce el n�mero que deseas saber si es primo';
	leer N;
	
	Mientras N < 1
		Escribir 'El n�mero debe ser mayor que 0. Vuelve a introducirlo';
		leer N;
	FinMientras
	
	es_primo = verdadero;
	Para i = 2 hasta N - 1
		Si N mod i == 0
			es_primo = falso;
		FinSi
	FinPara
	
	Si es_primo
		Escribir 'El n�mero ', N, ' es primo.';
	SiNo
		Escribir 'El n�mero ', N, ' es compuesto.';
	FinSi
	
FinAlgoritmo

//	Comprobar si un n�mero N positivo es primo. Se dice que un n�mero entero positivo N es un
//	n�mero primo si los �nicos enteros positivos que lo dividen son exactamente 1 y N (�l mismo). 