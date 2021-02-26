Algoritmo Ejercicio_33
	// Crear un array de tamano 10 y que guardara numeros
	// enteros introducidos por teclado. Tras introducirlos todos,
	// imprimira cada indice junto con el valor al que corresponda.
	
	Definir indice, array, tamano Como Entero;
	tamano = 10;
	Dimension array[tamano];
	
	// Bucle encargadoa de ir rellenando el array uno a uno.
	Para indice = 0 Hasta tamano - 1 Hacer
		Escribir "Introduce un numero entero";
		Leer array[indice];
	FinPara
	
	// Bucle encargado de imprimir todo el array.
	Para indice = 0 Hasta tamano - 1 Hacer
		Escribir "indice ", indice, ": ", array[indice];
	FinPara
FinAlgoritmo
