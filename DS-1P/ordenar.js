//si esta ordenado devolver true(orden ascendente)
//si no devolver false
let array=[5,6,3,7,34]
let newarray=[]
function VarBur(i,m){
 t=array[i]
 array[i]=array[m]
 array[m]=t
}
for(i=1;i<=array.length;i++)
{
    
    if(array[0]>array[1]){
        
        array[1]=array[0]
        
    }
    else if(array[1]>array[2]){
        
        array[2]=array[1]
        
        console.log(array)
    }

    

}