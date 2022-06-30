let data=[
    {productName: "banana", price: 100, qty: 2, subtotal: 200, date: new Date(2023, 1, 24) },
    {productName: "dragon fruit", price: 150, qty: 1, subtotal: 150 , date: new Date(2012, 1, 26) },
    {productName: "screwdriver", price: 10, qty: 1, subtotal: 10.10, date: new Date(2020, 11, 16)},
    {productName: "potato", price: 18, qty: 1, subtotal: 18, date: new Date(2020, 11, 16)},
]
let isAscended = true 


function showColumnNames(keys){
    let dropDownsHTML ="";
    let counter = 0
    // onchange event
    // selected value
    keys.forEach(key=>{
        if (counter === 0 ){
            dropDownsHTML+= `<option selected value=${key}>${key}</option>`
            counter ++
        }else{
            dropDownsHTML+= `<option value=${key}>${key}</option>`
            counter++
        }
   
       
    });
    return dropDownsHTML
}
// https://www.javascripttutorial.net/javascript-array-sort/
function sortTable(key){
    // this method works with number only
    let sortedData
    let dataTypeSample = typeof(data[0][key])

    if( dataTypeSample ==="number"){
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
    }else if( data[0][key] instanceof Date){

        if(isAscended === true){
            sortedData = data.sort((x,y)=>{
                let a= new Date(x[key])
                let b = new Date(y[key])
                isAscended=false
                return a-b
            })
        }else{
            sortedData = data.sort((x, y)=>{
                let a= new Date(x[key])
                let b = new Date(y[key])
                isAscended=true
                return b-a
            })
        }
    }else if (dataTypeSample==="string"){
        if(isAscended=== true){
            sortedData = data.sort((x,y) =>{
                let a = x[key].toUpperCase();
                let b = y[key].toUpperCase()
                return  a==b ?0 :a > b?1:-1
            })
            isAscended= false
        }else{
            sortedData = data.sort((x,y) =>{
                let a = x[key].toUpperCase();
                let b = y[key].toUpperCase()
                return  a==b ?0 :a < b?1:-1
            })
            isAscended=true
        }
    }
    
    renderTable(sortedData)
}

function filterTable(data){

}

function renderTable(data){
    
    let tableColumnsDefinition = Object.keys(data[0])
    let tableHeader=""

    this.data = data

    let dropdownHTML = showColumnNames(tableColumnsDefinition)

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
    <div class="row">
    <div class="col-lg-3 col-md-3 col-sm-3">
        <select class="form-select" aria-label="Default select example">
            ${dropdownHTML}
        </select>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3">
        <p> filter parameter</p>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6">
        <p> filter text goes here</p>
    </div>
  </div>
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
    </div>
    `

    document.getElementById("grid-table").innerHTML=tableDefinition
    return tableDefinition

}



renderTable(data)

