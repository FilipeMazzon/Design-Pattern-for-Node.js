class Car {
    constructor(builder) {
        this.model = builder.model;
        this.manufacturer = builder.manufacturer;
        this.new = builder.new || false;
        this.garantie = builder.garantie || 0;
        this.powerOfHorses = builder.powerOfHorses || 0;
        this.numberOfDoors = builder.numberOfDoors || 2;
        this.kmPerLiter = builder.kmPerLiter || 0;
        this.odometer = builder.odometer || 0;
        this.placeVisited = builder.placeVisited || [];
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Car;