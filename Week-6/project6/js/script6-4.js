// Problem 6.4 : Best time to buy and sell stock
// TC => O(N)
// SC => O(1)
function maxProfit(prices, n) {
	let buy = prices[0];
    let max_profit = 0;
	for (let i = 1; i < n; i++) {
		// Check for lower buy value
		if (buy > prices[i]) {
            buy = prices[i];
        }

		// Check for higher profit
		else if (prices[i] - buy > max_profit) {
            max_profit = prices[i] - buy;
        }
	}
	return max_profit;
}

let prices= [ 7, 1, 5, 6, 4 ];
let n = 5;
let max_profit = maxProfit(prices, n);
console.log(max_profit);