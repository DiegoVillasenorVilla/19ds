var points = [1,2,3,4,5,5,6,6,7,8];

function repe(x){
    var x = x.sort(function(a, b){return a-b});
    var iguales = false;
    for(c1 = 0; c1 < x.length; c1++){
        if(x[c1]==x[c1+1])iguales = true

    }
    return iguales;
}

repe(points)