Algoritmo Ejercicio_15
	// Modificar el algoritmo del ejercicio 6, de forma que,
	// si se teclea un cero, se vuelva a pedir el numero
	// por teclado (asi hasta que se teclee un numero
	// mayor que cero) (recuerda la estructura mientras).

	
	Definir numero1 Como Entero;
	
	Repetir
		Escribir "Introduce un numero.";
		Leer numero1;
		
		Si numero1 > 0 Entonces
			Si numero1 mod 2 == 0 Entonces
				Escribir "El numero ", numero1, " es par.";
			SiNo
				Escribir "El numero ", numero1, " es impar.";
			FinSi
		FinSi
	Mientras Que numero1 <= 0
FinAlgoritmo
