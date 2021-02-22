Algoritmo Ejercicio_59_profesor
	Definir n_centros, n_cursos, n_alumnos, centro, curso, alumno, max_centro como entero;
	Definir notas, suma, media, max como real;
	
	n_centros = 5; 	
	n_cursos = 4; 	
	n_alumnos = 10;
	
	dimension notas[n_centros, n_cursos, n_alumnos];
	
	Para centro = 0 hasta n_centros - 1
		Escribir 'Centro ', centro;
		Para curso = 0 hasta n_cursos - 1
			Escribir 'Curso ', curso, ': ' Sin Saltar;
			
			Suma = 0;
			Para alumno = 0 hasta n_alumnos - 1
				notas[centro, curso, alumno] = Aleatorio(1,10) - (Aleatorio(0,10)/10);
				Escribir notas[centro, curso, alumno], ' ' Sin Saltar;
				
				suma = suma + notas[centro, curso, alumno];
			FinPara		
			
			media = suma / n_alumnos;
			Escribir ' - Media del curso: ', suma/n_alumnos Sin Saltar;
			
			si (centro == 0 y curso == 0) o media > max Entonces
				max = media;
				max_centro = centro;
			FinSi
			
			Escribir '';
		FinPara
		Escribir '';
	FinPara
	
	Escribir 'La media más alta es ', max;
	
FinAlgoritmo
//	Se dispone de un array de 5 páginas, 4 filas y 10 columnas, que se refieren al centro, al curso y al
//	número de alumnos de un colegio respectivamente. Imprimir la nota media por curso y la nota
//	media máxima y su centro de pertenencia.