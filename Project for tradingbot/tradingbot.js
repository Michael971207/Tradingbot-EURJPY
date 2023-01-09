// First, we will define the variables for our moving averages
var ma21 = movingaverage(close, 21);
var ma55 = movingaverage(close, 55);

// Next, we will create a condition to check for a crossover
if (ma21 > ma55) {
// If the 21 MA is above the 55 MA, we will create a buy signal
plot('Buy', high, {color: green});
} else if (ma21 < ma55) {
// If the 21 MA is below the 55 MA, we will create a sell signal
plot('Sell', low, {color: red});
}

// Finally, we will plot both moving averages on the chart for reference
plot(ma21, "21 MA", blue);
plot(ma55, "55 MA", purple);