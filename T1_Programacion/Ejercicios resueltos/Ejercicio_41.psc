Algoritmo Ejercicio_41
	// Dado un array de N numeros enteros que se generen aleatoriamente,
	// hacer un algoritmo que:
	// a) Obtenga cuantos numeros son mayores que 0.
	// b) Calcule el promedio de los numeros positivos.
	// c) Obtenga el promedio de todos los numeros.

	
	Definir array, tamano, i, positivos, suma_positivos, suma Como Entero;
	Definir hay_otro_igual Como Logico;
	tamano = 10000;
	Dimension array[tamano];
	positivos = 0;
	suma_positivos = 0;
	suma = 0;
	
	// Genera e imprime el array
	Escribir "Array con numeros aleatorios:";
	Para i = 0 hasta tamano - 1 Hacer
		array[i] = Aleatorio(-50,50);
		
		Escribir array[i] Sin Saltar;
		Si i < tamano - 1 Entonces
			Escribir ", " Sin Saltar;
		SiNo
			Escribir "." ;
		FinSi
	FinPara
	
	Para i = 0 hasta tamano - 1 Hacer
		Si array[i] > 0 Entonces
			positivos = positivos + 1;
			suma_positivos = suma_positivos + array[i];
		FinSi
		suma = suma + array[i];
	FinPara
	
	Escribir "a) Hay ", positivos, " numeros positivos.";
	Escribir "b) El promedio de los positivos es ", suma_positivos / positivos;
	Escribir "c) El promedio general es ", suma / tamano;
	
FinAlgoritmo
