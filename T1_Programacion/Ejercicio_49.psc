Algoritmo Ejercicio_49
	Definir dulces, bebidas, conservas, mes, tamano, maximo, sum, minimo como real;
	Definir nombre_mes, dpto_menor_coste Como Caracter;
	
	tamano = 12;
	Dimension dulces[tamano], bebidas[tamano], conservas[tamano], nombre_mes[tamano];
	nombre_mes[0] = 'Enero';
	nombre_mes[1] = 'Febrero';
	nombre_mes[2] = 'Marzo';
	nombre_mes[3] = 'Abril';
	nombre_mes[4] = 'Mayo';
	nombre_mes[5] = 'Junio';
	nombre_mes[6] = 'Julio';
	nombre_mes[7] = 'Agosto';
	nombre_mes[8] = 'Septiembre';
	nombre_mes[9] = 'Octubre';
	nombre_mes[10] = 'Noviembre';
	nombre_mes[11] = 'Diciembre';

	
	Escribir 'Dpto: Dulces, Bebidas, Conservas';
	Para mes = 0 hasta 11
		dulces[mes] = Aleatorio(100,500);
		bebidas[mes] = Aleatorio(100,500);
		conservas[mes] = Aleatorio(100,500);
		Escribir nombre_mes[mes],'     ', dulces[mes], '     ', bebidas[mes], '    ', conservas[mes];
	FinPara
	
	
	
	
	
	Escribir	'';
	Escribir '----- Apartado A -----';
	
	para mes = 0 hasta tamano - 1
		si mes == 0 o dulces[mes] > dulces[maximo]
			maximo = mes;
		FinSi		
	FinPara
	
	Escribir 'El mes con mayor costes de producción de dulces fue ' nombre_mes[maximo] ' (', dulces[maximo], ')';; 
	
	
	
	Escribir	'';
	Escribir '----- Apartado B -----';
	
	sum = 0;
	para mes = 0 hasta tamano - 1
		sum = sum + bebidas[mes];
	FinPara
	
	Escribir 'El promedio anual del coste de producción de bebidas es: ', sum/tamano;
	
	
	
	Escribir	'';
	Escribir '----- Apartado C -----';
	
	para mes = 0 hasta tamano - 1
		si mes == 0 o bebidas[mes] > bebidas[maximo]
			maximo = mes;
		FinSi		
	FinPara
	
	para mes = 0 hasta tamano - 1
		si mes == 0 o bebidas[mes] < bebidas[minimo]
			minimo = mes;
		FinSi		
	FinPara
	
	Escribir 'El mes con mayores costes de producción de bebidas fue ' nombre_mes[maximo], ' (', bebidas[maximo], ')';
	Escribir 'El mes con menores costes de producción de bebidas fue ' nombre_mes[minimo], ' (', bebidas[minimo], ')';
	
	
	
	Escribir	'';
	Escribir '----- Apartado D -----';
	
	dpto_menor_coste = 'dulces';
	
	si bebidas[11] < dulces[11] y bebidas[11] < conservas[11]
		dpto_menor_coste = 'bebidas';
	FinSi
	
	si conservas[11] < bebidas[11] y conservas[11] < dulces[11]
		dpto_menor_coste = 'conservas';
	FinSi
	
	si dulces[11] < conservas[11] y dulces[11] == bebidas[11]
		dpto_menor_coste = 'dulces y bebidas';
	FinSi
	
	si dulces[11] < bebidas[11] y dulces[11] == conservas[11]
		dpto_menor_coste = 'dulces y conservas';
	FinSi
	
	si dulces[11] > bebidas[11] y bebidas[11] == conservas[11]
		dpto_menor_coste = 'bebidas y conservas';
	FinSi
	
	Escribir 'El departamento con menor coste de producción en diciembre fue ', dpto_menor_coste;
	
FinAlgoritmo


// Se tienen los costes de produccion de tres departamentos (dulces, bebidas y conservas) correspondientes
// a los 12 meses del año anterior. Construir Algoritmo que proporcione:
//	a/ en qué mes se registró el mayor coste de producción de dulces?
// 	b/ promedio anual de los costes de producción de bebidas.
// 	c/ ¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menoR coste?
// 	d/ ¿Cuál fue el que tuvo menor coste de producción en diciembre?
