Algoritmo Ejercicio_40
	// Generar un array de 20 elementos con numeros aleatorios no repetidos entre si
	
	Definir array, tamano, i, j, num_aleatorio Como Entero;
	Definir hay_otro_igual Como Logico;
	tamano = 20;
	Dimension array[tamano];
	
	// El bucle para (for), ira elemento a elemento rellenando el array
	Para i = 0 hasta tamano - 1 Hacer
		
		// El bucle repetir (do-while), generara elementos aleatorios hasta encontrar
		// un numero que no estuviera previamente en el array. 
		Repetir
			num_aleatorio = Aleatorio(0, 19);
			hay_otro_igual = Falso;
			
			// Este bucle comprobara todos los elementos que lleve rellenos
			// para ver si el numero aleatorio esta presente en una posicion
			// anterior.
			Para j = 0 hasta i - 1 Con Paso 1 Hacer
				
				// Si encuentra un elemento igual, la variable hay_otro_igual sera Verdadero
				// para repetir la generacion de otro numero aleatorio.
				Si num_aleatorio == array[j] Entonces
					hay_otro_igual = Verdadero;
				FinSi
				
			FinPara
			
		Mientras Que hay_otro_igual
		
		// Cuando salga de Repetir, ya habra encontrado un numero nuevo, asi que 
		// lo asignamos al array en la nueva posicion.
		array[i] = num_aleatorio;
	FinPara
	
	// Imprimimos el array
	Escribir "Array relleno sin numeros repetidos: ";
	Para i = 0 hasta tamano - 1 Hacer
		Escribir array[i] Sin Saltar;
		Si i < tamano - 1 Entonces
			Escribir ", " Sin Saltar;
		SiNo
			Escribir "." ;
		FinSi
	FinPara
	
FinAlgoritmo
