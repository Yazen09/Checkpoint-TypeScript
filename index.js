// Implémentation de la classe Car qui implémente l'interface Vehicle
var Car = /** @class */ (function () {
    // Constructeur pour initialiser les propriétés
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implémentation de la méthode start
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Création d'une instance de la classe Car
var myCar = new Car("Toyota", "Corolla", 2020);
// Appel de la méthode start
myCar.start(); // Cela loguera "Car engine started" dans la console
