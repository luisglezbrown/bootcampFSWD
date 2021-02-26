Algoritmo Ejercicio_4
	// Disenar un algoritmo que pida por teclado tres numeros;
	// si el primero es negativo, debe imprimir el producto de
	// los tres y si no lo es, imprimira la suma.
	
	Definir numero1, numero2, numero3 Como Entero;
	Escribir "Introduce 3 numeros.";
	Leer numero1, numero2, numero3;
	
	Si numero1 < 0 Entonces
		Escribir "El producto de los tres numeros es ", numero1 * numero2 * numero3;
	SiNo
		Escribir "La suma de los tres numeros es ", numero1 + numero2 + numero3;
	FinSi
FinAlgoritmo
