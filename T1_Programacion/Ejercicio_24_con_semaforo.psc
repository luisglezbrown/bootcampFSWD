Algoritmo Ejercicio_24	
	Definir practica, problemas, teoria, Nota_media Como Real;
	Definir alumno Como Caracter;
	definir Check_nota Como Logico;
	
	
	
	Repetir
		Escribir 'Introduce el nombre';
		Leer alumno;
		Check_nota = Verdadero;
		
		Si alumno <> ' ' entonces
			
			Escribir 'Introduce la nota de Practica';
			Leer practica;
			Si practica < 0 o practica >10 Entonces
				Check_nota = Falso;
			FinSi
			
			Si Check_nota Entonces
				Escribir 'Introduce la nota de Problemas';
				Leer problemas;
				Si problemas < 0 o problemas >10 Entonces
					Check_nota = falso;
				FinSi
			FinSi
			
			si Check_nota Entonces
				Escribir 'Introduce la nota de teoria';
				Leer teoria;
				Si teoria < 0 o teoria >10 Entonces
					Check_nota = falso;
				FinSi
			FinSi
			
			si Check_nota Entonces
				Nota_media = (practica * 0.1) + (problemas * 0.5) + (teoria * 0.4);		
				Escribir 'La nota media de ', alumno, ' es ', Nota_media;
			FinSi
			
			Si No Check_nota Entonces
				Escribir 'Error: la nota debe ser entre 0 y 10';
			FinSi
			
		FinSi
		
	Mientras Que alumno <> ' '; 
	
	
FinAlgoritmo