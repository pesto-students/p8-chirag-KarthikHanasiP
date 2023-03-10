// Problem 6.3 Sort array of 0's,1's and 2's
// TC => O(N)
// SC => O(1)
const sort = (arr, length) => {
    let zeros = 0;
    let ones = 0;
    let twos = 0;
    
    //O(N)
    for(let i of arr) {
        if(i === 0) zeros++;
        if(i === 1) ones++;
        if(i === 2) twos++;
    }

    // //O(T1)
    for(let i=0;i<zeros;i++) {
        arr[i] = 0;
    }
    // //O(T2)
    for(let i=zeros;i<(ones+zeros);i++) {
        arr[i] = 1;
    }
    // //O(T3)
    for(let i=(ones+zeros);i<(twos+ones+zeros);i++) {
        arr[i] = 2;
    }
    return arr;
}

let arr= [0, 2, 1, 2, 0, 0,1];
let arrLength = arr.length;

console.log(sort(arr, arrLength));
