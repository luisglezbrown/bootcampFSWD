Algoritmo Ejercicio_13_con_segun
	Definir base, altura, superficie, perimetro como real;
	Definir iteracion Como Entero
	
	Escribir 'Introduzca la iteración de la que desea conocer la superficie y el perímetro';
	Leer iteracion
	
	Segun iteracion Hacer
		1:
			base = 8.5;
			altura = 6.2;
		2:
			base = 7.9;
			altura = 15.3;
		3:
			base = 15.18;
			altura = 22;
		4: 
			base = 39.4;
			altura = 68.5;
			
		De Otro Modo:
			Escribir 'No existen datos para esa iteración, debe ser entre 1 y 4';
	Fin Segun
	
	superficie = base * altura;
	perimetro = 2 * (base + altura);
	
	Si iteracion >= 1 Y iteracion <= 4 entonces
		Escribir 'La superficie es ', superficie, ' y el perímetro es ', perimetro;
	FinSi
	
FinAlgoritmo
