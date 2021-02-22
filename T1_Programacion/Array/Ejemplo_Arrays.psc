Algoritmo Arrays
	
	Definir my_array, length, index Como Entero; // Defino mi array con el tipo de valores que contendrá
	
	length = 5;
	Dimension my_array[length]; // Defino el tamaño del array (no rígido), no obligatorio en todos los lenguajes.
	
	my_array[4] = 50; // Aquí doy valor a la 4ª posición.
	Escribir my_array[4];
	
	My_array[0] = 50;
	My_array[1] = 35;
	My_array[2] = 19;
	My_array[3] = 78;
	My_array[4] = 9;
	
	Para index = 0 hasta length - 1 // Para imprimir el array
		Escribir My_array[index], ' ' Sin Saltar;
	FinPara
	Escribir '';
	
	
	
	// Voy a sobreescribir todos los elementos del array
	
	Para index = 0 hasta length - 1 // Para inicializar todos los elementos en 5
		My_array[index] = 5;
	FinPara
	Escribir '';
	
	Para index = 0 hasta length - 1 // Para imprimir el array
		Escribir My_array[index], ' ' Sin Saltar;
	FinPara
	Escribir '';
	
	
	
	// Voy a darle a cada elemento el valor del índice;
	
	Para index = 0 hasta length - 1 // Para inicializar todos los elementos en 5
		My_array[index] = index;
	FinPara
	Escribir '';
	
	Para index = 0 hasta length - 1 // Para imprimir el array
		Escribir My_array[index], ' ' Sin Saltar;
	FinPara
	Escribir '';
	
	
FinAlgoritmo
