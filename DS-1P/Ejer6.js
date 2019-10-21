// S3
//Con ciclo al cuadrado sumar del 1 al 10
var alm = 0

for(x=1;x<=10;x++){
   
    operation=Math.pow(x,2)
    alm += operation
    
    
}

console.log("Resultado con ciclo: " + alm)
//Ahora con formula
n=10
function AlCuadrado(n){
    return n*(n+1)*(2*n+1)/6
}
console.log("Resultado con formula: "+ AlCuadrado(n))