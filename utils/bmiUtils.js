export const calculateBMI = (weight, height) => {
  const weightKg = parseFloat(weight);
  const heightM = parseFloat(height) / 100;
  const bmiValue = (weightKg / (heightM * heightM)).toFixed(1);
  return bmiValue;
};

export const getBMICategory = (bmi) => {
  const bmiNum = parseFloat(bmi);
  if (bmiNum < 18.5) return 'Underweight';
  if (bmiNum < 25) return 'Normal';
  if (bmiNum < 30) return 'Overweight';
  return 'Obese';
};