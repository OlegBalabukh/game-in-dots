export const formatDate = (dateNow) => {
  const date = new Date(dateNow);
  const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const time = date.toString().substr(16, 5)

    return `${time}; ${day} ${month} ${year}`
}