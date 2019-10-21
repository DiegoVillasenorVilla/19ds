class Fibonacci{
    constructor(k) 
    {
        this.position = k;
        this.cost = 0;
    }
    Value(n=this.position)
    {
        this.cost++;
        if(n < 2)
           return n
        else
           return (this.Value(n - 1) + this.Value(n - 2))
    }
    Costo(n=this.position)
    {
        this.cost = 0;
        this.Value(n)
        return this.cost
    }
    VectorSuccesion(n=this.position)
    {
        let Sucesion = []
        for(let i = 0; i <= n; i++)
            Sucesion.push(this.Value(i))
        return Sucesion
    }
    VectorTable(n=this.position)
    {
        let TabS = '', table = [];
        let CostT = this.Costo(n)

        table[0] = []
        table[1] = []

        for(let i = 0; i < CostT; i++)
            table[0].push(i+1);

        table[1] = this.VectorSuccesion(n)
    
       

        return table;
    }
}

(function()
{
    let Fiboexample = new Fibonacci(4)
    console.log(Fiboexample.Value())
    console.log(Fiboexample.Costo())
    console.log(Fiboexample.VectorSuccesion())
    console.log(Fiboexample.VectorTable())
})()