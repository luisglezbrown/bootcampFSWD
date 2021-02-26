Algoritmo Ejercicio_24
	// Calcular las calificaciones de un grupo de alumnos. La nota final
	// de cada alumno se calcula segun el siguiente criterio:
	// la parte practica vale el 10%; la parte de problemas vale
	// el 50% y la parte teorica el 40%. El algoritmo leera el nombre
	// del alumno, las tres notas, escribira el resultado y volvera a
	// pedir los datos del siguiente alumno hasta que el nombre sea una
	// cadena vacia. Las notas deben estar entre 0 y 10, si no lo estan,
	// no imprimira las notas, mostrara un mensaje de error y volvera a pedir otro alumno.
	
	Definir practica, problemas, teorica, nota_final Como Real;
	Definir nombre Como Caracter;
	
	Repetir
		Escribir "Introduce el nombre del alumno";
		Leer nombre;
		
		Si nombre <> "" Entonces
			Escribir "Introduce las 3 notas de ", nombre, ", cada una de ellas sobre 10.";
			Escribir "Parte practica:";
			Leer practica;
			Escribir "Parte problemas:";
			Leer problemas;
			Escribir "Parte teorica:";
			Leer teorica;			
			
			Si practica < 0 O practica > 10 O problemas < 0 O problemas > 10 O teorica < 0 O teorica > 10 Entonces
				Escribir "Ha habido un error con tus notas. Deben estar entre 0 y 10.";
			SiNo
				nota_final = practica * 0.1 + problemas * 0.5 + teorica * 0.4;
				Escribir "Tu nota final es ", nota_final, " sobre 10.";
			FinSi
		FinSi
	Mientras Que nombre <> ""
	
	Escribir "Fin del procesado.";
	
FinAlgoritmo
