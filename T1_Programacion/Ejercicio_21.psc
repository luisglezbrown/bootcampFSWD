// Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media
// de todos ellos. Piensa como debemos inicializar las variables.

Algoritmo Ejercicio_21
	Definir input, maximo, minimo, suma, contador Como Entero;
	Definir media Como real;
	
	
	Contador = 0;
	Suma = 0;
	
	Escribir 'Introduce el primer número de la serie';
	
	Repetir
		Leer input;
		
		Si input <> 0 Entonces
			
			si contador == 0	Entonces			
				maximo = input;
				minimo = input;
				
			SiNo
				Si input > maximo Entonces
					maximo = input;
				FinSi
				
				Si input < minimo Entonces
					minimo = input;
				FinSi
				
			FinSi
			
			contador = contador + 1;
			suma = suma + input;
			
			Escribir 'Introduce el siguiente número ó 0 para finalizar';
		FinSi
		
	Hasta Que input == 0
	
	media = suma / contador;
	
	Escribir 'El mínimo de la serie es ', minimo Sin Saltar;
	Escribir ', el máximo es ', maximo Sin Saltar;
	Escribir ' y la media es ', media;
	
FinAlgoritmo
