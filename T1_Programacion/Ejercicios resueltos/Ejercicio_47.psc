Algoritmo Ejercicio_47
	// Dados un array de 5 elementos con numeros aleatorios del 1 al 100.
	// Imprimir el estado inicial del array, ordenarlo de forma
	// ascendente y volver a imprimir el nuevo estado.
	
	Definir array, i, j, tamano, aux Como Entero;
	tamano = 5;
	Dimension array[tamano];
	
	// Rellenamos e imprimimos el array.
	Para i = 0 hasta tamano - 1 Hacer
		array[i] = Aleatorio(1, 100);
		Escribir array[i], " " Sin Saltar;
	FinPara
	Escribir "";
	
	
	// Repite el algoritmo de dentro para todos los numeros menos 1,
	// ya que el ultimo no hace falta comprobarlo porque ya estara en su sitio.
	Para i = 0 Hasta tamano - 2 Hacer
		
		// Mueve el numero mas grande a la derecha del todo.
		Para j = 0 Hasta tamano - 2  Hacer
			
			// Si el primer elemento es mayor que el segundo, se intercambian.
			Si array[j] > array[j+1] Entonces
				aux = array[j];
				array[j] = array[j+1];
				array[j+1] = aux;
			FinSi
		FinPara
	Fin Para
	
	// Imprimimos de nuevo para ver los cambios.
	Para i = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir array[i], " ", Sin Saltar;
	Fin Para
	Escribir "";
		
FinAlgoritmo
