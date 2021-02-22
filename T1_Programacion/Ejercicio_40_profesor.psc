Funcion resultado = existe (array, tamano, N)
	Definir resultado como logico;
	Definir indice como entero;
	
	resultado = Falso;
	para indice = 0 hasta tamano - 1 con paso 1
		si array[indice] == N Entonces
			resultado = verdadero;
		FinSi
	FinPara
FinFuncion


Algoritmo Ejercicio_40
	
	Definir array, confirmados, checker, nuevo_num Como Entero;
	
	Dimension array[20];
	
	Para confirmados = 0 hasta 19
		
		Repetir
			nuevo_num = aleatorio(1,20);
		mientras que existe(array, confirmados, nuevo_num) 
		
		array[confirmados] = nuevo_num;			
		Escribir 'Índice ', confirmados, ': ', array[confirmados];
		
	FinPara
	
FinAlgoritmo
