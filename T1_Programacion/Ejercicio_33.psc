Algoritmo Ejercicio_33
	
	Definir array, length, index como entero;
	
	length = 10;
	dimension array[10];
	
	para index = 0 hasta length - 1
		Escribir 'Introduce el valor del componente ', index;
		leer array[index];
	FinPara
	
	Escribir '';
	
	para index = 0 Hasta length - 1
		Escribir 'Indice ', index, ' vale ', array[index];		
	FinPara
	
FinAlgoritmo
