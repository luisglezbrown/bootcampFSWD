Algoritmo Ejercicio_1
	Definir A, B, aux Como Entero;
	
	Escribir "Introduce A y B";
	Leer A, B;
	
	// Para poder intercambiarlas, necesitamos una tercera
	// variable en la que guardar uno de los valores,
	// si no, lo sobreescribiríamos y perderíamos un valor original.
	aux = A;
	A = B;
	B = aux;
	
	Escribir "Los valores intercambiados son ", A, " y ", B;
FinAlgoritmo
