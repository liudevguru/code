import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View } from 'react-native';
import { styles } from './IconButton.styles';

interface Props {
  iconName: string;
  iconColor: string;
  iconSize?: number;
  buttonLabel: string;
  onPress?: () => void;
}

export const IconButton: React.FC<Props> = ({
  iconName,
  iconColor,
  iconSize = 30,
  buttonLabel,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Icon.Button
        name={iconName}
        color={iconColor}
        backgroundColor="#FFFFFF"
        size={iconSize}
        iconStyle={styles.icon}
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonLabel}>{buttonLabel}</Text>
      </Icon.Button>
    </View>
  );
};
