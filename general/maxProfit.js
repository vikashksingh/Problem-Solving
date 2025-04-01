var maxProfit = function(prices) {
    var max = 0;
    for (var i = 0; i < prices.length - 1; i++){
        for (var j = 1; j < prices.length; j++){
            if (prices[i] < prices[j]){
               var temp = prices[j] - prices[i];
                if(temp > max) {
                    max = temp;
                }
            }
        }
    }
    return max;
};

maxProfit([7,6,4,3,1])