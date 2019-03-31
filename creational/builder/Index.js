const CarBuilder = require('./CarBuilder');

const gol = new CarBuilder("gol")
    .makeManufacturer("Volkswagen")
    .makePowerOfHorses(200)
    .makeNumberOfDoors(4)
    .makeGarantie(1)
    .makePlaceVisited(["volta redonda","santa rita do sapucai"])
    .makeKmPerLiter(13)
    .makeOdometer(200000)
    .build();
const uno = new CarBuilder("uno")
    .makeManufacturer("FIAT")
    .makeNew()
    .makePowerOfHorses(300)
    .makeNumberOfDoors(2)
    .makeKmPerLiter()
    .build();
const pallio = new CarBuilder("pallio")
    .makeManufacturer("FIAT")
    .makeNew(5)
    .makePowerOfHorses(250)
    .makeNumberOfDoors(4)
    .makeKmPerLiter(8)
    .build();

console.log(gol.toString());
console.log(uno.toString());
console.log(pallio.toString());