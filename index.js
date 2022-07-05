let tableHeaders = ""

let onloadFunc =() =>{
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json())
        .then((json) =>{
            let tableColumnHeaders = Object.keys(json[0])
            tableColumnHeaders.forEach((header)=>{
                tableHeaders += `<th scope="col">${header.toUpperCase()}</th> \n`
            })

            document.getElementById('table-header').innerHTML= tableHeaders
            let tableBody = ""
            let counter = 0
           json.forEach((item)=>{
                tableBody+='<tr>'
                tableColumnHeaders.forEach(tableHeader =>{
                    tableBody+=
                    `
                        <td id ="cell-${counter}">${item[tableHeader]} </td>\n
                    `
                    counter ++
                })
                tableBody += '</tr>'
            })
            document.getElementById('table-rows').innerHTML=tableBody
            
        });
}

window.onload=onloadFunc