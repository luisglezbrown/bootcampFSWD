Algoritmo Ejercicio_9
	
	// Construir un diagrama de flujo que dado como datos 5
	// calificaciones de un alumno imprima el promedio y la
	// palabra aprobado si el alumno tiene un promedio
	// mayor o igual que 5, y la palabra no aprobado
	// en caso contrario.
	
	Definir cal1, cal2, cal3, cal4, cal5, promedio Como real;
	Escribir "Introduce las 5 calificaciones.";
	Leer cal1, cal2, cal3, cal4, cal5;
	
	// El promedio o media consiste en calcular la suma
	// de todos los elementos entre el numero de elementos
	promedio = (cal1 + cal2 + cal3 + cal4 + cal5) / 5;
	
	Si promedio >= 5 Entonces
		Escribir "Enhorabuena, estas aprobado. Tienes una media de ", promedio;
	SiNo
		Escribir "Lo sentimos, estas suspenso. Tienes una media de ", promedio;
	FinSi
	
FinAlgoritmo
