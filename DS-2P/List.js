

    
class Nodo
{
   constructor(o)
    {
     this.data=o
     this.next=null
    }
     
}
    var n1=new Nodo(1) //Se crean cierta cantidad de nodos
    var n2=new Nodo(2)
    var n3=new Nodo(3)
    var n4=new Nodo(4)
    var n5=new Nodo(5)
    var n6=new Nodo(6)
    class List
    {
        constructor(f,s) //Head=primer nodo  Tail=ultimo nodo
        {
            this.head=f 
            this.tail=s
            this.head.next=this.tail
            this.size=2//tamaño de la lista
        }
        insertH(f){
            f.next=this.head
            this.head=f//referenciamos nodo sigunete
           this.size++
        }
        insertT(f){
            this.tail.next=f
            this.tail=f//insertamos nodo al finañ
            this.size++
        }
        siz(){
            return this.size//regresa tamaño
        }
        deleteH(){
            let variable=0
            variable=this.head.next//se referncia el nuevo nodo cabeza 
            this.head.next=null
            this.head=variable//se establece nuevo nodo cabeza
            this.size--
    
        }
        deleteT(){
            let nxt=this.head
            for (var i=0;i<(this.size-2);i++){
                nxt=nxt.next
                
            }
            this.tail=nxt
            this.tail.next=null
            this.size--
        }
        toString(){//imprim los data
            let f=[]
            let h=this.head
            for(var i=0;i<this.size;i++){
                f.push(h.data)
                h=h.next
            }
            return f
        }
    }
   (function LinkedList()
   {
    
     let l1=new List(n1,n2)
     l1.insertH(n3)
     console.log(l1.toString())
     l1.insertT(n4)
     console.log(l1.toString())
     l1.deleteH()
     console.log(l1.toString())
     console.log(l1.siz())
   })()