Algoritmo Ejercicio_12
	definir Temperatura, Num_sonidos Como Real;
	
	Escribir 'Introduce el número de sonidos por minuto';
	Repetir
		Leer Num_sonidos
		Si Num_sonidos <= 0 Entonces
			Escribir 'Oh! Parece que el grillo es mudo :( Introduzca nuevamente el número de sonidos...';
		FinSi
	Hasta Que Num_sonidos > 0
	
	Temperatura = Num_sonidos / 4 + 40;
	
	Escribir 'La temperatura actual es: ', Temperatura, 'º';
	
FinAlgoritmo
