Algoritmo Ejercicio_58
	
	Definir array,n_pag, n_col, n_row, pag,row, col, contador como entero;
	
	n_pag = 3;
	n_row = 4;
	n_col = 5;
	
	Dimension array[n_pag, n_row, n_col];
	
	
	contador = 1;
	
	Para pag = 0 hasta n_pag - 1 Hacer
		
		Para row = 0 hasta n_row - 1 Hacer
			
			Para col = 0 hasta n_col - 1 Hacer
				
				array[pag,row,col] = contador;
				contador = contador + 1;
				Escribir array[pag, row, col], ' ' Sin Saltar;
				
			FinPara
			
			Escribir ' ';
			
		FinPara
		
		Escribir ' ';
		
	FinPara
	
	

	
	
FinAlgoritmo

//	Crear un array de 3 páginas, 4 filas y 5 columnas donde el primer elemento valga 1, el segundo 2,
//	el tercero 3 y así sucesivamente, e imprimirla.