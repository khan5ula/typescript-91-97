interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExcercises = (
  excercises: number[],
  originalTarget: number
): Result => {
  const average =
    excercises.reduce((sum: number, d: number) => sum + d, 0) /
    excercises.length;
  const rating = findRating(average);

  const result: Result = {
    periodLength: excercises.length,
    trainingDays: excercises.filter((day) => day > 0).length,
    target: originalTarget,
    average: average,
    rating: rating,
    success: average >= originalTarget,
    ratingDescription: setRatingDescription(rating),
  };

  return result;
};

const findRating = (average: number): number => {
  let result = 1;

  switch (true) {
    case average <= 1:
      result = 1;
    case average > 1 && average <= 2:
      result = 2;
      break;
    case average > 2:
      result = 3;
      break;
    default:
      return 1;
  }

  return result;
};

const setRatingDescription = (rating: number): string => {
  let description = '';

  switch (rating) {
    case 1:
      description = 'little disappointing';
      break;
    case 2:
      description = 'not too bad but could be better';
      break;
    case 3:
      description = 'excellent! good work';
      break;
    default:
      description = 'error: check the input';
  }

  return description;
};

console.log(calculateExcercises([3, 0, 2, 4.5, 0, 3, 1], 2));
