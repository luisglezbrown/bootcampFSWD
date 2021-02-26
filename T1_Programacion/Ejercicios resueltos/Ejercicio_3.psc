Algoritmo Ejercicio_3
	// Algoritmo que lea dos numeros y nos diga cual de ellos es mayor 
	// o si son iguales (recuerda usar la estructura condicional SI).
	
	Definir A, B Como Enteros;
	
	Escribir "Introduce dos valores numericos";
	Leer A, B;
	
	Si A == B Entonces
		Escribir A, " (A) es igual a ", B, " (B).";
	SiNo
		Si A > B Entonces
			Escribir A, " (A) es el mayor.";
		SiNo
			Escribir B, " (B) es el mayor.";
		FinSi
	FinSi
FinAlgoritmo
