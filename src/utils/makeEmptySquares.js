export const makeEmptySquares = (n) => {
  const emptySquares = new Array(n*n);
  for (let i = 0; i < emptySquares.length; i++) {
    emptySquares[i] = i + 1
  }
  return emptySquares;
}