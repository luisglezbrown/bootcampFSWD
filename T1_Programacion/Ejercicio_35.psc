Algoritmo ejercicio_35
	
	Definir array, length, index, sum Como Entero;
	
	sum = 0;
	
	Escribir 'Introduce el tamaño del array';
	leer length;
	
	mientras length <= 0 
		Escribir 'El tamaño debe ser mayor que 0, vuelve a introducirlo';
		leer length;
	FinMientras
	
	Dimension array[length];
	
	Para index = 0 hasta length - 1
		array[index] = Aleatorio(0,9);
		Sum = sum + array[index];
		Escribir 'El valor del array en la posición ', index, ' es ', array[index];
	FinPara
	Escribir '';
	
	
	Escribir 'La suma de los ', length, ' valores es ', sum;	
	
FinAlgoritmo

//Crear un array de números donde le indicaremos el tamaño por teclado. Rellenará cada elemento
//con números aleatorios entre 0 y 9. Posteriormente, mostrará por pantalla el valor de cada posición
//junto con su índice y finalmente, la suma de todos los valores.
