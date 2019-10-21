//Saber si el año es bisiesto  o uno normal
// Año normal=>365 days
//Año Bisiesto=>366 days
//EXAMPLES: 1996,2020,2076,3000
class Calendario
{

 MatrixPrintCalendar(m,y)
 {
     let Days = 0;
     let c = 1;
     let FirstDay = 0;


     
        let CALENDARIO = new Array(5);

        for (let i = 0; i < 5; i++) 
        {
            CALENDARIO[i] = new Array(7);
            for (let j = 0; j < 7; j++) 
            {
                CALENDARIO[i][j] = 0;
            }
        }
          //Le pasa los valores a este dia del año
          var n = this.FirstDayYear(y);
         //Se define el numero de dias dependiendo de si es año es bisiesto o no, usando la funcion creada
         if (this.YearB(y)) 
         {
            if (m == 2) 
            {
                Days = 29;
                FirstDay = (n + 31)%7;
            }
        } else 
        {
            switch (m) 
            {
                case 1:
                    Days = 31;
                    FirstDay = n;
                    break;
                case 2:
                    Days= 28;
                    FirstDay = (n + 31)%7;
                    break;
                case 3:
                    Days= 31;
                    FirstDay = (n + 59)%7;
                    break;
                case 4:
                    Days= 30;
                    FirstDay = (n + 90)%7;
                    break;
                case 5:
                    Days = 31;
                    FirstDay = (n + 120)%7;
                    break;
                case 6:
                    Days= 30;
                    FirstDay = (n + 151)%7;
                    break;
                case 7:
                    Days = 31; 
                    FirstDay = (n + 181)%7;
                    break;
                case 8:
                    Days= 31; 
                    FirstDay = (n + 212)%7;
                    break;
                case 9:
                    Days = 30; 
                    FirstDay = (n + 243)%7;
                    break;
                case 10:
                    Days= 31; 
                    FirstDay = (n + 273)%7;
                    break;
                case 11:
                    Days= 30;
                    FirstDay = (n + 304)%7;
                    break;
                case 12:
                    Days= 31;
                    FirstDay = (n + 334)%7;
                    break;
                default:
                    Days= "Undefined"
                    break;
            }
        
      
        for (let i = 0; i < 5; i++) 
        {
            if (i == 0) 
            {
                for (let j = FirstDay; j < 7; j++) 
                {
                    CALENDARIO[i][j] = c;
                    c++
                }
            } else 
            {
                for (let j = 0; j < 7; j++) 
                {
                    //Llenado de la matriz con un contador del 1 hasta el # de días del mes
                    if (c <= Days) 
                    {
                        CALENDARIO[i][j] = c;
                        c++;
                    }
                }
            }

        }
        return CALENDARIO;
    }

 }
  
 YearB(y)
 {
    if(y%4==0||y%400==0)
    {
        return true
    
    }
    else
    { //año%100
     return false
    }
 }
 dayPlus(d, n) 
 {
    return (d + n) % 7//aplicamos modulo 7 para el total de dia
 }



 FirstDayYear(y) // y= Year
 {
    //Determine the first day in each year: 2000, 2019, 2020,2076, 3000
    //Formula x=(y+floor((y-1)/4)-floor((y-1)/100))+floor((y-1)/400)) mod 7
    return ((y +Math.floor((y-1)/4)-Math.floor((y-1)/100)+Math.floor((y-1)/400))%7)
 }


}
