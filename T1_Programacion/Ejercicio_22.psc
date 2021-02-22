//	Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y 100.

Algoritmo Ejercicio_22
	
	Definir Start, End, Contador, Num_multiplos Como Entero;
	
	Start = 1;
	End = 100;
	Contador = Start;
	Num_multiplos = 0;
	
	Repetir
		
		Si contador mod 2 == 0 O contador mod 3 == 0 Entonces
			Num_multiplos = Num_multiplos + 1;
		FinSi
		
		Contador = Contador + 1;
		
	Mientras Que Contador <= End; 
	
	Escribir 'El número de múltiplos de 2 ó 3 en una serie del ', Start, Sin Saltar;
 	Escribir ' al ', End, Sin Saltar;
	Escribir ' es ' Num_multiplos;

FinAlgoritmo