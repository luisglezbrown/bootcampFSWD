Algoritmo Ejercicio_24
	
	Definir practica, problemas, teoria, nota_media Como Real;
	Definir alumno Como Caracter;
	
	Repetir
		Escribir 'Introduce el nombre';
		Leer alumno;
		
		Si alumno <> ' ' entonces
			
			Escribir 'Introduce la nota de Practica';
			Leer practica;
			
			Escribir 'Introduce la nota de Problemas';
			Leer problemas;
			
			Escribir 'Introduce la nota de teoria';
			Leer teoria;
			
			Si (practica < 0 o practica >10) o (problemas < 0 o problemas >10) o (problemas < 0 o problemas >10) Entonces
				Escribir 'Error: las notas debe ser entre 0 y 10';
			SiNo
				Nota_media = (practica * 0.1) + (problemas * 0.5) + (teoria * 0.4);		
				Escribir 'La nota media de ', alumno, ' es ', Nota_media;
			FinSi
		FinSi
		
	Mientras Que alumno <> ' '; 
	
	
FinAlgoritmo
