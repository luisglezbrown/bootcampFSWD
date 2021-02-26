Algoritmo Ejercicio_43
	// Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare.
	// Tendra la estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39
	// Nota: deberas utilizar >Esperar y >Limpiar pantalla.
	
	Definir horas, mins, segs  Como Entero;
	Definir horas_cero, mins_cero, segs_cero Como Caracter;
	horas = 23;
	mins = 59;
	segs = 59;
	
	// Bucle infinito
	Mientras Verdadero
		// Comprobamos los limites de los segundos, minutos y horas.
		Si segs > 59 Entonces
			mins = mins + 1;
			segs = 0;
		FinSi
		Si mins > 59 Entonces
			horas = horas + 1;
			mins = 0;
		FinSi
		Si horas > 23 Entonces
			horas = 0;
		FinSi
		
		// Comprobamos si tendran 1 o 2 digitos para rellenar con 0s.
		Si segs < 10 Entonces
			segs_cero = "0";
		SiNo
			segs_cero = "";
		FinSi
		Si mins < 10 Entonces
			mins_cero = "0";
		SiNo
			mins_cero = "";
		FinSi
		Si horas < 10 Entonces
			horas_cero = "0";
		SiNo
			horas_cero = "";
		FinSi
		
		// Imprimimos reloj digital.
		Limpiar Pantalla;
		Escribir horas_cero, horas, ":", mins_cero, mins, ":", segs_cero, segs;
		Esperar 1 Segundos;
		
		segs = segs + 1;
		
	FinMientras
	
FinAlgoritmo
