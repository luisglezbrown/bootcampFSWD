Algoritmo Ejercicio_3B
	Definir Num1,Num2,Num3 Como Real;
	Leer Num1,Num2,Num3;
	Si Num1==Num2 Y Num2==Num3 Entonces
		Escribir 'Los tres números son iguales';
	SiNo
		Si Num1>Num2 Y Num1>Num3 Entonces
			Escribir 'Número 1 es el mayor: ',Num1;
		FinSi
		Si Num2>Num1 Y Num2>Num3 Entonces
			Escribir 'Número 2 es el mayor: ',Num2;
		FinSi
		Si Num3>Num1 Y Num3>Num2 Entonces
			Escribir 'Número 3 es el mayor: ',Num3;
		FinSi
		Si Num1==Num2 Y Num1>Num3 Entonces
			Escribir 'Número 1 y 2 son los mayores: ',Num1;
		FinSi
		Si Num1==Num3 Y Num1>Num2 Entonces
			Escribir 'Número 1 y 3 son los mayores: ',Num1;
		FinSi
		Si Num2==Num3 Y Num2>Num1 Entonces
			Escribir 'Número 2 y 3 son los mayores: ',Num2;
		FinSi
	FinSi
FinAlgoritmo
