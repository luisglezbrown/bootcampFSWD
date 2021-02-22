Algoritmo Ejercicio_47
	
	Definir array, tamano, index, nuevo_num, aux  Como Entero;
	tamano = 5;
	
	dimension array[tamano];
	
	array[0] = Aleatorio(1,100);
	
	Para index = 0 hasta tamano - 2
		
		nuevo_num = aleatorio(1,100);
		
		Si nuevo_num > array[index];
			array[index+1] = nuevo_num;
			
		SiNo
			aux = array[index];
			array[index] = nuevo_num;
			array[index+1] = aux;
		FinSi
		
	FinPara
	escribir ' ';
	
FinAlgoritmo
