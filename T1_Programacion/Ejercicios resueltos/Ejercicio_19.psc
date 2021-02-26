Algoritmo Ejercicio_19
	// Dada una secuencia de numeros leudos por teclado, que
	// acabe con un -1, por ejemplo: 5,3,0,2,4,.., -1
	// Realizar el algoritmo que calcule la media aritmetica.
	// Suponemos que el usuario no insertara numero negativos.

	Definir contador, num, suma Como Entero;
	
	contador = 0;	
	suma = 0;	
	Repetir
		Escribir "Introduce un numero positivo o -1 para acabar.";
		Leer num;
		Si num > 0 Entonces
			suma = suma + num;
			contador = contador + 1;
		FinSi
	Mientras Que num <> -1
	
	Escribir "La media es ", suma / contador;
	
FinAlgoritmo
