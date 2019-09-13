let n=prompt("Introduce un numero para hacer la factorizacion: ")
function factorization () {
    
    var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; //1*1 1*2 2*3 6*4 24*5 ...
	}
	return total; 
}
console.log(n+"!="+factorization())