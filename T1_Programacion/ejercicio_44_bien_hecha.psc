Algoritmo ejercicio_44
	definir num_1, num_2, operacion, resultado Como Real;

	Repetir
		
		Escribir 'Introduce el primer operando';
		leer num_1;
		
		Escribir 'Introduce el segundo operando';
		leer num_2;
		
		
		Escribir 'Seleccione el número de una de las siguientes opciones:';
		Escribir '1: Sumar';
		Escribir '2: Restar';
		Escribir '3: Multiplicar';
		Escribir '4: Dividir';
		Escribir '5: Salir del programa.';
		leer operacion;
		
		Limpiar Pantalla;
		
		Segun operacion Hacer
			1:
				Escribir 'La suma de ', num_1  ' más ', num_2, ' es ', num_1+num_2;
				
			2:
				Escribir 'La resta de ', num_1  ' menos ', num_2, ' es ', num_1-num_2;
				
			3:
				Escribir 'La multiplicación de ', num_1  ' por ', num_2, ' es ', num_1*num_2;
				
			4:
				Escribir 'La división de ', num_1  ' entre ', num_2, ' es ', num_1/num_2;
				
			5:
				Escribir 'Gracias por usar la calculadora';
				
			De Otro Modo:
				
				Escribir 'La opción seleccionada no es válida. ' Sin Saltar;
		Fin Segun
		
	Mientras Que operacion <> 5
	
	
FinAlgoritmo