import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();

app.get('/bmi', (_req, res) => {
  const { height, weight } = _req.query;

  if (!height || !weight) {
    return res.status(400).send('Error: Height and weight are required');
  }

  const parsedHeight = parseFloat(height as string);
  const parsedWeight = parseFloat(weight as string);

  if (isNaN(parsedHeight) || isNaN(parsedWeight)) {
    return res.status(400).send('Error: Invalid height or weight values');
  }

  const bmi = calculateBmi(parsedHeight, parsedWeight);
  const response = {
    height: parsedHeight,
    weight: parsedWeight,
    bmi: bmi,
  };

  return res.send(response);
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
