Algoritmo Ejercicio_23
	// Leer tres números que denoten una fecha (día, mes, año).
	// Comprobar que es una fecha válida. Si no es válida escribir
	// un mensaje de error y volver a pedir los números. Si es válida,
	// escribir la fecha cambiando el número del mes por su nombre.
	// Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero de 2006”.
	// El año debe ser mayor que 0. (Recuerda la estructura si múltiple).
	
	Definir dia, mes, anno Como Entero;
	Definir nombre_mes Como Caracter;
	
	Escribir "Introduce dia, mes y anno.";
	Leer dia, mes, anno;
	
	Mientras dia < 1 O dia > 31 O mes < 1 O mes > 12 O anno < 1 Hacer
		Escribir "Error en alguno de los datos. Introduce de nuevo dia, mes y anno validos.";
		Leer dia, mes, anno;
	Fin Mientras
	
	Segun mes Hacer
		1:
			nombre_mes = "Enero";
		2:
			nombre_mes = "Febrero";
		3:
			nombre_mes = "Marzo";
		4:
			nombre_mes = "Abril";
		5:
			nombre_mes = "Mayo";
		6:
			nombre_mes = "Junio";
		7:
			nombre_mes = "Julio";
		8:
			nombre_mes = "Agosto";
		9:
			nombre_mes = "Septiembre";
		10:
			nombre_mes = "Octubre";
		11:
			nombre_mes = "Noviembre";
		12:
			nombre_mes = "Diciembre";
	Fin Segun
	
	Escribir dia, " de ", nombre_mes, " de ", anno;
FinAlgoritmo
