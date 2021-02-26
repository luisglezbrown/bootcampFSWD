Algoritmo Ejercicio_31
	// Algoritmo que lea un numero entero (altura) y a partir de el, cree 
	// una escalera invertida de asteriscos con esa altura.
	// Debera quedar asi, si ponemos una altura de 5.
	// *****
	//  ****
	//   ***
	//    **
	//     *

	Definir filas, columnas, espacios, asteriscos, num Como Entero;
	
	Escribir "Introduzca el numero de filas";
	Leer num;
	
	espacios = 0;
	asteriscos = num;
	
	Escribir "Solucion Nº 1";
	
	// Bucle encargado de dibujar un numero num de filas
	Para filas = 1 hasta num Hacer
		
		// Bucle encargado de dibujar los espacios
		// empezara en cero e ira incrementando
		Para columnas = 1 hasta espacios con paso 1 Hacer
			Escribir " " Sin Saltar;
		FinPara
		
		// Bucle encargado de dibujar los asteriscos
		// empezara en num e ira decrementando
		Para columnas = 1 hasta asteriscos con paso 1 Hacer
			Escribir "*" Sin Saltar;
		FinPara
		
		espacios = espacios + 1;
		asteriscos = asteriscos - 1;
		
		// Escribimos una nueva linea tras tener una completa.
		Escribir "";
	FinPara
	
	Escribir "";
	Escribir "Solucion Nº 2";
	// Bucle encargado de dibujar un numero num de filas
	Para filas = 1 hasta num Hacer
		
		// Bucle encargado de dibujar un numero num de columnas
		Para columnas = 1 hasta num Hacer
			
			// Aqui decidire si dibuja espacios o asteriscos.
			// Como filas va incrementandose en cada iteracion
			// del bucle externo, esta condicion se cumplira 
			// una vez mas cada iteracion de filas. Aumentando
			// la cantidad de espacios y disminuyendo el de asteriscos.
			Si columnas < filas Entonces
				Escribir " " Sin Saltar;
			SiNo
				Escribir "*" Sin Saltar;
			FinSi
		FinPara
		
		// Escribimos una nueva linea tras tener una completa.
		Escribir "";
	FinPara
	
FinAlgoritmo
