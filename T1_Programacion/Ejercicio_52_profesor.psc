Algoritmo Ejercicio_52
	
	Definir array, target, length, i Como Entero;
	
	length = 10;
	Dimension array[10];
	
	Para i = 0 hasta length - 1
		array[i] = Aleatorio(1,15);
		Escribir array[i], ' ' Sin Saltar;
	FinPara
	Escribir '';
	
	Escribir 'Introduce el n�mero a buscar';
	leer target;
	
	i=0;
	mientras i < length Y array[i] <> target
		i = i + 1;
	FinMientras
	
	si i < length 
		escribir 'La primera coincidencia de ', target, ' es en el indice ', i;
	SiNo
		escribir target, ' no est� presente en el array';
	FinSi
	
FinAlgoritmo

//	Rellenar un array con 10 n�meros aleatorios entre 1 y 15. Posteriormente, buscar un n�mero
//	introducido por teclado y nos debe decir si est� incluido en el array y el �ndice de su primera
//	coincidencia. 
