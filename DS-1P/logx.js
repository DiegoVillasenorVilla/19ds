//base b
var x=prompt("Introduce un numero que sea la base del logaritmo:")
var y=prompt("Introduce la cantidad de numeros a usar")
function GetResult(x,y){
   
    return Math.log(y)/ Math.log(x)
}

for(n=1;n<=y;n++)
{
  console.log("Log"+x+" de "+n+ "="+GetResult(x,n))
}
