Funcion resultado <- potencia ( base, exponente )
	Definir resultado Como Entero;
	Si exponente == 0 Entonces
		resultado = 1;
	SiNo
		resultado = base * potencia(base, exponente-1);
	FinSi
Fin Funcion

Funcion resultado <- factorial ( n )
	Definir resultado Como Entero;
	Si n < 2 Entonces
		resultado = 1;
	SiNo
		resultado = n * factorial(n-1);
	FinSi
Fin Funcion

Algoritmo Ejercicio_60_bonus
	// Desarrollar una calculadora de potencias y factoriales usando funciones recursivas.
	
	Definir base, exponente Como Entero;
	Escribir "Introduce un numero y un exponente para calcular la potencia y el factorial de la base.";
	Leer base, exponente;
	
	Escribir "El factorial de ", base, " es ", factorial(base), ".";
	Escribir base, "^", exponente, " es ", potencia(base, exponente);
	
FinAlgoritmo
