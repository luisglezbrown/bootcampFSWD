Algoritmo Ejercicio_17
	// Se pide representar el algoritmo que nos calcule la
	// suma de los N primeros numeros naturales. N se
	// leera por teclado (no tenemos por que llamar a
	// la variable N, podemos llamarla como queramos).

	Definir contador, N Como Entero;
	
	Escribir "Introduce la cantidad de numeros naturales a procesar.";
	Leer N;
	
	contador = 1;
	Mientras contador <= N Hacer
		Escribir "El cuadrado de ", contador, " es ", contador^2;
		contador = contador + 1;
	FinMientras
	
FinAlgoritmo
