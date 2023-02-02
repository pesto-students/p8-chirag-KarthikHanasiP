// Problem 6.3 Sort array of 0's,1's and 2's
// TC => O(N^2)
// SC => O(1)
const sort = ((arr, n) => {
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            if(arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    console.log(arr);
});

let arr= [0, 2, 1, 2, 0, 0];
let arrLength = arr.length;

sort(arr, arrLength);