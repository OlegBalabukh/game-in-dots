export const fetchWinners = async () => {
  const response = await fetch('/winners');
  const data = await response.json();
  return data;
};
