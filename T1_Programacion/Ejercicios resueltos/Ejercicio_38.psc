Algoritmo Ejercicio_38
	// Dado un array de numeros de 5 posiciones con los siguiente valores [1, 2, 3, 4, 5],
	// guardar los valores de este array en otro array distinto pero con los valores
	// invertidos, es decir, que el segundo array debera tener los valores [5,4,3,2,1].


	Definir array1, array2, tamano, i Como Entero;
	tamano = 5;
	Dimension array1[tamano], array2[tamano];
	
	array_1[0] = 1;
	array_1[1] = 2;
	array_1[2] = 3;
	array_1[3] = 4;
	array_1[4] = 5;
	
	Para i = 0 hasta tamano - 1 Hacer
		// Vamos asignando en el array2 los ultimos valores
		// del array1. Como en el indice le restamos i, que va
		// incrementando con las iteraciones, conseguimos el orden
		// inverso del primer array. Es decir, desde el final, hasta el 0.
		array2[i] = array1[tamano-1-i];
	FinPara
	
	// Imprimimos array1
	Para i = 0 hasta tamano - 1 Hacer
		Escribir array1[i], " " Sin Saltar;
	FinPara
	Escribir "";
	
	// Imprimimos array2
	Para i = 0 hasta tamano - 1 Hacer
		Escribir array2[i], " " Sin Saltar;
	FinPara
	Escribir "";
	
FinAlgoritmo
