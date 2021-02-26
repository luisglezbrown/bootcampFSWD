Algoritmo Ejercicio_25
	// Algoritmo que lea un numero entero (lado) y a partir de
	// el, cree un cuadrado de asteriscos con ese tamano. Los
	// asteriscos solo se veran en el borde del cuadrado, no en el interior.
	// Ejemplo, para lado = 4 escribiria:
	// ****
	// *  * 
	// *  * 
	// ****
	// Recuerda la estructura repetitiva Para (For).

	
	Definir lado, fila, columna Como Entero;
	
	Escribir "Introduzca el numero de lados";
	Leer lado;
	
	// Bucle encargado de dibujar N filas
	Para fila = 1 hasta lado Hacer
		
		// Bucle encargado de dibujar N columnas
		Para columna = 1 hasta lado Hacer
			
			// La columna sera un espacio o un asterisco dependiendo de
			// en que fila / columna se encuentre.
			Si fila == 1 O fila == lado O columna == 1 O columna == lado Entonces
				Escribir "*" Sin Saltar;
			SiNo
				Escribir " " Sin Saltar;
			FinSi
		FinPara
		
		// Entre filas terminadas escribe una nueva linea.
		Escribir "";
	FinPara
	
FinAlgoritmo
