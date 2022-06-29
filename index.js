let data=[
    {productName: "banana", price: 100, qty: 2, subtotal: 200},
    {productName: "dragon fruit", price: 150, qty: 1, subtotal: 150},
    {productName: "screwdriver", price: 10, qty: 1, subtotal: 10.10},
]
let isAscended = true 

// https://www.javascripttutorial.net/javascript-array-sort/
function sortTable(key){
    // this method works with number only
    let sortedData
    if(isAscended=== true){
        sortedData = data.sort((x,y) =>{
            return x[key] - y[key]
        })
        isAscended= false
    }else{
        sortedData = data.sort((x,y) =>{
            return  y[key] - x[key]
        })
        isAscended=true
    }
    renderTable(sortedData)
}

function renderTable(data){
    
    let tableColumnsDefinition = Object.keys(data[0])
    let tableHeader=""

    this.data = data

    tableColumnsDefinition.forEach((tableName)=>{
        tableHeader+= `<th scope="col" onclick="sortTable('${tableName}')">${tableName}</th> \n` 
    }) 

    let tableBody= ""
    data.forEach( row =>{
        tableBody+= "<tr>\n";
        // console.log(row)
        tableColumnsDefinition.forEach((tableName)=>{
            tableBody+= `<td>${row[tableName]}</td>\n`
        })
        tableBody+="</tr>\n"
    })


    let tableDefinition=`
        <table class="table table-hover">
        <thead>
        <tr>
           ${tableHeader}
        </tr>
        </thead>
        <tbody>
            ${tableBody}
        </tbody>
    </table>
    `

    document.getElementById("grid-table").innerHTML=tableDefinition
    return tableDefinition

}



renderTable(data)

