Algoritmo Ejercicio_26
	Definir order, input, cubo, num_inputs Como Entero;
	
	Escribir 'Introduce cu�ntos n�meros tendr� la serie';
	Leer num_inputs;
	
	Para order = 1 hasta num_inputs Hacer
		Escribir 'Introduce el n�mero ', order;
		leer input;
		cubo = input ^3;
		Escribir 'El cubo de ', input, ' es ', cubo;	
		Escribir ' ';
	FinPara
	
FinAlgoritmo
