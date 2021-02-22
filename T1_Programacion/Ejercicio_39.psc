Algoritmo Ejercicio_39
	
	Definir array_1, array_2, index, length, input como entero;
	Definir check Como Logico;
	
	Escribir 'Escribe la longitud de los arrays';
	Leer Length; 
	
	Dimension array_1[Length], array_2[Length];
	check = Verdadero;
	
	Para index = 0 hasta Length - 1
		Escribir 'Escribe el valor ', index, ' del primer array';
		leer input;
		array_1[index] = input;
		Escribir 'Escribe el valor ', index, ' del segundo array';
		leer input;
		array_2[index] = input;
		
		Si array_1[index] <> array_2[index]
			check = falso;
		FinSi
	FinPara
	
	
	Escribir '';
	Si check
		Escribir 'Los arrays son iguales';
	Sino 
		Escribir 'Los arrays son distintos';
	FinSi
	
FinAlgoritmo

//Dado dos arrays del mismo tamaño, determinar, elemento a elemento, si ambos son iguales. Con
//que un elemento sea diferente, se considerarán los arrays como diferentes. Escribir al final del
//algoritmo el resultado.
