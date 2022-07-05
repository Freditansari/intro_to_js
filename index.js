let data = {
    title: "Joe Orange", 
    body: "lorem ipsum dolor amet",
    userId : 1
}

fetch('https://jsonplaceholder.typicode.com/posts',
{
    method: 'POST', 
    body: JSON.stringify(data),
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response =>response.json())
.then(json => console.log("POST :"+JSON.stringify(json)))



let dataUpdate = {
    id:1,
    title: "Foo", 
    body: "lorem ipsum dolor amet",
    userId : 1
}

fetch('https://jsonplaceholder.typicode.com/posts/1',
{
    method: 'PUT', 
    body: JSON.stringify(dataUpdate),
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response =>response.json())
.then(json => console.log("PUT: "+ JSON.stringify(json)))

fetch('https://jsonplaceholder.typicode.com/posts/1',
{
    method: 'DELETE', 

})
.then(response =>response.json())
.then(json => console.log('DELETE: '+JSON.stringify(json)))