
const randomNumber = Math.floor((Math.random() * 99) + 1);
console.log(randomNumber);

let recordList = [];

function Adivinar(){
    document.getElementById("result").innerHTML = ""
    const input = Number(document.getElementById("adivina").value);
    if (!Number.isInteger(input)){
        window.alert("Ingrese un numero Entero!");
        return;
    }
    if (input < 1 || input > 100){
        window.alert("Ingrese un numero entre 1 y 100");
        return;
    }

    let result = "";
    if (input != randomNumber){
        result = "Ups, el numero secreto es incorrecto, vuelve a intentarlo."
        recordList.push(input);
    }
    else{
        result = "Felicidades, adivinaste el numero secreto. "
        result += "<br> Tus intentos fueron: " + recordList.join(", ");
    }


    document.getElementById("result").innerHTML = `${result}`;

}
