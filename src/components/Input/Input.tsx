import React from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import { styles } from './Input.styles';

interface Props {
  label: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  value: string | undefined;
  onChangeText?: (text: string) => void;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  setRef?: (ref: TextInput | null) => void;
}

export const Input: React.FC<Props> = ({
  label,
  keyboardType,
  secureTextEntry = false,
  value,
  onChangeText,
  returnKeyType,
  onSubmitEditing,
  setRef,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        ref={(ref) => {
          if (setRef) {
            setRef(ref);
          }
        }}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={false}
        inputAccessoryViewID={'input'}
      />
    </View>
  );
};
