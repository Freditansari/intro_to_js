let shoppingCarts=[
    {productName: "banana", price: 100, qty: 2, subtotal: 200},
    {productName: "dragon fruit", price: 150, qty: 1, subtotal: 150},
    {productName: "screwdriver", price: 10, qty: 1, subtotal: 10.10},
]

const sumTotal = shoppingCarts
.reduce((prevValue, currentValue)=>{
    return prevValue + currentValue.subtotal
},0);
console.log(sumTotal)