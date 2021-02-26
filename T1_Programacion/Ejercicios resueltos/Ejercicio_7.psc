Algoritmo Ejercicio_7
	// Construir un diagrama de flujo que dado el coste de un
	// articulo vendido y la cantidad de dinero entregado, calcule
	// e imprima el cambio que se debe entregar al cliente.
	
	Definir precio, cantidad_entregada Como Entero;
	precio = 120;
	Escribir "El precio del articulo es ", precio, " euros";
	
	Escribir "Introduce la cantidad a entregar.";
	Leer cantidad_entregada;
	
	Si cantidad_entregada < precio  Entonces
		Escribir "No has entregado suficiente dinero.";
	SiNo
		Escribir "El cambio es ", cantidad_entregada - precio, " euros.";
	FinSi
FinAlgoritmo
