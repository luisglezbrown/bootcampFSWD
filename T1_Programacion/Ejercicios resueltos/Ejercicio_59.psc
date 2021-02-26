Algoritmo Ejercicio_59
	// Se dispone de un array de 5 paginas, 4 filas y 10 columnas, que se
	// refieren al centro, al curso y al numero de alumnos de un colegio
	// respectivamente. Imprimir la nota media por curso y la nota media maxima
	// y su centro de pertenencia.

	Definir centro, curso, alumno, n_centros, n_cursos, n_alumnos, centro_max Como Entero;
	Definir notas, suma, media, max Como Real;
	n_centros = 5;
	n_cursos = 4;
	n_alumnos = 10;
	Dimension notas[n_centros, n_cursos, n_alumnos];
	
	Para centro = 0 hasta n_centros - 1 Hacer
		Escribir "Centro ", centro;
		
		Para curso = 0 hasta n_cursos - 1 Hacer
            // La suma se inicializa aqui a cero para que empiece de nuevo
            // con cada curso.
			suma = 0;
			
			para alumno = 0 hasta n_alumnos - 1 Hacer
				notas[centro, curso, alumno] = Aleatorio(0, 10);
				Escribir notas[centro, curso, alumno], " " Sin Saltar;
				suma = suma + notas[centro, curso, alumno];
			FinPara
			
            // Tras tener la suma de todas las notas del curso, 
            // calculamos la media.
			media = suma / n_alumnos;
			Escribir "- Media del curso ", curso, ": ", media;
            
			// Para el primer curso de todos (primer curso del primer centro)
            // o cuando la media actual sea mayor que la ultima maxima, actualizamos
            // tanto el maximo como su centro.
			Si centro == 0 Y curso == 0 O media > max Entonces
				max = media;
				centro_max = centro;
			FinSi
			
		FinPara
		
		Escribir "";
	FinPara
	
	Escribir "La media mas alta es ", max, " del centro ", centro_max;
	
FinAlgoritmo
