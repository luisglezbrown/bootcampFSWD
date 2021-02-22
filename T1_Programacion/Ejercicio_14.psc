Algoritmo Ejercicio_14
	Definir precio_litro, litros_por_galon, galones_servidos, a_cobrar, litros_servidos Como Real
	
	precio_litro = 1.333;
	litros_por_galon = 3.78541;
	
	Escribir 'Introduzca los galones servidos';
	Repetir
		Leer galones_servidos;
		Si galones_servidos <= 0 Entonces
			Escribir 'Los galones servidos deben ser mayor que 0, vuelva a introducir la cantidad';
		FinSi
	Hasta Que galones_servidos > 0
	
	litros_servidos = galones_servidos * litros_por_galon;
	a_cobrar = precio_litro * litros_servidos;
	
	Escribir 'Importe a cobrar: ', a_cobrar, 'euros';
	
FinAlgoritmo
