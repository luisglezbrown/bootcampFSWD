Algoritmo ejercicio_28_contador
	Definir seconds_to_wait, alarm_seconds, counter Como Entero;
	Definir alarm_message Como Caracter;
	
	Escribir 'Introduce los segundos para la alarma';
	leer seconds_to_wait;
	Escribir 'Introduce cuántos segundos quieres que suene';
	leer alarm_seconds;
	Escribir 'Escribe el mensaje de alarma';
	leer alarm_message;
	
	Limpiar Pantalla;
	
	Para counter = seconds_to_wait hasta 1 Hacer
		Escribir counter;
		esperar 1 Segundos;
		Limpiar Pantalla;
	FinPara
	
	Escribir alarm_message;
	Esperar alarm_seconds Segundos;
	Limpiar Pantalla;
	
FinAlgoritmo
