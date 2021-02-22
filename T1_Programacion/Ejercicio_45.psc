Algoritmo Ejercicio_45
	Definir origen, destino, tamano, i, indice_destino Como Entero;
	
	tamano = 10;
	Dimension origen[tamano], destino[tamano];
	
	Para i = 0 hasta tamano - 1   			
		origen[i] = aleatorio [20,50];			// relleno el array origen e imprimo
		Escribir origen[i], ' ' sin saltar;
	FinPara
	
	indice_destino = 0;	
	para i = 0 hasta tamano - 1
		
		Si origen[i] > 25 y origen[1] mod 2 == 0
			destino[contador] = origen[i];
			contador = contador + 1;
		FinSi
		
		
	FinPara
	
	Escribir '';
	
	Para j = 0 hasta contador - 1
		Escribir destino[j], ' ', Sin Saltar;
	FinPara		
	
FinAlgoritmo

// Teniendo un vector con los números naturales que queramos, meter en otro de la misma longitud, aquellos que 
// sean pares y mayores que 25.
// Después, muestra el vector de origen completo y el de destino solo los números introducidos.
