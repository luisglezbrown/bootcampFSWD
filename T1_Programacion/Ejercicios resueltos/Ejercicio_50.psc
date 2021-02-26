Algoritmo Ejercicio_50
	// Hacer un algoritmo que cuente las veces que aparece una determinada
	// letra en una frase que introduciremos por teclado.
	
	// Se van a usar dos funciones que tiene el pseint:
	// longitud y subcadena. Se exlican como utilizar
	// funciones personalizadas en la siguiente sesion.
	
	// Para ver mas informacion sobre estas dos funciones,
	// podemos hacer click derecho en ellas -> ayuda.
	
	Definir i, long, contador Como Entero;
	Definir letra, frase Como Caracter;
	
	Escribir "Introduce la letra a contar.";
	Leer letra;
	
	Escribir "Introduce la frase.";
	Leer frase;	

	long = Longitud(frase);
	contador = 0;
	
	// Este bucle va a iterar caracter a caracter por toda la frase
	// cada vez que el caracter sea igual que nuestra letra, incrementara
	// el contador.
	Para i = 0 hasta long - 1 Hacer
		Si Subcadena(frase, i, i) == letra Entonces
			contador = contador + 1;
		FinSi
	FinPara
	
	Escribir "La letra ", letra, " aparece ", contador, " veces.";
FinAlgoritmo
