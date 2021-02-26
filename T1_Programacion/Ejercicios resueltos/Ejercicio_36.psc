Algoritmo Ejercicio_36
	// Crear dos arrays de numeros enteros de longitud 10 rellenos con
	// numeros aleatorios del 1 al 20. Imprimir indice y el resultado
	// de la multiplicacion de ambos elementos de los arrays del indice
	// de cada iteracion. Cuidado con los elementos del array sin inicializar.

	Definir array1, array2, i, tamano Como Entero;
	tamano = 10;
	Dimension array1[tamano];
	Dimension array2[tamano];
	
	// Rellenamos los arrays con numeros aleatorios
	Para i = 0 hasta tamano - 1 Hacer
		array1[i] = Aleatorio(1, 20);
		array2[i] = Aleatorio(1, 20);
	FinPara
	
	// Imprimimos la multiplicacion elemento a elemento
	Para i = 0 hasta tamano - 1 Hacer
		Escribir "indice ", i, ": ", array1[i], " * ", array2[i], " = ", array1[i] * array2[i];
	FinPara
	
FinAlgoritmo
