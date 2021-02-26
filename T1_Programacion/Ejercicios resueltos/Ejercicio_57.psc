Algoritmo Ejercicio_57
	// Dada un matriz cuadrada A (array de 2 dimensiones con el mismo numero de
	// columnas que de filas, por ejemplo: 3) construir un algoritmo que permita
	// determinar si dicha matriz es simetrica. Se considera que una matriz es
	// simetrica si A[i,j] = A[j,i] para todos los elementos i,j de la matriz. 

	Definir matriz, filas, columnas, tamano Como Entero;
	Definir es_simetrica Como Logico;
	tamano = 3;
	Dimension matriz[tamano, tamano];
	
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;

	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;

	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;
	
	// Imprimimos la matriz
	para filas = 0 hasta tamano - 1 Hacer
		para columnas = 0 hasta tamano - 1 Hacer
			Escribir matriz[filas,columnas], " " Sin Saltar;
		FinPara
		Escribir "";
	FinPara
	
	// Partimos de la premisa de que es simetrica, para luego tratar de refutarla.
	// Como deciamos en clase, es simetrica hasta que se demuestre lo contrario.
	es_simetrica = Verdadero;
	
	para filas = 0 hasta tamano - 1 Hacer
		para columnas = 0 hasta tamano - 1 Hacer
			// Si un elemento no es igual al que corresponde cuando se intercambian los indices
			// ya no es simetrica. La premisa inicial seria falsa. Tambien se puede entender la diagonal
			// de unos como un espejo que debe reflejar los mismos numeros hacia un lado que hacia el otro.
			
			Si matriz[filas, columnas] <> matriz[columnas, filas] Entonces
				es_simetrica = Falso;
			FinSi
		FinPara
	FinPara
	
	Si es_simetrica Entonces
		Escribir "Es simetrica";
	SiNo
		Escribir "No es simetrica.";
	FinSi
	
FinAlgoritmo
