Algoritmo Ejercicio_45
	// Teniendo un vector con los numeros naturales que queramos,
	// meter en otro de la misma longitud,
	// aquellos que sean pares y mayores que 25.
	// Despues, mostrar el vector de origen completo y el de destino
	// solo los numeros introducidos.

	Definir array1, array2, i, tamano, contador Como Entero;
	tamano = 10;
	Dimension array1[tamano], array2[tamano];
	
	// Rellenamos e imprimimos el primer array.
	Para i = 0 hasta tamano - 1 Hacer
		array1[i] = Aleatorio(1,50);
		Escribir array1[i], " " Sin Saltar;
	FinPara
	Escribir "";
	
	// Rellenamos el segundo con los que cumplen las condiciones.
	// Usaremos contador para saber por donde nos hemos quedado
	// rellenando el segundo array. Asi, todos los numeros validos
	// estaran juntos sin importar cuantos huecos esten vacios despues.
	contador = 0;
	Para i = 0 hasta tamano - 1 Hacer
		Si array1[i] mod 2 == 0 Y array1[i] > 25 Entonces
			array2[contador] = array1[i];
			contador = contador + 1;
		FinSi
	FinPara
	
	// Imprimimos el segundo array.
	Si contador < 1 Entonces
		Escribir "El array 2 esta vacio";
	SiNo
		Para i = 0 hasta contador - 1 Hacer
			Escribir array2[i], " " Sin Saltar;
		FinPara
		Escribir "";
	FinSi
		
FinAlgoritmo
