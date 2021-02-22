Algoritmo Reloj
	Definir segs, mins, hours como entero;
	
	segs = 0;
	mins = 0;
	hours = 0;
	Mientras Verdadero 
		Limpiar Pantalla;
		
		si hours < 10
			escribir '0' sin saltar;
		FinSi
		escribir hours, ':' Sin Saltar;
		
		si mins < 10
			escribir '0' sin saltar;
		FinSi
		escribir mins, ':' Sin Saltar;
		
		si segs < 10
			escribir '0' sin saltar;
		FinSi
		escribir segs;
		
		
		Esperar 1 segundos;
		segs = segs + 1;
		
		si segs > 59 
			segs = 0;
			mins = mins + 1;
			si mins > 59
				mins = 0;
				hours = hours + 1;
				si hours > 23
					hours = 0;
				FinSi
			FinSi
		FinSi		
		
	FinMientras
	
	
FinAlgoritmo
