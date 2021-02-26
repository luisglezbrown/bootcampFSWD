Algoritmo Ejercicio_6
	// Dado un numero entero A, hacer un diagrama de flujo
	// que determine si es par, impar o nulo.
	// Pista: para determinar el resto de una division,
	// se usa la operacion mod.
	
	Definir numero1 Como Entero;
	Escribir "Introduce un numero.";
	Leer numero1;
	
	Si numero1 == 0 Entonces
		Escribir "El numero ", numero1, " es nulo.";
	SiNo
		// Si el resto de la division del numero
		// entre 2, es cero, entonces es par.
		Si numero1 mod 2 == 0 Entonces
			Escribir "El numero ", numero1, " es par.";
		SiNo
			Escribir "El numero ", numero1, " es impar.";
		FinSi
	FinSi
FinAlgoritmo
