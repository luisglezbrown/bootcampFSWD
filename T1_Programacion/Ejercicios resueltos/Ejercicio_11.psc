Algoritmo Ejercicio_11
	// En una tiendan efectuan un descuento a los clientes dependiendo de
	// la cantidad de la compra. El descuento se basa en:
	// Si el monto es menor que 500 E. No hay descuento
	// Si el monto esta comprendido entre 500 E y 1.000 E inclusive. 5 por ciento de descuento
	// Si el monto esta entre 1.000 E y 7.000 E inclusive. 10 por ciento de descuento
	// Si el monto esta entre 7.000 E y 15.000 E inclusive. 20 por ciento de descuento
	// Mas de 15.000 E. 25 por ciento de descuento
	// Imprimir Escribir el precio final.
	
	Definir monto Como Entero;
	Escribir "Introduce el total de tu compra";
	Leer monto;
	
	Si monto < 500 Entonces
		Escribir "No se le ha podido aplicar un descuento.";
	SiNo
		// No hace falta comprobar si es mayor o igual que 500, porque lo contrario
		// esta descartado gracias a la condicion superior
		Si monto <= 1000 Entonces
			Escribir "Tiene un 5% de descuento. El total a pagar sera: ", monto * 0.95;
		SiNo
			Si monto <= 7000 Entonces
				Escribir "Tiene un 10% de descuento. El total a pagar sera: ", monto * 0.90;
			SiNo
				Si monto <= 15000 Entonces
					Escribir "Tiene un 20% de descuento. El total a pagar sera: ", monto * 0.20;
				SiNo
					// No comprobamos nada porque es la unica opcion que queda.	
					Escribir "Tiene un 25% de descuento. El total a pagar sera: ", monto * 0.25;
				FinSi
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
