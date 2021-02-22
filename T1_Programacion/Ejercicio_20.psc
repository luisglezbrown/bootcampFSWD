Algoritmo Ejercicio_20
	Definir key_correcta, key_user Como Caracter;
	Definir contador, max_intentos Como Entero;
	Definir denegado Como Logico;

	key_correcta = "eureka";
	contador = 0;
	max_intentos = 3;
	denegado = falso;

	Escribir 'Introduzca la clave';
	
	Repetir
		
		si contador < max_intentos Entonces
			
			Leer key_user;
			contador = contador + 1;
			
			Si key_correcta == key_user Entonces
				Escribir 'Clave correcta, adelante!';
			SiNo
				Si max_intentos - contador > 0 Entonces
					Escribir 'Vuelva a intentarlo. Intentos restantes: ', max_intentos - contador;
				SiNo
					denegado = verdadero;
					Escribir 'Acceso denegado, ha alcanzado el máximo de intentos ';
				FinSi
				
			FinSi
			
		FinSi
		
	Mientras Que denegado = falso o key_correcta == key_user;

FinAlgoritmo

//	Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. Solo
//	tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrara un mensaje indicándonos
//	que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa.
