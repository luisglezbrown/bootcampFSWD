Algoritmo ejercicio_35
	
	Definir array, length, index, sum Como Entero;
	
	sum = 0;
	
	Escribir 'Introduce el tama�o del array';
	leer length;
	
	mientras length <= 0 
		Escribir 'El tama�o debe ser mayor que 0, vuelve a introducirlo';
		leer length;
	FinMientras
	
	Dimension array[length];
	
	Para index = 0 hasta length - 1
		array[index] = Aleatorio(0,9);
		Sum = sum + array[index];
		Escribir 'El valor del array en la posici�n ', index, ' es ', array[index];
	FinPara
	Escribir '';
	
	
	Escribir 'La suma de los ', length, ' valores es ', sum;	
	
FinAlgoritmo

//Crear un array de n�meros donde le indicaremos el tama�o por teclado. Rellenar� cada elemento
//con n�meros aleatorios entre 0 y 9. Posteriormente, mostrar� por pantalla el valor de cada posici�n
//junto con su �ndice y finalmente, la suma de todos los valores.
