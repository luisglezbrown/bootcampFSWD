Algoritmo Ejercicio_30
	// Escribir un algoritmo que muestre por pantalla un triangulo
	// como los siguientes hasta un numero de filas introducido por teclado.
	// a) para filas = 4		b)				c)
	// 1						1				1
	// 12					22				2 3
	// 123					333				4 5 6
	// 1234					4444				7 8 9 10

	Definir filas, columnas, contador, num Como Entero;
	
	Escribir "Introduzca el numero de filas";
	Leer num;
	
	// Apartado A --------------------------------------------------------------------------
	
	Escribir "Apartado a), para filas = ", num;
	// Bucle encargado de dibujar un numero num de filas
	Para filas = 1 hasta num Hacer
		
		// Encargado de dibujar tantas columnas como filas llevemos 
		// (1 fila, 1 numero escrito) ademas, los numeros escritos
		// corresponderan al de la columna en la que esta
		Para columnas = 1 hasta filas Hacer
			Escribir columnas Sin Saltar;
		FinPara
		
		// Escribimos una nueva linea tras tener una completa.
		Escribir "";
	FinPara
	
	// Apartado B --------------------------------------------------------------------------
	
	Escribir "";
	Escribir "Apartado b), para filas = ", num;
	
	// Bucle encargado de dibujar un numero num de filas
	Para filas = 1 hasta num Hacer
		
		// Encargado de dibujar tantas columnas como filas llevemos 
		// (1 fila, 1 numero escrito) ahora los numeros corresponderan
		// a la fila en la que estan.
		Para columnas = 1 hasta filas Hacer
			Escribir filas Sin Saltar;
		FinPara
		
		Escribir "";
	FinPara
	
	// Apartado C --------------------------------------------------------------------------
	
	Escribir "";
	Escribir "Apartado c), para filas = ", num;
	
	contador = 1;
	// Bucle encargado de dibujar un numero num de filas
	Para filas = 1 hasta num Hacer
		
		// Encargado de dibujar tantas columnas como filas llevemos 
		// (1 fila, 1 numero escrito) ahora los numeros iran incrementandose
		// independientemente de la fila o columna en la que estan. Para ello,
		// necesitamos un contador independiente.
		Para columnas = 1 hasta filas Hacer
			Escribir contador, " " Sin Saltar;
			contador = contador + 1;
		FinPara
		
		Escribir "";
	FinPara
	
FinAlgoritmo
