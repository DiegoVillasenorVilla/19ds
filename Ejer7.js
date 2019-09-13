//S4
//Con ciclo, un numero con elevacion a elegir
mem=0
var exp = prompt("Selecciona el exponente")
var exp1=parseInt(exp) //exp sera Int
for(i=1;i<=10;i++){
   op=Math.pow(i,exp)
   mem+=op
  
}
console.log("Operacion realizada con ciclo: ",mem)

//Ahora con formula
let n=10
exp2=exp1+1
fin= Math.pow(n,exp2)/exp2
console.log("Operacion con formula: ", fin)