Algoritmo Ejercicio_51
	// Comprobar si un numero N positivo es primo. Se dice que un numero entero
	// positivo N es un numero primo si los unicos enteros positivos que lo
	// dividen son exactamente 1 y N (el mismo). 

	Definir N, i Como Entero;
	Definir es_primo Como Logico;
	
	Escribir "Introduce un numero entero positivo para comprobar si es primo.";
	Leer N;
	
	// Daremos por hecho, como premisa, que N es primo. Posteriormente,
	// vamos a intentar refutarlo.
	es_primo = Verdadero;
	
	// Comprobamos si el numero N tiene algun otro divisor aparte del 1 y el mismo,
	// en cuyo caso, no seria primo y la premisa inicial seria falsa.
	Para i = 2 Hasta n - 1 Con Paso 1 Hacer
		Si n mod i = 0 Entonces
			es_primo = Falso;
		FinSi
	FinPara
	
	Escribir "El numero ", N Sin Saltar;
	Si es_primo Entonces
		Escribir " es primo.";
	SiNo
		Escribir " no es primo.";
	FinSi
FinAlgoritmo
