Algoritmo Ejercicio_23
	
	Definir day, month, year Como Entero;
	Definir check_month, bisiesto Como Logico;
	
	bisiesto = Falso;
	
	Repetir
		
		Escribir 'Introduce el día';
		Leer day;
		
		Mientras day <= 0 o day > 31
			Escribir 'Los días son del 1 al 31. Introduce el día de nuevo';
			Leer day;
			
		FinMientras
		
		
		Escribir 'Introduce el mes';
		Leer month;
		
		Mientras month <= 0 o month > 12
			Escribir 'Los meses son del 1 al 12. Introduce el mes de nuevo';
			Leer month;
			
		FinMientras
		
		check_month = Verdadero;
		
		si (month == 4 o month == 6 o month == 9 o month == 11) y day > 30 Entonces
			check_month = Falso;
			Segun month Hacer
				4:
					Escribir 'Abril' Sin Saltar;
				6:
					Escribir 'Junio' Sin Saltar;
				9:
					Escribir 'Septiembre' Sin Saltar;
				11:
					Escribir 'Noviembre' Sin Saltar;
				
			Fin Segun
			Escribir ' no puede tener más de 30 días. ' Sin Saltar;
			
		FinSi
		
		si month == 2 y day > 29 Entonces
			check_month = Falso;
			Escribir 'Febrero no puede tener más de 29 días. ' Sin Saltar;
		FinSi
		
		
		Si check_month <> Falso Entonces		
			Escribir 'Introduce el año';
			Leer year;
			
			Mientras year <= 0 
				Escribir 'El año debe ser mayor que 0. Vuelve a introducir el año';
				Leer year;
				
			FinMientras
			
			Si month == 2 Y day == 29 entonces
				Si year mod 4 == 0 y (year mod 100 <> 0 o year mod 400 == 0) Entonces // Un año es bisiesto si es divisible entre 4 y (no es divisible entre 100 o es divisible entre 400).
					bisiesto = Verdadero;
				FinSi
				Si bisiesto <> Verdadero Entonces
					check_month = Falso;
					Escribir 'El año ', year, ' no es bisiesto, por tanto, el 29 de febrero no existe. ';
				FinSi				
			FinSi
		FinSi		
		
	Mientras que check_month == Falso
	

	Escribir 'La fecha es: ', day, ' de ' Sin Saltar;
	Segun month Hacer
		1:
			Escribir 'enero de ' Sin Saltar;
		2:
			Escribir 'febrero de ' Sin Saltar;
		3:
			Escribir 'marzo de ' Sin Saltar;
		4:
			Escribir 'abril de ' Sin Saltar;
		5:
			Escribir 'mayo de ' Sin Saltar;
		6:
			Escribir 'junio de ' Sin Saltar;
		7:
			Escribir 'julio de ' Sin Saltar;
		8:
			Escribir 'agosto de ' Sin Saltar;
		9:
			Escribir 'septiembre de ' Sin Saltar;
		10:
			Escribir 'octubre de ' Sin Saltar;
		11:
			Escribir 'noviembre de ' Sin Saltar;
		12:
			Escribir 'diciembre de ' Sin Saltar;
	Fin Segun
	Escribir year;	
	
FinAlgoritmo