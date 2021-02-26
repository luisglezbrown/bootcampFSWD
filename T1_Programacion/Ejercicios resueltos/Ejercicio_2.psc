Algoritmo Ejercicio_2
	// Algoritmo que lea dos numeros, calculando y escribiendo
	// el valor de su suma, resta, producto y division.
	
	Definir A, B, suma, resta, producto Como Entero;
	// Como division tendra decimales, ya no es de tipo entero
	Definir division Como Real;
	
	Escribir "Introduce dos valores numericos";
	Leer A, B;
	
	// Guardamos las operaciones en diferentes variables
	suma = A + B;
	resta = A - B;
	producto = A * B;
	division = A / B;
	
	// Imprimimos los resultados
	Escribir "La suma de ", A, " y ", B, " es ", suma;
	Escribir "La resta de ", A, " y ", B, " es ", resta;
	Escribir "El producto de ", A, " y ", B, " es ", producto;
	Escribir "La division de ", A, " y ", B, " es ", division;
FinAlgoritmo
