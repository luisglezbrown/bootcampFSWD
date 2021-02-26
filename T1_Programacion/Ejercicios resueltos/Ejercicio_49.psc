Algoritmo Ejercicio_49
	// Se tienen los costes de produccion de tres departamentos (dulces, bebidas y conservas)
	// correspondientes a los 12 meses del ano anterior. Construir algoritmo que proporcione:
	// a) En que mes se registro el mayor coste de produccion de dulces?
	// b) Promedio anual de los costes de produccion de bebidas
	// c) En que mes se registro el mayor coste de produccion en bebidas, y en que mes el menor coste?
	// d) Cual fue el que tuvo menor coste de produccion en diciembre?
	
	Definir dulces, bebidas, conservas, n_meses, mes, max, mes_max, suma, min, mes_min Como Entero;
	n_meses = 12;
	Dimension dulces[n_meses], bebidas[n_meses], conservas[n_meses];
	
	// Generamos e imprimimos por columnas los 3 arrays.
	Escribir "Deps:    Dulces   Bebidas   Conservas";
	Para mes = 0 hasta n_meses - 1 Hacer
		dulces[mes] = Aleatorio(50, 300);
		bebidas[mes] = Aleatorio(50, 300);
		conservas[mes] = Aleatorio(50, 300);
		
		Escribir "Mes ", mes + 1, ":    ", dulces[mes], "       ", bebidas[mes], "        ", conservas[mes];
	FinPara
	
	// Apartado A ------------------------------------------------------------------
	Para mes = 0 Hasta n_meses - 1 Hacer
		
		// Si es la primera iteracion, entrara inicializando las variables.
		// Si el nuevo mes es mayor que el maximo previo, entrara para actualizarlas.
		Si mes == 0 O dulces[mes] > max Entonces
			max = dulces[mes];
			mes_max = mes;
		FinSi
	FinPara
	
	// Sumamos uno para que coincida con los numeros de los meses reales.
	Escribir "a) El mes con mas coste del departamento de dulces (", max, ") es el ", mes_max + 1;
	
	// Apartado B ------------------------------------------------------------------
	suma = 0;
	Para mes = 0 Hasta n_meses - 1 Hacer
		
		// Acumulamos la suma para posteriormente calcular el promedio.
		suma = suma + bebidas[mes];
	FinPara
	
	Escribir "b) La media anual de los costes de bebidas es ", suma / n_meses;
	
	// Apartado C ------------------------------------------------------------------
	Para mes = 0 Hasta n_meses - 1 Hacer
		
		// De forma similar que el apartado A, actualizamos min y max en primera iteracion
		// y en caso de que el valor sea mayor / menor que max / min respectivamente.
		
		Si mes == 0 O bebidas[mes] > max Entonces
			max = bebidas[mes];
			mes_max = mes;
		FinSi
		
		Si mes == 0 O bebidas[mes] < min Entonces
			min = bebidas[mes];
			mes_min = mes;
		FinSi
	FinPara
	
	Escribir "c) El coste minimo en bebidas: ", min, " corresponde al mes ", mes_min + 1;
	Escribir "   El coste maximo en bebidas: ", max, " corresponde al mes ", mes_max + 1;
	
	// Apartado D ------------------------------------------------------------------
	// Por simplicidad, no se ha controlado que 2 o 3 departamentos compartieran el minimo.
	Si dulces[11] < bebidas[11] Y dulces[11] < conservas[11] entonces
		Escribir "d) En diciembre, el departamento de dulces ha tenido el menor coste de los tres.";
	SiNo
		Si bebidas[11] < conservas[11] Entonces
			Escribir "d) En diciembre, el departamento de bebidas ha tenido el menor coste de los tres.";
		SiNo
			Escribir "d) En diciembre, el departamento de conservas ha tenido el menor coste de los tres.";
		FinSi
	FinSi
	
FinAlgoritmo
