// Find if Path Exists in Graph

class Graph
{
    constructor(V)
    {
        this.V = V;
          

        this.g = new Array(V + 1);
        for(let i = 0; i < V + 1; i++) {
            this.g[i] = new Array(V+1);
             
            for(let j = 0; j < (V + 1); j++)
            {
                this.g[i][j] = 0;
            }
             
        }
        
        for(let i = 1; i <= V; i++)
            this.g[i][i] = 1;
    }
     
    addEdge(v, w)
    {
        this.g[v][w] = 1;
        this.g[w][v] = 1;
    }
     
    isReachable(s, d)
    {
        if (this.g[s][d] == 1)
            return true;
        else
            return false;
    }
     

    computePaths() {
        for(let k = 1; k <= this.V; k++) {

            for(let i = 1; i <= this.V; i++)
            {
                for(let j = 1; j <= this.V; j++)
                    this.g[i][j] = this.g[i][j] | ((this.g[i][k] != 0 &&
                              this.g[k][j] != 0) ? 1 : 0);
            }
        }
    }
 
}

let g = new Graph(4);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(1, 4);
g.computePaths();

let u = 4, v = 3;
if (g.isReachable(u, v))
    console.log("Yes");
else
console.log("No");