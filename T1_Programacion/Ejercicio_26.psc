Algoritmo Ejercicio_26
	Definir order, input, cubo, num_inputs Como Entero;
	
	Escribir 'Introduce cuántos números tendrá la serie';
	Leer num_inputs;
	
	Para order = 1 hasta num_inputs Hacer
		Escribir 'Introduce el número ', order;
		leer input;
		cubo = input ^3;
		Escribir 'El cubo de ', input, ' es ', cubo;	
		Escribir ' ';
	FinPara
	
FinAlgoritmo
