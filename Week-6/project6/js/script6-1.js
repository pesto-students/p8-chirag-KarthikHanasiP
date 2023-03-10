// Problem 6.1: Max Sum Contiguous Subarray
// TC => O(N)
// SC => O(1)
function maxSubArraySum(a, size) {
    let max_so_far = 0;
    let max_ending_here = 0;
    let start = 0;
    let end = 0; 
    let s = 0;

    for (i = 0; i < size; i++) {
        max_ending_here += a[i];

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }

        if (max_ending_here < 0) {
            max_ending_here = 0;
            s = i + 1;
        }
    }
    console.log(max_so_far);
}

let arr = [1, 2, 3, 4, -10];
let arrLength = arr.length;
maxSubArraySum(arr, arrLength);