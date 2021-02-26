Algoritmo Ejercicio_5
	// Construir un diagrama de flujo tal que con un numero entero
	// como entrada, determine e imprima si es positivo, negativo o nulo.
	
	Definir numero1 Como Entero;
	Escribir "Introduce un numero.";
	Leer numero1;
	
	Si numero1 > 0 Entonces
		Escribir "El numero ", numero1, " es positivo.";
	SiNo
		Si numero1 == 0 Entonces
			Escribir "El numero ", numero1, " es nulo.";
		SiNo
			Escribir "El numero ", numero1, " es negativo.";
		FinSi
	FinSi
FinAlgoritmo
