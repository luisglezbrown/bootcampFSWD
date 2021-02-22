Algoritmo Ejercicio_43_for
	Definir segs, mins, hours como entero;
	Limpiar Pantalla;
	Mientras Verdadero 
		
		para hours = 0 hasta 23
			para mins = 0 hasta 59
				para segs = 0 hasta 59
					
					
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
					
					
				FinPara
			FinPara
		FinPara
		
	FinMientras
	
	
FinAlgoritmo