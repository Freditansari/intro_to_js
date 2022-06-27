// if then else 

let customer_age = 28;

if(customer_age == 25){
    console.log("age is equal to 25")
}else {
    console.log("age is not 25")
}

if (customer_age< 25){
    console.log("age is less than 25")
}else if(customer_age > 25){
    console.log("age is older than 25")
}


// for loop
// declare counter varibale value 0 
// if the counter <= 10 then run the code block
// the will add 1 to the counter 
// i++ = i = i + 1
for(let i = 0; i <=9; i++){
    if(i === 7){
        console.log(" this is counter number " + i)
    }
    
}

// while loop
let whileCounter = 0

while(whileCounter <10){
    console.log("while counter : " + whileCounter)
    whileCounter++
}

// ternary operator
customer_age=16;
let isUserAdult= customer_age>=18?true:false

console.log(isUserAdult)