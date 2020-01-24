export const makeField = size => {
  const field = [];
  let counter = 1;

  const makeRow = rowSize => {
    const row = [];
    for (let i = 0; i < rowSize; i++) {
      const square = {
        id: counter++,
        color: ''
      };
      row.push(square);
    }
    return row;
  };

  for (let i = 0; i < size; i++) {
    field.push(makeRow(size));
  }

  return field;
};
