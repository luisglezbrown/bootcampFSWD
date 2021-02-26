Algoritmo Ejercicio_39
	// Dado dos arrays del mismo tamano, determinar, elemento a elemento, si ambos son
	// iguales. Con que un elemento sea diferente, se consideraran los arrays como
	// diferentes. Escribir al final del algoritmo el resultado.

	Definir array1, array2, tamano, i Como Entero;
	Definir son_iguales Como Logico;
	tamano = 5;
	Dimension array1[tamano], array2[tamano];
	
	array1[0] = 1;
	array1[1] = 2;
	array1[2] = 3;
	array1[3] = 4;
	array1[4] = 5;
	
	array2[0] = 1;
	array2[1] = 2;
	array2[2] = 3;
	array2[3] = 4;
	array2[4] = 5;
		
	// Imprimimos array1
	Para i = 0 hasta tamano - 1 Hacer
		Escribir array1[i], " " Sin Saltar;
	FinPara
	Escribir "";
	
	// Imprimimos array2
	Para i = 0 hasta tamano - 1 Hacer
		Escribir array2[i], " " Sin Saltar;
	FinPara
	Escribir "";
	
	// Ser�n iguales hasta que se demuestre lo contrario.
	son_iguales = Verdadero;
	
	// Comprobamos si son iguales elemento a elemento.
	// Con que haya uno diferente, marcaremos nuestra
	// variable como falso.
	Para i = 0 hasta tamano - 1 Hacer
		Si array1[i] <> array2[i] Entonces
			son_iguales = Falso;
		FinSi
	FinPara
	
	Si son_iguales Entonces
		Escribir "Los arrays son iguales.";
	SiNo
		Escribir "Los arrays son diferentes.";
	FinSi
	
FinAlgoritmo
