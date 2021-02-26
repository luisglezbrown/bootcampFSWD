Algoritmo Ejercicio_21
	// Algoritmo que lea numeros enteros hasta teclear 0,
	// y nos muestre el maximo, el minimo y la media de todos
	// ellos. Piensa como debemos inicializar las variables.

	Definir contador, num, suma, max, min Como Entero;
	
	suma = 0;	
	contador = 0;	
	Repetir
		Escribir "Introduce un numero.";
		Leer num;
		Si num <> 0 Entonces
			Si contador == 0 O num > max Entonces
				max = num;
			FinSi
			
			Si contador == 0 O num < min Entonces
				min = num;
			FinSi
			
			suma = suma + num;
			contador = contador + 1;
		FinSi
	Mientras Que num <> 0
	
	Escribir "El maximo es ", max, ". El minimo es ", min, ". La media es ", suma / contador;
	
FinAlgoritmo
