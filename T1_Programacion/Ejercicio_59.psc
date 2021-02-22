Algoritmo Ejercicio_59
	
	Definir array,n_centros, n_alumnos, n_cursos, centro, curso, alumno, suma, centro_max_media como entero;
	Definir media, max_media como real;
	
	
	n_centros = 5; 	// paginas
	n_cursos = 4; 	// filas
	n_alumnos = 10;	// columnas
	
	Dimension array[n_centros, n_cursos, n_alumnos];
	Dimension media[n_centros, n_cursos];
	
	max_media = -1;
	Para centro = 0 hasta n_centros - 1 Hacer 			// paginas
		Escribir '******* Centro ', centro, ' *******';
		
		Para curso = 0 hasta n_cursos - 1 Hacer 			// filas
			Escribir '--> Curso ', curso;
			Escribir 'Notas alumnos: ' Sin Saltar;
			
			Suma = 0;
			Para alumno = 0 hasta n_alumnos - 1 Hacer	// columnas
				array[centro,curso,alumno] = aleatorio(0,10);
				suma = suma + array[centro,curso,alumno];
				Escribir array[centro, curso, alumno], ' ' Sin Saltar;
			FinPara
			
			media[centro, curso] = suma/n_alumnos;
			Escribir '';
			Escribir 'Nota media del curso ', curso, ': ', media[centro, curso];
			
			si media[centro,curso] > max_media
				max_media = media[centro,curso];
				centro_max_media = centro;
			FinSi
			
		FinPara
		Escribir ' ';
		
	FinPara
	
	Escribir 'La nota media máxima es ', max_media, ', perteneciente al centro ', centro_max_media;
	
	
FinAlgoritmo
//	Se dispone de un array de 5 páginas, 4 filas y 10 columnas, que se refieren al centro, al curso y al
//	número de alumnos de un colegio respectivamente. Imprimir la nota media por curso y la nota
//	media máxima y su centro de pertenencia.