//Formula sen X
function fact(fa) //Factorial 
{
    let res = 1;
    for(let i = 1 ; i <= fa ; i++)
    {
        res = res * i;
    }
    return(res);
}


//Sen x = x - x^3/3! + x^5/5!
function senx(x){
    let res = x;
    for(let i = 3 ; i <= 7 ; i=i+4)
    {
        res = res - Math.pow(x,i)/fact(i)
    }
    for(let i = 5 ; i <= 9 ; i=i+4)
    {
        res = res + Math.pow(x,i)/fact(i)
    }
    return(res)
}

   

   
