Algoritmo Ejercicio_37
	
	Definir letras_DNI Como Caracter;
	Definir numero_DNI Como Entero;
	
	Dimension letras_DNI[23];
	
	
	letras_DNI[0] = "T";
	letras_DNI[1] = "R";
	letras_DNI[2] = "W";
	letras_DNI[3] = "A";
	letras_DNI[4] = "G";
	letras_DNI[5] = "M";
	letras_DNI[6] = "Y";
	letras_DNI[7] = "F";
	letras_DNI[8] = "P";
	letras_DNI[9] = "D";
	letras_DNI[10] = "X";
	letras_DNI[11] = "B";
	letras_DNI[12] = "N";
	letras_DNI[13] = "J";
	letras_DNI[14] = "Z";
	letras_DNI[15] = "S";
	letras_DNI[16] = "Q";
	letras_DNI[17] = "V";
	letras_DNI[18] = "H";
	letras_DNI[19] = "L";
	letras_DNI[20] = "C";
	letras_DNI[21] = "K";
	letras_DNI[22] = "E";
	
	Escribir 'Introduce el número de DNI';
	Leer numero_DNI;
	
	Mientras numero_DNI < 0 o numero_DNI > 99999999
		Escribir 'Error en el número, vuelve a introducirlo';
		Leer numero_DNI;
	FinMientras
	
	Escribir 'Tu DNI completo es: ', numero_DNI, letras_DNI[numero_DNI mod 23];
	
	
FinAlgoritmo

// Una calculadora de la letra de un DNI, pediremos el DNI por teclado y nos devolverá el DNI
// completo con la letra. Para calcular la letra, cogeremos el resto de el DNI entre 23, que será un
// número entre 0 y 22. Utilizar el resultado para buscar en un array de caracteres la posición que
// corresponda a la letra.
