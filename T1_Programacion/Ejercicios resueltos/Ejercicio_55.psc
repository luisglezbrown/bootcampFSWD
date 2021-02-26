Algoritmo Ejercicio_55
	// Generar una matriz de 4 filas y 5 columnas con numeros aleatorios entre 1 y 100.
	// Imprimirla en forma de matriz o tabla, con sus filas y columnas.
	
	Definir matriz, fila, columna, tamano_filas, tamano_columnas Como Entero;
	tamano_columnas = 5;
	tamano_filas = 4;
	Dimension matriz[tamano_filas, tamano_columnas];
	
	Para fila = 0 Hasta tamano_filas - 1 Hacer
		Para columna = 0 Hasta tamano_columnas - 1 Hacer
			matriz[fila, columna] = Aleatorio(1,100);

			Escribir matriz[fila, columna], "   " Sin Saltar;
		FinPara
		
		// Escribimos una nueva linea tras haber generado la fila entera.
		Escribir "";
	FinPara
FinAlgoritmo
