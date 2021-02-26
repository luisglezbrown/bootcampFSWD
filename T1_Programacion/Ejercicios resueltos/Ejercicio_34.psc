Algoritmo Ejercicio_34
	// a) Generar un numero aleatorio (del 1 al 10) que el usuario debe adivinar.
	// b) Aumentar el limite superior a 100 y anadir una ayuda al usuario:
	// escribir si el numero es mayor o menor que la lectura.

	Definir num_aleatorio, intento Como Entero;
	
	// Apartado a)
	num_aleatorio = Aleatorio(1,10);
	Repetir
		Escribir "Introduce un numero entre el 1 y el 10";
		Leer intento;
	Mientras Que intento <> num_aleatorio
	Escribir "Exacto! El numero era ", num_aleatorio;
	
	// Apartado b)
	num_aleatorio = Aleatorio(1,100);
	Escribir "Adivina un numero del 1 al 100";
	Repetir
		Leer intento;
		
		Si intento == num_aleatorio Entonces
			Escribir "Exacto! El numero era ", num_aleatorio;
		SiNo
			Si intento > num_aleatorio Entonces
				Escribir "Te has pasado, el numero es menor.";
			SiNo
				Escribir "Te has quedado corto, el numero es mayor.";
			FinSi
		FinSi
	Mientras Que intento <> num_aleatorio
	
FinAlgoritmo
