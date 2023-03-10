// Problem 6.6 : 3 sum
// TC => O(N^2)
// SC => O(1)

const sum = ((arr, x) => {
 
    // Sort the array
    arr.sort((a, b) => a - b);
    let sumVal = 1000000000;

    for (let i = 0; i < arr.length - 2; i++) {
 
        let ptr1 = i + 1;
        let ptr2 = arr.length - 1;

        while (ptr1 < ptr2) {
 
            // Calculate the sum of the current triplet
            let sum = arr[i] + arr[ptr1] + arr[ptr2];
            
            if (Math.abs(1*x - sum) < Math.abs(1*x - sumVal))
            {
                sumVal = sum;
            }

            if (sum > x) {
                ptr2--;
            } else {
                ptr1++;
            }
        }
    }
    
    return sumVal;
});

const arr = [-1, 2, 1, -4];
const b = 1;
console.log(sum(arr, b));
