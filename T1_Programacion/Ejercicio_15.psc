Algoritmo Ejercicio_15
	Definir NumA como entero;
	
	Escribir 'Introduce el número a comprobar';
	
	Repetir
		Leer NumA;
		si NumA == 0 Entonces
			Escribir 'El número debe ser distinto de 0. Vuelve a introducirlo';
		FinSi
	Hasta Que NumA <> 0
	
	Si NumA mod 2 == 0 Entonces
		Escribir 'El número es par';
	SiNo
		Escribir 'El número es impar';
	FinSi
	
FinAlgoritmo

// Dado un número entero A, hacer un diagrama de flujo que determine si es par, impar o nulo.
// Pista: para determinar el resto de una división, se usa la operación mod.
