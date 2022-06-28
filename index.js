let customers = ["Joe", {customerName: "Sue", age: 22}, 15, 15.60];

// console.log(customers[1])

for(customer in customers){
    console.log(customers[customer])
}