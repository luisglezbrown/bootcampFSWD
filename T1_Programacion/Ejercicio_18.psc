Algoritmo Ejercicio_18
	
	Definir contador, N, numero_inicial, suma como entero;
	
	Escribir 'Escribir la cantidad de número pares a procesar';
	leer N;
	
	numero_inicial = N;
	contador = 0;
	suma = 0;
	
	
	//Si el numero inicial es impar, lo convierto al siguiente par.
	Si numero_inicial mod 2 != 0 entonces 
		numero_inicial = numero_inicial + 1;
	FinSi
	
	Escribir 'La suma de ' Sin saltar;
	
	Mientras contador < N Hacer
		Escribir numero_inicial, ' ' sin saltar;
		
		suma = numero_inicial + suma;
		
		//Como nos aseguramos que el primero fuera par 
		//ahora solo tengo que saltar de 2 en 2 N veces 
		numero_inicial = numero_inicial + 2;
		
		contador = contador + 1;
	Fin Mientras
	
	Escribir 'es: ', suma;
	
FinAlgoritmo