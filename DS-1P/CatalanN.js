//Es muy parecido a la combinacion pero aqui le agregamos el 2
//Formula para obtener numeros catalanes =>(2n)!/(n+1)!n!
let n=prompt("Introduce un numero para convertirlo a Número Catalan:")
let n2= parseInt(n)
let mul=2*n2
let sum=n2+1
function factorization2N () //(2n)!
{
    var m = 1; 
	for (i=1; i<=mul; i++) {
		m = m * i; //2n*1
	}
	return m; 
   
}
function Fsum() //(n+1)!
{
    var m2=1
    for(j=1;j<=sum;j++){
        m2= m2*j;
    }
  return m2;
}
function FacN() //n!
{
  var m3=1
  for(h=1;h<=n;h++)
  {
    m3=m3*h

  }
  return m3
}
var mult=Fsum()*FacN()
var div=factorization2N()/mult
console.log("Numero catalan de ", n, " es= ",div);