Algoritmo Ejercicio_13
	Definir base, altura, superficie, perimetro Como Real;
	
	Escribir 'Introduce la base';
	Repetir
		Leer base;
		Si base <= 0 Entonces
			Escribir 'La base debe ser mayor que 0, vuelve a introducirla';
		FinSi
	Hasta Que base > 0
	
	Escribir 'Introduce la altura';
	Repetir
		Leer altura;
		Si altura <= 0 Entonces
			Escribir 'La altura debe ser mayor que 0, vuelve a introducirla';
		FinSi
	Hasta Que altura > 0
	
	superficie = base * altura;
	perimetro = 2 * (base + altura);
	
	Escribir 'La superficie es ', superficie, ' y el perimetro es ', perimetro;
	
FinAlgoritmo
