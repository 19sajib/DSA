// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// --> Example 1 <-- :
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// --> Example 2 <-- :
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// --> Constraints <-- :
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104


var maxProfit = function(prices) {
    let maxProfit = 0
    let minPrice = prices[0]
    for(let sell = 1; sell < prices.length; sell++){
         let sellPrice = prices[sell]
         let profit = sellPrice - minPrice
         maxProfit = Math.max(maxProfit, profit)
         if(sellPrice < minPrice) minPrice = sellPrice
    }
    
    return maxProfit
};


// --> Explanation <-- :

// create a variable to store the maximum price
// create another variable to track the minimum prices and set it to the first value in the array
// loop through the prices array starting from index 1 as your selling price
// to get the profit, you minus the minPrice from the sellPrice
// If the profit is greater than the max profit, replace the value of MaxProfit with the profit value
// in other to calculate the profit for other values, check to see if the current value which is the sellingPrice is less than the minPrice value. If it is, set the current value which is the selling price to the minPrice.
// return maxProfit

// --> Time complexity: O(n) where n is the length of the prices array
// --> Space complexity: O(1). only two variables were created. maxProfit and minPrice