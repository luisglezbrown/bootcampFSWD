Funcion print_array(array, tamano)
	definir index como entero;
	
	para index = 0 hasta tamano -1
		escribir array[index], ' ' Sin Saltar;
	FinPara
	Escribir '';
	
Fin funcion
	
Algoritmo Ejemplo_imprimir_Array
	
	Definir index, array, tamano como entero;
	tamano = 10;
	
	Dimension array[tamano];
	
	para index = 0 hasta tamano - 1
		array[index] = Aleatorio(1,1000);
	FinPara
	
	
	print_array(array,tamano);
	
FinAlgoritmo
