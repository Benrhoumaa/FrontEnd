import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Theme';

const GoalSelector = ({ selected, onSelect }) => {
  const goals = [
    {
      id: 'muscle',
      title: 'Muscle Gain',
      description: 'Focus on hypertrophy and metabolic resistance.',
    },
    {
      id: 'weight',
      title: 'Weight',
      description: 'Adipose resistance and caloric optimization.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Performance Goals</Text>

      {goals.map((goal) => (
        <TouchableOpacity
          key={goal.id}
          style={[styles.card, selected === goal.id && styles.cardSelected]}
          onPress={() => onSelect(goal.id)}
        >
          <View style={[styles.radio, selected === goal.id && styles.radioSelected]} />
          <Text style={styles.goalTitle}>{goal.title}</Text>
          <Text style={styles.goalDescription}>{goal.description}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.hint}>SELECT GOAL</Text>
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  cardSelected: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryLight,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginBottom: 12,
  },
  radioSelected: {
    backgroundColor: COLORS.primary,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  goalDescription: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  hint: {
    fontSize: 12,
    color: COLORS.textHint,
    letterSpacing: 1,
    marginTop: 8,
  },
});

export default GoalSelector;