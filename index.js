let customers=[ 
    {customerName: "Joe", age: 43},
    {customerName: "Alex", age: 22} 
]

// let newCustomer = {customerName: "Brianna", age: 24}

let newCustomer = [{customerName: "Brianna", age: 24},
 {customerName: "Diane", age: 34}]

// let newCustomersList = customers.concat(newCustomer)

//ES-5 2009 version javascript
let newCustomersList = customers.concat(newCustomer);

console.log(newCustomersList)

// Es- 6 2015 v js: 

let newCustomersList2 = [...customers, ...newCustomer]

console.log(newCustomersList2)