Algoritmo nested_for_loop
	Definir contador_uno, contador_dos Como Entero;
	
	Para contador_uno = 1 Hasta 5 Con Paso 1 Hacer
		// Ejecuta 5 veces bloque hasta línea 14
		Escribir "Iteracion ", contador_uno, " del bucle externo.";
		
		Para contador_dos = 1 Hasta 2 Con Paso 1 Hacer
			// Ejecuta 2 veces la siguiente línea
			Escribir "contador_uno: ", contador_uno, "; contador_dos: ", contador_dos;
		FinPara
		
		Escribir "";
	FinPara
	
FinAlgoritmo