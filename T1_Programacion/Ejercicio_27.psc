Algoritmo Ejercicio_27
	
	Definir input, order Como Entero;
	
	Escribir 'Introduce un n�mero para ver su tabla de multiplicaci�n';
	Leer input;
	
	Escribir 'Voil�! La tabla del ', input, ': ';
	para order = 0 hasta 10 Hacer
		Escribir input, ' X ', order, ' = ', input * order;
	FinPara
	
FinAlgoritmo
