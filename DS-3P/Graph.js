class Graph {
    constructor() {
        this.aristas= {};
        this.vertices = [];
        this.numeroAristas = 0;
        this.numeroVertices = 0;
        this.multigrafo=false;
        this.conjuntos=new Array();
    }

    addVertex(vertice) {
        this.vertices.push(vertice);  //push para agregarle valores
        this.aristas[vertice] = [];   //se crea un arreglo
        this.numeroVertices++;        // va aumentando el numero de vertices con el ++
    } 

    addEdge(v1, v2) {
        this.aristas[v1].push({
            vertice: v2
        });
        this.aristas[v2].push({
            vertice: v1
        });
        if(!this.conjuntos[this.numeroIndices]){this.conjuntos[this.numeroIndices]=[];
            this.conjuntos[this.numeroIndices][0]=v1;
            this.conjuntos[this.numeroIndices][1]=v2;}
        this.numeroIndices++;
        if(v1===v2){
            this.multigrafo=true;
        }
    }


    printGraph() {
        let g = "";
        this.vertices.forEach(vertice => {
            g += vertice + " -> " + this.aristas[vertice].map(n => n.vertice).join("-") + "\n";
        });
        console.log(g);
    }

    isComplete() {
        let R = false;
        let aux = (this.numeroVertices * (this.numeroVertices - 1)) / 2;
        if (this.numeroAristas === aux) {
            R = true;
        } else R = false

        return R;

    }

    isMultigraph() {

        return this.multigrafo;

    }

    nombres(g){
        let result=false;
        for(let i=0;i<this.vertices.length;i++){
            if(this.vertices[i]==g.vertices[i]){
                result=true;
            }else {result=false;}
        }

        return result;
    }

    pares(g){
        let result=false;
        for(let i=0;i<this.numeroAristas;i++){
            for(let k=0;k<2;k++){
            if(this.conjuntos[i][k]===g.conjuntos[i][k]){
                result=true;
            }else {result=false;
}
            }}
        
                return result;

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
        
    }

}

var newgraph = new Graph(6);
var ver = ['1', '2', '3', '4', '5', '6'];
for (var n= 0; i < ver.length; n++) {
    newgraph.addVertex(ver[n]);
}

newgraph.addEdge('1', '2');
newgraph.addEdge('2', '3');
newgraph.addEdge('3', '4');
newgraph.addEdge('4', '1');
newgraph.addEdge('1', '3');
newgraph.addEdge('4', '2');
newgraph.addEdge('3', '6');
newgraph.addEdge('5', '6');

newgraph.printGraph();
console.log(newgraph.isComplete());
console.log(newgraph.isMultigraph());
/*
Resultado:
1 -> 2-4-3
2 -> 1-3-4
3 -> 2-4-1-6
4 -> 3-1-2
5 -> 6
6 -> 3-5
false
false
*/

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
console.log(grafo2.isSubgraph(newgraph));

//Resultado:
//1 -> 2-4-3
//2 -> 1-3-4
//3 -> 2-4-1
//4 -> 3-1-2
//true
//false
//true



var grafo3 = new Graph(2);
var vertices3 = ['1', '2'];
for (var i = 0; i < vertices3.length; i++) {
    grafo3.addVertex(vertices3[i]);
}
grafo3.addEdge('1', '1');
grafo3.addEdge('1', '2');

grafo3.printGraph();
console.log(grafo3.isComplete());
console.log(grafo3.isMultigraph());
console.log(grafo3.isSubgraph(newgraph));

//1 -> 1-1-2
//2 -> 1
//false
//true

var grafo4= new Graph(4)
var vertices4=['11','22','33','44']
for(var e=0;e<vertices4.length;e++){
    grafo4.addVertex(vertices4[e]);

}
grafo2.addEdge('11', '22');
grafo2.addEdge('22', '33');
grafo2.addEdge('33', '44');
grafo2.addEdge('44', '11');
grafo2.addEdge('11', '33');
grafo2.addEdge('44', '22');
grafo4.printGraph()
console.log(grafo4.isComplete())
console.log(grafo4.isMultigraph())
console.log(grafo4.isSubgraph(newgraph))