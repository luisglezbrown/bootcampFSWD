Algoritmo Ejemplo_BubbleSort
	
	Definir array, tamano, aux, j, i Como Entero;
	tamano = 5;
	
	dimension array[tamano];
	
	array[0] = 3;
	array[1] = 9;
	array[2] = 8;
	array[3] = 1;
	array[4] = 4;
	
	Para j = 0 hasta tamano - 1 
		Escribir array[j], ' ' Sin Saltar;
	FinPara
	Escribir '';
	
	
	para i = 0 hasta tamano - 2			// Lo repite con todos los números.		
		para j = 0 hasta tamano - 2		// Envia el número mayor al final
			si array[j] > array[j+1] Entonces
				aux = array[j];
				array[j] = array[j+1];
				array[j+1] = aux;
				
			FinSi
		FinPara
	FinPara
	
	
	// Imprime en consola	
	Para j = 0 hasta tamano - 1 
		Escribir array[j], ' ' Sin Saltar;
	FinPara
	Escribir '';
	
FinAlgoritmo
