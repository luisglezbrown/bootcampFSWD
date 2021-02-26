SubAlgoritmo resultado <- Promedio (datos, cantidad)	
	// La funcion Promedio recibe 2 argumentos. El primero es un array
	// de datos y el segundo la cantidad de datos que tenemos en ese array.
	// Calculara la suma acumulada, posteriormente el promedio y lo asignara
	// a la variable de retorno resultado. 
	Definir suma, i como Entero;
	Definir resultado Como Real;
	suma = 0;
	
	Para i = 0 hasta cantidad - 1 Hacer
		suma = suma + datos[i];
	FinPara
	
	resultado = suma / cantidad;
FinSubAlgoritmo

Algoritmo Ejercicio_53
	// Usar una funcion para calcular el promedio recibiendo un array y su longitud.
	// En el algoritmo principal, leer la cantidad de datos que introducira el
	// usuario y posteriormente los propios datos. Escribir el resultado de su promedio.

	Definir datos, cantidad_datos, i Como Entero;
	Dimension datos[100];
	
	Escribir "Ingrese la cantidad de datos:";
	Leer cantidad_datos;

	Para i = 0 Hasta cantidad_datos - 1 Hacer
		Escribir "Ingrese el dato ", i, ":";
		Leer datos[i];
	FinPara

	Escribir "El promedio es: ", Promedio(datos, cantidad_datos);
FinAlgoritmo
