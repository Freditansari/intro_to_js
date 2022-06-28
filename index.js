let counter = 0 
const changeColor = () =>{
    if(counter === 0 ){
        document.getElementById("helloColor").style="color: red"
        counter =1
    }else if (counter ===1){
        document.getElementById("helloColor").style="color: black"
        counter =0
    }
    
}
