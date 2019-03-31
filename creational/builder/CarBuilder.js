const Car = require("./Car");

class CarBuilder {
    constructor(model) {
        this.model = model;
    }
    makeManufacturer(manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    makeNew(garantie = 2) {
        this.new = true;
        this.garantie = garantie;
        return this;
    }
    makeGarantie(timeInYear){
        this.garantie = timeInYear;
        return this;
    }
    makePowerOfHorses(powerOfHorses) {
        this.powerOfHorses = powerOfHorses;
        return this;
    }
    makeOdometer(odometer) {
        this.odometer = odometer;
        return this;
    }
    makeKmPerLiter(kmPerLiter=10){
        this.kmPerLiter = kmPerLiter;
        return this;
    }
    makeNumberOfDoors(numberOfDoor){
        this.numberOfDoors = numberOfDoor;
        return this;
    }
    makePlaceVisited(places=[]){
        this.placeVisited = places;
        return this;
    }
    build(){
        return new Car(this);
    }
}

module.exports = CarBuilder;