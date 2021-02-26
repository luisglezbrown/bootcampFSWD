Algoritmo Ejercicio_3b
	// Similar al ejercicio 3 pero con tres numeros distintos
	
	Definir A, B, C Como Enteros;
	
	Escribir "Introduce tres valores numericos distintos";
	Leer A, B, C;
	
	Si A == B Y A == C Entonces
		Escribir "Los tres son iguales.";
	SiNo
		Si A > B Y A > C Entonces
			Escribir A, " (A) es el mayor.";
		SiNo
			// Ya sabemos que A no es el mayor, nos quedara
			// comparar los dos numeros restantes
			Si B > C Entonces
				Escribir B, " (B) es el mayor.";
			SiNo
				Escribir C, " (C) es el mayor.";				
			FinSi
		FinSi
	FinSi
FinAlgoritmo
