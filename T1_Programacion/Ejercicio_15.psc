Algoritmo Ejercicio_15
	Definir NumA como entero;
	
	Escribir 'Introduce el n�mero a comprobar';
	
	Repetir
		Leer NumA;
		si NumA == 0 Entonces
			Escribir 'El n�mero debe ser distinto de 0. Vuelve a introducirlo';
		FinSi
	Hasta Que NumA <> 0
	
	Si NumA mod 2 == 0 Entonces
		Escribir 'El n�mero es par';
	SiNo
		Escribir 'El n�mero es impar';
	FinSi
	
FinAlgoritmo

// Dado un n�mero entero A, hacer un diagrama de flujo que determine si es par, impar o nulo.
// Pista: para determinar el resto de una divisi�n, se usa la operaci�n mod.
