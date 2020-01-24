export const fetchSettings = async () => {
  const response = await fetch('/game-settings');
  const data = await response.json();
  return data;
};
