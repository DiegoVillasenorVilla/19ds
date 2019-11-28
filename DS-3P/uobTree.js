
class Node
{
    constructor(data,left=null,right=null)
    {
        this.data=data //dato
        this.left=left  //izquierda
        this.right=right //derecha
        
    }

}
class ubbTree   //Caracteristicas => unsorted, binary, balanced
{
    constructor()
    {
        this.root=null

    }
    insert(data)
    {
      var noderoot=this.root //sera la raiz
      if(noderoot==null)     //Si no tiene ningun valor crea la raiz
      {
        this.root= new Node(data) 
        return
      }
      else                  //Si ya se creo entonces crea un nuevo nodo hijo   
      {
        var searchTree=function(node){  //Crea una variable para buscar en el arbol los nodos hijos
            if(data<node.data)  //si el valor es menor
            {
                if(node.left==null){
                    node.left=new Node(data)
                    return
                } else if(node.left !=null)
                {
                   return searchTree(node.left)
                }
            } else if(data>node.data)  //Si el valor es mayor
            {
                 if(node.right==null)
                {
                     node.right=new Node(data)
                     return
                } else if(node.right !=null)
                {
                    return searchTree(node.right)
                }
            } else 
            {
                return null
            }
        }
        return searchTree(noderoot) //retorna la raiz y sus nodos hijos
      }
    }
    
   remove(data)
    {
        var removeNode= function(node, data){
            if(node==null){
                return null
            } 
            if(data ==node.data){
                //cuando no tiene hijos
                if(node.left==null && node.right==null){
                    return null
                }
                //cuando el nodo no tiene hijos en la izquierda
                if(node.left==null){
                    return node.right
                }
                //Cuando el nodo no tiene hijos en la derecha
                if(node.right==null){
                    return node.left
                }
                //cuando tiene dos hijos
                var tempNode = node.right
                while(tempNode.left !=null){
                    tempNode=tempNode.left
                }
                node.data=tempNode.data
                node.right=removeNode(node.right, tempNode.data)
                return node
            } 
            
        }
        this.root= removeNode(this.root,data)

    }
    preorder(node = this.root)
    {
     
     if (node.data !== null) 
     {
        console.log(node.data);
     }
     if (node.left !== null) 
     {
       this.preOrder(node.left);
     }
     if (node.right !== null) 
     {
      this.preOrder(node.right);
     }
    }
   bft()
    {
        
     let node = this.root;
     let arr = [node];
     let arrF = []
    
     while (arr.length) 
     {
        node = arr.shift()
        if (node.left) arr.push(node.left)
        if (node.right) arr.push(node.right)
        arrF.push(node.data)
        
     }
     return arrF
      
        
        
    }

}


const Bin= new ubbTree()
Bin.insert(5)
Bin.insert(7)
Bin.insert(6)
Bin.insert(4)
Bin.insert(3)
console.log(Bin)   
                  //    5
               //   /      \
               //   4      7
               //  / \    /\
               //  3      6
console.log(Bin.bft())
                      // [5,4,7,3,6]