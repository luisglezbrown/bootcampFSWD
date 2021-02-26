Algoritmo Ejercicio_48
	// Almacenar una lista de nombres en un array y luego
	// ordenarlos alfabaticamente. Para la entrada de datos se
	// utiliza una estructura Mientras, sin saber a priori la 
	// cantidad de datos que se ingresaran.
	// Pista: Los datos alfanumericos (strings) tambien se
	// pueden comparar con los operadores < y >.
	
	Definir i, j, contador, tamano Como Entero;
	Definir nombre, nombres, aux Como Caracter;
	tamano = 1000;
	Dimension nombres[tamano];
	contador = 0;
	
	Repetir
		Escribir "Introduce un nombre. Dejalo vacio para terminar.";
		Leer nombre;
		Si nombre <> "" Entonces
			nombres[contador] = nombre;
			contador = contador + 1;
		FinSi
	Hasta Que nombre == ""
	
	// Metodo de la burbuja
	Para i = 0 Hasta contador - 2 Hacer
		Para j = 0 Hasta contador - 2  Hacer
			Si nombres[j] > nombres[j+1] Entonces
				aux = nombres[j];
				nombres[j] = nombres[j+1];
				nombres[j+1] = aux;
			FinSi
		FinPara
	Fin Para
	
	// Imprimimos de nuevo para ver los cambios.
	Para i = 0 Hasta contador - 1 Con Paso 1 Hacer
		Escribir nombres[i], " ", Sin Saltar;
	Fin Para
	Escribir "";
		
FinAlgoritmo
