Algoritmo Ejercicio_31
	Definir columna, fila, altura Como Entero;
	
	Escribir 'Introduce la altura';
	Leer altura;
	
	Para fila = 1 hasta altura Hacer
		
		Para columna = 1 hasta altura Hacer
			
			Si  columna >= fila  Entonces
				escribir '* ' sin saltar;
			sino 
				Escribir '  ' Sin Saltar;
			FinSi
			
		FinPara
		
		Escribir ' ';
		
	FinPara
	
FinAlgoritmo
