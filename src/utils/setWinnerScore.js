export const setWinnerScore = (n) => {
  if (n % 2) {
    return Math.ceil(n*n / 2)
  }
  return n*n / 2 + 1
}