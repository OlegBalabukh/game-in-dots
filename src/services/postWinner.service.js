export const postWinner = async (newWinner) => {
  const response = await fetch('/winners', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newWinner)
  })
  const winners = await response.json()
  return winners
};