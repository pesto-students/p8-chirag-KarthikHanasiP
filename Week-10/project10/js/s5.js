// Find the Town Judge

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
     
    findJudge(N, trust) {
        let likesCountList = {}
        let beingLikedCountList = {}
        
        //hash the key from 1 to N
        for(let i = 1; i <= N; i++){
            likesCountList[i] = 0
            beingLikedCountList[i] = 0
        }

        for(let ele of trust){
            likesCountList[ele[0]]++
            beingLikedCountList[ele[1]]++
        }
        
        
        let judge = 0
        for(let key in likesCountList){
            if(likesCountList[key] === 0) judge = key
        }
        
        if(beingLikedCountList[judge] === N - 1) return judge
        else return -1
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

let N = 2, trust = [[1,2]];
console.log(g.findJudge(N, trust));