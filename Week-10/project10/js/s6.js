// All Path from source to target
let  v;
 
let adjList;
 
function Graph(vertices) {
        v = vertices;
        initAdjList();
}
 
function initAdjList() {
    adjList = new Array(v);
  
        for (let i = 0; i < v; i++) {
            adjList[i] = [];
        }
}
 
// add edge
function addEdge(u,v) {
        adjList[u].push(v);
}
 
// Prints all paths from
function printAllPaths(s,d)
{
     let isVisited = new Array(v);
     for(let i=0;i<v;i++)
         isVisited[i]=false;
         let pathList = [];
  
        pathList.push(s);
        printAllPathsUtil(s, d, isVisited, pathList);
}
 
function printAllPathsUtil(u,d,isVisited,localPathList) {
    if (u == (d)) {
            console.log(localPathList);
            return;
        }
  
        // Mark the current node
        isVisited[u] = true;
        for (let i=0;i< adjList[u].length;i++) {
            if (!isVisited[adjList[u][i]]) {
                localPathList.push(adjList[u][i]);
                printAllPathsUtil(adjList[u][i], d,
                isVisited, localPathList);
                
                localPathList.splice(localPathList.indexOf
                (adjList[u][i]),1);
            }
        }
  
        // Mark the current node
        isVisited[u] = false;
}
 
Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(0, 3);
addEdge(2, 0);
addEdge(2, 1);
addEdge(1, 3);
 
//source
let s = 2;
 
// destination
let d = 3;

printAllPaths(s, d);