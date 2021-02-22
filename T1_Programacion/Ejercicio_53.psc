//		Usar una función para calcular el promedio recibiendo un array y su longitud. En el algoritmo
//		principal, leer la cantidad de datos que introducirá el usuario y posteriormente los propios datos.
//		Escribir el resultado de su promedio.

Funcion valor_promedio = promedio_array(array, tamano)
	Definir valor_promedio como real;
	Definir index, suma como entero;
	
	suma = 0;
	para index = 0 hasta tamano - 1
		suma = suma + array[index];
	FinPara
	
	valor_promedio = suma / tamano;
	
FinFuncion

Algoritmo Ejercicio_53
	
	Definir array, length, index Como Entero;
	
	Escribir 'Introduce la longitud del array';
	Leer length;
	
	Dimension array[length];
	
	para index = 0 hasta length -1
		Escribir 'Introduce el valor para la posicion ', index;
		leer array[index];
	FinPara
	
	Escribir 'El promedio del array es ', promedio_array(array, length);
	
	
FinAlgoritmo
