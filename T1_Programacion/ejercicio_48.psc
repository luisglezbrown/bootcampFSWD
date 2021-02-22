Algoritmo Ejercicio_48
	Definir array, nombre, aux Como Caracter;
	Definir contador, tamano, i, j Como Entero;
	
	tamano = 1000;
	Dimension array[tamano];
	
	
	Escribir 'Introduce el primer nombre o fin para acabar';
	Leer nombre;
	
	contador = 0;
	Mientras nombre <> 'fin'
		
		array[contador] = nombre;
		contador = contador + 1;
		
		Escribir 'Introduce otro nombre o fin para acabar';
		Leer nombre;		
	FinMientras
	
	si contador == 0
		escribir 'No ha introducido ningún nombre :(';
	SiNo
		Para i = 0 hasta contador
			para j = 0 hasta contador - 2
				si array[j] > array[j + 1]
					aux = array [j];
					array[j] = array[j+1];
					array[j+1] = aux;
				FinSi
				
			FinPara
		FinPara
		
		
		para i = 0 hasta contador -1
			Escribir array[i], ' ' sin saltar;
		FinPara
		Escribir '';
	FinSi

	
FinAlgoritmo
//	Almacenar una lista de nombres en un array y luego ordenarlos alfabéticamente. Para la entrada de
//	datos se utiliza una estructura Mientras, sin saber a priori la cantidad de datos que se ingresarán.
//	Pista: Los datos alfanuméricos (strings) también se pueden comparar con los operadores < y >.
