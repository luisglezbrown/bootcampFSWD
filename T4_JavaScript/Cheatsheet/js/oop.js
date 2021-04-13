console.clear();

// --------------Antes de EC6-------------------
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old`);
    }
}

let myCar = new Car('Ford', 'Mustang', 1990);
let myCar2 = new Car('Audi', 'Q7', 2015);

myCar.getAge();

console.log(myCar, myCar2);

Car.getHP = function () {// No actualiza las instancias
    console.log('This car has 300 horsepower');    
}

myCar.getHP = function () {// Solo modifica la instancia myCar
    console.log('This car has 300 horsepower');    
}

Car.prototype.getHP = function () {// Modifica todas las instancias
    console.log('This car has 480 horsepower');    
}

myCar.getHP(); // Muestra '300' porque lo tiene a nivel de instancia y prevalece sobre la herencia de la superclase.
myCar2.getHP();

function SUV(brand, model, year, width, height) {
    Car.call(this, brand, model, year);
    this.width = width;
    this.height = height;
}

SUV.prototype = Object(Car.prototype);

let mySUV = new SUV('audi', 'Q3', 2017, 2200, 2000);

mySUV.getAge(); //Funciona porque está heredada del constructor.
mySUV.getHP(); //No funciona porque no hereda el prototype del constructor.
// Para que funcionase tendríamos que SUV.prototype = Object(Car.prototype) line43;



console.clear();
// --------------Después de EC6-------------------
class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }

    getType() {
        console.log('I\'m a normal book');
    }
}

const book1 = new Book('Metamorphosis', 'Franz Kafka', 1915);
console.log(book1); //Los métodos están guardados en el prototype, en vez de la instancia.


//SubClasses (Herencia)
class Magazine extends Book{
    
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }

    getType() {
        super.getType();
        console.log('I\'m a magazine');
    }
}

// Instanciamos una revista
const mag1 = new Magazine('Super Pop', 'Algún loco', 2015);
mag1.getSummary();
mag1.getType();

// Otro ejemplo de polimorfismo
class Animal {
    constructor (type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`This ${this.type} named ${this.name} goes ${this.sound}`);
    }
}

class Feline extends Animal {
    constructor (type, name) {
        super(type, name, 'miau');
    }

    scratchFurniture(){};
}

class Cat extends Feline {
    constructor (name) {
        super('cat', name);
    }
}

class Panther extends Feline {
    constructor (name) {
        super('panther', name);
    }
}

class Dog extends Animal {
    constructor (name) {
        super('dog', name, 'woof');
    }
}

const conBotas = new Cat('Con Botas');
const dylan = new Dog('Dylan');
const danko = new Dog('Danko');

conBotas.makeSound();
dylan.makeSound();
danko.makeSound();
