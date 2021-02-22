Algoritmo Ejercicio_8
	Definir sueldo_trabajador Como Real;
	
	Leer sueldo_trabajador;
	
	Si sueldo_trabajador < 1000 Entonces
		sueldo_trabajador = sueldo_trabajador * 1.15;
		Escribir 'El nuevo salario del trabajador es: ', sueldo_trabajador;
	SiNo
		Escribir 'El salario permanece igual: ', sueldo_trabajador;
	FinSi
	
FinAlgoritmo

//Dado el sueldo de un trabajador, dibuja un diagrama de flujo que aplique un incremento de sueldo
//del 15% si el sueldo es inferior a 1000€. Imprimir el nuevo sueldo.
