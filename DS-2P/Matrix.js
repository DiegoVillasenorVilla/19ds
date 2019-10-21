class Matrix
{
    constructor(r,c)
    {
        this.r=0
        this.c=0
    }

}
//Al final debe estar en una clase
array=[[0],[0],[0]]
//Generar numero random
function RandomArray(min,max){
    return Math.random()*(max-min)+1
}
function Matrix(){
   
   return console.log(RandomArray(3,6))
   

}
console.log(Matrix())

for(i=0;i<array.lenght;i++){
    array[i]=i
    for( j=0;j<array.lenght;j++){
       array[j]=j
    }

}
console.log(array[i][j])

