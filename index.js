// 

document.getElementById("cell-1").setAttribute('class','table-primary')
// document
// .getElementById("main-table")
// .setAttribute('class', 
// 'table table-primary')

document.getElementById("cell-1").innerHTML=""
document.getElementById("cell-1").innerHTML="New Value"


let updateValue = () =>{
    let value = document.getElementById("text-input").value
    document.getElementById("cell-1").innerHTML=value
}

