/* 1. Generar un array de 100 objetos que tengan las siguientes propiedades:
• Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
• Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
• Salario: un número aleatorio entre 1250 y 4000. */

function Empleados(cargo, rendimiento, salario) {
    this.cargo = cargo;
    this.rendimiento = rendimiento;
    this.salario = salario;
}

const generadorRendimiento = () => Number(Math.random().toFixed(2));
const generadorSalario = () => Math.floor(Math.random() * (4000 - 1250) + 1250);
// console.log(generadorRendimiento());
// console.log(generadorSalario());


let empleados = [];
for (let index = 1; index <= 100; index++) {
    empleados.push(new Empleados(
        `Empleado ${index}`,
        generadorRendimiento(),
        generadorSalario()
    ));
};
// console.log(empleados)


/* 2. Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback. */
empleados.sort(function (empleado1, empleado2) {return empleado1.rendimiento - empleado2.rendimiento});
console.log('Ordenados por rendimiento:', empleados);


/* 3. Ordenar el array por salario e imprimirlo. Usar una función de flecha. */
empleados.sort((empleado1, empleado2) => empleado1.salario - empleado2.salario);
console.log('Ordenados por salario:', empleados);


/* 4. Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará
dentro del string Cargo. Usar una función nombrada como callback. */
function ordenarNumEmpleadoDecreciente (empleado1, empleado2) {
    return Number(empleado2.cargo.slice(9)) - Number(empleado1.cargo.slice(9));
}

empleados.sort(ordenarNumEmpleadoDecreciente);
console.log('Ordenados por número de empleado decreciente:', empleados);


/* 5. Usando filter: imprimir el cargo y salario de los que cobren más de 2500€. */
const salariosMayores2500 = empleados.filter(empleado => empleado.salario > 2500);
console.log('Filtrados por los que cobrán más de 2500:');
salariosMayores2500.forEach(empleado => console.log(empleado.cargo, empleado.salario))


/* 6. Usando map: subir el sueldo un 25% a los que cobren menos de 1500€ */
empleados = empleados.map(empleado => {
    if (empleado.salario < 1500) {
        // Modificar el salario
        empleado.salario *= 1.25;
    }
    return empleado;
});

console.log('Empleados tras subida salarial a los under1500', empleados);


/* 7. Usando reduce: Obtener el coste total de todos los sueldos para la empresa teniendo en cuenta que
a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos. */

function totalSalarios () {
    let arraySalarios = [];
    for (const empleado of empleados) {
        arraySalarios.push(empleado.salario);
    }
    return arraySalarios.reduce((sum, salario) => sum + salario, 0);
}

const impuestos = 1.15;
const costeSalarial = totalSalarios() * impuestos;

console.log(`Salarios antes de impuestos: ${totalSalarios()} | Coste Salarial: ${costeSalarial}`);


// v2
const costeTotal = empleados.reduce((sumaSalarios, empleado) => sumaSalarios + empleado.salario * 1.15, 0);
console.log(costeTotal);

/* 8. Usar el método o métodos (reduce / map / filter / sort) que determinemos oportuno e imprimir en
cada apartado: */

// • Despedir a los que tengan un rendimiento menor a 0.3.
const empleadosBajoRendimiento = empleados.filter(empleado => empleado.rendimiento < 0.3);
console.log('Empleados a despedir por bajo rendimiento', empleadosBajoRendimiento);

empleados = empleados.filter(empleado => empleado.rendimiento >= 0.3);
console.log('Empleados tras despedir a los flojos', empleados, empleados.length);


// • Calcular el sueldo medio de la empresa.
const sueldoMedio = totalSalarios() / empleados.length;
console.log(`El sueldo medio de la empresa es de ${sueldoMedio}`);

const sueldoMedioV2 = empleados.reduce((sumaSalarios, empleado) => sumaSalarios +empleado.salario, 0) / empleados.length;
console.log(`El sueldo medio de la empresa usando V2 es de ${sueldoMedioV2}`);


//• Subir el sueldo de los que tengan un rendimiento superior a 0.7.
empleados = empleados.map(empleado => {
    if (empleado.rendimiento > 0.7) {
        empleado.salario = empleado.salario * 1.25;
    }
    return empleado;
});
console.log('Empleados tras la subida salaria a los de mejor rendimiento.');


empleados.forEach(empleado => {
    if (empleado.rendimiento > 0.7) {
        empleado.salario = empleado.salario * 1.25;
    }
});
console.log('Empleados tras la subida salaria a los de mejor rendimiento.');