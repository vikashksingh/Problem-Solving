/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
  const memo = new Array(books.length).fill(new Array(shelfWidth + 1).fill(0));
  function dpHealper(i, remainingShelfWidth, maxHeight, memo) {
    let [width, height] = books[i];
    let updatedMaxHeight = Math.max(maxHeight, height);
    if (i == books.length - 1) {
      if (remainingShelfWidth >= width) return updatedMaxHeight;
      return maxHeight + height;
    }
    if (memo[i][remainingShelfWidth] != 0) {
      return memo[i][remainingShelfWidth];
    }
    let newShelf =
      maxHeight + dpHealper(i + 1, shelfWidth - width, width, memo);
    if (remainingShelfWidth >= width) {
      let currentShelf = dpHealper(
        i + 1,
        remainingShelfWidth - width,
        updatedMaxHeight,
        memo
      );
      memo[i][remainingShelfWidth] = Math.min(newShelf, currentShelf);
      return memo[i][remainingShelfWidth];
    }
    memo[i][remainingShelfWidth] = newShelf;
    return memo[i][remainingShelfWidth];
  }
  return dpHealper(0, shelfWidth, 0, memo);
};

minHeightShelves(
  [
    [1, 1],
    [2, 3],
    [2, 3],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 2]
  ],
  4
);
