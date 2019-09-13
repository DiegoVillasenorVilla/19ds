//Permutacion sin repeticion
//Formula n! / (n-r)!
let n=prompt("Introduce un valor total:")
let n1=parseInt(n)
let r=prompt("Introduce el valor del grupo:")
let r1=parseInt(r)
let rest=n1-r1
let al=rest
function factorization () {
    
    var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; //1*1 1*2 2*3 6*4 24*5 ...
	}
	return total; 
}
function factorizationTWO(){
    let t=1
    for(a=1; a<=al;a++)
    {
      t= t*a;
    }
    return t
}

var div= factorization()/factorizationTWO()
console.log("Resultado de la Permutacion sin repeticion: ",div);