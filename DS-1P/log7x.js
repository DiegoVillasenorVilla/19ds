//base 7
//imprimir tabla de logaritmo base 7 con x de valor 1 al 10
x=7
function ObtenerBase(x,y)
{
  
 return Math.log(y)/ Math.log(x)
}
for(n=1; n<11;n++){
    console.log("Log7 de "+ n + " = "+ObtenerBase(x, n))
}
