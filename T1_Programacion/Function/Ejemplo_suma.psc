
funcion resultado = sumar (sumando1, sumando2)
	Definir resultado Como Entero;	
	resultado = sumando1 + sumando2;	
FinFuncion

funcion resultado = restar (restando1, restando2)
	Definir resultado Como Entero;
	resultado = restando1 - restando2;
FinFuncion

Algoritmo Ejemplo_funciones_suma
	
	Escribir sumar(10,20);
	
	Escribir restar(10,5);
	
	Escribir sumar(sumar(10,20), restar(10,5));
	
	Escribir restar(sumar(10,20), restar(10,5));
	
	
	
FinAlgoritmo
