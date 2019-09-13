//Minimo comun multiplo => Cuadratica
var n1=prompt("Introduce el valor del primer numero:")
var n2=prompt("Introduce el valor del segundo numero:")
n1=Math.abs(n1) //retorna el valor absoluto de n1
n2=Math.abs(n2) //retorna el valor absoluto de n2
nw1=n1 //aqui se mantendra el valor original
nw2=n2//aqui se mantendra el valor original
mcm=1
div=2
while(div<=n1 || div<=n2){
    while((div<=n1 && n1%div==0)||(div<=n2 && n2%div==0)){
        mcm=mcm*div
       
        if( div<=n1 && n1%div==0)
        n1=n1/div
        
        if(div<=n2 && n2%div==0)
        n2=n2/div
        
    }
    div=div+1
    
}
console.log("El minimo comun multiplo entre ", nw1 ," y " ,nw2, " es: ",mcm)