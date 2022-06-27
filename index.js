let customers=["Joe", {customerName: "joe", age: 43}, 25.4, 1]

console.log(customers)

console.log(customers[2])

for(customer in customers){
    // console.log(customer)
    if(customers[customer]==="Joe"){
        console.log(customers[customer])
    }
    
}