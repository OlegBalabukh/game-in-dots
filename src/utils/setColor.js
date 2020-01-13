export const setColor = (field, id, color) => {
  return field.map(row => (
    row.map(square => {
      if (square.id === id) {
        return {...square, color}
      }
      return square
    })
  ))
}