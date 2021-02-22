Algoritmo Ejercicio_56
	
	Definir notas, curso, alumno, n_cursos, n_alumnos como entero;
	
	n_alumnos = 5;
	n_cursos = 3;
	
	Dimension notas[n_cursos, n_alumnos];
	
	
	// Leemos y guardamos las notas
	Para curso = 0 hasta n_cursos -1
		para alumno = 0 hasta n_alumnos - 1
			Escribir 'Introduce la nota de ', alumno, ' del curso ', curso;
			Leer notas[curso, alumno];
		FinPara
	FinPara
	
	
	// Imprimimos las notas	
	Para curso = 0 hasta n_cursos -1
		Escribir 'curso ', curso, ': ' Sin Saltar;
		para alumno = 0 hasta n_alumnos - 1
			Escribir 'Alumno ', alumno, ': ',notas[curso, alumno], ' ' Sin Saltar;
		FinPara
		escribir '';
	FinPara
FinAlgoritmo

// Leer y guardar en una matriz las notas de los alumnos de un colegio en funcón del número de cursos(filas) y
// del número de alumnos por curso (columnas). El máximo de alumnos será 5 para cada uno de los tres cursos.
