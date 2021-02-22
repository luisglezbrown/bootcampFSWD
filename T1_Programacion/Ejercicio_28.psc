Algoritmo Ejercicio_28
	Definir seconds_to_wait, alarm_seconds Como Entero;
	
	Escribir 'Introduce los segundos para la alarma';
	leer seconds_to_wait;
	Escribir 'Introduce cuántos segundos quieres que suene';
	leer alarm_seconds;
	
	Limpiar Pantalla;	
	esperar seconds_to_wait segundos;
	Escribir '¡¡RINGGGGGG!!';
	
	esperar alarm_seconds segundos;
	Limpiar Pantalla;
	
FinAlgoritmo
