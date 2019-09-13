//S5
//Exponenciar el exponente, ingresar los otros numeros con prompt
var G=0
i= prompt("Introduce el numero con el que quieres empezar:")
v=prompt("¿Hasta que numero quieres que se realize el ciclo?")

for(i;i<=v;i++){
    c=i //Var c sera igual a cada numero del ciclo, c sera la exponencial
    al=Math.pow(i,c)
    G+=al
}
console.log("Resultado con ciclo: "+ G)
//Con formula  => s5 = 1 + a + a^2 ... = ((a^(n+1))-1)/(a-1) ; a != 1

var v2=parseInt(v)
var v3=v2+1
var v4=((Math.pow(v2,v3))-1)/(v2-1)

console.log("Resultado sin ciclo: ",v4)



