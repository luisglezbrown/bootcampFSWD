
funcion saludar (nombre, apellido, dia)
	Escribir 'Hola ', nombre, ' ', apellido;
	
	Si Minusculas(dia) == 'viernes' Entonces
		Escribir 'Ya es viernes, ¡buen finde!';
	SiNo
		Escribir '¡A seguir con la semana!';
	FinSi
	
	Escribir '';
	
FinFuncion

Algoritmo Ejemplo_funciones_Saludo
	
	Definir mi_nombre, mi_apellido, mi_dia Como Caracter;
	
	mi_nombre = 'Luis';
	mi_apellido = 'González';
	mi_dia = 'lunes';
	
	saludar(mi_nombre, 'Brizuela', mi_dia);
	saludar('Pedro', mi_apellido, mi_dia);
	saludar('', '', '');
	saludar(mi_nombre, mi_apellido, '5');
	
FinAlgoritmo
