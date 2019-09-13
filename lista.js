var points = [1,2,3,4,5,5,6,6,7,8];

function LIS(x){
    var x = x.sort(function(a, b){return a-b});
    var lista = new Array
    var contador = 0;
    for(c1 = 0; c1 < x.length; c1++){
        var iguales = 1;
        if(x[c1]==x[c1+1]){
            for(c2 = c1+1; c2 < x.length; c2++){
                if(x[c1]==x[c2]) iguales++;
            }
        }
        lista[contador] = iguales;
        lista[contador+1] = x[c1];
        contador = contador + 2;
        c1 = c1 + iguales -1;
    }
    return lista;
}

console.log(LIS(points))
