Algoritmo Ejercicio_21_clase
	
	Definir N, contador, suma Como Entero;
	Definir media Como Real;
	
	
	Escribir 'Introduce el primer n�mero de la serie';
	Leer N;
	
	contador = 0;
	suma = 0;
	
	Mientras N <> 0 Hacer
		
		Si contador == 0 o N > maximo Entonces
			maximo = N;
		FinSi
		
		Si contador == 0 o N < minimo Entonces
			minimo = N;
		FinSi
		
		contador = contador + 1;
		suma = suma + N;
		
		Escribir 'Introduzca otro numero';
		Leer N;
		
	FinMientras
	
	
	Si contador == 0 Entonces
		Escribir 'Error: No has introducido ning�n numero';
	SiNo
		media = suma / contador;
		Escribir 'La media es ', media;
		Escribir 'El n�mero m�ximo es ', maximo;
		Escribir 'El n�mero m�nimo es ', minimo;
	FinSi
	
	
FinAlgoritmo
