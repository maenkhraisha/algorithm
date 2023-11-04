class Graph {
    constructor() {
        this.list = {};
    }

    addVertex(name) {
        if (!this.list[name]) {
            this.list[name] = [];
            return true;
        } else return false;
    }

    addEdge(vertex1, vertex2) {
        this.list[vertex1].push(vertex2);
        this.list[vertex2].push(vertex1);
    }

    removeEdge(v1, v2) {
        this.list[v1] = this.list[v1].filter((v) => v != v2);

        this.list[v2] = this.list[v2].filter((v) => v != v1);
    }

    removeVertex(vertex) {
        this.list[vertex].forEach((element) => {
            this.removeEdge(vertex, element);
        });
    }

    DFS_R(start) {
        let result = [];
        let visited = {};
        const list = this.list;

        (function DFSHelper(vertex) {
            if (!vertex) return null;

            result.push(vertex);
            visited[vertex] = true;

            list[vertex].forEach((neighbor) => {
                if (visited[neighbor] != true) DFSHelper(neighbor);
            });
        })(start);

        return result;
    }

    DFS_I(start) {
        let stack = [start];
        let visited = {};
        let result = [];
        let v ;

        visited[start] = true;

        while (stack.length != 0) {
            v = stack.pop();
            result.push(v);

            this.list[v].forEach(neighbor => {
                if (visited[neighbor] != true) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }

        return result;

    }

    BFS(start){
        // visiste all neighbor before moving 
        // use queue 
        // push the vertex to queue 
        // while there is somthing in the queue looop
        // remove vertex from the queue and if its not visited mark 
        // as visited and loop throught its neighbor 
        // if the neighbor is not visited add it to the queue

        let queue = [start];
        let visited = {};
        let result = [];
        let v;

        visited[start] = true;

        while(queue.length != 0){
            v = queue.shift();
            result.push(v);
            
            
            this.list[v].forEach(neighbor => {
                if(!visited[neighbor]){
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            })
        }
        return result;
    }
}

let g = new Graph();

// g.addVertex("amman");
// g.addVertex("irbid");
// g.addVertex("aqaba");
// g.addVertex("karak");
// g.addVertex("petra");
// g.addVertex("jarash");

// g.addEdge("irbid", "amman");
// g.addEdge("irbid", "jarash");
// g.addEdge("irbid", "karak");
// g.addEdge("aqaba", "karak");
// g.addEdge("petra", "karak");

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// console.log(g.DFS_R("A"));
// console.log(g.DFS_I("A"));
console.log(g.BFS("A"));