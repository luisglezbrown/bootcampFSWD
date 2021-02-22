Algoritmo Ejercicio_10_con_segun
	Definir categoria como entero;
	Definir sueldo, cat1, cat2, cat3, cat4 Como Real;
	
	cat1 = 1.15;
	cat2 = 1.10;
	cat3 = 1.06;
	cat4 = 1.03;
	
	Escribir 'Introduzca la categoría';
	Leer categoria;
	
	Si categoria <= 0 o categoria > 4 Entonces
		Escribir 'La categoría deber ser entre 1 y 4';
	SiNo
		Escribir 'Introduzca el salario';
		Leer sueldo;
		Segun categoria Hacer
			1:
				Escribir 'La categoría es ', categoria, ' y el nuevo salario es ', sueldo * cat1;
			2:
				Escribir 'La categoría es ', categoria, ' y el nuevo salario es ', sueldo * cat2;
			3:
				Escribir 'La categoría es ', categoria, ' y el nuevo salario es ', sueldo * cat3;
			De Otro Modo:
				Escribir 'La categoría es ', categoria, ' y el nuevo salario es ', sueldo * cat4;
		Fin Segun
		
	FinSi
	
FinAlgoritmo