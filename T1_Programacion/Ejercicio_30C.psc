Algoritmo Ejercicio_30C
	
	Definir columna, fila, n_filas, counter Como Entero;
	
	Escribir 'Introduce el número de filas';
	Leer n_filas;
	
	counter = 0;
	
	Para fila = 1 hasta n_filas Hacer
		
		Para columna = 1 hasta fila Hacer
			counter = counter + 1;
			escribir counter, ' ' sin saltar;
			
			Si counter < 10 Entonces
				escribir ' ' sin saltar;
			FinSi
			
		FinPara
		
		Escribir ' ';
		
	FinPara
	
FinAlgoritmo