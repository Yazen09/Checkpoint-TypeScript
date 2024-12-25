// Définition de l'interface Vehicle
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implémentation de la classe Car qui implémente l'interface Vehicle
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    // Constructeur pour initialiser les propriétés
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implémentation de la méthode start
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Création d'une instance de la classe Car
  const myCar = new Car("Toyota", "Corolla", 2020);
  
  // Appel de la méthode start
  myCar.start();  // Cela loguera "Car engine started" dans la console
  