var BTN = document.getElementById("myButton")

vat doSomething = function(event){
    alert("Praise me!")
    console.log(event)
}

for(var i = 0; i < 3; i++){
    var newBTN = BTN.cloneMode(true)
    document.body.append(newBTN);
    newBTN.addEventListener("click", doSomething)

}

alert("PLEASE LET IT WOk!!!")