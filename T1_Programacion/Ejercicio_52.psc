Algoritmo Ejercicio_52
	
	Definir array, target, length, i, counter, ifirst Como Entero;
	
	length = 10;
	Dimension array[10];
	
	Para i = 0 hasta length - 1
		array[i] = Aleatorio(1,15);
		Escribir array[i], ' ' Sin Saltar;
	FinPara
	Escribir '';
	
	Escribir 'Introduce el n�mero a buscar';
	leer target;
	
	counter = 0;
	ifirst = 0;
	Para i = 0 Hasta length - 1
		si array[i] == target
			si counter == 0
				ifirst = i;
			FinSi
			counter = counter + 1;
		FinSi
	FinPara
	
	Si counter == 0
		Escribir 'El n�mero ', target, ' no est� en el array';
	SiNo
		Escribir 'El n�mero ', target, ' aparece ', counter, ' vez/veces. La primera vez que aparece es en la posici�n ', ifirst;
	FinSi
	
FinAlgoritmo

//	Rellenar un array con 10 n�meros aleatorios entre 1 y 15. Posteriormente, buscar un n�mero
//	introducido por teclado y nos debe decir si est� incluido en el array y el �ndice de su primera
//	coincidencia. 
