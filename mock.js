export const MAX_RADIUS = 150;
const MAX_SECTOR_COUNT = 8;

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const generateRandomData = () => {
  const data = [];
  const colors = [
    "#F2994A",
    "#EB5757",
    "#6FCF97",
    "#9B51E0",
    "#2F80ED",
    "#56CCF2",
    "#219653",
    "#F2C94C",
  ];

  const numSectors = getRandomInt(1, MAX_SECTOR_COUNT);

  for (let i = 0; i < numSectors; i++) {
    const value = getRandomInt(1, 150);
    const radius = getRandomInt(75, MAX_RADIUS);
    const color = colors[i % colors.length];

    data.push({ value, radius, color });
  }

  return data;
};
