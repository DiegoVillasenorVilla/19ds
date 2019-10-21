class Vector  //Un vector es lo mismo que un arreglo o array
{
    constructor(cant) 
    {
        var array = new Array(cant);
        var i=0
      for ( i; i < cant; i++) 
        {
            array[i] = i;
        
        }
        this.array = array;
    }

    getVector() //Imprime el array creado al inicio
    { 
        return this.array;
    }

    sum(b) //Suma de dos vectores
    {
        var newsum = [];
        if (b.length == this.array.length) 
        {
            for (var i = 0; i < this.array.length; i++) 
            {
                newsum[i] = this.array[i] + b[i];
            }
            return newsum;
        } else 
        {
            return "Los tamaños de los vectores no coinciden(deben ser iguales)"
        }
    }


    subt(b)  //Resta de dos vectores
    {
        let newsubt = [];
        if (b.length == this.array.length) 
        {
            for (let i = 0; i < this.array.length; i++) 
            {
                newsubt[i] = this.array[i] - b[i];
            }
            return newsubt;
        } else 
        {
            return "Los tamaños de los vectores no coinciden(deben ser iguales)"
        }
    }

    


    mult(b) //Multiplica dos vectores
    {
        let newmul = [];
        if (b.length == this.array.length) 
        {
            for (let i = 0; i < this.array.length; i++) 
            {
                newmul[i] = this.array[i] * b[i];
            }
            return newmul;
        } else 
        {
            return "Los tamaños de los vectores no coinciden(deben ser iguales)"
        }
    }
}