Funcion resultado = es_primo(num)
	
	Definir i como entero;
	Definir resultado Como Logico;
	resultado = verdadero;
	
	Para i = 2 hasta num - 1 Con Paso 1
		Si num mod i == 0
			resultado = falso;
		FinSi
	FinPara

FinFuncion


Algoritmo Ejercicio_54
	
	Definir N, index, contador_primos Como Entero;
	
	Escribir 'Introduce el n�mero N';
	leer N;
	
	Mientras N < 1
		Escribir 'El n�mero debe ser mayor que 0. Vuelve a introducirlo';
		leer N;
	FinMientras
	
	contador_primos = 0;
	
	Para index = 2 hasta N Con Paso 1
		si es_primo(index)
			Escribir index, ' ';
			contador_primos = contador_primos + 1;			
		FinSi
	FinPara
	
	si contador_primos <> 0
		Escribir 'Hay ', contador_primos, ' n�meros primos';
	SiNo
		Escribir 'No hay n�meros primos menores de ', N ;
	FinSi
	
	
FinAlgoritmo

//	Dise�ar un algoritmo que lea el n�mero N e imprima y cuente todos los n�meros primos menores
//	que N.