Algoritmo Ejercicio_27
	
	Definir input, order Como Entero;
	
	Escribir 'Introduce un número para ver su tabla de multiplicación';
	Leer input;
	
	Escribir 'Voilà! La tabla del ', input, ': ';
	para order = 0 hasta 10 Hacer
		Escribir input, ' X ', order, ' = ', input * order;
	FinPara
	
FinAlgoritmo
