Algoritmo Ejercicio_47
	
	Definir array, tamano, index, i, aux, j Como Entero;
	tamano = 5;
	
	dimension array[tamano];
	
	Para index = 0 hasta tamano - 1
		array[index] = aleatorio(1,100);
		Escribir array[index], ' ' sin saltar;
	FinPara
	escribir ' ';
	
	para j = 0 hasta tamano -2
		para i = 0 hasta tamano - 2
			si array[i] > array[i+1]
				aux = array[i];
				array[i] = array[i+1];
				array[i+1] = aux;
			FinSi
		FinPara		
	FinPara

	
	Para index = 0 hasta tamano - 1
		Escribir array[index], ' ', Sin Saltar;
	FinPara
	escribir ' ';
	
FinAlgoritmo

//Dados un array de 5 elementos con números aleatorios del 1 al 100. Imprimir el estado inicial del
//array, ordenarlo de forma ascendente y volver a imprimir el nuevo estado.
