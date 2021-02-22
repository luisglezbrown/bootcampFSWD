Algoritmo ejercicio_44
	definir num_1, num_2, resultado Como Real;
	definir operacion Como caracter;
	definir reiniciar_menu Como Logico;
	
	Escribir 'Introduce el primer operando';
	leer num_1;
	
	Escribir 'Introduce el segundo operando';
	leer num_2;
	
	Limpiar Pantalla;
	
	Repetir
		
		Escribir 'Seleccione el número de una de las siguientes opciones:';
		Escribir '1: Sumar';
		Escribir '2: Restar';
		Escribir '3: Multiplicar';
		Escribir '4: Dividir';
		Escribir '5: Salir del programa.';
		
		reiniciar_menu = falso;
		leer operacion;
		
		Segun operacion Hacer
			'1':
				resultado = num_1 + num_2;
				operacion = 'suma';
			'2':
				resultado = num_1 - num_2;
				operacion = 'resta';
			'3':
				resultado = num_1 * num_2;
				operacion = 'multiplicación';
			'4':
				resultado = num_1 / num_2;
				operacion = 'división';
			'5':
				Escribir '';
				
			De Otro Modo:
				reiniciar_menu = verdadero;
				Limpiar Pantalla;
				Escribir 'La opción seleccionada no es válida. ' Sin Saltar;
		Fin Segun
		
	Mientras Que reiniciar_menu
	
	
	Limpiar Pantalla;
	
	Si operacion <> '5'
		Escribir 'El resultado de la ', operacion, ' es: ', resultado;
	Finsi
	
FinAlgoritmo