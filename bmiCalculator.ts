const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / (height / 100) ** 2;
  let verdict = '';

  switch (true) {
    case bmi < 16:
      verdict = 'Underweight (Severe thinness)';
      break;
    case bmi > 16 && bmi < 17:
      verdict = 'Underweight (Moderate thinness)';
      break;
    case bmi >= 17.0 && bmi < 18.5:
      verdict = 'Underweight (Mild thinness) ';
      break;
    case bmi >= 18.5 && bmi < 25:
      verdict = 'Normal (Healthy weight)';
      break;
    case bmi >= 25.0 && bmi < 30:
      verdict = 'Overweight (Pre-obese)';
      break;
    case bmi >= 30.0 && bmi < 35:
      verdict = 'Obese (Class I)';
      break;
    case bmi >= 35.0 && bmi < 40:
      verdict = 'Obese (Class II)';
      break;
    case bmi >= 40:
      verdict = 'Obese (Class III)';
      break;
    default:
      verdict = 'Undefined. Please check the input';
  }
  return verdict;
};

console.log(calculateBmi(189, 89));
