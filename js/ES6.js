//ES6 

// Ecmascript es the lenguage and javascript de dialect 


let multiplos = [];
let difference = 0;
let grades = [67,70];

for(let i = 0; i<=100; i += 5){
    multiplos.push(i);
}

for(let i = 0; i<grades.length; i++){
    let nota = grades[i];
    if(nota >= 38){
        for(let j = 0; j<multiplos.length-1; j++){
            if(nota > multiplos[j] && nota < multiplos[j+1]){
                console.log(nota+" esta entre: "+multiplos[j]+" y "+multiplos[j+1]+" ");
                console.log("la diferencia es: "+(multiplos[j+1] - nota));
            }
        }
    }
}

function sockMerchant() {

    ar = [1,1,2,3,1,2,3,1,2,3,1]
    let myMap = new Map();
    let repeticiones = 0;

    for(let i = 0; i< ar.length; i++){
        myMap.set(ar[i],0);
    }
    
    for(let i = 1; i<myMap.length; i++){
        for(let j = 0; j<ar.length; j++){
            if(myMap.has(arr[i]) == ar[j]){
                repeticiones++;
                console.log(repeticiones);
            }
        }
    }

}


console.log(grades);
sockMerchant();

