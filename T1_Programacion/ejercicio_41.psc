Algoritmo Ejercicio_41
	
	Definir array, length, index como entero;
	
	Escribir 'Escribe la longitud de los arrays';
	Leer Length; 
	
	Dimension array[Length];
	
	Escribir 'El array generado es: 'Sin Saltar;
	Para index = 0 hasta length - 1
		array[index] = Aleatorio(-15, 15);
		Escribir array[index], ' ' Sin Saltar;
	FinPara
	
Escribir '';
Escribir '----- Apartado A-----';
	
	Definir no0_counter Como Entero;
	
	no0_counter = 0;
	Para index = 0 hasta length -1
		Si array[index] > 0 Entonces
			no0_counter = no0_counter + 1;
		FinSi
		
	FinPara
	
	Escribir 'En el array hay ', no0_counter, ' números mayores de 0';
	
Escribir '';
Escribir '----- Apartado B-----';
	
	Definir sum Como Entero;
	Sum = 0;
	
	Para index = 0 hasta length -1
		Si array[index] > 0 Entonces
			sum = sum + array[index];
		FinSi
		
	FinPara
	
	Escribir 'El promedio de los números positivos es ', sum/no0_counter;
	
	
Escribir '';
Escribir '----- Apartado C-----';
	
	Sum = 0;
	
	Para index = 0 hasta length -1		
		sum = sum + array[index];		
	FinPara
	
	Escribir 'El promedio de los números positivos es ', sum/length;

	
FinAlgoritmo

//	Dado un array de N números enteros que se generen aleatoriamente, hacer un algoritmo que:
//		a) Obtenga cuántos números son mayores que 0.
//		b) Calcule el promedio de los números positivos.
//		c) Obtenga el promedio de todos los números.
