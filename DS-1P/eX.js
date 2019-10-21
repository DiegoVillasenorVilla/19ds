function F(fact){
    let res = 1;
    for(let i = 1 ; i <= fact ; i++){
        res = res * i;
    }
    return(res);
}

// e^x = 1 + x + x^2/2! + x^3/3!...   10 term
function euli(x){
    let res = 1;
    for(let i = 1 ; i <= 10 ; i++){
        res = res + Math.pow(x,i)/F(i)
    }
    return (res);

}