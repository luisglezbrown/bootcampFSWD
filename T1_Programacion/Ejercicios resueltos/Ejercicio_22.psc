Algoritmo Ejercicio_22
	// Algoritmo que imprima la cuenta y los numeros que
	// son multiplos de 2 o de 3 que hay entre 1 y 100.
	
	Definir contador, numero1, numero2, multiplos1, multiplos2, limite Como Entero;
	numero1 = 2;
	numero2 = 3;
	multiplos1 = 0;
	multiplos2 = 0;
	limite = 100;
	contador = 1;
	Escribir "Se van a imprimir todos los multiplos de ", numero1, " y de ", numero2, " entre 1 y ", limite;
	
	Mientras contador <= limite Hacer
		Si contador mod numero1 == 0 Entonces
			Escribir contador, " es multiplo de ", numero1;
			multiplos1 = multiplos1 + 1;
		FinSi
		
		Si contador mod numero2 == 0 Entonces
			Escribir contador, " es multiplo de ", numero2;
			multiplos2 = multiplos2 + 1;
		FinSi
		
		contador = contador + 1;
	FinMientras
	
	Escribir "Del numero ", numero1, " hay ", multiplos1, " multiplos.";
	Escribir "Del numero ", numero2, " hay ", multiplos2, " multiplos.";
	
FinAlgoritmo
