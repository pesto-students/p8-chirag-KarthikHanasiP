// Problem 6.5: Pair With Given Difference
// TC => O(N^2)
// SC => O(1)
const checkDiff = ((a, b) => {
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a.length; j++) {
            if((a[i] - a[j] === b)) {
                return 1;
            }
        }
    }

    return 0;
});

const A = [5, 10, 3, 2, 50, 80];
const B = 78;

console.log(checkDiff(A, B));