class Graph{
    constructor(){
        this.list = {};
    }

    addVertex(name){
        if(!this.list[name]){
            this.list[name] = [];
            return true;
        }
        else
            return false
    }

    addEdge(vertex1,vertex2){
        this.list[vertex1].push(vertex2);
        this.list[vertex2].push(vertex1);
    }
}

let g = new Graph;

console.log(g.addVertex("maen"));
console.log(g.addVertex("maen"));
console.log(g.addVertex("jamal"));
console.log(g.addVertex("tyma"));

g.addEdge("maen","jamal");

console.log(g);
