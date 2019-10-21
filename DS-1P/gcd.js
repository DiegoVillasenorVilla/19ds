//complejidad O(n)
//MCD == gcd
function MCD(){
      var a=prompt("Inserte un numero:")
      var a2=parseInt(a)
      var b=prompt("Inserte otro número:")
      var b2=parseInt(b)

      var r=0;
      while(a2%b2 != 0)
      {
          r = a2%b2;
          a2=b2;
          b2=r;
      }
      return console.log('Maximo Comun Divisor= '+b2);
  }
  console.log(MCD())

