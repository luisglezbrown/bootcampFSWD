Algoritmo Ejercicio_55
	
	Definir matrix, n_col, n_row, row, col como entero;
	
	n_row = 4;
	n_col = 5;
	
	Dimension matrix[n_row, n_col];
	
	Para row = 0 hasta n_row - 1 Hacer
		
		Para col = 0 hasta n_col - 1 Hacer
			
			matrix[row,col] = Aleatorio(1,100);
			Escribir matrix[row, col], ' ' Sin Saltar;
			
		FinPara
		
		Escribir ' ';
		
	FinPara
	
FinAlgoritmo

//	Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100. Imprimirla en
//	forma de matriz o tabla, con sus filas y columnas.
