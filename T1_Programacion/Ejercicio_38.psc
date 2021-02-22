Algoritmo Ejercicio_38
	
	Definir array_1, array_2, length, index Como Entero;
	
	length = 5;
	Dimension array_1[length], array_2[length];
	
	Para index = 0 hasta length - 1
		array_1[index] = index + 1;
	FinPara
	
	Para index = 0 hasta length - 1
		array_2[index] = array_1[length - 1 - index];
	FinPara
	
	Para index = 0 Hasta length - 1
		Escribir array_1[index] Sin Saltar;
	FinPara
	Escribir '';
	
	Para index = 0 Hasta length - 1
		Escribir array_2[index] Sin Saltar;
	FinPara
	Escribir '';
	
FinAlgoritmo

//Dado un array de números de 5 posiciones con los siguiente valores [1, 2, 3, 4, 5], guardar los
//valores de este array en otro array distinto pero con los valores invertidos, es decir, que el segundo
//array deberá tener los valores [5,4,3,2,1].
