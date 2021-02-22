//	Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y 100.

Algoritmo Ejercicio_22
	
	Definir Start, End, Contador, Num_multiplos, divisor_1, divisor_2 Como Entero;
	
	Escribir 'Introduce el número inicial de la serie';
	Leer Start;
	Escribir 'Introduce el número final de la serie';
	Leer End;
	Escribir 'Introduce el primer divisor a comprobar';
	Leer divisor_1;
	Escribir 'Introduce el segundo divisor a comprobar';
	Leer divisor_2;
	
	
	Contador = Start;
	Num_multiplos = 0;	
	
	Repetir
		
		Si contador mod divisor_1 == 0 O contador mod divisor_2 == 0 Entonces
			Num_multiplos = Num_multiplos + 1;
		FinSi
		
		Contador = Contador + 1;
		
	Mientras Que Contador <= End; 
	
	Escribir 'El número de múltiplos de ', divisor_1, ' ó ', divisor_2, ' en una serie del ', Start, Sin Saltar;
 	Escribir ' al ', End, Sin Saltar;
	Escribir ' es ' Num_multiplos;

FinAlgoritmo