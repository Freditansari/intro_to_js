// arrow functions
// classic functons 
// declrataion 
// arguments
// return value


class Car{
    constructor(manufacturer, make, productionYear, isActive){
        this.manufacturer= manufacturer, 
        this.make = make,
        this.productionYear = productionYear,
        this.isActive = isActive
    }

    isToyota(){
        if(this.manufacturer === "toyota"){
            return true
        }
        return false
    }

    returnName(){
        return this.manufacturer + " " + this.make
    }
}

let car = new Car("nissan", "Sentra", 1984, true)

console.log(car)
console.log(car.isToyota())


console.log(car.returnName())