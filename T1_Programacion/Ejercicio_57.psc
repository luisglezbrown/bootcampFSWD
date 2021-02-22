Algoritmo Ejercicio_57
	Definir matriz, fila, columna, tamano como entero;
	Definir simetrica Como Logico;
	
	Tamano = 3;
	Dimension matriz[tamano,Tamano];
	
	matriz[0,0] = 7;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	
	matriz[1,0] = 2;
	matriz[1,1] = 9;
	matriz[1,2] = 2;
	
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 5;
	
	
	simetrica = Verdadero;
	Para fila = 0 hasta tamano -1
		para columna = 0 hasta tamano -1
			Si matriz[fila,columna] <> matriz[columna,fila]
				simetrica = falso;
			FinSi
		FinPara
	FinPara
	
	Si simetrica
		Escribir 'La matriz es simetrica';
	SiNo
		Escribir 'La matriz no es simetrica';
	FinSi
	
FinAlgoritmo

//	Dada un matriz cuadrada A (array de 2 dimensiones con el mismo número de columnas que de
//	filas, por ejemplo: 3) construir un algoritmo que permita determinar si dicha matriz es simétrica. Se
//	considera que una matriz es simétrica si A[i,j] = A[j,i] para todos los elementos i,j de la matriz.