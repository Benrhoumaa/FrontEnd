import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import { COLORS } from '../constants/Theme';
import { calculateBMI, getBMICategory } from '../utils/bmiUtils';

const BMICalculator = ({ weight, height }) => {
  const [bmi, setBmi] = useState(null);

  const handleCalculateBMI = () => {
    const bmiValue = calculateBMI(weight, height);
    setBmi(bmiValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calculated Index</Text>
        <View style={styles.readyBadge}>
          <Text style={styles.readyText}>READY</Text>
        </View>
      </View>
      <Text style={styles.description}>
        Calculate your Body Mass Index based on laboratory standards.
      </Text>
      
      <CustomButton title="Calculate BMI" onPress={handleCalculateBMI} />

      {bmi && (
        <View style={styles.result}>
          <Text style={styles.bmiValue}>BMI: {bmi}</Text>
          <Text style={styles.bmiCategory}>{getBMICategory(bmi)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
  },
  readyBadge: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  readyText: {
    fontSize: 10,
    color: COLORS.primary,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  description: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 16,
    lineHeight: 18,
  },
  result: {
    marginTop: 16,
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.cardBorder,
  },
  bmiValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  bmiCategory: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
});

export default BMICalculator;