class Graph {
    constructor() {
        this.arista = {};
        this.vertices = [];
        this.numeroAristas = 0;
        this.numeroVertices = 0;
        this.multigrafo=false;
        this.conjuntos=new Array();
    }

    addVertex(vertice) {
        this.vertices.push(vertice);
        this.arista[vertice] = [];
        this.numeroVertices++;
    }

    addEdge(v1, v2) {
        this.arista[v1].push({
            vertice: v2
        });
        this.arista[v2].push({
            vertice: v1
        });
        //extra  
        if(!this.conjuntos[this.numeroAristas]){this.conjuntos[this.numeroAristas]=[];
            this.conjuntos[this.numeroAristas][0]=v1;
            this.conjuntos[this.numeroAristas][1]=v2;}
        this.numeroAristas++;
        if(v1===v2){
            this.multigrafo=true;
        }

    }


    printGraph() {
        let graph = "";
        this.vertices.forEach(vertice => {
            graph += vertice + " -> " + this.arista[vertice].map(n => n.vertice).join("-") + "\n";
        });
        console.log(graph);
    }

    isComplete() {
        let R = false;
        let A = (this.numeroVertices * (this.numeroVertices - 1)) / 2;
        if (this.numeroAristas === A) {
            R = true;
        } else R = false

        return R;

    }

    isMultigraph() {

        return this.multigrafo;

    }

    nombres(g){
        let resultado=false;
        for(let i=0;i<this.vertices.length;i++){
            if(this.vertices[i]==g.vertices[i]){
                resultado=true;
            }else {resultado=false;}
        }

        return resultado;
    }

    pares(g){
        let res=false;
        for(let i=0;i<this.numeroAristas;i++){
            for(let k=0;k<2;k++){
            if(this.conjuntos[i][k]===g.conjuntos[i][k]){
                res=true;
            }else {res=false;
}
            }}
        
                return res;

    }
    isSubgraph(graph) {
        let result=false;
        if(this.pares(graph)===this.nombres(graph)){
            result=true
        }
        return result;
    }
    isDirected()  //Saber si es un grafo dirigido u digrafo =>Tienen relacion con las matrices simetricas
    {
        let vertice= this.vertices
        let Arr=[vertice]
        for(i=0;i<Arr.length;i++){
            
        }
    }

}


var grafo2 = new Graph(3);
var vertices2 = ['1', '2', '3', '4'];
for (var i = 0; i < vertices2.length; i++) {
    grafo2.addVertex(vertices2[i]);
}
grafo2.addEdge('1', '2');
grafo2.addEdge('2', '3');
grafo2.addEdge('3', '4');
grafo2.addEdge('4', '1');
grafo2.addEdge('1', '3');
grafo2.addEdge('4', '2');

grafo2.printGraph();
console.log(grafo2.isComplete());
console.log(grafo2.isMultigraph());
console.log(grafo2.isSubgraph(grafo));

//Resultado:
//1 -> 2-4-3
//2 -> 1-3-4
//3 -> 2-4-1
//4 -> 3-1-2
//true
//false
//true






