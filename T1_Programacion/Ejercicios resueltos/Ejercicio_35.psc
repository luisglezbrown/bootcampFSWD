Algoritmo Ejercicio_35
	// Crear un array de numeros donde le indicaremos el tamano por teclado.
	// Rellenara cada elemento con numeros aleatorios entre 0 y 9.
	// Posteriormente, mostrara por pantalla el valor de cada posicion
	// junto con su indice y finalmente, la suma de todos los valores.

	Definir array, i, tamano, suma Como Entero;
	
	Escribir "Introduce el tamano del array";
	Leer tamano;
	Dimension array[tamano];
	
	suma = 0;
	
	// Rellenamos el array con numeros aleatorios
	Para i = 0 hasta tamano - 1 Hacer
		array[i] = Aleatorio(0,9);
	FinPara
	
	// Imprimimos elemento a elemento junto con su �ndice
	// y vamos acumulando la suma
	Para i = 0 hasta tamano - 1 Hacer
		Escribir "array[", i, "]: ", array[i];
		suma = suma + array[i];
	FinPara
	
	Escribir "La suma de los elementos es: ", suma;
	
FinAlgoritmo
