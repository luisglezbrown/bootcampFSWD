Algoritmo Ejercicio_56
	// Leer y guardar en una matriz las notas de los alumnos de un colegio en funcion
	// del numero de cursos (filas) y del numero de alumnos por curso (columnas).
	// El maximo de alumnos sera 5 para cada uno de tres cursos.

	Definir notas, curso, alumno, n_cursos, n_alumnos Como Entero;
	n_cursos = 3;
	n_alumnos = 5;
	
	Dimension notas[n_cursos, n_alumnos];
	
	// Leemos y guardamos las notas
	Para curso = 0 hasta n_cursos - 1 Hacer
		Para alumno = 0 hasta n_alumnos - 1 Hacer
			// Sumamos uno para que tenga mas sentido la salida por pantalla.
			Escribir "Introduce la nota del alumno ", alumno + 1, " del curso ", curso + 1;
			Leer notas[curso, alumno];
		FinPara
	FinPara
	
	// Imprimimos la matriz
	Para curso = 0 hasta n_cursos - 1 Hacer
		Escribir "Curso ", curso + 1, ":  " Sin Saltar;
		
		Para alumno = 0 hasta n_alumnos - 1 Hacer
			Escribir notas[curso, alumno], "  " Sin Saltar;
		FinPara
		
		Escribir "";
	FinPara
	
FinAlgoritmo
