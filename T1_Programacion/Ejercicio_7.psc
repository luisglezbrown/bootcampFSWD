Algoritmo Ejercicio_7
	Definir precio, dinero_entregado Como Real;
	
	Escribir 'Introduce el precio del artículo';
	leer precio;
	
	Escribir 'Introduce el dinero entregado';
	leer dinero_entregado;
	
	cambio = dinero_entregado - precio;
	
	si cambio > 0 entonces
		escribir 'A devolver: ', cambio, ' euros';
	FinSi
	
	si cambio = 0 entonces
		escribir 'No hay cambio'
	FinSi
	
	si cambio < 0 Entonces
		escribir 'Ojo, te está timando :(';
	FinSi
	
FinAlgoritmo