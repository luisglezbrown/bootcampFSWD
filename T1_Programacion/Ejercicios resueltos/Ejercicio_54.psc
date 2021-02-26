Funcion resultado <- es_primo ( n )
	// Esta funcion recibe un solo numero y determina si es
	// primo o no. Devuelve el resultado logico a traves 
	// de la variable de retorno resultado. Tiene el mismo funcionamiento
	// que el ejercicio 51.
	Definir i Como Entero;
	Definir resultado Como Logico;
	resultado = Verdadero;
	
	Para i = 2 Hasta n-1 Con Paso 1 Hacer
		Si n mod i = 0 Entonces
			resultado = Falso;
		FinSi
	FinPara
Fin Funcion


Algoritmo Ejercicio_54
	// Disenar un algoritmo que lea el numero N e imprima y
	// cuente todos los numeros primos menores que N.

	Definir numero_inicial, contador_primos, i Como Entero;
	
	Escribir "Introduzca el numero inicial.";
	Leer numero_inicial;
	
	contador_primos = 0;
	
	Para i = 2 Hasta numero_inicial Con Paso 1 Hacer
		// Podemos llamar a la funcion es_primo(n) en la propia comprobacion del Si
		// ya que la funcion devuelve un valor de tipo logico: verdadero o falso.
		Si es_primo(n) Entonces
			Escribir N, " es primo.";
			contador_primos = contador_primos + 1;
		FinSi
	FinPara
	
	Escribir "Por debajo de ", numero_inicial, " hay ", contador_primos, " numeros primos.";
FinAlgoritmo
