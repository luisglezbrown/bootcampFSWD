Algoritmo Ejercicio_20
	// Teniendo en cuenta que la clave es eureka, escribir un
	// algoritmo que nos pida una clave. Solo tenemos 3 intentos
	// para acertar, si fallamos los 3 intentos nos mostrara un
	// mensaje indicandonos que hemos agotado esos 3 intentos.
	// Si acertamos la clave, saldremos directamente del programa.

	Definir intentos Como Entero;
	Definir password Como Caracter;
	
	intentos = 0;	
	Repetir
		Escribir "Introduce la contraseña.";
		Leer password;
		intentos = intentos + 1;
	Mientras Que password <> "eureka" Y intentos < 3
	
	Si password == "eureka" Entonces
		Escribir "Contraseña correcta.";
	SiNo
		Escribir "Has agotado el numero de intentos.";
	FinSi
	
FinAlgoritmo
