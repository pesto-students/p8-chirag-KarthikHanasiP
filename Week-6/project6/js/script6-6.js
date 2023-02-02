// Problem 6.6 : 3 sum
// TC => O(N^3)
// SC => O(1)
const sum = ((arr, b) => {
    let sumVal = Number.MAX_VALUE;
    for(let i = 0; i < arr.length ; i++) {

        for(let j =i + 1; j < arr.length; j++) {

            for(let k =j + 1; k < arr.length; k++) {

                if (Math.abs(b - sumVal) >
                    Math.abs(b - (arr[i] + arr[j] + arr[k])))
                    sumVal = (arr[i] + arr[j] + arr[k]);
            }
        }
    }

    return sumVal;
});

const arr = [-1, 2, 1, -4];
const b = 1;
console.log(sum(arr, b));