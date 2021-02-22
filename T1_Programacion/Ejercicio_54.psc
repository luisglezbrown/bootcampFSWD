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
	
	Escribir 'Introduce el número N';
	leer N;
	
	Mientras N < 1
		Escribir 'El número debe ser mayor que 0. Vuelve a introducirlo';
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
		Escribir 'Hay ', contador_primos, ' números primos';
	SiNo
		Escribir 'No hay números primos menores de ', N ;
	FinSi
	
	
FinAlgoritmo

//	Diseñar un algoritmo que lea el número N e imprima y cuente todos los números primos menores
//	que N.