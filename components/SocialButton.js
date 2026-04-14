import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Theme';

const SocialButton = ({ title, onPress, icon }) => {
  const getIconText = () => {
    switch (icon) {
      case 'google':
        return 'G';
      case 'ios':
        return '🍎';
      case 'apple':
        return '';
      default:
        return '';
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.icon}>{getIconText()}</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    flex: 1,
    marginHorizontal: 6,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
    color: COLORS.text,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.text,
  },
});

export default SocialButton;