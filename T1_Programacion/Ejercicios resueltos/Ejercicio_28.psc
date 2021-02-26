Algoritmo Ejercicio_28
	// Desarrollar un timer o temporizador. La cantidad de segundos con la que se
	// quiere hacer la cuenta atras se introducira por teclado. Cuando llegue al
	// final, se imprimira "Ring!! y el programa acabara .
	// Para parar el flujo del programa en un punto determinado, en PSeInt,
	// se usa Esperar. Por ejemplo, la instruccion Esperar 5 Segundos; esperar
	// en esa linea 5 segundos y luego seguira.
	// Para limpiar el output o salida por pantalla, se usa: Limpiar Pantalla;

	Definir num, contador Como Entero;
	
	Escribir "Introduzca numero de segundos del temporizador.";
	Leer num;
	
	// Bucle encargado de hacer la cuenta atras con paso -1
	Para contador = num hasta 0 Con Paso -1 Hacer
		Limpiar Pantalla;
		Escribir contador;
		Esperar 1 segundos;
	FinPara	
	
	Limpiar Pantalla;
	Escribir "Ring!!";
	
FinAlgoritmo
