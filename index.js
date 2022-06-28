let shoppingCarts=[
    {productName: "banana", price: 100, qty: 2, subtotal: 200},
    {productName: "dragon fruit", price: 150, qty: 1, subtotal: 150},
    {productName: "screwdriver", price: 10, qty: 1, subtotal: 10.10},
]

const filtered = shoppingCarts.filter((item) => item.price <=50 )

console.log(filtered)