Algoritmo Ejercicio_36
	
	Definir array_1, array_2, length, index Como Entero;
	
	length = 10;
	Dimensi�n array_1[length], array_2[length];
	
	Para index = 0 hasta length - 1
		array_1[index] = Aleatorio(1, 20);
		array_2[index] = Aleatorio(1, 20);
		Escribir 'El resultado de multiplicar el indice ', index, ' de ambos arrays (', array_1[index], ' x ', array_2[index], ') es: ', array_1[index] * array_2[index];
	FinPara
	
FinAlgoritmo

//Crear dos arrays de n�meros enteros de longitud 10 rellenos con n�meros aleatorios del 1 al 20.
//Imprimir �ndice y el resultado de la multiplicaci�n de ambos elementos de los arrays del �ndice de
//cada iteraci�n. Cuidado con los elementos del array sin inicializar.