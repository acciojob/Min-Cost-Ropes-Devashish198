function mincost(arr)
{ 
let totalCost = 0;

  while (arr.length > 1) {
    // Sort the array to get the two smallest elements
    arr.sort((a, b) => a - b);

    // Take the two smallest ropes
    const first = arr.shift();
    const second = arr.shift();

    // Calculate the cost and add it to total
    const cost = first + second;
    totalCost += cost;

    // Push the combined rope back into the array
    arr.push(cost);
  }

  return totalCost;
}

module.exports=mincost;
