import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './Button.styles';

interface Props {
  label: string;
  filled?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  label,
  filled = false,
  disabled = false,
}) => {
  let buttonStyle: ViewStyle = styles.container;
  let buttonLabelStyle: TextStyle = styles.label;

  if (filled) {
    buttonStyle = {
      ...styles.container,
      backgroundColor: '#343434',
      shadowColor: '#000000',
      shadowOpacity: 0.3,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowRadius: 10,
      elevation: 10,
    };
    buttonLabelStyle = {
      ...styles.label,
      color: '#FFFFFF',
      fontWeight: '700',
      textDecorationLine: 'none',
    };
  }
  if (filled && disabled) {
    buttonStyle = { ...buttonStyle, backgroundColor: '#34343455' };
  }

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={buttonLabelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};
