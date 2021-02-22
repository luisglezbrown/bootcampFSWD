Algoritmo Ejercicio_40
	
	Definir array, confirmados, checker, nuevo_num Como Entero;
	definir iguales Como Logico;
	
	Dimension array[20];
	
	Para confirmados = 0 hasta 19
		
		Repetir
			
			iguales = Falso;
			nuevo_num = aleatorio(1,20);
			
			para checker = 0 hasta confirmados -1 con paso 1
				si array[checker] == nuevo_num Entonces
					iguales = verdadero;
				FinSi
			FinPara
			
		mientras que iguales 
		
		array[confirmados] = nuevo_num;			
		Escribir 'Índice ', confirmados, ': ', array[confirmados];
		
	FinPara
	

FinAlgoritmo
