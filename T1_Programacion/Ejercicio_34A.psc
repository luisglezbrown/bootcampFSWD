Algoritmo Ejercicio_34
	Definir num_correcto, input como entero;
	
	num_correcto = Aleatorio(1, 10);
	
	Escribir 'Introduce un número del 1 al 10';
	
	Repetir
		
		Leer input;
		Mientras input < 1 o input > 10
			Escribir 'El número debe ser mayor que 0 y menor que 100, vuelve a introducirlo';
			leer input;	
		FinMientras
		
	mientras Que input <> num_correcto;
	
	Escribir '¡Enhorabuena!, lo acertaste :)';
	
FinAlgoritmo


//	a) Generar un número aleatorio (del 1 al 10) que el usuario debe adivinar.
//	b) Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir si el número es mayor
//		o menor que la lectura.