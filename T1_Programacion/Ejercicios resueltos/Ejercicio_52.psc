Algoritmo Ejercicio_52
	// Rellenar un array con 10 numeros aleatorios entre 1 y 15.
	// Posteriormente, buscar un numero introducido por teclado y
	// nos debe decir si esta incluido en el array y el indice de su
	// primera coincidencia. 

	Definir array, tamano, N, i Como Entero;
	tamano = 10;
	Dimension array[10];
	
	// Generamos aleatorios y rellenamos e imprimimos el array.
	Para i = 0 hasta tamano - 1 Hacer
		array[i] = Aleatorio(1,15);
		Escribir array[i], " " Sin Saltar;
	FinPara
	
	Escribir "- Introduce un numero para buscarlo en el array.";
	Leer N;
	
	// En lugar de usar un Para o For, es mucho mas sencillo si utilizamos
	// un mientras. Inicializamos el contador o indice a cero e iteramos
	// en el array hasta que nos salgamos de el (N no estaria en el array)
	// o encontremos el primer elemento que coincida con N. En ese ultimo caso
	// el bucle acabaria en ese momento guardando el valor del indice en la propia i.
	i = 0;
	Mientras i < tamano Y array[i] <> N Hacer
		i = i + 1;
	FinMientras
	
	Si i < tamano Entonces
		Escribir "La primera coincidencia de ", N, " es en el indice ", i;
	SiNo
		Escribir N, " no esta presente en el array.";
	FinSi
	
FinAlgoritmo
