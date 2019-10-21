class Factorial
{
    constructor(k)
    {
        this.cost = 0;
        this.pos = k;
        this.val = this.value(k)
    }

    value(k=this.pos)
    {
        
        this.cost++;
        if(k == 0)
            return 1
        return (k * this.value(k-1))
    }    
    
    Costo(k=this.pos)
    {
        
        this.cost = 0;
        this.value(k)
        return this.cost;
    }

    VectorSuccesion(k=this.pos)
    {
      
        var SucesionF = []
        for(let i = 1; i <= k; i++)
            SucesionF.push(this.value(i))
        return SucesionF
    }

    VectorTable(k=this.pos)
    {
        
        var ToString = '', Matrix = [];
        let Matrixcost = this.Costo(k)

        Matrix[0] = []
        Matrix[1] = []

        for(let i = 0; i < Matrixcost; i++)
            Matrix[0].push(i+1);

        Matrix[1] = this.VectorSuccesion(k)
        
        return Matrix;
    }
}

(function()
{
    let newFac = new Factorial(8)
    console.log(newFac.value())
    console.log(newFac.Costo())
    console.log(newFac.VectorSuccesion())
    console.log(newFac.VectorTable())
})()

