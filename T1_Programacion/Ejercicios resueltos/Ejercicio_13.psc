Algoritmo Ejercicio_13
	
	// Construir un diagrama de flujo tal que dado los datos de
	// la base y la altura de un rectangulo calcule el perimetro
	// y la superficie del mismo.
	
	// Superficie = base*altura
	// Perimetro = 2*(base + altura)

	
	Definir base, altura, superficie, perimetro Como entero;
	Escribir "Introduce la base y la altura del rectangulo.";
	Leer base, altura;
	
	superficie = base * altura;
	perimetro = 2 * (base + altura);
	
	Escribir "La superficie de tu rectangulo es ", superficie;
	Escribir "El perimetro de tu rectangulo es ", perimetro;
	
FinAlgoritmo
