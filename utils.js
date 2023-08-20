import { MAX_RADIUS, generateRandomData } from "./mock.js";

const BLACK_COLOR = "#1E1E1E";

const paintSector = (ctx, settings) => {
  const { x, y, radius, startAngle, endAngle, color } = settings;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x, y, radius, startAngle, endAngle);
  ctx.closePath();

  ctx.fillStyle = color;
  ctx.fill();
};

const addText = (ctx, settings, value) => {
  const { x, y, startAngle, endAngle, color } = settings;

  const labelX =
    x + Math.cos((startAngle + endAngle) / 2) * (MAX_RADIUS + 30) - 10; // Рассчитываем координату по X
  const labelY =
    y + Math.sin((startAngle + endAngle) / 2) * (MAX_RADIUS + 30) + 10; // Рассчитываем координату по Y

  ctx.font = `14px Arial`;
  ctx.strokeStyle = color;

  ctx.strokeText(value.toString(), labelX, labelY);
};

export const paintPieChart = (ctx, data, settings = {}) => {
  const { legend } = settings;
  const total = data.reduce((acc, item) => (acc += item.value), 0);

  const canvas = ctx.canvas;

  const x = canvas.width / 2;
  const y = canvas.height / 2;

  let startAngle = 0;
  let endAngle = 0;

  canvas.width = canvas.width;

  for (let i = 0; i < data.length; i++) {
    const { value, radius, color } = data[i];

    endAngle = startAngle + Math.PI * 2 * (value / total);

    const paintSettings = {
      x,
      y,
      radius,
      startAngle,
      endAngle,
      color,
    };

    paintSector(ctx, paintSettings);

    if (legend) {
      addText(ctx, paintSettings, value);
    }

    startAngle = endAngle;
  }

  paintSector(ctx, {
    x,
    y,
    radius: 25,
    startAngle: 0,
    endAngle: 2 * Math.PI,
    color: BLACK_COLOR,
  });
};

export const getData = () => {
  return generateRandomData();
};
