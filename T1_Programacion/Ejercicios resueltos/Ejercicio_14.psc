Algoritmo Ejercicio_14
	// Construir un diagrama de flujo que resuelva el problema
	// que tienen unos surtidores de gasolina, que registran
	// lo que surten en galones, pero el precio de la gasolina
	// se fija en litros. El diagrama de flujo debe calcular
	// e imprimir el precio que hay que cobrarle al cliente. 
	
	// Precio gasolina = 1.333euros / litro
	// 1 galon = 3,78541 litros

	
	Definir cantidad_galones, cantidad_litros, precio_por_litro, litros_por_galon, precio_final Como real;
	Escribir "Introduce el numero de galones surtidos.";
	Leer cantidad_galones;
	
	litros_por_galon = 3.78541;
	precio_por_litro = 1.333;
	
	cantidad_litros = cantidad_galones * litros_por_galon;
	precio_final = precio_por_litro * cantidad_litros;
	
	Escribir cantidad_galones, " galones son ", cantidad_litros, " litros y el precio es " precio_final, " euros.";
	
FinAlgoritmo
