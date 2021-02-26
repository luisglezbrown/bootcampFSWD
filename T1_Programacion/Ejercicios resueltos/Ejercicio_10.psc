Algoritmo Ejercicio_10
	// Construir un diagrama de flujo que dado la categoria
	// y sueldo de un trabajador calcule el aumento de sueldo
	// correspondiente teniendo en cuenta la siguiente tabla.
	// Imprimir la categoria del trabajador y su nuevo sueldo.
	
	Definir sueldo, categoria Como Entero;
	
	Escribir "Introduce tu sueldo.";
	Leer sueldo;
	
	Escribir "Introduce tu categoria.";
	Leer categoria;
	
	Segun categoria Hacer
		1:
			Escribir "Su nuevo sueldo es ", sueldo * 1.15;
		2:
			Escribir "Su nuevo sueldo es ", sueldo * 1.10;
		3:
			Escribir "Su nuevo sueldo es ", sueldo * 1.06;
		4:
			Escribir "Su nuevo sueldo es ", sueldo * 1.03;
		De Otro Modo:
			Escribir "Ha introducido una categoria incorrecta.";
	FinSegun
	
FinAlgoritmo
