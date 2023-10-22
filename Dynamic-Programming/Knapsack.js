
function knapSack(capacity, weights, values, n) {
  let i, w;
  let K = Array(n+1).fill().map(() => Array(capacity+1).fill(0));

  // Build table K[][] in bottom up manner
  for (i = 0; i <= n; i++) {
    for (w = 0; w <= capacity; w++) {
      if (i==0 || w==0)
        K[i][w] = 0;
      else if (weights[i-1] <= w)
        K[i][w] = Math.max(values[i-1] + K[i-1][w-weights[i-1]],  K[i-1][w]);
      else
        K[i][w] = K[i-1][w];
    }
  }
  return K[n][capacity];
}
