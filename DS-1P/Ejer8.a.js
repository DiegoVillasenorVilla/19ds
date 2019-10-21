//4.a a=2
var Save=0
let a=2
rep=prompt("¿Cuantas veces quieres que se repita el ciclo?")
for(var i=1; i<=rep;i++)
{
   form= Math.pow(a,i)
   Save+=form
   
}
console.log("Resultado con ciclo ", Save)
// Sin ciclo y  Con formula  => s5 = 1 + a + a^2 ... = ((a^(n+1))-1)/(a-1) ; a != 1
var rep2=parseInt(rep) //n = Int
var rep3=rep2+1 //n+1
let form1=((Math.pow(a,rep3))-1)/(a-1)

console.log("Resultado con formula: "+form1)
