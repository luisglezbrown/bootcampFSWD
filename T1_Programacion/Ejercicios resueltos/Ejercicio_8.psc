Algoritmo Ejercicio_8
	// 	Dado el sueldo de un trabajador, dibuja un diagrama de
	//	flujo que aplique un incremento de sueldo del 15% si el sueldo
	//	es inferior a 1000€. Imprimir el nuevo sueldo.
	
	Definir sueldo Como Entero;
	
	Escribir "Introduce tu sueldo";
	Leer sueldo;
	
	Si sueldo < 1000 Entonces
		sueldo = sueldo * 1.15;
	FinSi
	
	Escribir "Tu sueldo ahora es ", sueldo;

FinAlgoritmo
