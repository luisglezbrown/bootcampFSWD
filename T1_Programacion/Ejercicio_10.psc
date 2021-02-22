Algoritmo Ejercicio_10
	Definir categoria como entero;
	Definir sueldo, cat1, cat2, cat3, cat4 Como Real;
	
	cat1 = 1.15;
	cat2 = 1.10;
	cat3 = 1.06;
	cat4 = 1.03;
	
	Escribir 'Introduzca la categoría';
	Leer categoria;
	
	Si categoria > 4 o categoria <= 0 Entonces
		Escribir 'La categoría deber ser entre 1 y 4';
	SiNo
		Escribir 'Introduzca el salario';
		Leer sueldo;
		Si categoria == 1 Entonces
			Escribir 'La categoría es ', categoria, ' y el nuevo salario es ', sueldo * cat1;
		SiNo
			Si categoria == 2 Entonces
				Escribir 'La categoría es ', categoria, ' y el nuevo salario es ', sueldo * cat2;
			SiNo
				Si categoria == 3 Entonces
					Escribir 'La categoría es ', categoria, ' y el nuevo salario es ', sueldo * cat3;
				SiNo
					Escribir 'La categoría es ', categoria, ' y el nuevo salario es ', sueldo * cat4;
				FinSi
			FinSi
		FinSi
		
	FinSi
	
FinAlgoritmo
