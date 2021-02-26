Algoritmo Ejercicio_58
	// Crear una tabla de 3 paginas, 4 filas y 5 columnas donde el primer
	// elemento valga 1, el segundo 2, el tercero 3 y asi sucesivamente, e imprimirla.
	
	Definir array, pagina, fila, columna, n_paginas, n_filas, n_columnas, contador Como Entero;
	n_paginas = 3;
	n_filas = 4;
	n_columnas = 5;
	Dimension array[n_paginas, n_filas, n_columnas];
	
	contador = 1;
	
	// Igual que haciamos con los arrays de dos dimensiones, anadimos un bucle por
	// cada dimension para iterar sobre todos los elementos.
	
	// El bucle externo corresponde a las paginas, cada pagina tendra filas y cada
	// fila tendra columnas.
	Para pagina = 0 hasta n_paginas - 1 Hacer
		Escribir "Pagina ", pagina;
		
		// Repite el bloque interno para todas las filas.
		Para fila = 0 hasta n_filas - 1 Hacer
			
			// Genera e imprime todas las columnas.
			Para columna = 0 hasta n_columnas - 1 Hacer
				array[pagina,fila,columna] = contador;
				Escribir array[pagina,fila,columna], " " Sin Saltar;
				contador = contador + 1;
			FinPara
			
			Escribir "";
		FinPara
		
		Escribir "";
	FinPara
	
FinAlgoritmo
