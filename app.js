function Add(){
    var x = Number(document.getElementById('num1').value)
    var y = Number(document.getElementById('num2').value)
    var z = x+y
    z=z.toFixed(2)
    document.getElementById('result').innerHTML= `<h3>Result : `+z+`</h3>`
    
}
function Sub(){
    var x = Number(document.getElementById('num1').value)
    var y = Number(document.getElementById('num2').value)
    var z = x-y
    z=z.toFixed(2)
    document.getElementById('result').innerHTML= `<h3>Result : `+z+`</h3>`
    
}
function Div(){
    var x = Number(document.getElementById('num1').value)
    var y = Number(document.getElementById('num2').value)
    var z = x/y
    z=z.toFixed(2)
    document.getElementById('result').innerHTML= `<h3>Result : `+z+`</h3>`
    
}
function Multi(){
    var x = Number(document.getElementById('num1').value)
    var y = Number(document.getElementById('num2').value)
    var z = x*y
    z=z.toFixed(2)
    document.getElementById('result').innerHTML= `<h3>Result : `+z+`</h3>`
    
}