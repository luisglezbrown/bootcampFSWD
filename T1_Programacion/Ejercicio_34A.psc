Algoritmo Ejercicio_34
	Definir num_correcto, input como entero;
	
	num_correcto = Aleatorio(1, 10);
	
	Escribir 'Introduce un n�mero del 1 al 10';
	
	Repetir
		
		Leer input;
		Mientras input < 1 o input > 10
			Escribir 'El n�mero debe ser mayor que 0 y menor que 100, vuelve a introducirlo';
			leer input;	
		FinMientras
		
	mientras Que input <> num_correcto;
	
	Escribir '�Enhorabuena!, lo acertaste :)';
	
FinAlgoritmo


//	a) Generar un n�mero aleatorio (del 1 al 10) que el usuario debe adivinar.
//	b) Aumentar el l�mite superior a 100 y a�adir una ayuda al usuario: escribir si el n�mero es mayor
//		o menor que la lectura.