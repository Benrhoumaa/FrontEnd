import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { COLORS } from '../constants/Theme';

const LifestyleSelector = ({ selected, onSelect }) => {
  const options = [
    {
      id: 'sedentary',
      title: 'Sedentary',
      description: 'Minimal activity, desk-bound routine.',
    },
    {
      id: 'active',
      title: 'Active',
      description: 'Regular movement, 3-5 workouts weekly.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lifestyle Baseline</Text>
      <Text style={styles.subtitle}>SELECT ONE</Text>

      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.option,
            selected === option.id && styles.optionSelected,
          ]}
          onPress={() => onSelect(option.id)}
        >
          <RadioButton
            value={option.id}
            status={selected === option.id ? 'checked' : 'unchecked'}
            onPress={() => onSelect(option.id)}
            color={COLORS.primary}
          />
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>{option.title}</Text>
            <Text style={styles.optionDescription}>{option.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  optionSelected: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryLight,
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
});

export default LifestyleSelector;