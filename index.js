



const car= {
    manufacturer: "toyota",
    make: "Corolla", 
    productionYear: 1984,
    isActive: true,
    isToyota : function (){
        if(this.manufacturer==="toyota"){
            return true
        }
        return false
    }
}

class Car {
constructor(manufacturer, make, productionYear, isActive){
    this.manufacturer = manufacturer, 
    this.make= make, 
    this.productionYear= productionYear, 
    this.isActive = isActive
}

    isToyota(){
        if(this.manufacturer==="toyota"){
            return true
        }
        return false
    }

    returnName(){
        return this.manufacturer + " "+ this.make
    }
}


console.log(car.isToyota());

newCar = new Car("Nissan", "Trueno", "1986", true)
console.log(newCar.isToyota())
console.log(newCar)
console.log(newCar.make)