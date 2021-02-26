Algoritmo Ejercicio_18
	// Se pide representar el algoritmo que nos calcule la suma de
	// los N primeros numeros pares a partir de N. Es decir,
	// si insertamos un 5, nos haga la suma de 6+8+10+12+14.

	Definir numero_inicial, contador, N, suma Como Entero;
	
	Escribir "Introduce la cantidad de numeros naturales pares a procesar.";
	Leer N;
	
	suma = 0;
	contador = 0;
	numero_inicial = N;
	// Si el numero inicial es impar, lo convierto al siguiente par.
	Si numero_inicial mod 2 != 0 Entonces
		numero_inicial = numero_inicial + 1;
	FinSi
	
	Escribir "La suma de " Sin Saltar;
	
	Mientras contador < N Hacer
		suma = suma + numero_inicial;
		
		// Escribo en la misma linea todos los n�umeros
		Escribir numero_inicial, " ", Sin Saltar;
		
		// Como ya me asegure de que el inicial fuera Para 
		// ahora solo tengo que saltar de 2 en 2 N veces.
		numero_inicial = numero_inicial + 2;
		contador = contador + 1;
	FinMientras
	
	Escribir "es: ", suma;
	
FinAlgoritmo
