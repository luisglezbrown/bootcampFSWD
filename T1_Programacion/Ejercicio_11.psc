Algoritmo Ejercicio_11
	
	Definir importe_compra, importe_final Como Real
	
	Escribir 'Introduzca el importe de su compra';
	Leer importe_compra;
	
	dto1 = 0.95;
	dto2 = 0.9;
	dto3 = 0.8;
	dto4 = 0.75;
	
	Escribir 'Gracias por su compra, el importe total es: ' sin saltar
	Si importe_compra < 500 Entonces
		importe_final = importe_compra;
	SiNo
		si importe_compra <= 1000 Entonces
			importe_final = importe_compra * dto1;
		SiNo
			si importe_compra <= 7000 Entonces
				importe_final = importe_compra * dto2;
			SiNo
				si importe_compra <= 15000 Entonces
					importe_final = importe_compra * dto3;
				SiNo
					importe_final = importe_compra * dto4;
				FinSi
			FinSi
		FinSi
	FinSi
	
	Escribir importe_final;
	
FinAlgoritmo