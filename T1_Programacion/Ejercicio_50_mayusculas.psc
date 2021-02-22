Algoritmo Ejercicio_50
	Definir char_counter, i Como Entero;
	definir character, sentence  Como Caracter;
	
	
	Escribir 'Introduce la frase';
	Leer sentence;
	
	Escribir 'Introduce la letra a contar';
	Leer character;
	
	
	char_counter = 0;
	Para i = 0 hasta Longitud(sentence)
		Si Subcadena(Mayusculas(sentence), i, i) == Mayusculas(character)
			char_counter = char_counter + 1;
		FinSi
	FinPara
	
	Escribir 'La letra (', character,  ') aparece ', char_counter, ' veces en la frase: ', sentence;
	
FinAlgoritmo


//	Hacer un algoritmo que cuente las veces que aparece una determinada letra en una frase que
//	introduciremos por teclado.