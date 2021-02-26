Algoritmo Ejercicio_44
	// Partir del ejercicio 2 y anadir la siguiente funcionalidad:
	// El usuario tendra un menu numerico en pantalla para poder elegir
	// entre las operaciones a realizar. Si da una opcion incorrecta (no existe),
	// el programa avisara al usuario y volvera a mostrar el menu.
	// Hara esto hasta que el usuario elija la opcion de salir del programa.
	// Ejemplo de menu impreso por pantalla.
	
	// Seleccione el numero de una de las siguientes opciones:
	// 1: Sumar
	// 2: Restar
	// 3: Multiplicar
	// 4: Dividir
	// 5: Salir del programa.
	
	Definir A, B, seleccion Como Entero;
	
	Repetir
		Escribir "Seleccione el numero de una de las siguientes opciones";
		Escribir "1: Sumar";
		Escribir "2: Restar";
		Escribir "3: Multiplicar";
		Escribir "4: Dividir";
		Escribir "5: Salir del programa.";
		Leer seleccion;

		Si option > 0 Y option < 5 Entonces
			Escribir "Introduce dos números";
			Leer A, B;
		FinSi

		Limpiar Pantalla;
		
		Segun seleccion Hacer
			1:
				Escribir "La suma de ", A, " y ", B, " es ", A + B;
			2:
				Escribir "La resta de ", A, " y ", B, " es ", A - B;
			3:
				Escribir "El producto de ", A, " y ", B, " es ", A * B;
			4:
				Escribir "La division de ", A, " y ", B, " es ", A / B;	
			5:
				Escribir "Gracias por usar esta calculadora. Hasta la proxima.";				
			De Otro Modo:
				Escribir "Ha seleccionado una opcion incorrecta.";
		Fin Segun
	Mientras Que seleccion <> 5
FinAlgoritmo
