Algoritmo Ejercicio_19
	Definir contador, suma, media_aritmetica, numero_introducido como real;
	
	contador = 0;
	suma = 0;
	
	Escribir 'Inserta números para la calcular la media.';
	
	Repetir
		leer numero_introducido;
		Si numero_introducido <> -1 Entonces
			contador = contador + 1;
			suma = suma + numero_introducido;
			Escribir 'Inserta otro número ó -1 para finalizar el proceso';
		FinSi
	Mientras que numero_introducido <> -1;
	
	media_aritmetica = suma / contador;
	
	Escribir 'La media aritmética de los ', contador, ' números introducidos es: ', media_aritmetica;
	
FinAlgoritmo
