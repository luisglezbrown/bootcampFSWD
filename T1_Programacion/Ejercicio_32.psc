Algoritmo Ejercicio_32
	Definir bocadillo, refresco, cerveza, pan, total, subtotal Como Real;
	Definir cantidad, qty_bocadillo, qty_cerveza, qty_pan, qty_refresco como entero;
	
	bocadillo = 1.5;
	refresco = 1.05;
	cerveza = 0.75;
	pan = 2;
	
	Subtotal = 0;
	
	Escribir '¿Cuantos bocadillos de jamón?';
	Repetir
		Leer cantidad;
		
		Si cantidad < 0
			Escribir 'La cantidad no puede ser menor de 0, vuelve a introducirlo';
			Leer cantidad;
		FinSi
		
	Mientras Que cantidad < 0
	
	qty_bocadillo = cantidad;
	Subtotal = cantidad * bocadillo;
	Limpiar Pantalla;
	escribir 'Subtotal: ', Subtotal;
	
	Escribir '¿Cuantos refrescos?';
	Repetir
		Leer cantidad;
		
		Si cantidad < 0
			Escribir 'La cantidad no puede ser menor de 0, vuelve a introducirlo';
			Leer cantidad;
		FinSi
		
	Mientras Que cantidad < 0
	
	qty_refresco = cantidad;
	Subtotal = Subtotal + (cantidad * refresco);
	Limpiar Pantalla;
	escribir 'Subtotal: ', Subtotal;
	
	Escribir '¿Cuantas cervezas?';
	Repetir
		Leer cantidad;
		
		Si cantidad < 0
			Escribir 'La cantidad no puede ser menor de 0, vuelve a introducirlo';
			Leer cantidad;
		FinSi
		
	Mientras Que cantidad < 0
	
	qty_cerveza = cantidad;
	Subtotal = Subtotal + (cantidad * cerveza);
	Limpiar Pantalla;
	escribir 'Subtotal: ', Subtotal;
	
	Escribir '¿Cuantos panes?';
	Repetir
		Leer cantidad;
		
		Si cantidad < 0
			Escribir 'La cantidad no puede ser menor de 0, vuelve a introducirlo';
			Leer cantidad;
		FinSi
		
	Mientras Que cantidad < 0
	
	qty_pan = cantidad;
	Subtotal = Subtotal + (cantidad * pan);
	Limpiar Pantalla;
	
	Total = Subtotal;
	
	Si qty_bocadillo > 0 Entonces
		Escribir 'Bocadillo de jamón x ', qty_bocadillo, '(', bocadillo, ') = ', qty_bocadillo * bocadillo; 
	FinSi
	Si qty_refresco > 0 Entonces
		Escribir 'Refresco x ', qty_refresco, '(', refresco, ') = ', qty_refresco * refresco; 
	FinSi
	Si qty_cerveza > 0 Entonces
		Escribir 'Cerveza x ', qty_cerveza, '(', cerveza, ') = ', qty_cerveza * cerveza; 
	FinSi
	Si qty_pan > 0 Entonces
		Escribir 'Pan x ', qty_pan, '(', pan, ') = ', qty_pan * pan; 
	FinSi
	
	Escribir '';
	Escribir 'El precio total es: ', total;
	
	
FinAlgoritmo
