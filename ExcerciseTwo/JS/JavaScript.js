let boton = document.getElementById('boton');
let section = document.getElementById('section');
let boton3 = document.getElementById('boton3');


boton.addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let cantidad = CantidadMayusculas(inputText);
    section.innerHTML = "Usted ingreso: " + cantidad + " Mayusculas";
})

var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function CantidadMayusculas(cadena){
    let contar = 0;
    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
        if(cadena[x]==mayusculas[i]){
            contar+=1;
            }
        }
    }
    return contar;
}

// EJERCICIO 2

var arreglo = new Array(1, 2, 3, 4, 5, 7);

console.log("El arreglo sin sumar: " + arreglo);

var newArreglo = new Array();

for (var indice in arreglo) {
    newArreglo[indice] = arreglo[indice]+1;
}

console.log("El arreglo sin sumar: " + arreglo);
console.log("El arreglo sumado: " + newArreglo);

// EJERCICIO 3

boton3.addEventListener('click', function() {
    let number = prompt('Ingrese un numero');
    var arrayNumbers = new Array();
    for(let i=0; i<number; i++){
        arrayNumbers.push(Math.floor(Math.random() * (100 - 0) + 0));
    }
    console.log("El arreglo de numeros aleatorios es: " + arrayNumbers);
})

// EJERCICIO 4

var arreglo = new Array(4, 2, 5, 1, 3);

function orederArray (arreglo){
    arreglo.sort(function(a, b) {
        return a - b;
      });
      console.log(arreglo);
}

// EJERCICIO 5

var arr1= new Array(1,2,4,6,7,8);
var arr2= new Array(1,2,4,5,6,7,8);
var arr3 = arr1.concat(arr2);

orederArray(arr3);