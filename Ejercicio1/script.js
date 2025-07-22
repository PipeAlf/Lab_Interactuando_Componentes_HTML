let DisG=0;
let JS=0;
let BD=0;
let contV=0;

function contDis(){
    DisG ++;
    contV ++;
    document.getElementById("contadorDG").textContent = DisG;
    alert("Gracias por tu voto!");
    if(contV % 5 === 0){
        console.log("El total acumulado de votos es de: ");
        console.log("Diseño gráfico: ", DisG);
        console.log("JavaScript: ", JS);
        console.log("Bases de datos: ", BD);
    }
}

function contJava(){
    JS ++;
    contV ++;
    document.getElementById("contadorJS").textContent = JS;
    alert("Gracias por tu voto!");
    if(contV % 5 === 0){
        console.log("El total acumulado de votos es de: ");
        console.log("Diseño gráfico: ", DisG);
        console.log("JavaScript: ", JS);
        console.log("Bases de datos: ", BD);
    }
}


function contBD(){
    BD ++;
    contV ++;
    document.getElementById("contadorBD").textContent = BD;
    alert("Gracias por tu voto!");
    if(contV % 5 === 0){
        console.log("El total acumulado de votos es de: ");
        console.log("Diseño gráfico: ", DisG);
        console.log("JavaScript: ", JS);
        console.log("Bases de datos: ", BD);
    }
}

